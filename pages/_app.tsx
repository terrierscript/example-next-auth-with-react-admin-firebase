import { Provider, getSession } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  console.log(pageProps, "aaa")
  return (
    <Provider options={{ clientMaxAge: 60 }} session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}
