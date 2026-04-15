export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">
          Guia: Conectar Projeto ao GitHub
        </h1>

        <p className="mb-8 text-gray-600">
          Siga este passo a passo para conectar seu projeto do Visual Studio Code a um repositório no GitHub.
        </p>

        {/* Passo 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1 - Criar um repositório no GitHub
          </h2>
          <p>
            Acesse o GitHub e crie um novo repositório para seu projeto.
          </p>
        </section>

        {/* Passo 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2 - Inicializar o Git no projeto
          </h2>
          <p className="mb-2">
            Dentro da pasta do seu projeto no Visual Studio Code, execute:
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>git init</code>
          </pre>

          <p className="mt-3 text-gray-600">
            Isso inicializa o Git dentro da pasta do projeto.
          </p>
        </section>

        {/* Passo 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            3 - Verificar repositório conectado
          </h2>
          <p className="mb-2">
            Use o comando abaixo para verificar se já existe algum repositório conectado:
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>git remote -v</code>
          </pre>
        </section>

        {/* Passo 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4 - Conectar ao repositório criado
          </h2>
          <p className="mb-2">
            Conecte seu projeto ao repositório do GitHub com:
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>
              git remote add origin https://github.com/usuario/repositorio
            </code>
          </pre>
        </section>

        {/* Passo 5 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            5 - Remover e reconectar repositório (se necessário)
          </h2>

          <p className="mb-2">
            Caso precise remover um repositório conectado:
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
            <code>git remote remove origin</code>
          </pre>

          <p className="mb-2">
            Depois, conecte novamente ao novo repositório:
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>
              git remote add origin https://github.com/usuario/repositorio
            </code>
          </pre>
        </section>
      </div>
    </main>
  );
}