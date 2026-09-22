# PetMatch — la vitrine

Le site de `pet-match.fr` : une page d'accueil qui montre les podiums en cours,
les deux portes vers les magasins, et les trois documents légaux que les stores
exigent (charte, confidentialité, conditions).

React 19, Vite, Tailwind 4, React Router. Aucun état serveur : la page lit une
seule route publique du backend, `getPodiumsHttp`, et tient debout sans elle.

## Tester en local

```bash
npm install          # la première fois seulement
npm run dev
```

Vite sert sur **http://localhost:5173** avec rechargement à chaud. Le site
appelle alors le backend de **debug** — c'est le défaut, écrit dans
`src/config.js`.

Pour viser un autre backend sans toucher au code, une variable d'environnement
suffit. Elle se pose à la volée :

```bash
VITE_API_BASE=https://us-central1-pet-match-30417.cloudfunctions.net npm run dev
```

ou une fois pour toutes dans un fichier `.env.local` à la racine (ignoré par
git) :

```
VITE_API_BASE=https://us-central1-pet-match-30417.cloudfunctions.net
```

Les podiums viennent de vraies données : une file vide veut dire que le projet
visé n'a pas encore de concours clos, pas que la page est cassée.

### Voir le site tel qu'il sera déployé

`npm run dev` sert les sources. Pour vérifier le vrai bundle — c'est lui qui
part en production :

```bash
npm run build
npm run preview      # http://localhost:4173
```

`npm run build` écrit dans `dist/`, qui est exactement ce que Firebase Hosting
publiera.

### Vérifier le code

```bash
npm run lint
```

## Déployer

L'hébergement vit sur le **projet de production**, `pet-match-30417` — c'est lui
qui sert `www.pet-match.fr`. Il est déjà le projet par défaut (`.firebaserc`).

```bash
npm run build
npx firebase deploy --only hosting --project pet-match-30417
```

Le déploiement publie le contenu de `dist/` : **construire d'abord**, sinon
c'est la version précédente qui repart. Firebase répond avec l'adresse
`https://pet-match-30417.web.app`, et le domaine `www.pet-match.fr` pointe
dessus.

### Essayer sans toucher à la production

```bash
npx firebase hosting:channel:deploy essai --project pet-match-30417
```

Une adresse temporaire, valable sept jours, qui n'écrase rien. C'est la bonne
façon de faire relire une page avant de la mettre en ligne.

Le projet de debug a lui aussi un site (`pet-match---debug.web.app`) : il n'est
branché sur aucun domaine et sert de bac à sable.

```bash
npx firebase deploy --only hosting --project pet-match---debug
```

## Ce qu'il faut savoir avant de publier

- **Le lien App Store est un gabarit.** `src/config.js` porte
  `https://apps.apple.com/app/petmatch` : il faudra l'identifiant réel une fois
  l'application publiée.
- **Le backend visé en production.** `src/config.js` retombe sur debug sans
  `VITE_API_BASE`. Vite fige la variable **au moment du build** : pour un
  déploiement de production, construire avec la bonne valeur, ou changer le
  défaut dans `config.js`.
- **Les adresses légales sont dans les magasins.** `/confidentialite`,
  `/charte`, `/conditions`. `/privacy` redirige vers l'adresse actuelle : ne pas
  la retirer.
