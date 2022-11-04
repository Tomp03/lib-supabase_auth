import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export function superbase(url, key) {

  const supabase = createClient(url, key);

  async function signup(mail, pass) {
    let data  = await supabase.auth.signUp({
      email: mail,
      password: pass,
    });

    return data ;
  }

  async function login(email, password) {
    let data = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
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
