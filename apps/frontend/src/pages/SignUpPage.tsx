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
        <div className="flex flex-col h-full justify-center bg-primary">
            <div className="m-5">
                <div className="flex-1 ml-14">
                    <h3 className="text-3xl font-bold my-8">Faça seu cadastro</h3>
                    <p className="text-light-gray mb-8">Insira seus dados para criar sua conta</p>
                    <Divider/>
                </div>
                <div className="flex flex-row justify-center mt-8">
                    <div className="flex flex-col col-span-4 mx-3">
                        <label className="block mb-2">Nome completo</label>
                        <input 
                            type="text" 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Insira seu nome completo"
                            className="w-full border mb-8 p-2.5 mx-2 rounded border-solid border-light-gray"
                        />
                    </div>
                    <div className="flex flex-col mx-3">
                        <label className="block mb-2">CPF</label>
                        <input 
                            type="text"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="Insira seu CPF"
                            className="w-full border mb-8 p-2.5 mx-2 rounded border-solid border-light-gray"
                        />
                    </div>
                    <div className="flex flex-col mx-3">
                        <label className="block mb-2">E-mail</label>
                        <input 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Insira seu e-mail"
                            className="w-full border mb-8 p-2.5 mx-2 rounded border-solid border-light-gray"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col col-span-4 mx-3">
                        <label className="block mb-2">Nome de usuário</label>
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border mb-8 p-2.5 mx-2 rounded border-solid border-light-gray"
                        />
                    </div>
                    <div className="flex flex-col mx-3">
                        <label className="block mb-2">Senha</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border mb-8 p-2.5 mx-2 rounded border-solid border-light-gray"
                        />
                    </div>
                    <div className="flex flex-col mx-3">
                        <label className="block mb-2">Confirmar senha</label>
                        <input 
                            type="password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border mb-8 p-2.5 mx-2 rounded border-solid border-light-gray"
                        />
                    </div>
                </div>
                <div className="flex flex-row grid grid-cols-8 justify-center">
                    <div className="col-span-1"></div>
                    <div className="flex flex-col col-span-2 ml-3 pl-3">
                        <label className="block mb-2">Cargo</label>
                        <Select value={cargo} label='Cargo' onChange={handleCargoChange}>
                            <MenuItem value='comum'>Comum</MenuItem>
                            <MenuItem value='admin'>Administrador</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-row grid grid-cols-8 my-6 justify-end">
                    <div className="col-span-5"></div>
                    <div className="bg-white rounded p-4 hover:bg-light-gray col-span-1 mx-3 text-center">
                        <a href="/">Voltar</a>
                    </div>
                    <button 
                        onClick={handleSubmit}
                        className="bg-secondary rounded p-4 text-white bg-opacity-70 hover:bg-opacity-90 col-span-1 mr-3">
                            CADASTRAR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;