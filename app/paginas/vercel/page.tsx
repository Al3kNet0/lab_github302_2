export default function DeployVercel() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Deploy na Vercel 🚀
        </h1>

        {/* Passo 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1 - Criar conta na Vercel
          </h2>
          <p className="mb-2">
            Acesse o site da Vercel e crie uma conta.
          </p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            https://vercel.com
          </pre>
        </section>

        {/* Passo 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2 - Fazer login com GitHub
          </h2>
          <p>
            Clique em Continue with GitHub e autorize o acesso.
          </p>
        </section>

        {/* Passo 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            3 - Importar repositório
          </h2>
          <p className="mb-2">
            Clique em Add New Project e selecione seu repositório.
          </p>
        </section>

        {/* Passo 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4 - Configurar o projeto
          </h2>
          <p>
            A Vercel detecta automaticamente projetos Next.js.
            Basta clicar em deploy.
          </p>
        </section>

        {/* Passo 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            5 - Fazer deploy
          </h2>
          <p className="mb-2">
            Clique no botão de deploy.
          </p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            Deploy
          </pre>
        </section>

        {/* Passo 6 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            6 - Acessar o site publicado
          </h2>
          <p>
            Após o deploy, a Vercel fornecerá uma URL pública do seu site.
          </p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg">
            https://seu-projeto.vercel.app
          </pre>
        </section>
      </div>
    </main>
  );
}