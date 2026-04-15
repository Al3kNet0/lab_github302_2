export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6">
          Guia Passo a Passo: Configuração do Git
        </h1>

        {/* Passo 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1 - Instalar o Git via Terminal
          </h2>
          <p className="mb-2">
            Execute o comando abaixo no terminal:
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>
              winget install --id Git.Git -e --source winget
            </code>
          </pre>

          <p className="mt-4 text-yellow-600 font-medium">
            ⚠️ Lembre-se de reiniciar o VS Code após a instalação!
          </p>
        </section>

        {/* Passo 1.1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1.1 - Reiniciar o Visual Studio Code
          </h2>
          <p>
            Após instalar o Git, feche e reabra o VS Code para garantir que tudo funcione corretamente.
          </p>
        </section>

        {/* Passo 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2 - Verificar a versão do Git
          </h2>
          <p className="mb-2">
            Use o comando abaixo para verificar se o Git foi instalado corretamente:
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>
              git --version
            </code>
          </pre>
        </section>

        {/* Passo 3 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            3 - Configurar Identidade
          </h2>
          <p className="mb-2">
            Configure seu nome de usuário e e-mail com os comandos abaixo:
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              git config --global user.email email@exemplo.com
            </code>
          </pre>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <code>
              git config --global user.name SeuNomeUsuario
            </code>
          </pre>
        </section>
      </div>
    </main>
  );
}