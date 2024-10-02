'use client';

import { useRouter } from 'next/router';
import { LoginForm } from '../../components/index';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
