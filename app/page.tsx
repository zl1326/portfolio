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
            <a href="#apropos" className="text-sm text-muted hover:text-text">À propos</a>
            <a href="#parcours" className="text-sm text-muted hover:text-text">Parcours</a>
            <a href="#projets" className="text-sm text-muted hover:text-text">Projets</a>
            <a href="#competences" className="text-sm text-muted hover:text-text">Compétences</a>
            <a href="#veille" className="text-sm text-muted hover:text-text">Veille</a>
          </nav>
          <a href="#contact" className="clip-corner-sm border border-line px-4 py-2 font-mono text-xs hover:border-accent">Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1000px] px-8 pt-28 pb-14 text-center">
        <div className="mb-7 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wide text-muted">
          <span className="h-px w-4 bg-steel" />
          Étudiant en informatique - Systèmes et sécurité
          <span className="h-px w-4 bg-steel" />
        </div>
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Étudiant en informatique,
          <br />
          <span className="font-normal text-muted">orienté systèmes et sécurité.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[500px] text-base leading-relaxed text-muted">
          L2 Informatique à l'Université Paris 8, dans le cadre d'une formation visant, sur le long terme, une carrière en cybersécurité.
        </p>
        <div className="mt-9 flex justify-center gap-3.5">
          <a href="/cv.pdf" className="clip-corner bg-text px-7 py-3.5 font-semibold text-bg">Télécharger le CV</a>
          <a href="#projets" className="clip-corner border border-line px-7 py-3.5 font-semibold hover:border-steel">Voir les projets</a>
        </div>
      </section>

      {/* A PROPOS */}
      <section id="apropos" className="border-t border-line px-8 py-20">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-11 flex items-center gap-3.5">
            <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
            <h2 className="font-display text-xl font-bold">À propos</h2>
            <span className="h-px flex-1 bg-line" />
          </div>

          <p className="max-w-[720px] text-base leading-relaxed text-muted">
            Je suis étudiant en informatique en Île-de-France, en L2 après avoir validé un BTS SIO option SISR. Mon intérêt pour la cybersécurité est né d'une expérience concrète, car en construisant et en dépannant mes propres machines, j'ai appris à chercher les causes profondes des problèmes plutôt que de me contenter de solutions superficielles. C'est cette même approche que j'applique à mes projets, avec l'ambition, à terme, de devenir responsable de la sécurité des systèmes d'information.
          </p>
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

          <p className="mb-10 whitespace-nowrap text-sm leading-relaxed text-muted">
            Chaque étape de ce parcours a renforcé mon orientation vers la sécurité informatique.
          </p>

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
                <div className="mt-1.5 text-base font-semibold">Terminale STMG, spécialité SIG</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">CNED · Validé</div>
              </div>
            </div>

            <div className="relative flex gap-8 pb-14 pl-9">
              <span className="absolute left-0 top-1.5 h-[17px] w-[17px] rotate-45 border-2 border-steel bg-bg" />
              <div>
                <div className="font-display text-2xl font-bold text-text">2023 — 2025</div>
                <div className="mt-1.5 text-base font-semibold">BTS SIO, option SISR</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">Validé</div>
              </div>
            </div>

            <div className="relative flex gap-8 pb-14 pl-9">
              <span className="absolute left-[-3px] top-0 h-[23px] w-[23px] rotate-45 border-2 border-accent bg-accent shadow-[0_0_20px_rgba(168,173,180,0.5)]" />
              <div>
                <div className="font-display text-3xl font-bold text-accent">2025 — 2026</div>
                <div className="mt-1.5 text-lg font-semibold">L2 Informatique — IED, Université Paris 8</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-accent">En cours</div>
              </div>
            </div>

            <div className="relative flex gap-8 pl-9 opacity-60">
              <span className="absolute left-0 top-1.5 h-[17px] w-[17px] rotate-45 border-2 border-dashed border-line bg-bg" />
              <div>
                <div className="font-display text-2xl font-bold text-muted">Prochaine étape</div>
                <div className="mt-1.5 text-base font-semibold text-muted">L3 Informatique</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">À venir</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="border-t border-line px-8 py-20">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-11 flex items-center gap-3.5">
            <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
            <h2 className="font-display text-xl font-bold">Projets</h2>
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-[11px] text-muted">github.com/zl1326</span>
          </div>

          <div className="clip-corner border border-line bg-panel p-7">
            <div className="font-mono text-[10px] uppercase tracking-wide text-accent">Sécurité</div>
            <h3 className="mt-3 font-display text-xl font-bold">Log Sentinel</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Outil Python d'analyse de logs et de détection d'intrusion. Il parse des logs SSH, Apache et pare-feu, applique des règles de détection (bruteforce, scan de ports, user-agents suspects, scan de chemins) et affiche les alertes sur un dashboard en temps réel.
            </p>

            <div className="mt-5 flex gap-6 font-mono text-xs">
              <a href="https://github.com/zl1326/log-sentinel" target="_blank" rel="noopener noreferrer" className="border-b border-line pb-0.5 hover:border-accent hover:text-accent">Code source</a>
            </div>

            <details className="group mt-6 border-t border-line pt-5">
              <summary className="flex cursor-pointer list-none items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted hover:text-text">
                <span className="inline-block transition-transform group-open:rotate-90">▸</span>
                Lire le rapport du projet
              </summary>
              <div className="mt-4 clip-corner-sm border border-line">
                <iframe src="/pdf/log-sentinel-rapport.pdf" className="h-[900px] w-full border-none" title="Rapport Log Sentinel" />
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
