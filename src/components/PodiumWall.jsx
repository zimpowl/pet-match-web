import Slab from './Slab.jsx';

const ROWS = [1, 2, 3];
const DURATIONS = ['110s', '95s', '125s'];

/**
 * Trois files de podiums — les premiers, les deuxièmes, les troisièmes — qui
 * dérivent en sens contraires. Le mouvement ne montre pas un objet, il montre
 * **le nombre** : beaucoup de concours, et une place pour chacun.
 */
export default function PodiumWall({ entries }) {
  if (!entries.length) return null;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="flex flex-col gap-2">
        {ROWS.map((rank, index) => (
          <Row key={rank} entries={entries.filter((it) => it.rank === rank)} index={index} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-shelf to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-shelf to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-shelf to-transparent" />
    </div>
  );
}

/** La piste porte deux copies de la file : c'est ce qui rend la boucle invisible. */
function Row({ entries, index }) {
  if (!entries.length) return null;

  const track = [...entries, ...entries];

  return (
    <div
      className="drift flex items-start gap-2"
      style={{
        '--tile': 'clamp(112px, 15vw, 172px)',
        '--drift-duration': DURATIONS[index],
        '--drift-direction': index % 2 === 0 ? 'normal' : 'reverse',
      }}
    >
      {track.map((entry, position) => (
        <Slab key={`${entry.contestUid}-${entry.pet.petUid}-${position}`} entry={entry} />
      ))}
    </div>
  );
}
