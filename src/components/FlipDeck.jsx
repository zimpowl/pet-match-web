import { useEffect, useRef, useState } from 'react';
import SlabCard from './SlabCard.jsx';

const FlipMillis = 700;

/**
 * La carte se retourne et en découvre une autre.
 *
 * Le jeu qu'on lui donne ne change pas en cours de route : la vitrine le pose
 * une fois. Un `key` chez l'appelant remonterait la carte s'il changeait.
 *
 * Deux faces qui existent en permanence, et le navigateur cache celle qui
 * tourne le dos : personne ne voit de texte en miroir, et il n'y a pas de
 * milieu d'animation à guetter. Après chaque demi-tour, la face devenue
 * invisible reçoit la carte suivante.
 */
export default function FlipDeck({ entries, holdMillis = 5000, delayMillis = 0 }) {
  const [faces, setFaces] = useState(() => [entries[0], entries[1] ?? entries[0]]);
  const [turns, setTurns] = useState(0);
  const cursor = useRef(1);

  useEffect(() => {
    if (entries.length < 2) return undefined;

    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => setTurns((it) => it + 1), holdMillis);
    }, delayMillis);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [entries, holdMillis, delayMillis]);

  // La face cachée prend la carte suivante, une fois le tour achevé.
  useEffect(() => {
    if (turns === 0) return undefined;

    const id = setTimeout(() => {
      cursor.current = (cursor.current + 1) % entries.length;
      const next = entries[cursor.current];

      setFaces((it) => (turns % 2 === 1 ? [next, it[1]] : [it[0], next]));
    }, FlipMillis);

    return () => clearTimeout(id);
  }, [turns, entries]);

  return (
    <div className="[perspective:1600px]">
      <div
        className="relative transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
        style={{ transform: `rotateY(${turns * 180}deg)` }}
      >
        <div className="[backface-visibility:hidden]">
          <SlabCard entry={faces[0]} />
        </div>

        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <SlabCard entry={faces[1]} />
        </div>
      </div>
    </div>
  );
}
