"use client"

import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button onClick={() => signIn()}>
        Zaloguj się
      </button>
    </div>
  )
}
