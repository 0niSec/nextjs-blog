import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonArticle() {
  return (
    <section className="prose container prose-headings:text-neutral-300 text-neutral-200 max-w-none">
      <article>
        <div className="pb-6 flex flex-col items-center space-y-2 justify-center">
          <Skeleton className="w-1/4 h-4" />
          <Skeleton className="w-1/2 h-4" />
        </div>
        <div className="grid grid-cols-4 grid-rows-[auto_1fr] mt-10">
          <div className="text-sm pb-8">
            <h5 className="font-bold uppercase tracking-wide">
              <Skeleton className="w-14 h-4" />
            </h5>
            <div className="flex flex-wrap gap-x-4 mt-3 gap-y-2">
              <Skeleton className="w-10 h-3" />
              <Skeleton className="w-8 h-3" />
              <Skeleton className="w-6 h-3" />
              <Skeleton className="w-7 h-3" />
            </div>
            <div className="flex text-sm flex-col py-8">
              <h5 className="font-bold uppercase tracking-wide">
                <Skeleton className="w-1/4 h-4" />
              </h5>
              <Skeleton className="w-1/2 h-3 mt-2" />
            </div>
          </div>
          <div className="col-span-3">
            <div id="box-info" className="">
              <h2 className="not-prose">
                <Skeleton className="w-1/4 h-6" />
              </h2>
              <p>
                <Skeleton className="w-full h-3 mt-4" />
                <Skeleton className="w-3/4 h-3 mt-4" />
                <Skeleton className="w-1/2 h-3 mt-4" />
                <Skeleton className="w-1/3 h-3 mt-4" />
              </p>
              <Skeleton className="w-[500px] h-[500px]" />
            </div>
            <Skeleton className="w-full h-3 mt-4" />
            <Skeleton className="w-full h-3 mt-4" />
            <Skeleton className="w-full h-3 mt-4" />
            <Skeleton className="w-full h-3 mt-4" />
            <Skeleton className="w-full h-3 mt-4" />
          </div>
        </div>
      </article>
    </section>
  );
}
