import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeTheme } from '@/components/ChangeTheme'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Change Theme</title>
        <meta name='description' content='dark and light mode button' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-full h-screen'>
        <ChangeTheme />
        <div className='relative'>
          <h1 className='fixed top-[50%] left-[25%] font-[800] text-[2rem] tracking-[3px] text-black dark:text-white sm:text-[3rem] md:text-[4rem] md:tracking-[6px]'>
            Change Theme
          </h1>
        </div>
      </main>
    </div>
  )
}

export default Home
