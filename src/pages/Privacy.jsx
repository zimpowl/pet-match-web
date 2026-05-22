import React from 'react';

const Privacy = () => (
  <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
    <h1 className="text-4xl font-black mb-6 text-on-background">Politique de Confidentialité</h1>
    <div className="max-w-2xl text-left text-lg bg-white/80 rounded-xl shadow-lg p-8">
      <p className="mb-4">Chez PetMatch, la confidentialité de vos données est une priorité. Voici ce que vous devez savoir :</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Les photos publiées sur l’application deviennent la propriété de PetMatch, mais ne seront jamais utilisées à des fins commerciales.</li>
        <li>Pour participer, une connexion via Google (Android) ou Apple (iOS) est requise. Ces services assurent la sécurité de votre authentification.</li>
        <li>Nous ne collectons aucune donnée personnelle autre que celles nécessaires à la création et à la gestion de votre compte.</li>
        <li>Pour supprimer votre compte ou toute donnée associée, contactez-nous à <a href="mailto:contact@pet-match.fr" className="text-primary underline">contact@pet-match.fr</a>.</li>
      </ul>
      <p>Pour toute question ou demande concernant la confidentialité, écrivez-nous. Nous nous engageons à protéger vos informations.</p>
    </div>
  </div>
);

export default Privacy;

