import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useRedirect = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);
}

export default useRedirect;