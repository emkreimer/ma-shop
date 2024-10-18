const login = async (username: string, password: string) => {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Usuário ou senha inválidos.');
    }
  };

export { login }