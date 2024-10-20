import { jwtDecode, JwtPayload } from "jwt-decode"; // Import JwtPayload type

const apiUrl = import.meta.env.VITE_API_URL;

interface CustomJwtPayload extends JwtPayload {
  role: string;
  username: string;
}

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
    const access_token = data.access_token;

    const decodedToken: CustomJwtPayload = jwtDecode(access_token);
    const userRole = decodedToken.role;

    localStorage.setItem("token", access_token);
    localStorage.setItem("permissao", userRole);
    return access_token;
  } else {
    throw new Error("Usuário ou senha inválidos.");
  }
};

export { login };
