const MEDAL = {
  1: 'from-gold-start to-gold-end text-white',
  2: 'from-silver-start to-silver-end text-[#111]',
  3: 'from-bronze-start to-bronze-end text-white',
};

const ordinal = (rank) => (rank === 1 ? '1er' : `${rank}e`);

/**
 * La vignette d'une slab : son boîtier, son étiquette, sa photo. C'est **la
 * hauteur** qui la dimensionne — la photo est carrée, la largeur suit. Une
 * largeur imposée écraserait l'un ou l'autre.
 */
export default function Slab({ entry }) {
  return (
    <div
      className="flex h-full shrink-0 flex-col rounded-xl border border-white/10 bg-shell/75 p-1.5"
      style={{ width: 'var(--tile)' }}
    >
      <div
        className={`flex items-center gap-2 rounded-md bg-linear-to-r px-2 py-1 ${MEDAL[entry.rank]}`}
      >
        <span className="flex-1 truncate text-xs font-semibold">{entry.theme}</span>
        <span className="shrink-0 text-xs">{ordinal(entry.rank)}</span>
      </div>

      <div className="mt-1.5 aspect-square w-full overflow-hidden rounded-lg border border-black/20 bg-sheet">
        {entry.pet.photoUrl && (
          <img src={entry.pet.photoUrl} alt="" loading="lazy" className="h-full w-full object-cover" />
        )}
      </div>
    </div>
  );
}
