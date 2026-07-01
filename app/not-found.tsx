import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container">
      <section className="card" style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 — Page Not Found</h1>
        <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
          The page you are looking for does not exist. Please check the URL or return to the homepage.
        </p>
        <Link href="/" className="btn btn-primary" style={{ padding: '0.85rem 1.25rem' }}>
          Go back home
        </Link>
      </section>
    </main>
  );
}
