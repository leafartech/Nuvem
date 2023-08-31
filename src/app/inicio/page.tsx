'use client'

import MiniCard from "@/components/MiniCard";
import SideBar from "@/components/SideBar";
import SystemTemplate from "@/components/Templates/System";
import SystemContent from "@/components/Templates/SystemContent";
import Title from "@/components/Title";
import Widgets from "@/components/Widgets";
import Link from "next/link";
import { DocumentTextIcon, CalendarDaysIcon, StarIcon, EyeIcon, DocumentPlusIcon } from '@heroicons/react/24/outline'
import ActionCard from "@/components/MiniCard/Action";

export default function Inicio() {
    return (
        <SystemTemplate>
            <SideBar />
            <SystemContent pageTitle="Início">
                <div className="p-4">
                    <Widgets.Template>
                        <div className="col-span-2 z-10 pe-8">
                            <Widgets.Title>Olá, <span className="text-my">Rafael!</span></Widgets.Title>
                            <Widgets.Subtitle subtitle="Na jornada dos dados à estratégia, a Nuvem é seu guia confiável ao facilitar a visualização das suas métricas." />
                            <Widgets.Bottom>Tire suas dúvidas <Link href="" className="text-blue-700">aqui</Link>.</Widgets.Bottom>
                        </div>
                        <Widgets.Image imagePath="1">
                            <img src="./images/float/cloud.png" alt="" className="absolute -top-12 -left-24 h-36 z-20" />
                            <img src="./images/float/cloud.png" alt="" className="absolute -bottom-12 -right-12 h-28 z-10" />
                        </Widgets.Image>
                    </Widgets.Template>
                    <div className="mt-12 px-2 flex flex-col gap-3">
                        <Title>Resumo da sua operação</Title>
                        <div className="flex gap-3">
                            <MiniCard
                                Icon={DocumentTextIcon}
                                mainText="21"
                                topText="Total de exportações"
                            />
                            <MiniCard
                                Icon={CalendarDaysIcon}
                                mainText="30 de agosto"
                                topText="Primeira exportação"
                            />
                            <MiniCard
                                Icon={StarIcon}
                                mainText="Venda"
                                topText="Coluna favorita"
                            />
                        </div>
                    </div>
                    <div className="mt-12 px-2 flex flex-col gap-3">
                        <Title>O que você quer fazer hoje?</Title>
                        <div className="flex gap-3">
                            <ActionCard 
                                Icon={EyeIcon}
                                href="/exportacoes"
                                text="Visualiar exportações"
                            />
                            <ActionCard 
                                Icon={DocumentPlusIcon}
                                href="/novosdados"
                                text="Exportar novos dados"
                            />
                        </div>
                    </div>
                </div>
                <div className="p-4 border-l border-gray-200 ">
                    <h2 className="text-xl font-bold">Atividade</h2>
                </div>


            </SystemContent>
        </SystemTemplate>
    )
}