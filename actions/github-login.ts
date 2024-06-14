import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function signInWithGithub() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: process.env.NEXT_PUBLIC_SUPABASE_AUTH_CALLBACK,
    },
  });

  if (error) {
    console.error(error);
  }

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}
