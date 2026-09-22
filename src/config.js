/**
 * Le projet qui sert les podiums. Le site est hébergé par le projet de prod,
 * mais le backend v2 — celui qui expose `getPodiumsHttp` — n'y est pas encore
 * déployé : tant qu'il n'y est pas, c'est debug qui alimente la vitrine.
 * Une variable d'environnement suffit à basculer, sans toucher au code.
 */
export const API_BASE =
  import.meta.env.VITE_API_BASE ?? 'https://us-central1-pet-match---debug.cloudfunctions.net';

export const STORES = {
  play: 'https://play.google.com/store/apps/details?id=com.zimpo.petmatch',
  app: 'https://apps.apple.com/fr/app/petmatch/id6772214932',
};

/** L'adresse que les documents légaux annoncent, et que les magasins exigent. */
export const CONTACT = 'contact@pet-match.fr';
