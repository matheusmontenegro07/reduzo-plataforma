import React from 'react';
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-bold text-xl">
                REDUZO
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col border-r bg-background md:flex">
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/fornecedores" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Fornecedores</span>
                </Link>
              </li>
              <li>
                <Link href="/insumos" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Insumos</span>
                </Link>
              </li>
              <li>
                <Link href="/estoque" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Gestão de Estoque</span>
                </Link>
              </li>
              <li>
                <Link href="/cotacao" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Ordem de Cotação</span>
                </Link>
              </li>
              <li>
                <Link href="/compras" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Lista de Compras</span>
                </Link>
              </li>
              <li>
                <Link href="/planilha-cotacao" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Planilha de Cotação</span>
                </Link>
              </li>
              <li>
                <Link href="/ordem-compra" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Ordem de Compra</span>
                </Link>
              </li>
              <li>
                <Link href="/pedidos" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Pedidos</span>
                </Link>
              </li>
              <li>
                <Link href="/ficha-tecnica" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Ficha Técnica</span>
                </Link>
              </li>
              <li>
                <Link href="/vendas" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Registro de Vendas</span>
                </Link>
              </li>
              <li>
                <Link href="/relatorios" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Relatórios</span>
                </Link>
              </li>
              <li>
                <Link href="/indicacao" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Programa de Indicação</span>
                </Link>
              </li>
              <li>
                <Link href="/planos" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Planos</span>
                </Link>
              </li>
              <li>
                <Link href="/configuracoes" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Configurações</span>
                </Link>
              </li>
              <li>
                <Link href="/ajuda" className="flex items-center rounded-lg px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <span>Ajuda</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 