import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { Select, SelectChangeEvent, MenuItem, Divider } from "@mui/material";
import { register } from "../services/userService";

const SignUpPage: React.FC = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cargo, setCargo] = useState('');

    const handleCargoChange = (event: SelectChangeEvent) => {
        setCargo(event.target.value);
    };

    const isFormValid = () => {
        return (nome !== '' && cpf !== '' 
            && email !== '' && username !== '' 
            && password.length >= 6 && confirmPassword == password 
            && cargo !== '');
    }

    const handleSubmit = async () => {
        if (isFormValid()) {
            const newUser = {
                id: null,
                nome: nome,
                cpf: cpf,
                email: email,
                username: username,
                role: cargo,
                password: password
            }
            await register(newUser);
            navigate('/');
        } else {
            alert('Preencha todos os campos corretamente');
        }
    }
    return (
        <div className="flex flex-col min-h-screen justify-center bg-primary">
        <div className="m-5">
            <div className="flex-1 lg:mx-48">
                <h3 className="text-3xl font-bold mt-8 mb-4">Faça seu cadastro</h3>
                <p className="text-light-gray mb-4">Insira seus dados para criar sua conta</p>
                <Divider />
            </div>
            <div className="flex flex-col md:flex-row justify-center mt-8">
                <div className="flex flex-col w-full md:w-auto mx-3">
                    <label className="block mb-2">Nome completo*</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Insira seu nome completo"
                        className="w-full border mb-8 p-2.5 rounded border-solid border-light-gray"
                    />
                </div>
                <div className="flex flex-col w-full md:w-auto mx-3">
                    <label className="block mb-2">CPF*</label>
                    <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="Insira seu CPF"
                        className="w-full border mb-8 p-2.5 rounded border-solid border-light-gray"
                    />
                </div>
                <div className="flex flex-col w-full md:w-auto mx-3">
                    <label className="block mb-2">E-mail*</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Insira seu e-mail"
                        className="w-full border mb-8 p-2.5 rounded border-solid border-light-gray"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center">
                <div className="flex flex-col w-full md:w-auto mx-3">
                    <label className="block mb-2">Nome de usuário*</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border mb-8 p-2.5 rounded border-solid border-light-gray"
                    />
                </div>
                <div className="flex flex-col w-full md:w-auto mx-3">
                    <label className="block mb-2">Senha*</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Mínimo de 6 caracteres"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border mb-8 p-2.5 rounded border-solid border-light-gray"
                    />
                </div>
                <div className="flex flex-col w-full md:w-auto mx-3">
                    <label className="block mb-2">Confirmar senha*</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full border mb-8 p-2.5 rounded border-solid border-light-gray"
                    />
                </div>
                
            </div>
            <div className="flex flex-col w-full md:flex-row grid justify-start">
                <div className="flex flex-col w-full lg:ml-48 ml-3">
                    <label className="block mb-2">Cargo</label>
                    <Select value={cargo} label='Cargo' onChange={handleCargoChange} className="w-full">
                        <MenuItem value='comum'>Comum</MenuItem>
                        <MenuItem value='admin'>Administrador</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-end mt-6 lg:mr-48">
                <div className="hidden lg:block"></div>
                <div className="bg-white rounded p-4 hover:bg-light-gray mx-3 mb-3 pb-2 text-center md:col-span-7">
                    <a href="/">Voltar</a>
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-secondary rounded p-4 text-white bg-opacity-70 hover:bg-opacity-90 mx-3 mb-3">
                    CADASTRAR
                </button>
            </div>
        </div>
    </div>
);
}

export default SignUpPage;