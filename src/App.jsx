import React from 'react';

const PetCard = ({ image, rotation }) => (
    <div
        className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105 duration-300 w-full max-w-[300px] mx-auto"
        style={{ transform: `rotate(${rotation}deg)` }}
    >
        <div className="aspect-[5/6]">
            <img
                src={image}
                alt="Pet"
                className="w-full h-full object-cover"
                // Le petit plus : rendering smooth pour éviter l'aliasing sur les bords
                style={{ imageRendering: 'auto' }}
                onError={(e) => { e.target.src = "https://via.placeholder.com/500x600?text=Pet+Photo"; }}
            />
        </div>
    </div>
);

const App = () => {
    return (
        <div className="min-h-screen relative flex flex-col items-center overflow-x-hidden">
            {/* Background Pattern - Simplified without rotations */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
                <div
                    className="absolute inset-0 bg-[url('/ic_logo.png')] bg-repeat"
                    style={{backgroundSize: '80px 80px'}}
                ></div>
            </div>

            {/* Navigation */}
            <nav className="w-full max-w-7xl px-6 py-12 flex justify-center items-center z-10">
                <div className="flex flex-col items-center gap-2">
                    <img src="/ic_logo.png" className="w-20 h-20 object-contain" alt="Logo"/>
                    <span className="text-2xl font-black tracking-tighter text-on-background">PetMatch</span>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl px-6 py-12 flex flex-col items-center text-center z-10">
                <h1 className="text-5xl md:text-8xl font-black text-on-background leading-[0.9] tracking-tighter mb-8">
                    Votre compagnon mérite <br/>
                    <span className="text-primary italic">la première place</span>
                </h1>

                <p className="text-lg md:text-xl text-secondary max-w-xl mb-12 font-medium leading-relaxed">
                    Participez aux concours, gagnez des cartes cadeaux et faites entrer votre animal dans la légende.
                    <br/>L'aventure PetMatch commence ici.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-24 w-full justify-center items-center">
                    {/* Play Store */}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.zimpo.petmatch"
                        className="flex items-center gap-5 bg-on-background text-background px-10 py-5 rounded-[2rem] hover:scale-105 transition-all shadow-xl group"
                    >
                        <div className="text-3xl">🤖</div>
                        <div className="text-left">
                            <p className="text-[10px] uppercase font-black opacity-60 tracking-widest">Disponible
                                sur</p>
                            <p className="text-xl font-black">Google Play</p>
                        </div>
                    </a>

                    {/* App Store - Coming Soon */}
                    <div
                        className="flex items-center gap-5 bg-surface-container-high text-secondary/50 px-10 py-5 rounded-[2rem] border-2 border-dashed border-outline/20">
                        <div className="text-3xl grayscale opacity-30">🍎</div>
                        <div className="text-left">
                            <p className="text-[10px] uppercase font-black opacity-60 tracking-widest">Bientôt sur
                                l'</p>
                            <p className="text-xl font-black">App Store</p>
                        </div>
                    </div>
                </div>

                {/* Pet Cards Showcase - Clean Photos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 w-full max-w-5xl px-4 py-8 relative">
                    {/* Decorative halo behind cards */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-primary/5 blur-[100px] -z-10"></div>

                    <PetCard image="/ic_complicity.jpg" rotation={-4}/>
                    <PetCard image="/ic_beauty.jpg" rotation={2}/>
                    <PetCard image="/ic_costume.jpg" rotation={-2}/>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-12 text-center z-10">
                <div className="flex justify-center gap-10 mb-6">
                    <a href="#"
                       className="text-xs font-black uppercase tracking-widest text-primary hover:opacity-50 transition">Confidentialité</a>
                    <a href="#"
                       className="text-xs font-black uppercase tracking-widest text-primary hover:opacity-50 transition">Règlement</a>
                </div>
                <p className="text-[10px] font-bold text-outline uppercase tracking-[0.2em]">© 2026 PetMatch — Tous
                    droits réservés</p>
            </footer>
        </div>
    );
};

export default App;