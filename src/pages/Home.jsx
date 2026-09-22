import { Link } from 'react-router-dom';
import PodiumWall from '../components/PodiumWall.jsx';
import { STORES } from '../config.js';

const LINKS = [
  { to: '/charte', label: 'Charte de publication' },
  { to: '/confidentialite', label: 'Politique de confidentialité' },
  { to: '/conditions', label: "Conditions d'utilisation" },
  { to: '/contact', label: 'Nous contacter' },
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

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <StoreLink href={STORES.play} name="Google Play" icon={<PlayGlyph />} />
          <StoreLink href={STORES.app} name="App Store" icon={<AppleGlyph />} />
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

/**
 * Les deux magasins pèsent pareil : même gabarit, même graisse, seul le nom
 * change. C'est ce que le badge officiel fait, et ce qui se lit sans lire.
 */
function StoreLink({ href, name, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex w-full min-w-52 items-center justify-center gap-3 rounded-2xl bg-ink px-5 py-3 text-shelf transition hover:opacity-85 sm:w-auto"
    >
      <span className="shrink-0">{icon}</span>
      <span className="text-left leading-tight">
        <span className="block text-[0.625rem] font-medium uppercase tracking-widest opacity-70">
          Télécharger sur
        </span>
        <span className="block text-lg font-bold tracking-tight">{name}</span>
      </span>
    </a>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="currentColor">
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.68.59 1.19 0 .5-.24.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
    </svg>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
