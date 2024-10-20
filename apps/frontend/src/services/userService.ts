import User from "../models/User";
const apiUrl = import.meta.env.VITE_API_URL;

const register = async (user: User): Promise<void> => {
  const response = await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  response.status === 201
    ? alert("Usuário criado com sucesso!")
    : alert("Erro ao criar usuário");
};

export { register };
