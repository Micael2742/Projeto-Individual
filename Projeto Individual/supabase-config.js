// Cole aqui os dados públicos do seu projeto Supabase.
const SUPABASE_URL = "https://qgpqjovqfhjohfjlokxe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_49x7eIl0wFoIiJw3tj4-tA_5J5Domf6";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
