import { Link } from 'react-router-dom';
import { CONTACT } from '../config.js';

const REASONS = [
  {
    title: 'Signaler une publication',
    text:
      "Une photo, un profil, un comportement. Le bouton « Signaler » de l'application fait " +
      "la même chose et va plus vite, mais l'adresse marche aussi, et sans compte.",
  },
  {
    title: 'Vos données',
    text:
      "Accès, rectification, effacement, portabilité, opposition. Nous répondons dans le " +
      "mois. Écrivez depuis l'adresse de votre compte, cela nous évite de vous en demander " +
      'la preuve.',
  },
  {
    title: 'Un problème avec l’application',
    text:
      "Dites ce que vous faisiez, ce que vous attendiez, et ce qui s'est passé à la place. " +
      "Le nom de votre téléphone aide.",
  },
];

/**
 * Une porte, pas un formulaire : une adresse que la personne garde, et qui
 * répond même si le site tombe. Les magasins exigent ce lien.
 */
export default function Contact() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-6 py-12">
      <Link to="/" className="text-sm text-ink-faint underline underline-offset-4 hover:text-ink">
        ← PetMatch
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">Nous contacter</h1>

      <p className="mt-6 text-ink-muted">
        Une seule adresse, lue par la même équipe que celle qui relit les signalements.
      </p>

      <a
        href={`mailto:${CONTACT}`}
        className="mt-6 inline-flex w-fit items-center rounded-2xl bg-ink px-6 py-3 text-lg font-bold tracking-tight text-shelf transition hover:opacity-85"
      >
        {CONTACT}
      </a>

      {REASONS.map((reason) => (
        <section key={reason.title} className="mt-10">
          <h2 className="border-b border-rule pb-2 text-xs font-semibold tracking-[0.12em] text-ink uppercase">
            {reason.title}
          </h2>
          <p className="mt-4 text-ink-muted">{reason.text}</p>
        </section>
      ))}

      <p className="mt-12 text-sm text-ink-faint">
        PetMatch — concours d’animaux. Les conditions d’utilisation, la charte de publication et
        la politique de confidentialité sont accessibles depuis l’accueil.
      </p>
    </div>
  );
}
