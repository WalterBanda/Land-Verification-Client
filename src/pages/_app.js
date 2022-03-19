import "../styles/global.scss"

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const buildLayout = Component.getLayout || ((page) => page)

  return buildLayout(<Component {...pageProps} />)
}