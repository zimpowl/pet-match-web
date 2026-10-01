/**
 * Le projet qui sert les podiums. Le backend v2 est déployé en production depuis
 * le 2026-09-29, et c'est donc lui le défaut.
 *
 * Le défaut est la **production**, délibérément. Vite fige cette valeur au
 * moment du build : un défaut pointant vers debug signifie qu'un simple
 * `npm run build` produit un site muet, et que personne ne s'en aperçoit avant
 * qu'un visiteur ne le signale. Le défaut doit être celui qui ne fait pas de
 * dégât quand on l'oublie.
 *
 * Pour développer contre debug : `VITE_API_BASE=… npm run dev`.
 */
export const API_BASE =
  import.meta.env.VITE_API_BASE ?? 'https://us-central1-pet-match-30417.cloudfunctions.net';

export const STORES = {
  play: 'https://play.google.com/store/apps/details?id=com.zimpo.petmatch',
  app: 'https://apps.apple.com/fr/app/petmatch/id6772214932',
};

/** L'adresse que les documents légaux annoncent, et que les magasins exigent. */
export const CONTACT = 'contact@pet-match.fr';
