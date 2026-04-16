export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-6 bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <span className="text-2xl">🐾</span>
                <span className="text-xl font-bold tracking-tight text-gray-900">PetMatch</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                <a href="#" className="hover:text-orange-500 transition">Accueil</a>
                <a href="#concours" className="hover:text-orange-500 transition">Concours</a>
                <a href="#download" className="hover:text-orange-500 transition">Télécharger</a>
            </div>
            <a href="#download" className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition">
                Installer l'app
            </a>
        </nav>
    );
}