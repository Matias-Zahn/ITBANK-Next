'use client';

import { useGlobalState } from '@/context/Context';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { user } = useGlobalState();
  const userLocalStorage = JSON.parse(localStorage.getItem('user'));

  console.log(userLocalStorage);
  console.log(user);
  useEffect(() => {
    if (user.usuario === '' && userLocalStorage === null) {
      redirect('/login');
    }

    redirect('/cuenta');
  }, [user, userLocalStorage]);
}
