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
    </main>
  );
}
