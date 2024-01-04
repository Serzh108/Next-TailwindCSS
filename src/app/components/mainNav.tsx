'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainNav() {
  const pathname = usePathname();
  console.log('pathname: ', pathname);
  return (
    <nav>
      <Link
        className={`link ${pathname === '/my1' ? 'active' : ''}`}
        href="my1#test-scroll">
        My1{' '}
      </Link>
      <Link href="/my2">My2 </Link>
      <Link href="/my3">My3 </Link>
    </nav>
  );
}
