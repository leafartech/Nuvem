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
import HeroFlex from "@/components/HeroFlex";
import Card from "@/components/Card";
import MySwiper from "@/components/MySwiper";

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
              className="h-full"
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
                  <svg className="w-8 h-8" style={{ fill: '#0066FF'}} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.72,9.39c.19,.85,.28,1.73,.28,2.61,0,6.62-5.38,12-12,12S0,18.62,0,12,5.38,0,12,0c.88,0,1.76,.1,2.61,.28,.27,.06,.44,.33,.38,.6-.06,.27-.33,.44-.6,.38-.78-.17-1.59-.26-2.39-.26C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11c0-.81-.09-1.61-.26-2.39-.06-.27,.11-.54,.38-.6,.27-.06,.54,.11,.6,.38ZM13.4,5.14c.27,.05,.53-.12,.59-.39,.05-.27-.12-.53-.39-.59-.52-.11-1.06-.16-1.6-.16-4.41,0-8,3.59-8,8s3.59,8,8,8,8-3.59,8-8c0-.54-.05-1.08-.16-1.6-.05-.27-.32-.44-.59-.39-.27,.06-.45,.32-.39,.59,.09,.46,.14,.93,.14,1.4,0,3.86-3.14,7-7,7s-7-3.14-7-7,3.14-7,7-7c.47,0,.94,.05,1.4,.14Zm-1.83,3.89c.27-.04,.46-.29,.42-.57s-.29-.47-.57-.42c-1.96,.28-3.43,1.98-3.43,3.96,0,2.21,1.79,4,4,4,1.98,0,3.68-1.47,3.96-3.43,.04-.27-.15-.53-.42-.57-.27-.04-.53,.15-.57,.42-.21,1.47-1.49,2.57-2.97,2.57-1.65,0-3-1.35-3-3,0-1.48,1.1-2.76,2.57-2.97Zm4.43-1.74v-2.96c0-.67,.26-1.3,.73-1.77L19.15,.15c.14-.14,.36-.19,.54-.11,.19,.08,.31,.26,.31,.46v3.5h3.5c.2,0,.38,.12,.46,.31,.08,.19,.03,.4-.11,.54l-2.41,2.41c-.47,.47-1.1,.73-1.77,.73h-2.96l-4.35,4.35c-.1,.1-.23,.15-.35,.15s-.26-.05-.35-.15c-.2-.2-.2-.51,0-.71l4.35-4.35Zm1-.29h2.67c.4,0,.78-.16,1.06-.44l1.56-1.56h-2.79c-.28,0-.5-.22-.5-.5V1.71l-1.56,1.56c-.28,.28-.44,.66-.44,1.06v2.67Z" /></svg>
                  <span className="font-bold text-lg">Preciso</span>
                </div>
                <div className="flex flex-col py-2 px-4 justify-center items-center bg-white my_shadow rounded-md gap-1 text-my">
                  <CursorArrowRippleIcon className="w-8 h-8" />
                  <span className="font-bold text-lg">Simples</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mt-4 flex justify-center items-center py-16">
          <div className="max-w-7xl flex flex-col relative gap-24">
            <HeroFlex
              imgPath="bg1"
              mainTitle="Descubra o potencial oculto na Nuvem"
              reverse={false}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-row w-full items-start gap-4">
                  <div className="p-2 bg-sky-100 rounded-full">
                    <UserIcon className="h-7 w-7 text-my" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">
                      Conta Única
                    </h3>
                    <p className="text-gray-600 md:text-lg">
                      Na nossa plataforma vocẽ terá tudo que precisa em
                      uma só conta.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row w-full items-start gap-4">
                  <div className="p-2 bg-sky-100 rounded-full">
                    <PaperAirplaneIcon className="h-7 w-7 text-my rotate-[-40deg]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">
                      Exportação Facilitada
                    </h3>
                    <p className="text-gray-600 md:text-lg">
                      Nosso sistema foi desenvolvido para facilitar ao
                      máximo a exportação dos dados
                    </p>
                  </div>
                </div>
                <div className="flex flex-row w-full items-start gap-4">
                  <div className="p-2 bg-sky-100 rounded-full">
                    <ClipboardDocumentListIcon className="h-7 w-7 text-my" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">
                      Visualização em Planilha
                    </h3>
                    <p className="text-gray-600 md:text-lg">
                      Visualize os seus dados numa planilha através da
                      nossa intregração com o Google Sheets!
                    </p>
                  </div>
                </div>
              </div>
            </HeroFlex>
            <HeroFlex
              imgPath="timeline"
              mainTitle="Transforme dados em insights acionáveis com
                facilidade."
              reverse={true}
            >
              <div className="flex flex-col gap-2">
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
            </HeroFlex>
          </div>
        </section>
        <section className="w-full mt-10 flex justify-center items-center bg-gray-100 pb-20">
          <div className="max-w-7xl flex flex-col relative justify-between mt-8">
            <h2 className="font-semibold text-4xl text-center my-6">
              Benefícios da Nuvem
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-4">
              <Card
                colorTitle="text-green-500"
                imagePath="googlesheets"
                mainTitle="Google Sheets"
              >
                Integração facilitado com as planilhas do <span className="text-green-500">Google Sheets</span>. Com apenas 1 clique, transfira todos os dados para uma planilha
              </Card>
              <Card
                colorTitle="text-my"
                imagePath="facebook"
                mainTitle="Facebook ADS"
              >
                <p className="text-gray-600 md:text-lg">Integração facilitado com as planilhas do <span className="text-green-500">Google Sheets</span>. Com apenas 1 clique, transfira todos os dados para uma planilha</p>
              </Card>
              <Card
                colorTitle="text-my"
                imagePath="logo"
                mainTitle="A Nuvem"
              >
                <p className="text-gray-600 md:text-lg">Chega de plataformas com bugs e que te limitam. Exportação facilitada de todas as métricas que quiser e sempre que squiser.</p>
              </Card>
              <MySwiper />
            </div>
          </div>
        </section>
        <section className="w-full mt-4 flex justify-center items-center">
          <div className="max-w-7xl flex flex-col relative gap-24">
            <h2 className="font-semibold text-4xl text-center mt-6">
              Acesso único e completo
            </h2>
            <div className="flex flex-col gap-8 max-w-3xl border rounded-3xl p-8">
              <div className="flex flex-row justify-between items-start gap-12">
                <div className="max-w-xs">
                  <h2 className="text-4xl font-bold">Plano</h2>
                  <p className="text-base text-gray-600">Melhor opção para qualquer tipo de agência ou gestor de tráfego.</p>
                </div>
                <div className="flex flex-col items-end">
                  <h4 className="font-extrabold text-2xl ">R$ 000,00</h4>
                  <p className="text-gray-400 text-sm">Por mês</p>
                </div>
              </div>
              <Link href="" className="grad-main rounded-lg font-semibold text-white py-3 text-lg text-center">Criar conta</Link>
              <div className="grid grid-cols-2 gap-4">
                <p className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                  <span className="">Simples, prático e intuitivo</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                  <span className="">Simples, prático e intuitivo</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                  <span className="">Simples, prático e intuitivo</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                  <span className="">Simples, prático e intuitivo</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                  <span className="">Simples, prático e intuitivo</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                  <span className="">Simples, prático e intuitivo</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

