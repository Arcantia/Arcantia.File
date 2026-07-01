'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container">
      <section className="card" style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>500 — Internal Server Error</h1>
        <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
          An internal server error occurred. Please try again later or return to the homepage.
        </p>
        <Link href="/" className="btn btn-primary" style={{ padding: '0.85rem 1.25rem' }}>
          Go back home
        </Link>
      </section>
    </main>
  );
}
