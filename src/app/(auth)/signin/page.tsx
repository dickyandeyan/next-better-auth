import { checkSession } from '@/actions/check-session'
import LoginForm from './_components/LoginForm'

export default async function LoginPage() {
  await checkSession('/signin')
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <LoginForm />
      </div>
    </div>
  )
}
