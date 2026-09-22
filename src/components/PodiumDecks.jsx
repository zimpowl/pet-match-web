import FlipDeck from './FlipDeck.jsx';

const Decks = 3;
const HoldMillis = 5000;

/**
 * Trois cartes sur un écran d'ordinateur, une seule sur un téléphone. Chacune
 * pioche dans sa part des podiums et démarre à contretemps : elles ne se
 * retournent pas ensemble.
 */
export default function PodiumDecks({ entries }) {
  const winners = entries.filter((it) => it.rank === 1);
  const pool = winners.length >= Decks * 2 ? winners : entries;
  if (pool.length === 0) return null;

  const shares = Array.from({ length: Decks }, (_, deck) =>
    pool.filter((_, index) => index % Decks === deck),
  ).filter((it) => it.length > 0);

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
      {shares.map((share, index) => (
        <div key={index} className={index === 0 ? 'mx-auto w-full max-w-sm' : 'hidden lg:block'}>
          <FlipDeck
            key={share[0].contestUid}
            entries={share}
            holdMillis={HoldMillis}
            delayMillis={(index * HoldMillis) / shares.length}
          />
        </div>
      ))}
    </div>
  );
}
