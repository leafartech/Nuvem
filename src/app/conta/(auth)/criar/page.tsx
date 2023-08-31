"use client"

import Link from "next/link"
import { ChangeEvent, FormEvent, useState } from "react"

interface CriarProps {}


export default function Criar({}: CriarProps) {

  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function handleChangeInputs (e: ChangeEvent<HTMLInputElement>) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };


  function formSubmited(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() 
      fetch('/api/auth/criar', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: fields.fullName,
          email: fields.email,
          password: fields.password
        })
      }).then((res) => {
        console.log(res)
      }).catch(e => console.log(e))
  }

	return (
		<main className="w-full relative min-h-screen flex items-center justify-center">
       <img
         src="./images/logo.png"
         alt="Logo Facebook Api"
         className="w-12 absolute top-2 left-2"
        />

         <img
          src="./images/float/cloud.png"
          alt="Nuvem flutuante"
          className="absolute bottom-4 left-8 w-80 z-10"
        />

        <img
          src="./images/float/cloud.png"
          alt="Nuvem flutuante"
          className="absolute top-4 right-10 w-80 z-10"
        />

      <form className="max-w-lg w-full rounded-md p-4 bg-white flex flex-col gap-6 my_shadow" onSubmit={e => formSubmited(e)}>
        <h2 className="text-my font-bold text-2xl text-center">Criar Conta</h2>
        <div className="w-full flex flex-col justify-between items-start">
          <label className="text-my font-medium" htmlFor="full-name">Nome Completo</label>
          <input id="full-name" type="text" name="fullName" className="text-gray-600 placeholder:text-gray-300 w-full rounded border-b border-zinc-300 p-1" placeholder="Digite seu nome completo..." />
        </div>
        <div className="w-full flex flex-col justify-start">
          <label className="text-my font-medium" htmlFor="email">Email</label>
          <input id="email" type="email" name="email" className="text-gray-600 placeholder:text-gray-300 w-full rounded border-b border-zinc-300 p-1" placeholder="Digite seu melhor email..." />
        </div>
        <div className="w-full flex flex-col justify-start">
          <label className="text-my font-medium" htmlFor="password">Senha</label>
          <input id="password" type="password" name="email" className="text-gray-600 placeholder:text-gray-300 w-full rounded border-b border-zinc-300 p-1" placeholder="Digie sua melhor senha..." />
        </div>
        <div className="w-full flex flex-col justify-start">
          <button type="submit" className="py-2 px-4 rounded-md bg-emerald-500 uppercase tracking-widest text-white font-medium">Criar Conta!</button>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="text-gray-300 text-xs">Já tem uma conta? <Link href="/conta/entrar" className="uppercase text-gray-400 font-bold">clique aqui para entrar!</Link> </span>
        </div>
      </form>
    </main>
	)
}
