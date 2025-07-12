import SignUpForm from './_components/SignUpForm'
import LoginForm from './_components/SignUpForm'

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  )
}
