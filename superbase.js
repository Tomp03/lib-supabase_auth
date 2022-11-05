import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export function superbase(url, key) {

  const supabase = createClient(url, key);

  async function signup(email, pass) {
    let data  = await supabase.auth.signUp({
      email: email,
      password: pass,
    });

    return data ;
  }

  async function login(email, pass) {
    let data = await supabase.auth.signInWithPassword({
      email: email,
      password: pass,
    });

    return data;
  }

  async function logout() {
    let data = await supabase.auth.signOut();

    return data;
  }

  return {
    signup,
    login,
    logout,
  };
}
