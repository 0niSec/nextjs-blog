import { defineCollection, defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
  })
  .default({});

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.md",
  schema: s
    .object({
      title: s.string().max(45),
      slug: s.slug("post"),
      date: s.isodate(),
      updated: s.isodate().optional(),
      cover: s.image().optional(),
      description: s.string().max(255).optional(),
      tags: s.array(s.string()).default([]),
      meta: meta,
      toc: s.toc(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),
      content: s.markdown(),
    })
    .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  markdown: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "aurora-x",
        },
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: "heading-anchor",
          },
          content: {
            type: "element",
            tagName: "span",
            properties: {
              className: "heading-span",
            },
            children: [
              {
                type: "text",
                value: "#",
              },
            ],
          },
        },
      ],
    ],
  },
  collections: { posts },
});
