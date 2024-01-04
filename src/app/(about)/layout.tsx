import MainNav from '../components/mainNav';

export default function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <MainNav />
      <div>{children}</div>
    </section>
  );
}
