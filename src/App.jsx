import React from 'react';

const App = () => {
    return (
        <div className="min-h-screen">
            {/* Navbar Minimaliste */}
            <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-3 group">
                    <div className="w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-105">
                        <img
                            src="/src/assets/ic_logo.png"
                            className="w-full h-full object-contain text-primary"
                            style={{ filter: 'drop-shadow(0px 4px 10px rgba(142, 77, 48, 0.2))' }}
                            alt="Logo Pet Match"
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter text-primary leading-none">PET MATCH</span>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase opacity-70">Concours Élite</span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Colonne Gauche : Texte & Actions */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-wider">
                        🎁 Concours 100% Gratuits
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                        Faites entrer votre compagnon <br/>
                        <span className="text-primary italic text-6xl md:text-8xl">dans la légende.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Participez gratuitement aux plus grands concours canins numériques.
                        Faites voter la communauté, grimpez au classement et
                        <span className="text-primary font-bold"> gagnez des cartes cadeaux </span>
                        et des récompenses exclusives !
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center lg:justify-start">
                        {/* Bouton Android */}
                        <a href="#"
                           className="group relative flex items-center gap-4 bg-primary text-on-primary px-8 py-5 rounded-[2rem] shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                            <div className="text-2xl">🤖</div>
                            <div className="text-left">
                                <p className="text-[10px] uppercase opacity-80 font-bold">Installer maintenant</p>
                                <p className="text-lg font-black">Google Play</p>
                            </div>
                        </a>

                        {/* QR Code Placeholder stylisé */}
                        <div className="hidden md:flex items-center gap-4 p-4 bg-surface-container rounded-[2rem] border border-primary/10 shadow-sm">
                            <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-inner flex items-center justify-center">
                                {/* Ici tu mettras ton vrai QR code généré */}
                                <div className="w-full h-full bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-[10px] text-gray-400 font-bold">QR CODE</div>
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-black text-primary leading-tight">SCANNEZ &</p>
                                <p className="text-[10px] font-black text-secondary leading-tight uppercase tracking-tighter">PARTICIPEZ</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative pt-10 lg:pt-0 group px-4">
                    {/* Effet de Halo lumineux central */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[120px] -z-10"></div>

                    {/* --- ÉLÉMENTS ÉCLATÉS AUTOUR DE L'IMAGE --- */}

                    {/* 1. Carte Or 50€ (En haut à droite, dépasse de l'image) */}
                    <div className="absolute -top-10 -right-4 z-30 w-52 h-32 bg-gradient-to-br from-[#D4AF37] via-[#8E4D30] to-[#D4AF37] rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-4 border-white p-5 flex flex-col justify-between animate-float pointer-events-auto transition-transform hover:scale-110">
                        <div className="flex justify-between items-start text-white">
                            <span className="text-2xl">✨</span>
                            <span className="text-[10px] font-black uppercase tracking-widest">Jackpot</span>
                        </div>
                        <p className="text-4xl font-black text-white leading-none tracking-tighter text-right">50€</p>
                    </div>

                    {/* 2. Carte Blanche 25€ (En haut à gauche, flottante) */}
                    <div className="absolute top-10 -left-12 z-20 w-44 h-28 bg-white rounded-[1.8rem] shadow-xl border border-gray-100 p-4 flex flex-col justify-between animate-float-alt pointer-events-auto hover:rotate-0 transition-all">
                        <div className="flex justify-between items-center text-primary">
                            <span className="font-black text-[10px]">PET MATCH</span>
                            <span className="text-lg">💳</span>
                        </div>
                        <p className="text-3xl font-black text-on-background leading-none text-right">25€</p>
                    </div>

                    {/* 3. Petit Ticket 10€ (En bas à droite, semi-caché) */}
                    <div className="absolute -bottom-6 -right-8 z-30 w-36 h-20 bg-primary-container rounded-2xl shadow-lg border-2 border-white rotate-12 p-3 flex flex-col justify-center items-center animate-float-slow pointer-events-auto">
                        <p className="text-[10px] font-bold text-on-primary-container uppercase">Bonus</p>
                        <p className="text-2xl font-black text-primary leading-none">10€</p>
                    </div>

                    {/* 4. Badge "CASH" (En bas à gauche, très dynamique) */}
                    <div className="absolute bottom-12 -left-8 z-30 bg-[#FFD700] text-black px-5 py-2 rounded-full font-black text-xs shadow-[0_10px_20px_rgba(255,215,0,0.4)] border-2 border-white rotate-[-20deg] animate-bounce">
                        CASH À GAGNER 💰
                    </div>

                    {/* 5. Étoiles décoratives dispersées */}
                    <div className="absolute top-1/4 right-0 text-2xl animate-pulse opacity-50">⭐</div>
                    <div className="absolute bottom-1/4 left-0 text-xl animate-pulse delay-500 opacity-40">⭐</div>

                    {/* --- IMAGE DU CHIEN (LE CENTRE DE L'ATTENTION) --- */}
                    <div className="relative rounded-[4.5rem] overflow-hidden border-[14px] border-white shadow-2xl bg-surface-container aspect-[4/5] transform transition-all duration-700 group-hover:rotate-1">
                        <img
                            src="/src/assets/hero-dog.jpg"
                            alt="Chien d'exception"
                            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                        />

                        {/* Overlay Infos concours */}
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center border border-white/30 text-2xl shadow-xl">
                                    🏆
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-primary-container uppercase tracking-widest mb-0.5">Concours National</p>
                                    <h3 className="text-xl font-black text-white leading-none">Inscrivez-le maintenant</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-32 py-16 border-t border-outline/5 bg-surface-container text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-center gap-10 mb-8">
                        <a href="/privacy" className="text-sm font-black text-primary uppercase tracking-widest hover:opacity-70 transition">Confidentialité</a>
                        <a href="/terms" className="text-sm font-black text-primary uppercase tracking-widest hover:opacity-70 transition">Règlement</a>
                    </div>
                    <p className="text-xs text-secondary font-medium tracking-tight">
                        © 2026 Pet Match — Faites de votre chien une icône. <br/>
                        Tous les concours sont sans obligation d'achat.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;