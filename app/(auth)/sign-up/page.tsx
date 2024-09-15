import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const SignUn = async() => {
  const loggedInUser = await getLoggedInUser();
  return (
    <div className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </div>
  )
}

export default SignUn
