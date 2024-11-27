import LoginClient from "../components/auth/LoginClient"
import { getCurrentUser } from '@/app/actions/getCurrentUser';

const Login = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div>
        <LoginClient currentUser={currentUser} />
    </div>
  )
}

export default Login