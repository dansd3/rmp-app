import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { getSession } from '../models/storage';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
      const isSessionActive = await getSession();
      if (isSessionActive) {
        router.replace('/home');
      } else {
        router.replace('/login');
      }
    };
    checkSession();
  }, [router]);

  return null; 
}