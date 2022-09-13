import './styles/main.css';

import logoImg from './assets/logo.svg'

function App() {
  return (
    <div className='max-w-[1344px] my-20 mx-auto flex flex-col items-center'>
      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-home-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a className='relative rounded-lg overflow-hidden' href="">
          <img src="/image 1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 mt-8 bg-home-gradient self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white'>Não encontrou seu duo?</strong>

            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600'>Publicar anúncio</button>
        </div>
      </div>
    </div>
  )
}

export default App
