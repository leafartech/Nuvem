"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface EntrarProps {}

export default function Entrar({}: EntrarProps) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false)

  const router = useRouter()

  function handleChangeInputs (e: ChangeEvent<HTMLInputElement>) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  function formSubmited(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage("")
    setFormSubmitting(true) 
      fetch('/api/auth/entrar', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          password: fields.password
        })
      }).then(async (res) => {
        const result = await res.json()
        if(result.status !== 201) {
          setErrorMessage(result.message)
          setFormSubmitting(false)
          return
        }

        setErrorMessage("")
        setFormSubmitting(false)
        localStorage.setItem("train-system", fields.name)
        router.push("/inicio")

      }).catch(e => console.log(e))
  }
	return (
		<main className="w-full relative min-h-screen flex items-center justify-around">
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
    
      <img src="../../images/bg1.png" alt="Imagem" className="h-[800px]" />

      <form className="max-w-lg w-full rounded-md p-4 bg-white flex flex-col gap-6 my_shadow" onSubmit={formSubmited}>
        <h2 className="text-my font-bold text-2xl text-center">Entrar</h2>
        {errorMessage && <span className="text-red-500 text-center">{errorMessage}</span>}
        <div className="w-full flex flex-col justify-between items-start">
          <label className="text-my font-medium" htmlFor="full-name">Nome</label>
          <input id="full-name" type="text" name="name" onChange={handleChangeInputs} className="text-gray-600 placeholder:text-gray-300 w-full rounded border-b border-zinc-300 p-1" placeholder="Digite seu nome completo..." />
        </div>
        <div className="w-full flex flex-col justify-start">
          <label className="text-my font-medium" htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleChangeInputs}  className="text-gray-600 placeholder:text-gray-300 w-full rounded border-b border-zinc-300 p-1" placeholder="Digite seu melhor email..." />
        </div>
        <div className="w-full flex flex-col justify-start">
          <label className="text-my font-medium" htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" onChange={handleChangeInputs}  className="text-gray-600 placeholder:text-gray-300 w-full rounded border-b border-zinc-300 p-1" placeholder="Digie sua melhor senha..." />
        </div>
        <div className="w-full flex flex-col justify-start">
          <button type="submit" disabled={isFormSubmitting} className="py-2 px-4 rounded-md bg-emerald-500 uppercase tracking-widest text-white font-medium">Entrar!</button>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="text-gray-300 text-xs">Não tem uma conta? <Link href="/conta/criar" className="uppercase text-gray-400 font-bold">clique aqui para criar!</Link> </span>
        </div>
      </form>
    </main>
	)
}