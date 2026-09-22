import SlabCard from './SlabCard.jsx';

/** Le demi-tour se regarde : sur un écran, il a la place d'être ample. */
export const FlipMillis = 1200;

/**
 * Deux faces qui existent en permanence, et le navigateur cache celle qui
 * tourne le dos : pas de milieu d'animation à guetter, jamais de texte en
 * miroir. Le nombre de demi-tours vient du dehors — les trois cartes du
 * podium se retournent ensemble.
 */
export default function FlipCard({ front, back, turns }) {
  return (
    <div className="[perspective:1600px]">
      <div
        className="relative transition-transform ease-in-out [transform-style:preserve-3d]"
        style={{
          transform: `rotateY(${turns * 180}deg)`,
          transitionDuration: `${FlipMillis}ms`,
        }}
      >
        <div className="[backface-visibility:hidden]">
          <SlabCard entry={front} />
        </div>

        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <SlabCard entry={back} />
        </div>
      </div>
    </div>
  );
}
