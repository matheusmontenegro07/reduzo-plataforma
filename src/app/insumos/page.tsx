"use client";

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  ArrowUpDown,
  MoreHorizontal,
  Pencil,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Insumo {
  id: string;
  nome: string;
  categoria: string;
  unidadeMedida: string;
  estoqueAtual: number;
  estoqueMinimo: number;
  precoMedio: number;
  fornecedor: string;
}

// Dados mockados para exemplificar a interface
const insumosDemo: Insumo[] = [
  {
    id: "1",
    nome: "Farinha de Trigo",
    categoria: "Farináceos",
    unidadeMedida: "kg",
    estoqueAtual: 75,
    estoqueMinimo: 50,
    precoMedio: 3.50,
    fornecedor: "Distribuidora de Grãos Ltda"
  },
  {
    id: "2",
    nome: "Açúcar Refinado",
    categoria: "Adoçantes",
    unidadeMedida: "kg",
    estoqueAtual: 28,
    estoqueMinimo: 30,
    precoMedio: 4.20,
    fornecedor: "Comércio de Açúcar S.A."
  },
  {
    id: "3",
    nome: "Fermento Biológico",
    categoria: "Fermentos",
    unidadeMedida: "g",
    estoqueAtual: 2000,
    estoqueMinimo: 1500,
    precoMedio: 0.05,
    fornecedor: "Insumos para Padaria ME"
  },
  {
    id: "4",
    nome: "Óleo de Soja",
    categoria: "Óleos",
    unidadeMedida: "L",
    estoqueAtual: 20,
    estoqueMinimo: 15,
    precoMedio: 9.75,
    fornecedor: "Distribuidora de Óleos Ltda"
  },
  {
    id: "5",
    nome: "Sal Refinado",
    categoria: "Temperos",
    unidadeMedida: "kg",
    estoqueAtual: 18,
    estoqueMinimo: 10,
    precoMedio: 1.80,
    fornecedor: "Comércio de Temperos ME"
  },
  {
    id: "6",
    nome: "Leite Integral",
    categoria: "Laticínios",
    unidadeMedida: "L",
    estoqueAtual: 45,
    estoqueMinimo: 40,
    precoMedio: 5.20,
    fornecedor: "Laticínios Especiais S.A."
  },
  {
    id: "7",
    nome: "Ovos",
    categoria: "Ovoprodutos",
    unidadeMedida: "un",
    estoqueAtual: 120,
    estoqueMinimo: 100,
    precoMedio: 0.75,
    fornecedor: "Granja Bom Ovo Ltda"
  },
  {
    id: "8",
    nome: "Manteiga",
    categoria: "Laticínios",
    unidadeMedida: "kg",
    estoqueAtual: 15,
    estoqueMinimo: 10,
    precoMedio: 22.50,
    fornecedor: "Laticínios Especiais S.A."
  }
];

