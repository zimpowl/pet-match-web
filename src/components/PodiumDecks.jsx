import { useEffect, useRef, useState } from 'react';
import FlipCard, { FlipMillis } from './FlipCard.jsx';

const HoldMillis = 6000;

/** Un concours n'entre sur le podium que s'il a ses trois places. */
function podiums(entries) {
  const byContest = new Map();

  for (const entry of entries) {
    const podium = byContest.get(entry.contestUid) ?? {};
    podium[entry.rank] = entry;
    byContest.set(entry.contestUid, podium);
  }

  return [...byContest.values()].filter((it) => it[1] && it[2] && it[3]);
}

/**
 * Le podium d'un concours : le deuxième à gauche, le premier au milieu et plus
 * haut, le troisième à droite. Les trois se retournent **ensemble** et
 * découvrent le podium d'un autre concours — c'est le concours qui change, pas
 * les places.
 *
 * Sur un téléphone, le premier seul : trois slabs côte à côte n'y tiendraient
 * pas, et les réduire les rendrait illisibles.
 */
export default function PodiumDecks({ entries }) {
  const all = podiums(entries);

  // Des rangs, pas des podiums : les données arrivent après le premier rendu,
  // et un état figé sur une liste vide ne se remplirait jamais.
  const [slots, setSlots] = useState([0, 1]);
  const [turns, setTurns] = useState(0);
  const cursor = useRef(1);
  const count = all.length;

  useEffect(() => {
    if (count < 2) return undefined;

    const id = setInterval(() => setTurns((it) => it + 1), HoldMillis);
    return () => clearInterval(id);
  }, [count]);

  // La face cachée prend le podium suivant, une fois le tour achevé.
  useEffect(() => {
    if (turns === 0 || count < 2) return undefined;

    const id = setTimeout(() => {
      cursor.current = (cursor.current + 1) % count;
      const next = cursor.current;

      setSlots((it) => (turns % 2 === 1 ? [next, it[1]] : [it[0], next]));
    }, FlipMillis);

    return () => clearTimeout(id);
  }, [turns, count]);

  if (count === 0) return null;

  const front = all[slots[0] % count];
  const back = all[slots[1] % count];

  return (
    <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-3">
      <Step rank={2} front={front} back={back} turns={turns} />
      <Step rank={1} front={front} back={back} turns={turns} />
      <Step rank={3} front={front} back={back} turns={turns} />
    </div>
  );
}

function Step({ rank, front, back, turns }) {
  const first = rank === 1;

  return (
    <div
      className={
        first
          ? 'order-first mx-auto w-full max-w-sm lg:order-none'
          : 'mx-auto hidden w-[88%] lg:block lg:mt-10'
      }
    >
      <FlipCard front={front[rank]} back={back[rank]} turns={turns} />
    </div>
  );
}
