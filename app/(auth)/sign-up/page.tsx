import AuthForm from '@/components/AuthForm'

const SignUn = async() => {
  return (
    <div className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </div>
  )
}

export default SignUn
