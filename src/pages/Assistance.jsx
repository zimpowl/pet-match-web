import React from 'react';

const Assistance = () => (
  <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
    <h1 className="text-4xl font-black mb-6 text-on-background">Assistance</h1>
    <div className="max-w-2xl text-left text-lg bg-white/80 rounded-xl shadow-lg p-8">
      <p className="mb-4">PetMatch est une application mobile de concours gratuits pour chiens et chats. Ajoutez des photos de votre animal et tentez de gagner des récompenses !</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Chaque photo publiée est la propriété de PetMatch, mais ne sera jamais utilisée à des fins commerciales.</li>
        <li>Pour participer, connectez-vous avec Google sur Android ou avec Apple sur iOS.</li>
        <li>Pour supprimer votre compte ou pour toute autre demande, envoyez un mail à <a href="mailto:contact@pet-match.fr" className="text-primary underline">contact@pet-match.fr</a>.</li>
      </ul>
      <p>Nous restons simples et efficaces pour vous offrir la meilleure expérience possible.</p>
    </div>
  </div>
);

export default Assistance;