export default function InsumosPage() {
  const [insumos, setInsumos] = useState<Insumo[]>(insumosDemo);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof Insumo | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Função para ordenar a tabela
  const handleSort = (column: keyof Insumo) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Função para filtrar e ordenar os insumos
  const filteredAndSortedInsumos = React.useMemo(() => {
    let result = [...insumos];
    
    // Filtragem
    if (searchTerm) {
      result = result.filter(
        insumo =>
          insumo.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          insumo.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
          insumo.fornecedor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Ordenação
    if (sortColumn) {
      result.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) {
          return sortDirection === 'asc' ? -1 : 1;
        }
        if (a[sortColumn] > b[sortColumn]) {
          return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return result;
  }, [insumos, searchTerm, sortColumn, sortDirection]);

  // Função para remover um insumo (mock)
  const handleRemove = (id: string) => {
    setInsumos(insumos.filter(insumo => insumo.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-1">Gestão de Insumos</h1>
            <p className="text-muted-foreground">
              Cadastre e gerencie todos os insumos utilizados na sua operação
            </p>
          </div>
          <Button className="flex items-center gap-1">
            <Plus size={16} /> Novo Insumo
          </Button>
        </div>
      </header>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Resumo de Estoque</CardTitle>
          <CardDescription>
            Visão geral da situação atual do seu estoque de insumos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted/40 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Total de Insumos</h3>
              <p className="text-2xl font-bold">{insumos.length}</p>
            </div>
            <div className="bg-muted/40 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Insumos Abaixo do Mínimo</h3>
              <p className="text-2xl font-bold text-amber-500">
                {insumos.filter(i => i.estoqueAtual < i.estoqueMinimo).length}
              </p>
            </div>
            <div className="bg-muted/40 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Valor Total em Estoque</h3>
              <p className="text-2xl font-bold">
                R$ {insumos.reduce((acc, i) => acc + (i.estoqueAtual * i.precoMedio), 0).toFixed(2)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar insumos..."
            className="pl-10"
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex items-center gap-1">
            <Filter size={16} /> Filtrar
          </Button>
        </div>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th 
                  className="p-4 font-medium text-muted-foreground cursor-pointer"
                  onClick={() => handleSort('nome')}
                >
                  <div className="flex items-center gap-1">
                    Nome
                    {sortColumn === 'nome' && (
                      <ArrowUpDown size={16} className={sortDirection === 'asc' ? 'rotate-0' : 'rotate-180'} />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium text-muted-foreground cursor-pointer"
                  onClick={() => handleSort('categoria')}
                >
                  <div className="flex items-center gap-1">
                    Categoria
                    {sortColumn === 'categoria' && (
                      <ArrowUpDown size={16} className={sortDirection === 'asc' ? 'rotate-0' : 'rotate-180'} />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium text-muted-foreground cursor-pointer"
                  onClick={() => handleSort('unidadeMedida')}
                >
                  <div className="flex items-center gap-1">
                    Unidade
                    {sortColumn === 'unidadeMedida' && (
                      <ArrowUpDown size={16} className={sortDirection === 'asc' ? 'rotate-0' : 'rotate-180'} />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium text-muted-foreground cursor-pointer"
                  onClick={() => handleSort('estoqueAtual')}
                >
                  <div className="flex items-center gap-1">
                    Estoque Atual
                    {sortColumn === 'estoqueAtual' && (
                      <ArrowUpDown size={16} className={sortDirection === 'asc' ? 'rotate-0' : 'rotate-180'} />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium text-muted-foreground cursor-pointer"
                  onClick={() => handleSort('precoMedio')}
                >
                  <div className="flex items-center gap-1">
                    Preço Médio
                    {sortColumn === 'precoMedio' && (
                      <ArrowUpDown size={16} className={sortDirection === 'asc' ? 'rotate-0' : 'rotate-180'} />
                    )}
                  </div>
                </th>
                <th className="p-4 font-medium text-muted-foreground">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedInsumos.map((insumo) => (
                <tr key={insumo.id} className="border-t hover:bg-muted/40">
                  <td className="p-4 font-medium">
                    <div className="flex items-center gap-2">
                      <Package size={16} className="text-muted-foreground" />
                      {insumo.nome}
                    </div>
                  </td>
                  <td className="p-4">{insumo.categoria}</td>
                  <td className="p-4">{insumo.unidadeMedida}</td>
                  <td className="p-4">
                    <div className={`flex items-center gap-1 ${
                      insumo.estoqueAtual < insumo.estoqueMinimo ? 'text-red-500' : ''
                    }`}>
                      {insumo.estoqueAtual}
                      {insumo.estoqueAtual < insumo.estoqueMinimo && (
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">
                          Abaixo do mínimo
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">R$ {insumo.precoMedio.toFixed(2)}</td>
                  <td className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Pencil size={14} /> Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2 text-red-600"
                          onClick={() => handleRemove(insumo.id)}
                        >
                          <Trash2 size={14} /> Remover
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
              {filteredAndSortedInsumos.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-muted-foreground">
                    Nenhum insumo encontrado. Ajuste os filtros ou adicione novos insumos.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 