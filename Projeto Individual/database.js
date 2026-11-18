const database = {
  async createUser({ name, email, password }) {
    const { data, error } = await supabaseClient.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: { name: name.trim() }
      }
    });

    if (error) throw error;
    return data;
  },

  async authenticate(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password
    });

    if (error) throw error;
    return data;
  },

  async authenticateWithGoogle() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: new URL('index.html', window.location.href).href
      }
    });

    if (error) throw error;
    return data;
  }
};
