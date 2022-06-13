import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  if (typeof document !== 'undefined') {
    document.getElementsByTagName('body')[0].setAttribute('ontouchstart', '')
  }
  return (
    <Html lang='ja-JP'>
      <Head></Head>
      <body className='bg-white dark:bg-black duration-1000'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
