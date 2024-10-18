import logo from '../../../assets/logo-txai.svg';

export function SignInForm() {
    return (
        
        <div className="flex h-screen justify-center">
            <div className="flex-1 bg-secondary text-white flex flex-col text-center m-0 p-14">
                <h1 className="text-4xl">Bem-vindo!</h1>
                <h2 className="text-3xl my-5 pb-10">SISTEMA GERENCIAL TXAI</h2>
                <img src={logo} alt="Logo" />
            </div>
            <div className="flex-1 flex-col bg-primary flex justify-center items-center p-1 m-0">
                <form className="w-full max-w-md bg-primary p-5">
                    <h3 className="text-3xl font-bold mb-8">Login</h3>
                    <label className="block mb-2">CPF</label>
                    <input type="text" placeholder="Insira seu CPF, somente os números" className="w-full border mb-8 p-2.5 rounded border-solid border-light-gray"/>

                    <label className="block mb-2">Senha</label>
                    <input type="password" placeholder="Insira sua senha" className="w-full border mb-5 p-2.5 rounded border-solid border-light-gray"/>

                    <div className="flex justify-between">
                        <input type="checkbox" value="" className="mr-0"/>Lembrar minha senha
                        <a href="#" className="text-secondary">Esqueci minha senha</a>
                    </div>

                    <div className="flex mt-14">
                        <button type="submit" className="bg-secondary rounded p-4 w-full text-white bg-opacity-70 hover:bg-opacity-90">ENTRAR</button>
                    </div>
                </form>

                <br/>
                <span className='mt-10'>Não tem uma conta? <a href="#" className='text-secondary'>Cadastre-se.</a></span>
            </div>
        </div>
    )
}