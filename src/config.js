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
  // À COMPLÉTER : identifiant App Store, une fois l'application publiée.
  app: 'https://apps.apple.com/app/petmatch',
};
