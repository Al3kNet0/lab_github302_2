export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Guia Git & GitHub 🚀
        </h1>

        {/* Passo 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1 - Clonar um projeto do GitHub
          </h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            git clone url do projeto pasta do projeto
          </pre>

          <h3 className="mt-4 font-medium">1.1 Navegar até a pasta</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            cd /pasta_do_projeto
          </pre>

          <h3 className="mt-4 font-medium">1.2 Ver conteúdo da pasta</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            ls
          </pre>
        </section>

        {/* Passo 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2 - Instalar o projeto
          </h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            npm install
          </pre>
        </section>

        {/* Passo 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            3 - Remover repositório do projeto clonado
          </h2>

          <h3 className="mt-4 font-medium">
            3.1 Ver repositório conectado
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            git remote -v
          </pre>

          <h3 className="mt-4 font-medium">
            3.2 Remover repositório remoto
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            git remote remove origin
          </pre>
        </section>

        {/* Passo 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4 - Conectar ao seu repositório
          </h2>

          <h3 className="mt-4 font-medium">
            4.1 Conectar ao repositório
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            git remote add origin url do git
          </pre>

          <h3 className="mt-4 font-medium">
            4.2 Ir para branch main
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            git branch -M main
          </pre>
        </section>

        {/* Passo 5 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            5 - Enviar projeto para o GitHub
          </h2>

          <h3 className="mt-4 font-medium">
            5.1 Adicionar arquivos
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            git add .
          </pre>

          <h3 className="mt-4 font-medium">
            5.2 Criar commit
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            git commit -m versao 1
          </pre>

          <h3 className="mt-4 font-medium">
            5.3 Enviar para o repositório
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            git push -u origin main
          </pre>
        </section>
      </div>
    </main>
  );
}