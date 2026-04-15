export default function GitHubGuidePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Guia: Conectar Projeto ao GitHub
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Siga os passos abaixo para conectar seu projeto do Visual Studio ao GitHub.
        </p>

        <div className="space-y-6">
          {/* Passo 1 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">
              1 - Criar um repositório no GitHub
            </h2>
            <p className="text-gray-600">
              Acesse o GitHub e crie um novo repositório para o seu projeto.
            </p>
          </div>

          {/* Passo 2 */}
          <div className="border-l-4 border-green-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">
              2 - Inicializar o Git no projeto
            </h2>
            <p className="text-gray-600 mb-2">
              Na pasta do seu projeto no Visual Studio, execute:
            </p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto">
              git init
            </pre>
            <p className="text-sm text-gray-500 mt-2">
              Isso inicializa o Git dentro da pasta do projeto.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="border-l-4 border-yellow-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">
              3 - Verificar repositório conectado
            </h2>
            <p className="text-gray-600 mb-2">
              Use o comando abaixo para verificar conexões existentes:
            </p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto">
              git remote -v
            </pre>
          </div>

          {/* Passo 4 */}
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">
              4 - Conectar ao repositório criado
            </h2>
            <p className="text-gray-600 mb-2">
              Adicione o repositório remoto com:
            </p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto">
              git remote add origin https://github.com/usuario/repositorio
            </pre>
          </div>

          {/* Passo 5 */}
          <div className="border-l-4 border-red-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">
              5 - Remover e reconectar repositório (se necessário)
            </h2>
            <p className="text-gray-600 mb-2">
              Para remover um repositório existente:
            </p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto">
              git remote remove origin
            </pre>
            <p className="text-gray-600 mt-2">
              Depois, conecte novamente usando o comando do passo 4.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          💡 Dica: Após conectar, use <code>git add .</code>,{" "}
          <code>git commit -m mensagem</code> e{" "}
          <code>git push -u origin main</code> para enviar seu código.
        </div>
      </div>
    </main>
  );
}