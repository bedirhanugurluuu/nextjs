"use client"

import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"

const RegisterClient = () => {
  return (
    <AuthContainer>
        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
            <Heading text="Register" center />
        </div>
    </AuthContainer>
  )
}

export default RegisterClient