import Navbar from "@/components/Navbar";
import Link from "next/link";
import { TrophyIcon, ChartBarIcon, ChartPieIcon, ArrowTrendingUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default async function Home() {
  return (
    <>
      <header className="relative h-screen flex items-center justify-center">
        <Navbar />
        <img src="./images/float/fl1.png" alt="" className="absolute top-0 left-1/4" />
        <div className="max-w-7xl w-full grid grid-cols-2">
          <div className="relative flex justify-center items-start  flex-col gap-3">
            <img src="./images/float/cloud.png" alt="Nuvem flutuante" className="absolute top-16 -right-8 w-80 -z-10" />
            <img src="./images/float/cloud.png" alt="Nuvem flutuante" className="absolute -bottom-16 -left-8 w-72 -z-10" />
            <h4 className="bg-gray-100 rounded-full flex gap-2 items-center text-center py-2 px-4 text-gray-600 text-sm"><TrophyIcon className="h-4 w-4 text-my" /> Integração do Facebook com <span className="text-green-500 font-medium">Google Sheets</span></h4>
            <h1 className="text-6xl font-bold">Eleve a <span className="text-my">análise</span> das suas <span className="text-my">campanhas</span></h1>
            <p className="text-gray-600">Transforme dados em insights preciosos com a integração perfeita do Facebook com o Google Sheets.</p>
            <Link className="grad-main text-center w-56 py-2 rounded-md text-white font-medium" href="/conta/criar">Criar conta</Link>
          </div>
          <div className="relative">
            <img src="./images/bg1.png" alt="Imagem de fundo da Nuvem" />
            <img src="./images/float/cloud.png" alt="Nuvem flutuante" className="absolute -bottom-4 -right-8 w-80 z-10" />

            <div className="float_1 absolute top-12 right-48 rounded-md p-4 bg-white my_shadow">
              <ChartBarIcon className="w-6 h-6 text-my" />
            </div>
            <div className="float_2 absolute bottom-20 left-24 rounded-md p-4 bg-white my_shadow">
              <ChartPieIcon className="w-6 h-6 text-my" />
            </div>
            <div className="float_3 absolute top-28 left-32 rounded-md p-4 bg-white my_shadow">
              <ArrowTrendingUpIcon className="w-6 h-6 text-my" />
            </div>
            <div className="float_4 absolute top-48 right-12 rounded-md p-4 bg-white my_shadow">
              <TrophyIcon className="w-6 h-6 text-my" />
            </div>
          </div>
        </div>
        <a href="#nuvem" className="absolute bottom-4 text-my cursor-pointer"><ChevronDownIcon className="h-8 w-8" /></a>
      </header>
      <main>
        <section className="w-full mt-4 flex justify-center items-center">
          <div className="max-w-7xl">
            <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="bg-white rounded flex gap-2 items-center text-center py-1 px-2 my_shadow">
              <img src="./images/logo.png" alt="Logo Facebook Api" className="w-8" />
              <span className="text-my tracking-widest uppercase">Nuvem</span> 
            </h4>
              <h2 className="font-bold text-4xl">O caminho para Ánalises Mais Claras e Poderosas.</h2>
              <p className="text-center text-gray-600">Te ajudamos a transformar dados preciosos de campanhas em insights que <br/>facilitam a tomada de decisões e a otimizção dos seus anúncios.</p>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}6