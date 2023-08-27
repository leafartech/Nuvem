import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  TrophyIcon,
  ChartBarIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
  ChevronDownIcon,
  FaceSmileIcon,
  CursorArrowRippleIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default async function Home() {
  return (
    <>
      <header className="relative h-screen flex items-center justify-center">
        <Navbar />
        <img
          src="./images/float/fl1.png"
          alt=""
          className="absolute top-0 left-1/4"
        />
        <div className="max-w-7xl w-full grid grid-cols-2">
          <div className="relative flex justify-center items-start  flex-col gap-3">
            <img
              src="./images/float/cloud.png"
              alt="Nuvem flutuante"
              className="absolute top-16 -right-8 w-80 -z-10"
            />
            <img
              src="./images/float/cloud.png"
              alt="Nuvem flutuante"
              className="absolute -bottom-16 -left-8 w-72 -z-10"
            />
            <h4 className="bg-gray-100 rounded-full flex gap-2 items-center text-center py-2 px-4 text-gray-600 text-sm">
              <TrophyIcon className="h-4 w-4 text-my" /> Integração do
              Facebook com{" "}
              <span className="text-green-500 font-medium">
                Google Sheets
              </span>
            </h4>
            <h1 className="text-6xl font-bold">
              Eleve a <span className="text-my">análise</span> das
              suas <span className="text-my">campanhas</span>
            </h1>
            <p className="text-gray-600 md:text-lg">
              Transforme dados em insights preciosos com a integração
              perfeita do Facebook com o Google Sheets.
            </p>
            <Link
              className="grad-main text-center w-56 py-2 rounded-md text-white font-medium"
              href="/conta/criar"
            >
              Criar conta
            </Link>
          </div>
          <div className="relative">
            <img
              src="./images/bg1.png"
              alt="Imagem de fundo da Nuvem"
            />
            <img
              src="./images/float/cloud.png"
              alt="Nuvem flutuante"
              className="absolute -bottom-4 -right-8 w-80 z-10"
            />

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
        <a
          href="#nuvem"
          className="absolute bottom-4 text-my cursor-pointer"
        >
          <ChevronDownIcon className="h-8 w-8" />
        </a>
      </header>
      <main>
        <section className="w-full mt-4 flex justify-center items-center">
          <div className="max-w-7xl flex flex-col relative">
            <img
              src="./images/float/cloud.png"
              alt=""
              className="absolute top-24 w-72 left-0"
            />
            <img
              src="./images/float/cloud.png"
              alt=""
              className="absolute top-[344px] w-72 right-6"
            />
            <div className="flex flex-col justify-start items-center gap-2">
              <div className="bg-white rounded flex gap-2 items-center text-center py-1 px-2 my_shadow">
                <img
                  src="./images/logo.png"
                  alt="Logo Facebook Api"
                  className="w-8"
                />
                <span className="text-my text-sm tracking-widest uppercase">
                  Nuvem
                </span>
              </div>
              <h2 className="font-bold text-4xl">
                O Caminho para Ánalises Mais Claras e Poderosas.
              </h2>
              <p className="text-center text-gray-600 md:text-lg">
                Te ajudamos a transformar dados preciosos de campanhas
                em insights que <br />
                facilitam a tomada de decisões e a otimizção dos seus
                anúncios.
              </p>
              <div className="relative flex justify-evenly gap-4 w-full mt-12">
                <div className="flex flex-col py-2 px-4 justify-center items-center bg-white my_shadow rounded-md gap-1 text-my">
                  <FaceSmileIcon className="w-8 h-8" />
                  <span className="font-bold text-lg">Intuitivo</span>
                </div>
                <div className="flex flex-col py-2 px-4 justify-center items-center bg-white my_shadow rounded-md gap-1 text-my absolute bottom-5">
                  <FaceSmileIcon className="w-8 h-8" />
                  <span className="font-bold text-lg">Preciso</span>
                </div>
                <div className="flex flex-col py-2 px-4 justify-center items-center bg-white my_shadow rounded-md gap-1 text-my">
                  <CursorArrowRippleIcon className="w-8 h-8" />
                  <span className="font-bold text-lg">Simples</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-3xl">
                  Descubra o potencial oculto na Nuvem
                </h3>
                <div className="flex flex-col w-full items-start">
                  <div className="w-full flex items-center gap-1">
                    <UserIcon className="h-9 w-9 text-my" />
                    <h3 className="text-xl font-medium">
                      Conta Única
                    </h3>
                  </div>
                  <p className="text-gray-600 ms-12 md:text-lg">
                    Na nossa plataforma vocẽ terá tudo que precisa em
                    uma só conta.
                  </p>
                </div>
                <div className="flex flex-col w-full items-start">
                  <div className="w-full flex items-center gap-1">
                    <PaperAirplaneIcon className="h-9 w-9 text-my rotate-[-40deg]" />
                    <h3 className="text-xl font-medium">
                      Exportação Facilitada
                    </h3>
                  </div>
                  <p className="text-gray-600 ms-12 md:text-lg">
                    Nosso sistema foi desenvolvido para facilitar ao
                    máximo a exportação dos dados
                  </p>
                </div>
                <div className="flex flex-col w-full items-start">
                  <div className="w-full flex items-center gap-1">
                    <ClipboardDocumentListIcon className="h-9 w-9 text-my" />
                    <h3 className="text-xl font-medium">
                      Visualização em Planilha
                    </h3>
                  </div>
                  <p className="text-gray-600 ms-12 md:text-lg">
                    Visualize os seus dados numa planilha através da
                    nossa intregração com o Google Sheets!
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="./images/bg1.png"
                  alt="Imagem de fundo da Nuvem"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <img
                  src="./images/timeline.png"
                  alt="Linha do Tempo"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <h3 className="font-semibold text-3xl">
                  Transforme dados em insights <br /> acionáveis com
                  facilidade.
                </h3>
                <p className="text-gray-600 flex items-center justify-start gap-1 md:text-lg">
                  <CheckCircleIcon className="text-my h-8 w-8" />
                  Escolha todos os parâmetros
                </p>
                <p className="text-gray-600 flex items-center justify-start gap-1 md:text-lg">
                  <CheckCircleIcon className="text-my h-8 w-8" />
                  Tomada de decisões facilitada
                </p>
                <p className="text-gray-600 flex items-center justify-start gap-1 md:text-lg">
                  <CheckCircleIcon className="text-my h-8 w-8" />
                  Sem limite de extrações
                </p>
                <p className="text-gray-600 flex items-center justify-start gap-1 md:text-lg">
                  <CheckCircleIcon className="text-my h-8 w-8" />
                  Contas de anúncio ilimitadas
                </p>
                <p className="text-gray-600 flex items-center justify-start gap-1 md:text-lg">
                  <CheckCircleIcon className="text-my h-8 w-8" />
                  Bastante intuitivo e simples de usar
                </p>
                <p className="text-gray-600 flex items-center justify-start gap-1 md:text-lg">
                  <CheckCircleIcon className="text-my h-8 w-8" />
                  Integração direta com o Google Sheets
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mt-10 flex justify-center items-center bg-gray-300">
          <div className="max-w-7xl flex flex-col relative justify-between mt-8">
            <h2 className="font-medium text-3xl text-center">
              Benefícios da Nuvem
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-4">
              <div className="rounded-3xl bg-white flex flex-col justify-center items-start gap-2 p-4 w-96 h-96">
                <h3 className="text-green-500 text-2xl font-bold">Google Sheets</h3>
                <p className="text-gray-600 md:text-lg">Integração facilitado com as planilhas do <span className="text-green-500">Google Sheets</span>. Com apenas 1 clique, transfira todos os dados para uma planilha</p>
              </div>
              <div className="rounded-3xl bg-white flex flex-col justify-center items-start gap-2 p-4 w-96 h-96">
                <h3 className="text-my text-2xl font-bold">Facebook ADS</h3>
                <p className="text-gray-600 md:text-lg">Integração facilitado com as planilhas do <span className="text-green-500">Google Sheets</span>. Com apenas 1 clique, transfira todos os dados para uma planilha</p>
              </div>
              <div className="rounded-3xl bg-white flex flex-col justify-center items-start gap-2 p-4 w-96 h-96">
              <img
                  src="./images/logo.png"
                  alt="Logo Facebook Api"
                  className="w-16"
                />
                <h3 className="text-my text-2xl font-bold">Nuvem</h3>
                <p className="text-gray-600 md:text-lg">Integração facilitado com as planilhas do <span className="text-green-500">Google Sheets</span>. Com apenas 1 clique, transfira todos os dados para uma planilha</p>
              </div>
              <div className="rounded-3xl bg-my flex flex-col justify-center items-center gap-2 p-4 w-96 h-96 grad-main">
                <h3 className="text-white text-3xl uppercase text-center font-bold">Exportações Ilimitadas</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
6;
