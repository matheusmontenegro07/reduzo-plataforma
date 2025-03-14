"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, BarChart3, LineChart as LineChartIcon, Package, Receipt, ShoppingCart, TicketIcon } from "lucide-react"
import { BarChart } from "@/components/ui/bar-chart";
import { LineChart } from "@/components/ui/line-chart";

export default function DashboardPage() {
  // Dados para gráficos
  const vendasSemanais = [
    { label: "Seg", value: 1200 },
    { label: "Ter", value: 1350 },
    { label: "Qua", value: 1500 },
    { label: "Qui", value: 1250 },
    { label: "Sex", value: 1800 },
    { label: "Sáb", value: 2100 },
    { label: "Dom", value: 1700 },
  ];

  const cmvMensal = [
    { label: "Jan", value: 32 },
    { label: "Fev", value: 29 },
    { label: "Mar", value: 35 },
    { label: "Abr", value: 30 },
    { label: "Mai", value: 33 },
    { label: "Jun", value: 31 },
  ];

  return (
    <div className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Bem-vindo, acompanhe seus principais indicadores operacionais
        </p>
      </header>

      <section className="mb-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base">Receita Diária</CardTitle>
                <CardDescription>Receita diária da operação</CardDescription>
              </div>
              <LineChartIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 1.245,00</div>
              <div className="text-xs text-muted-foreground flex items-center">
                <span className="text-emerald-500 flex items-center mr-1">
                  +12.5% <ArrowUpRight className="ml-1 h-3 w-3" />
                </span>
                comparado a ontem
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base">Receita Semanal</CardTitle>
                <CardDescription>Receita dos últimos 7 dias</CardDescription>
              </div>
              <LineChartIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 7.843,00</div>
              <div className="text-xs text-muted-foreground flex items-center">
                <span className="text-emerald-500 flex items-center mr-1">
                  +8.2% <ArrowUpRight className="ml-1 h-3 w-3" />
                </span>
                comparado a semana passada
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base">Receita Mensal</CardTitle>
                <CardDescription>Receita do mês atual</CardDescription>
              </div>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 34.589,00</div>
              <div className="text-xs text-muted-foreground flex items-center">
                <span className="text-emerald-500 flex items-center mr-1">
                  +15.3% <ArrowUpRight className="ml-1 h-3 w-3" />
                </span>
                comparado ao mês anterior
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base">CMV Diário</CardTitle>
                <CardDescription>Custo das mercadorias vendidas</CardDescription>
              </div>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 532,00</div>
              <div className="text-xs text-muted-foreground flex items-center">
                <span className="text-emerald-500 flex items-center mr-1">
                  -4.2% <ArrowUpRight className="ml-1 h-3 w-3" />
                </span>
                comparado a ontem
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base">CMV Semanal</CardTitle>
                <CardDescription>Custo dos últimos 7 dias</CardDescription>
              </div>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 3.245,00</div>
              <div className="text-xs text-muted-foreground flex items-center">
                <span className="text-emerald-500 flex items-center mr-1">
                  -2.8% <ArrowUpRight className="ml-1 h-3 w-3" />
                </span>
                comparado a semana passada
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base">Nível de Estoque</CardTitle>
                <CardDescription>Produtos em estoque</CardDescription>
              </div>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">254 itens</div>
              <div className="text-xs text-muted-foreground flex items-center">
                <span className="text-amber-500 flex items-center mr-1">
                  12 itens abaixo do mínimo
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Vendas da Semana</CardTitle>
            <CardDescription>
              Acompanhe as vendas diárias nos últimos 7 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart data={vendasSemanais} height={200} width={600} showLabels={true} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>CMV por Mês (%)</CardTitle>
            <CardDescription>
              Porcentagem do CMV em relação à receita por mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={cmvMensal} height={200} />
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/vendas/registrar" className="block">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <Receipt className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="mb-1">Registrar Venda</CardTitle>
                <CardDescription>Cadastre uma nova venda no sistema</CardDescription>
                <Button variant="link" className="mt-2 p-0">
                  Acessar <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/orcamentos/criar" className="block">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <TicketIcon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="mb-1">Criar Orçamento</CardTitle>
                <CardDescription>Elabore um orçamento para cliente</CardDescription>
                <Button variant="link" className="mt-2 p-0">
                  Acessar <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/estoque/atualizar" className="block">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <Package className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="mb-1">Atualizar Estoque</CardTitle>
                <CardDescription>Atualize o estoque de produtos</CardDescription>
                <Button variant="link" className="mt-2 p-0">
                  Acessar <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/relatorios" className="block">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <BarChart3 className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="mb-1">Ver Relatórios</CardTitle>
                <CardDescription>Acesse os relatórios detalhados</CardDescription>
                <Button variant="link" className="mt-2 p-0">
                  Acessar <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 