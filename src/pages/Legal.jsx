import { Link, useSearchParams } from 'react-router-dom';

/** Le gras se marque `**ainsi**` dans les textes — la seule syntaxe admise. */
function strong(text) {
  return text.split('**').map((part, index) =>
    index % 2 === 1 ? <strong key={index} className="font-semibold text-ink">{part}</strong> : part,
  );
}

export default function Legal({ document }) {
  const [params] = useSearchParams();
  const embedded = params.get('app') === '1';

  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-6 py-12">
      {!embedded && (
        <Link to="/" className="text-sm text-ink-faint underline underline-offset-4 hover:text-ink">
          ← PetMatch
        </Link>
      )}

      <h1 className={`text-3xl font-bold tracking-tight ${embedded ? '' : 'mt-8'}`}>
        {document.title}
      </h1>
      <p className="mt-1 text-sm text-ink-faint">Dernière mise à jour : {document.updated}</p>
      <p className="mt-6 text-ink-muted">{strong(document.intro)}</p>

      {document.sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="border-b border-rule pb-2 text-xs font-semibold tracking-[0.12em] text-ink uppercase">
            {section.title}
          </h2>

          <div className="mt-4 space-y-3 text-ink-muted">
            {section.blocks.map((block, index) =>
              block.type === 'li' ? (
                <p key={index} className="flex gap-3 pl-3">
                  <span className="text-ink-faint">•</span>
                  <span>{strong(block.text)}</span>
                </p>
              ) : (
                <p key={index}>{strong(block.text)}</p>
              ),
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
