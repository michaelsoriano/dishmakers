import { signIn, signOut, useSession } from "next-auth/react"


function BtnLogin() {
    const { data : session } = useSession() 

    if (session) {
      return (
        <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
export default function Login() {
    return (
        <>
            <h1>teting</h1>
            <BtnLogin />
        </>    
    )
}