export const privacy = {
  slug: 'confidentialite',
  title: 'Politique de confidentialité',
  updated: '13 septembre 2026',
  intro:
    "PetMatch traite des données personnelles pour faire fonctionner ses concours. " +
    "Ce document dit **lesquelles, pourquoi, combien de temps, et ce que vous pouvez exiger**. " +
    "Il est écrit pour être lu, pas pour être opposé.",
  sections: [
    {
      title: '1. Responsable du traitement',
      blocks: [
        { type: 'p', text:
          "Le responsable du traitement est **[À COMPLÉTER : raison sociale]**, " +
          "[À COMPLÉTER : forme juridique et capital], immatriculée au RCS de " +
          "[À COMPLÉTER] sous le numéro [À COMPLÉTER], dont le siège est situé " +
          "[À COMPLÉTER : adresse]." },
        { type: 'p', text:
          "Directeur de la publication : **[À COMPLÉTER]**. " +
          "Contact pour toute question relative aux données : **[À COMPLÉTER : adresse]**." },
        { type: 'p', text:
          "Hébergeur : **[À COMPLÉTER : nom et adresse de l'hébergeur du site]**. " +
          "L'application et ses données s'appuient sur **Google Firebase** " +
          "(Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande)." },
      ],
    },
    {
      title: '2. Les données que nous traitons',
      blocks: [
        { type: 'p', text: "Nous ne collectons rien qui ne serve à quelque chose de nommé ici." },
        { type: 'li', text:
          "**Compte** : identifiant technique, adresse électronique et nom transmis par " +
          "Google ou Apple lors de la connexion, date de création." },
        { type: 'li', text:
          "**Profil de juré** : pseudonyme, photo de profil, nationalité, description." },
        { type: 'li', text:
          "**Animal** : nom, espèce, race, sexe, date de naissance, pays, photos, et le cas " +
          "échéant le **numéro d'identification** (puce ISO / ICAD)." },
        { type: 'li', text:
          "**Participation** : inscriptions aux concours, votes émis, scores, rangs, " +
          "médailles et grade." },
        { type: 'li', text:
          "**Pièces d'identité**, uniquement si vous demandez la confirmation : carte " +
          "d'identité ou passeport pour le juré, justificatif d'identification pour l'animal." },
        { type: 'li', text:
          "**Technique** : jeton de notification, langue de lecture, et les journaux " +
          "techniques nécessaires à la sécurité du service." },
      ],
    },
    {
      title: '3. Pourquoi, et sur quelle base',
      blocks: [
        { type: 'li', text:
          "**Faire fonctionner le service** — compte, profil, concours, votes, classements, " +
          "grades. Base : l'exécution du contrat qui nous lie (les conditions d'utilisation)." },
        { type: 'li', text:
          "**Confirmer une identité** — vérifier qu'un juré est une personne réelle et qu'un " +
          "animal existe et n'est pas inscrit deux fois. Base : l'exécution du contrat et " +
          "notre intérêt légitime à empêcher la fraude." },
        { type: 'li', text:
          "**Modérer** — appliquer la charte de publication, protéger les animaux et les " +
          "personnes. Base : notre intérêt légitime, et le respect de nos obligations légales." },
        { type: 'li', text:
          "**Notifier** — résultats du soir et rappel de vote. Base : votre consentement, " +
          "retirable à tout instant depuis les paramètres de l'application." },
        { type: 'li', text:
          "**Annoncer les résultats** — publier les podiums sur les comptes officiels de " +
          "PetMatch, avec la photo, le rang et le nom de l'animal. Base : l'exécution du " +
          "contrat, dans les limites de la licence de l'article 6 de la charte, et vous " +
          "pouvez demander à en être retiré." },
        { type: 'li', text:
          "**Livrer une commande** — nom et adresse postale, uniquement si vous commandez un " +
          "objet. Base : l'exécution du contrat de vente." },
        { type: 'p', text:
          "Nous ne vendons aucune donnée. Nous ne faisons **aucune publicité ciblée** et " +
          "n'utilisons **aucun traceur publicitaire**." },
      ],
    },
    {
      title: '4. Combien de temps',
      blocks: [
        { type: 'li', text:
          "**Compte et profil** : tant que le compte existe, puis **[À COMPLÉTER : 12 mois " +
          "recommandé]** après sa fermeture." },
        { type: 'li', text:
          "**Pièces d'identité** : effacées **dès la décision prise**, et au plus tard " +
          "trente jours après leur dépôt. Seul le résultat — confirmé ou non — est conservé." },
        { type: 'li', text:
          "**Participations, votes et résultats** : conservés **sans limite de durée**, sous " +
          "une forme dissociée de votre identité vivante après la fermeture du compte — voir " +
          "l'article 6." },
        { type: 'li', text:
          "**Journaux techniques** : douze mois." },
        { type: 'li', text:
          "**Factures et pièces comptables** : dix ans, obligation légale." },
      ],
    },
    {
      title: '5. Qui y a accès',
      blocks: [
        { type: 'p', text:
          "Vos données ne sont accessibles qu'aux personnes qui en ont besoin, et à nos " +
          "prestataires techniques, qui agissent sur nos instructions :" },
        { type: 'li', text:
          "**Google Firebase** — hébergement, base de données, authentification, stockage " +
          "des fichiers et notifications." },
        { type: 'li', text: "**[À COMPLÉTER : prestataire de paiement]** — encaissement des commandes." },
        { type: 'li', text: "**[À COMPLÉTER : imprimeur / logisticien]** — fabrication et envoi des objets." },
        { type: 'p', text:
          "Certains de ces prestataires peuvent traiter des données **hors de l'Union " +
          "européenne**. Ces transferts sont encadrés par les clauses contractuelles types " +
          "de la Commission européenne et, pour les États-Unis, par le cadre de protection " +
          "des données UE–États-Unis." },
      ],
    },
    {
      title: '6. Ce qui reste quand vous partez',
      blocks: [
        { type: 'p', text:
          "C'est le point le plus important de ce document, et il mérite d'être dit " +
          "clairement. Lorsque vous supprimez votre compte ou l'un de vos animaux, **votre " +
          "identité vivante disparaît** : pseudonyme, photo de profil, jeton de notification. " +
          "Votre profil s'affiche dès lors comme un compte supprimé." },
        { type: 'p', text:
          "En revanche, **les concours déjà joués conservent leur trace**. Vos votes restent " +
          "comptés, et les photos ainsi que le nom sous lesquels une participation a été " +
          "enregistrée demeurent attachés à ce concours-là. La raison est de fond : retirer " +
          "un vote modifierait le classement de tous les autres participants, et réécrire un " +
          "concours clos reviendrait à réécrire le palmarès de personnes qui n'ont rien " +
          "demandé." },
        { type: 'p', text:
          "Si vous souhaitez néanmoins l'effacement d'une participation précise, écrivez-nous : " +
          "nous examinons chaque demande et procédons à l'effacement lorsque l'intégrité des " +
          "classements le permet." },
      ],
    },
    {
      title: '7. Vos droits',
      blocks: [
        { type: 'p', text:
          "Vous disposez d'un droit d'**accès**, de **rectification**, d'**effacement**, de " +
          "**limitation**, d'**opposition** et de **portabilité**, ainsi que du droit de " +
          "définir des directives sur le sort de vos données après votre décès." },
        { type: 'p', text:
          "Pour les exercer, écrivez à **[À COMPLÉTER : adresse]**. Nous répondons dans un " +
          "délai d'un mois. Une pièce d'identité peut vous être demandée en cas de doute " +
          "raisonnable sur votre identité ; elle est effacée dès la réponse envoyée." },
        { type: 'p', text:
          "Vous pouvez également introduire une réclamation auprès de la **CNIL** " +
          "(3 place de Fontenoy, 75007 Paris — cnil.fr)." },
      ],
    },
    {
      title: '8. Cookies et traceurs',
      blocks: [
        { type: 'p', text:
          "Ce site n'utilise **aucun cookie publicitaire ni aucun traceur de mesure " +
          "d'audience**. Seuls les stockages strictement nécessaires à son fonctionnement " +
          "sont employés, et ils ne requièrent pas de consentement." },
        { type: 'p', text:
          "L'application utilise les identifiants techniques nécessaires à " +
          "l'authentification et aux notifications, et rien d'autre." },
      ],
    },
    {
      title: '9. Mineurs',
      blocks: [
        { type: 'p', text:
          "Le service n'est pas destiné aux personnes de moins de **quinze ans**. Si nous " +
          "apprenons qu'un compte appartient à une personne plus jeune, il est fermé et ses " +
          "données effacées." },
      ],
    },
    {
      title: '10. Sécurité',
      blocks: [
        { type: 'p', text:
          "Les échanges sont chiffrés en transit. Les pièces d'identité sont rangées dans un " +
          "espace **inaccessible depuis l'application**, y compris à la personne qui les a " +
          "déposées : seule l'équipe de revue y accède, et leur accès est tracé." },
        { type: 'p', text:
          "En cas de violation de données susceptible d'engendrer un risque pour vos droits, " +
          "nous en informons la CNIL dans les soixante-douze heures et vous en informons " +
          "directement lorsque le risque est élevé." },
      ],
    },
    {
      title: '11. Modifications',
      blocks: [
        { type: 'p', text:
          "Toute modification substantielle de ce document est annoncée dans l'application " +
          "et vous est soumise avant de prendre effet. La date de dernière mise à jour " +
          "figure en tête de page." },
      ],
    },
  ],
};
