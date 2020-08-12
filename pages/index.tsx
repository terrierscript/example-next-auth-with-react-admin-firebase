import React from "react"
import { signIn, signOut, useSession, getSession } from "next-auth/client"

import dynamic from "next/dynamic"
const DynamicComponent = dynamic(
  () => import("../component/app"),
  { ssr: false }
)

export default function Page() {
  const [session, loading] = useSession()
  if (loading) {
    return null
  }
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
          <DynamicComponent />
        </>
      )}
    </>
  )
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getSession(context),
//     },
//   }
// }
