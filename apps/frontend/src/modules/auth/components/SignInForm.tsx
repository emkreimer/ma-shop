import logo from '../../../assets/logo-txai.svg';

export function SignInForm() {
    return (
        
        <div className="flex h-screen justify-center items-center p-0 m-0">
            <div className="flex-1 bg-secondary text-white flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl">Bem-vindo!</h1>
                <h2 className="text-3xl mt-2.5">SISTEMA GERENCIAL TXAI</h2>
                <img src={logo} alt="Logo" />
            </div>
            <div className="flex-1 bg-primary flex justify-center items-center p-10 m-0">
                <form className="w-full max-w-md bg-primary p-5">
                    <h3 className="text-3xl font-bold">Login</h3>
                    <label className="block font-bold mb-2">CPF</label>
                    <input type="text" placeholder="Insira seu CPF, somente os números" className="w-full border mb-5 p-2.5 rounded border-solid border-light-gray"/>

                    <label className="block font-bold mb-2">Senha</label>
                    <input type="password" placeholder="Insira sua senha" className="w-full border mb-5 p-2.5 rounded border-solid border-light-gray"/>
                </form>
            </div>
        </div>
    )
}