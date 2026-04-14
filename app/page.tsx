import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-20 px-8 bg-white dark:bg-black sm:items-start shadow-sm border-x border-zinc-100 dark:border-zinc-800">
        
        {/* Logo / Badge */}
        <div className="mb-8 flex items-center gap-3 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
          <Image
            className="dark:invert"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub logo"
            width={24}
            height={24}
          />
          <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Guia Rápido: GitHub
          </span>
        </div>

        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          {/* Título Principal */}
          <h1 className="max-w-2xl text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            Onde o mundo constrói <br /> 
            <span className="text-blue-600 dark:text-blue-400 font-extrabold">software.</span>
          </h1>

          {/* Explicação Principal */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              O **GitHub** é uma plataforma de hospedagem de código e colaboração que utiliza o sistema de controle de versão **Git**. 
              Pense nele como uma rede social para desenvolvedores, onde você pode armazenar seus projetos, acompanhar mudanças e trabalhar em equipe.
            </p>

            {/* Grid de Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 italic">📂 Repositórios</h3>
                <p className="text-sm text-zinc-500">Pastas na nuvem que guardam todo o histórico de um projeto.</p>
             </div>
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 italic">🤝 Colaboração</h3>
                <p className="text-sm text-zinc-500">Milhares de pessoas podem contribuir no mesmo código simultaneamente.</p>
              </div>
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 italic">📜 Versionamento</h3>
                <p className="text-sm text-zinc-500">Nunca mais perca nada. Volte para qualquer versão anterior do seu arquivo.</p>
              </div>
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 italic">🌐 Open Source</h3>
                <p className="text-sm text-zinc-500">O lar dos maiores projetos gratuitos e abertos do mundo.</p>
              </div>
            </div>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-500">
            Quer começar agora? Você pode criar uma conta gratuita e subir seu primeiro Hello World hoje mesmo.
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-col gap-4 mt-12 text-base font-medium sm:flex-row w-full">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-black text-white dark:bg-zinc-50 dark:text-black transition-transform hover:scale-[1.02] active:scale-95 md:w-[200px]"
            href="https://github.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criar minha conta
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-xl border border-zinc-200 px-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:text-zinc-400 md:w-[200px]"
            href="https://docs.github.com/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver documentação
          </a>
        </div>
      </main>
      
      {/* Footer minimalista */}
      <footer className="py-10 text-zinc-400 text-xs uppercase tracking-widest">
        Powered by Next.js & Tailwind
      </footer>
    </div>
  );
}