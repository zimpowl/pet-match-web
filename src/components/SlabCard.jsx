const MEDAL = {
  1: 'from-gold-start to-gold-end',
  2: 'from-silver-start to-silver-end',
  3: 'from-bronze-start to-bronze-end',
};

const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

const registry = (number) =>
  `n° ${String(number).padStart(6, '0').replace(/(\d{3})(\d{3})/, '$1 $2')}`;

const ordinal = (rank) => (rank === 1 ? '1er' : `${rank}e`);

/** « 13 - 20 septembre 2026 » : le mois et l'année ne se répètent pas. */
function period(startAt, endAt) {
  const from = new Date(startAt);
  const to = new Date(endAt);
  const tail = `${MONTHS[to.getMonth()]} ${to.getFullYear()}`;

  return from.getMonth() === to.getMonth()
    ? `${from.getDate()} - ${to.getDate()} ${tail}`
    : `${from.getDate()} ${MONTHS[from.getMonth()]} - ${to.getDate()} ${tail}`;
}

/**
 * La slab, telle que l'application la pose : l'étiquette du concours, la
 * photo, l'étiquette du porteur. Les proportions viennent de la largeur —
 * c'est ce qui la rend identique à toutes les tailles.
 */
export default function SlabCard({ entry }) {
  const { pet } = entry;

  return (
    <div className="rounded-[5.7%] border border-white/10 bg-shell/75 p-[3.57%] shadow-2xl shadow-black/40">
      <ContestLabel entry={entry} />

      <div className="my-[2.86%] aspect-square overflow-hidden rounded-lg border border-black/30 bg-sheet">
        {pet.photoUrl && (
          <img
            src={pet.photoUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <BearerLabel pet={pet} />
    </div>
  );
}

function ContestLabel({ entry }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg bg-linear-to-r px-3 py-2 text-white ${MEDAL[entry.rank]}`}
    >
      <img src="/ic_logo.png" alt="" className="h-6 w-6 shrink-0 invert" />

      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-bold leading-tight">{entry.theme}</p>
        <p className="truncate text-xs opacity-80">{period(entry.startAt, entry.endAt)}</p>

        <div className="mt-1 flex flex-wrap items-center gap-x-3 text-xs">
          <Info icon={<Trophy />} value={registry(entry.number)} />
          <Info icon={<Paw />} value={entry.counts.participants} />
          <Info icon={<Gavel />} value={entry.counts.judges} />
        </div>
      </div>

      <Rank rank={entry.rank} />
    </div>
  );
}

function BearerLabel({ pet }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-linear-to-r from-identity-start to-identity-end px-3 py-2 text-white">
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-bold leading-tight">
          {pet.name}
          {pet.sex && <span className="ml-1 opacity-80">{pet.sex === 'MALE' ? '♂' : '♀'}</span>}
        </p>
        {pet.breed && <p className="truncate text-xs opacity-70">{pet.breed}</p>}

        <div className="mt-1 flex flex-wrap items-center gap-x-3 text-xs">
          <Info icon={<Paw />} value={registry(pet.number)} />
          <Info icon={<Trophy />} value={pet.stats.contests} />
          <Medal className="from-gold-start to-gold-end" count={pet.stats.gold} />
          <Medal className="from-silver-start to-silver-end" count={pet.stats.silver} />
          <Medal className="from-bronze-start to-bronze-end" count={pet.stats.bronze} />
        </div>
      </div>

      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-lg">
        {pet.level}
      </span>
    </div>
  );
}

function Info({ icon, value }) {
  return (
    <span className="flex items-center gap-1 whitespace-nowrap">
      {icon}
      {value}
    </span>
  );
}

function Medal({ className, count }) {
  if (!count) return null;

  return (
    <span className="flex items-center gap-1">
      <span className={`size-3 rounded-full bg-linear-to-br ${className}`} />
      {count}
    </span>
  );
}

/** L'ordinal est en exposant : c'est le nombre qu'on lit, pas la terminaison. */
function Rank({ rank }) {
  const text = ordinal(rank);
  const number = text.replace(/\D/g, '');

  return (
    <span className="shrink-0 text-3xl font-medium leading-none tracking-tight">
      {number}
      <sup className="text-base">{text.slice(number.length)}</sup>
    </span>
  );
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Trophy() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" {...stroke}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M12 14v4M9 20h6" />
    </svg>
  );
}

function Paw() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="currentColor">
      <ellipse cx="7" cy="9" rx="2" ry="2.6" />
      <ellipse cx="12" cy="7.5" rx="2" ry="2.8" />
      <ellipse cx="17" cy="9" rx="2" ry="2.6" />
      <path d="M12 12c2.8 0 5 2 5 4.2S14.8 20 12 20s-5-1.6-5-3.8S9.2 12 12 12z" />
    </svg>
  );
}

function Gavel() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" {...stroke}>
      <path d="m4 20 7-7M9.5 8.5l6 6M13 5l6 6M11.5 6.5l6 6M4.5 19.5h6" />
    </svg>
  );
}
