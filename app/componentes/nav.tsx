"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">Meu Projeto</h1>

        <div className="flex gap-2">
          <Link href="/" className={linkClass("/")}>
            Início
          </Link>

          <Link
            href="/paginas/configuracao"
            className={linkClass("/paginas/configuracao")}
          >
            Configurações
          </Link>

          <Link
            href="/paginas/repositorio"
            className={linkClass("/paginas/repositorio")}
          >
            Repositórios
          </Link>

          <Link
            href="/paginas/envio"
            className={linkClass("/paginas/envio")}
          >
            Envio
          </Link>
          <Link
            href="/paginas/clone"
            className={linkClass("/paginas/clone")}
          >
            Clone
          </Link>
          <Link
            href="/paginas/vercel"
            className={linkClass("/paginas/vercel")}
          >
            Vercel
          </Link>
        </div>
      </div>
    </nav>
  );
}