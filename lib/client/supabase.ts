import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { Database } from "@/types/supabase";


export const createSupabaseBrowserClient = () => {
    const supabase = createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    ).from('doctor_no_rls')
        .select('*')
    ;
}