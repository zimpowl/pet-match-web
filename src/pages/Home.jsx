import { Link } from 'react-router-dom';
import PodiumWall from '../components/PodiumWall.jsx';
import { STORES } from '../config.js';

const LINKS = [
  { to: '/charte', label: 'Charte de publication' },
  { to: '/confidentialite', label: 'Politique de confidentialité' },
  { to: '/conditions', label: "Conditions d'utilisation" },
];

/**
 * La page d'accueil dit une seule chose, et la montre : voilà ce qui s'y gagne.
 * Le reste est une porte vers les magasins.
 */
export default function Home({ entries }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <header className="flex shrink-0 flex-col items-center px-6 pt-12 text-center sm:pt-16">
        <img src="/ic_logo.png" alt="" className="h-20 w-20 invert" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">PetMatch</h1>
        <p className="mt-2 max-w-md text-ink-muted">
          La référence des concours canins et félins
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <StoreLink href={STORES.play} label="Acquérir sur Google Play" />
          <StoreLink href={STORES.app} label="Acquérir sur l'App Store" />
        </div>
      </header>

      <main className="mt-10 min-h-0 flex-1 overflow-hidden">
        <PodiumWall entries={entries} />
      </main>

      <footer className="flex shrink-0 flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-6 text-sm text-ink-faint">
        {LINKS.map((link) => (
          <Link key={link.to} to={link.to} className="underline underline-offset-4 hover:text-ink">
            {link.label}
          </Link>
        ))}
      </footer>
    </div>
  );
}

function StoreLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-shelf"
    >
      {label}
    </a>
  );
}
