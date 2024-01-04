'use client';

import { useRouter } from 'next/navigation';

export default function MyButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/')}>
      Home
    </button>
  );
}
