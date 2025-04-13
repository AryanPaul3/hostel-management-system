import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
    return null;
  }

  if (session.user.role === 'admin') {
    redirect('/admin/dashboard');
    return null;
  }

  redirect('/student/dashboard');
  return null;
}
