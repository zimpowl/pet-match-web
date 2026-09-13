import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Legal from './pages/Legal.jsx';
import { API_BASE } from './config.js';
import { charter } from './legal/charter.js';
import { privacy } from './legal/privacy.js';
import { terms } from './legal/terms.js';

const DOCUMENTS = [charter, privacy, terms];

export default function App() {
  const entries = usePodiums();

  return (
    <Routes>
      <Route path="/" element={<Home entries={entries} />} />

      {DOCUMENTS.map((document) => (
        <Route
          key={document.slug}
          path={`/${document.slug}`}
          element={<Legal document={document} />}
        />
      ))}

      {/* Les anciennes adresses restent valides : elles sont dans les magasins. */}
      <Route path="/privacy" element={<Navigate to="/confidentialite" replace />} />
      <Route path="/assistance" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

/** La vitrine ne conditionne rien : sans podiums, la page tient quand même. */
function usePodiums() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_BASE}/getPodiumsHttp`)
      .then((response) => response.json())
      .then((body) => {
        if (!cancelled) setEntries(body.entries ?? []);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return entries;
}
