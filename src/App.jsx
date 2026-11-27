
import { useState } from 'react'


const mangas = [
  { id: 1, titulo: 'Mob Psycho 100', volume: 6, autor: 'ONE', capa: '/capas/mob-psycho-6.jpg' },
  { id: 2, titulo: 'O Cara que Estou a Fim Não é um Cara?!', volume: 2, autor: 'Sumiko Arai', capa: '/capas/cara-2.png' },
  { id: 3, titulo: 'Dandadan', volume: 5, autor: 'Yukinobu Tatsu', capa: '/capas/dandadan-5.jpg' },
  { id: 4, titulo: 'BLAME!', volume: 1, autor: 'Tsutomu Nihei', capa: '/capas/blame-1.jpg' },
  { id: 5, titulo: 'Boa Noite Punpun', volume: 3, autor: 'Inio Asano', capa: '/capas/punpun-3.jpg' },
  { id: 6, titulo: 'Boa Noite Punpun', volume: 2, autor: 'Inio Asano', capa: '/capas/punpun-2.jpg' },
  { id: 7, titulo: 'Vagabond', volume: 4, autor: 'Takehiko Inoue', capa: '/capas/vagabond-4.jpg' },
  { id: 8, titulo: 'Dandadan', volume: 6, autor: 'Yukinobu Tatsu', capa: '/capas/dandadan-6.jpg' },
  { id: 9, titulo: 'Ayashimon', volume: 1, autor: 'Yuji Kaku', capa: '/capas/ayashimon-1.jpg' },
  { id: 10, titulo: 'Naruto Gold', volume: 12, autor: 'Masashi Kishimoto', capa: '/capas/naruto-12.jpg' },
  { id: 11, titulo: 'Vagabond', volume: 1, autor: 'Takehiko Inoue', capa: '/capas/vagabond-1.jpg' },
  { id: 12, titulo: 'Chainsaw Man', volume: 1, autor: 'Tatsuki Fujimoto', capa: '/capas/chainsaw-1.jpg' },
  { id: 13, titulo: 'Boa Noite Punpun', volume: 1, autor: 'Inio Asano', capa: '/capas/punpun-1.jpg' },
  { id: 14, titulo: 'Fire Punch', volume: 1, autor: 'Tatsuki Fujimoto', capa: '/capas/fire-punch-1.jpg' },
  { id: 15, titulo: 'Dandadan', volume: 9, autor: 'Yukinobu Tatsu', capa: '/capas/dandadan-9.jpg' },
]


function App() {
  const [pesquisa, setPesquisa] = useState('')
  const [filtro, setFiltro] = useState('Todos')
  const [selecionado, setSelecionado] = useState(null)

  const catalogoFiltrado = mangas.filter((manga) => {
    const correspondePesquisa =
      manga.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
      manga.autor.toLowerCase().includes(pesquisa.toLowerCase())

    const correspondeFiltro =
      filtro === 'Todos' || filtro === 'Disponíveis'

    return correspondePesquisa && correspondeFiltro
  })

  return (
    <div className="min-h-screen">

      {/* Cabeçalho */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Biblioteca Digital
            </h1>
            <p className="text-xs text-gray-500">
              Meu pequeno acervo
            </p>
          </div>

          <span className="text-sm text-gray-500">
            Catálogo pessoal
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">

        {/* Apresentação */}
        <section className="mb-10">
          <p className="mb-2 text-sm text-gray-500">
            BIBLIOTECA / CATÁLOGO
          </p>

          <h2 className="mb-3 text-3xl font-bold">
            Meu acervo de mangás
          </h2>

          <p className="max-w-xl text-gray-600">
            Um espaço para organizar, consultar e acompanhar
            os volumes da minha coleção.
          </p>
        </section>

        {/* Informações */}
        <section className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Volumes cadastrados</p>
            <p className="mt-2 text-2xl font-bold">{mangas.length}</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Disponíveis</p>
            <p className="mt-2 text-2xl font-bold">{mangas.length}</p>
          </div>

          <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-5 sm:col-span-1">
            <p className="text-sm text-gray-500">Títulos diferentes</p>
            <p className="mt-2 text-2xl font-bold">
              {new Set(mangas.map((m) => m.titulo)).size}
            </p>
          </div>
        </section>

        {/* Catálogo */}
        <section>
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold">Catálogo</h3>
              <p className="text-sm text-gray-500">
                Todos os volumes da coleção
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Pesquisar mangá ou autor..."
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-gray-600"
              />

              <select
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none"
              >
                <option>Todos</option>
                <option>Disponíveis</option>
              </select>
            </div>
          </div>

          <p className="mb-4 text-sm text-gray-500">
            Exibindo {catalogoFiltrado.length} volumes
          </p>

          {/* Lista de mangás */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {catalogoFiltrado.map((manga) => (
              <article
                key={manga.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-gray-400"
              >
                <div className="flex h-56 items-center justify-center bg-gray-100">
  {manga.capa ? (
    <img
      src={manga.capa}
      alt={`Capa de ${manga.titulo} - Volume ${manga.volume}`}
      className="h-full w-full object-contain"
    />
  ) : (
    <div className="p-5 text-center">
      <p className="text-xs uppercase tracking-widest text-gray-400">
        {manga.autor}
      </p>
      <h4 className="mt-3 text-lg font-bold">
        {manga.titulo}
      </h4>
      <p className="mt-2 text-sm text-gray-500">
        Volume {manga.volume}
      </p>
    </div>
  )}
</div>

                <div className="p-4">
                  <h4 className="truncate font-semibold">
                    {manga.titulo}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    Volume {manga.volume}
                  </p>

                  <p className="mt-2 text-xs text-green-700">
                    Disponível
                  </p>

                  <button
                    onClick={() => setSelecionado(manga)}
                    className="mt-4 w-full rounded-md border border-gray-300 py-2 text-sm transition hover:bg-gray-100"
                  >
                    Ver detalhes
                  </button>
                </div>
              </article>
            ))}
          </div>

          {catalogoFiltrado.length === 0 && (
            <p className="py-12 text-center text-gray-500">
              Nenhum mangá encontrado.
            </p>
          )}
        </section>

      </main>

      {/* Detalhes do mangá */}
      {selecionado && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelecionado(null)}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold">Detalhes do volume</h3>
              <button
                onClick={() => setSelecionado(null)}
                className="text-xl text-gray-500"
              >
                ×
              </button>
            </div>

            <h4 className="text-2xl font-bold">
              {selecionado.titulo}
            </h4>

            <div className="mt-5 space-y-3 text-sm">
              <p>
                <strong>Autor:</strong> {selecionado.autor}
              </p>
              <p>
                <strong>Volume:</strong> {selecionado.volume}
              </p>
              <p>
                <strong>Status:</strong> Disponível
              </p>
            </div>

            <button
              onClick={() => setSelecionado(null)}
              className="mt-7 w-full rounded-md bg-gray-900 py-3 text-sm text-white hover:bg-gray-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <footer className="mt-16 border-t border-gray-200 bg-white px-6 py-6 text-center text-sm text-gray-500">
        Biblioteca Digital — Projeto acadêmico
      </footer>

    </div>
  )
}

export default App
