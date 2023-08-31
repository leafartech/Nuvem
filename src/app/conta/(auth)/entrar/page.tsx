import Link from "next/link";

interface EntrarProps {}

export default function Entrar({}: EntrarProps) {
	return (
		<main className="w-full relative min-h-screen flex items-center justify-center">
       <img
         src="../../images/logo.png"
         alt="Logo Facebook Api"
         className="w-12 absolute top-2 left-2"
        />

         <img
          src="../../images/float/cloud.png"
          alt="Nuvem flutuante"
          className="absolute bottom-4 left-8 w-80 z-10"
        />

        <img
          src="../../images/float/cloud.png"
          alt="Nuvem flutuante"
          className="absolute top-4 right-10 w-80 z-10"
        />

      <form className="max-w-lg w-full rounded-md p-4 bg-white flex flex-col gap-6 my_shadow">
        <h2 className="text-my font-bold text-2xl text-center">Entrar</h2>
        <div className="w-full flex flex-col justify-between items-start">
          <label className="text-my font-medium" htmlFor="full-name">Nome Completo</label>
          <input id="full-name" type="text" className="text-gray-600 placeholder:text-gray-300 w-full rounded border-b border-zinc-300 p-1" placeholder="Digite seu nome completo..." />
        </div>
        <div className="w-full flex flex-col justify-start">
          <label className="text-my font-medium" htmlFor="email">Email</label>
          <input id="email" type="email" className="text-gray-600 placeholder:text-gray-300 w-full rounded border-b border-zinc-300 p-1" placeholder="Digite seu melhor email..." />
        </div>
        <div className="w-full flex flex-col justify-start">
          <label className="text-my font-medium" htmlFor="password">Senha</label>
          <input id="password" type="password" className="text-gray-600 placeholder:text-gray-300 w-full rounded border-b border-zinc-300 p-1" placeholder="Digie sua melhor senha..." />
        </div>
        <div className="w-full flex flex-col justify-start">
          <button type="submit" className="py-2 px-4 rounded-md bg-emerald-500 uppercase tracking-widest text-white font-medium">Entrar!</button>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="text-gray-300 text-xs">Já tem uma conta? <Link href="/conta/criar" className="uppercase text-gray-400 font-bold">clique aqui para criar!</Link> </span>
        </div>
      </form>
    </main>
	)
}