const apiUrl = import.meta.env.VITE_API_URL;
const login = async (username: string, password: string) => {
  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data.access_token);
    localStorage.setItem("token", data.access_token);
    return data.access_token;
  } else {
    throw new Error("Usuário ou senha inválidos.");
  }
};

export { login };
