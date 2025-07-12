'use client'

import { signOut } from '@/lib/auth-client'
import { redirect } from 'next/navigation'

export default function ButtonSignOut({
  children,
}: {
  children: React.ReactNode
}) {
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          // Handle successful sign out, e.g., redirect to sign in page
          redirect('/signin')
        },
      },
    })
  }

  return (
    <button
      onClick={handleSignOut}
      className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
    >
      {children}
    </button>
  )
}
