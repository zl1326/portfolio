export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2.5 font-display font-semibold text-sm">
            <span className="h-2 w-2 bg-accent clip-corner-sm" />
            Zakariya Laidani
          </div>
          <nav className="hidden gap-8 sm:flex">
            <a href="#parcours" className="text-sm text-muted hover:text-text">Parcours</a>
            <a href="#projets" className="text-sm text-muted hover:text-text">Projets</a>
            <a href="#competences" className="text-sm text-muted hover:text-text">Competences</a>
            <a href="#veille" className="text-sm text-muted hover:text-text">Veille</a>
          </nav>
          <a href="#contact" className="clip-corner-sm border border-line px-4 py-2 font-mono text-xs hover:border-accent">Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1000px] px-8 pt-28 pb-14 text-center">
        <div className="mb-7 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wide text-muted">
          <span className="h-px w-4 bg-steel" />
          Etudiant en informatique - Systemes et securite
          <span className="h-px w-4 bg-steel" />
        </div>
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Etudiant en informatique,
          <br />
          <span className="font-normal text-muted">oriente systemes et securite.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[500px] text-base leading-relaxed text-muted">
          L2 Informatique a l'Universite Paris 8, dans le cadre d'une formation visant, sur le long terme, une carriere en cybersecurite.
        </p>
        <div className="mt-9 flex justify-center gap-3.5">
          <a href="/cv.pdf" className="clip-corner bg-text px-7 py-3.5 font-semibold text-bg">Telecharger le CV</a>
          <a href="#projets" className="clip-corner border border-line px-7 py-3.5 font-semibold hover:border-steel">Voir les projets</a>
        </div>
      </section>

      {/* PARCOURS */}
      <section id="parcours" className="border-t border-line px-8 py-20">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-4 flex items-center gap-3.5">
            <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
            <h2 className="font-display text-xl font-bold">Parcours</h2>
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-[11px] text-muted">03 / 04</span>
          </div>

          <div className="mb-16 flex gap-1.5">
            <span className="h-[3px] flex-1 bg-steel" />
            <span className="h-[3px] flex-1 bg-steel" />
            <span className="h-[3px] flex-1 bg-accent" />
            <span className="h-[3px] flex-1 bg-line" />
          </div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-steel via-steel to-transparent" />

            <div className="relative flex gap-8 pb-14 pl-9">
              <span className="absolute left-0 top-1.5 h-[17px] w-[17px] rotate-45 border-2 border-steel bg-bg" />
              <div>
                <div className="font-display text-2xl font-bold text-text">2022 — 2023</div>
                <div className="mt-1.5 text-base font-semibold">Terminale STMG, specialite SIG</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">CNED · Valide</div>
              </div>
            </div>

            <div className="relative flex gap-8 pb-14 pl-9">
              <span className="absolute left-0 top-1.5 h-[17px] w-[17px] rotate-45 border-2 border-steel bg-bg" />
              <div>
                <div className="font-display text-2xl font-bold text-text">2023 — 2025</div>
                <div className="mt-1.5 text-base font-semibold">BTS SIO, option SISR</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">Valide</div>
              </div>
            </div>

            <div className="relative flex gap-8 pb-14 pl-9">
              <span className="absolute left-[-3px] top-0 h-[23px] w-[23px] rotate-45 border-2 border-accent bg-accent shadow-[0_0_20px_rgba(168,173,180,0.5)]" />
              <div>
                <div className="font-display text-3xl font-bold text-accent">2025 — 2026</div>
                <div className="mt-1.5 text-lg font-semibold">L2 Informatique — IED, Universite Paris 8</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-accent">En cours</div>
              </div>
            </div>

            <div className="relative flex gap-8 pl-9 opacity-60">
              <span className="absolute left-0 top-1.5 h-[17px] w-[17px] rotate-45 border-2 border-dashed border-line bg-bg" />
              <div>
                <div className="font-display text-2xl font-bold text-muted">Prochaine etape</div>
                <div className="mt-1.5 text-base font-semibold text-muted">L3 Informatique</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">A venir</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
