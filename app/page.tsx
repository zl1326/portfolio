"use client";

import { useState, useEffect } from "react";
import { SiPython, SiPhp, SiJavascript, SiHtml5, SiCss, SiLinux, SiVirtualbox, SiMysql, SiMariadb } from "react-icons/si";
import { Cpu, Award, Coffee, Database, Network, Boxes, HardDrive, FileSearch, ShieldAlert, Radar, X, Mail, Phone, GitBranch, Zap, Code2, ExternalLink, FileCode, Download, User, History, FolderGit2, SlidersHorizontal } from "lucide-react";
import { supabase } from "@/lib/supabase";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function VercelIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  );
}

type Skill = {
  icon: React.ReactNode;
  label: string;
  type: string;
  definition: string;
};

type Article = {
  id: number;
  title: string;
  url: string;
  source: string;
  published_at: string | null;
  fetched_at: string;
};

const navItems = [
  { href: "#apropos", label: "À propos", icon: User },
  { href: "#parcours", label: "Parcours", icon: History },
  { href: "#projets", label: "Projets", icon: FolderGit2 },
  { href: "#competences", label: "Compétences", icon: SlidersHorizontal },
    { href: "#certifications", label: "Certifications", icon: Award },
  { href: "#veille", label: "Veille", icon: Radar },
  { href: "#contact", label: "Contact", icon: Mail },
];

const ITEM_H = 44;
const ITEM_GAP = 6;
const STEP = ITEM_H + ITEM_GAP;

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <aside
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { setOpen(false); setHoverIndex(null); }}
      className={"fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col border border-line bg-bg/85 py-2.5 backdrop-blur-md transition-all duration-300 ease-out sm:flex " + (open ? "w-52 px-2.5" : "w-12 px-1.5")}
      style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
    >
      <div className="relative flex flex-col" style={{ gap: ITEM_GAP }}>
        {hoverIndex !== null && (
          <div
            className="absolute left-0 w-full bg-panel transition-all duration-300 ease-out"
            style={{
              height: ITEM_H,
              top: hoverIndex * STEP,
              clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
            }}
          />
        )}

        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <a key={item.href} href={item.href} onMouseEnter={() => setHoverIndex(i)} className="relative z-10 flex items-center gap-3 overflow-hidden text-accent transition-colors duration-200 hover:text-text" style={{ height: ITEM_H }}>
              <span className="flex w-9 flex-shrink-0 items-center justify-center">
                <Icon size={17} />
              </span>
              <span className={"overflow-hidden whitespace-nowrap text-sm transition-all duration-300 " + (open ? "max-w-[140px] opacity-100" : "max-w-0 opacity-0")}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}

const skillsLangages: Skill[] = [
  { icon: <SiPython />, label: "Python", type: "Langage interprété", definition: "Langage de programmation interprété et polyvalent, orienté objet et impératif, utilisé aussi bien pour l'automatisation que l'analyse de données." },
  { icon: <Cpu size={24} />, label: "C", type: "Langage compilé, bas niveau", definition: "Langage de programmation compilé, proche du matériel, à la base de nombreux systèmes d'exploitation et outils systèmes." },
  { icon: <Coffee size={24} />, label: "Java", type: "Langage compilé, orienté objet", definition: "Langage de programmation orienté objet, compilé vers une machine virtuelle (JVM), largement utilisé en entreprise." },
  { icon: <Database size={24} />, label: "SQL", type: "Langage de requête", definition: "Langage utilisé pour interroger, manipuler et structurer les données dans une base de données relationnelle." },
  { icon: <SiPhp />, label: "PHP", type: "Langage interprété, web serveur", definition: "Langage de programmation interprété, principalement utilisé pour développer la partie serveur des sites web." },
  { icon: <SiJavascript />, label: "JavaScript", type: "Langage interprété, web", definition: "Langage de programmation interprété, utilisé pour rendre les pages web interactives côté navigateur et côté serveur." },
  { icon: <SiHtml5 />, label: "HTML5", type: "Langage de balisage", definition: "Langage de balisage utilisé pour structurer le contenu des pages web." },
  { icon: <SiCss />, label: "CSS3", type: "Langage de style", definition: "Langage utilisé pour mettre en forme et styliser l'apparence des pages web." },
];

const skillsOutils: Skill[] = [
  { icon: <SiLinux />, label: "Linux", type: "Système d'exploitation", definition: "Système d'exploitation open source basé sur le noyau Linux, largement utilisé sur les serveurs et en cybersécurité." },
  { icon: <Network size={24} />, label: "Active Directory", type: "Service d'annuaire", definition: "Service d'annuaire développé par Microsoft, utilisé pour gérer les utilisateurs et les ressources d'un réseau d'entreprise." },
  { icon: <SiVirtualbox />, label: "VirtualBox", type: "Logiciel de virtualisation", definition: "Logiciel de virtualisation permettant d'exécuter plusieurs systèmes d'exploitation sur une même machine physique." },
  { icon: <Boxes size={24} />, label: "GLPI", type: "Gestion de parc informatique", definition: "Logiciel open source de gestion de parc informatique et de support technique (tickets, inventaire)." },
  { icon: <SiMysql />, label: "MySQL", type: "Système de gestion de base de données", definition: "Système de gestion de base de données relationnelle open source, très utilisé pour les applications web." },
  { icon: <SiMariadb />, label: "MariaDB", type: "Système de gestion de base de données", definition: "Système de gestion de base de données relationnelle, dérivé de MySQL, entièrement open source." },
  { icon: <HardDrive size={24} />, label: "OCS Inventory", type: "Inventaire informatique", definition: "Logiciel open source dédié à l'inventaire automatisé du matériel et des logiciels d'un parc informatique." },
];

const skillsDeploiement: Skill[] = [
  { icon: <FileCode size={24} />, label: "VS Code", type: "Éditeur de code", definition: "Éditeur de code source léger et extensible, utilisé au quotidien pour l'ensemble des projets de développement." },
  { icon: <GitBranch size={24} />, label: "Git", type: "Outil de versioning", definition: "Système de contrôle de version distribué, utilisé pour suivre l'historique des modifications d'un projet." },
  { icon: <GithubIcon size={24} />, label: "GitHub", type: "Plateforme d'hébergement de code", definition: "Plateforme d'hébergement de dépôts Git, utilisée pour stocker, partager et collaborer sur du code source." },
  { icon: <VercelIcon size={24} />, label: "Vercel", type: "Plateforme de déploiement", definition: "Plateforme d'hébergement et de déploiement continu, utilisée ici pour mettre ce portfolio en ligne." },
  { icon: <Code2 size={24} />, label: "Next.js", type: "Framework web", definition: "Framework React permettant de construire des sites et applications web modernes, avec rendu côté serveur." },
  { icon: <Zap size={24} />, label: "Supabase", type: "Backend as a Service", definition: "Plateforme open source fournissant une base de données PostgreSQL et des services backend prêts à l'emploi." },
];

const skillsSecurite: Skill[] = [
  { icon: <FileSearch size={24} />, label: "Analyse de logs", type: "Pratique de sécurité", definition: "Pratique consistant à examiner les journaux système pour détecter des anomalies ou des incidents de sécurité." },
  { icon: <ShieldAlert size={24} />, label: "Détection d'intrusion", type: "Pratique de sécurité", definition: "Ensemble de techniques visant à repérer les tentatives d'accès non autorisé à un système ou un réseau." },
  { icon: <Radar size={24} />, label: "Veille technologique", type: "Pratique professionnelle", definition: "Suivi régulier de l'actualité et des évolutions technologiques dans un domaine donné, ici la cybersécurité." },
];

function SkillTile({ skill, onSelect }: { skill: Skill; onSelect: (s: Skill) => void }) {
  return (
    <button onClick={() => onSelect(skill)} className="clip-corner-sm flex flex-col items-center gap-3 border border-line bg-panel px-4 py-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_6px_16px_rgba(127,168,201,0.12)]">
      <span className="text-2xl text-accent">{skill.icon}</span>
      <span className="text-xs text-muted">{skill.label}</span>
    </button>
  );
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:border-accent">
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-wide text-accent">{article.source}</div>
        <div className="mt-1.5 truncate text-sm font-medium group-hover:text-accent">{article.title}</div>
      </div>
      <ExternalLink size={16} className="flex-shrink-0 text-muted group-hover:text-accent" />
    </a>
  );
}

function formatDateFr(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

type Certification = {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
  pdf: string;
};

const certifications: Certification[] = [
  {
    title: "EF SET English Certificate",
    issuer: "EF Standard English Test",
    date: "Octobre 2026",
    badge: "C1 Avancé · 62/100",
    description: "Test d'anglais standardisé évaluant la compréhension écrite et orale. Niveau global C1 sur l'échelle européenne du CECRL, avec un niveau C2 en lecture et B2 en écoute.",
    pdf: "/certificats/EF_SET_Certificate.pdf",
  },
  {
    title: "Developing Secure Software (LFD121)",
    issuer: "The Linux Foundation · OpenSSF",
    date: "Novembre 2026",
    badge: "Complétée",
    description: "Formation de la Linux Foundation et de l'Open Source Security Foundation consacrée aux bonnes pratiques pour concevoir, développer et vérifier des logiciels sécurisés.",
    pdf: "/certificats/LFD121.pdf",
  },
];

export default function Home() {
  const [selected, setSelected] = useState<Skill | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      const { data, error } = await supabase
        .from("veille_articles")
        .select("id, title, url, source, published_at, fetched_at")
        .order("published_at", { ascending: false })
        .limit(6);

      if (!error && data) {
        setArticles(data);
      }
      setLoadingArticles(false);
    }

    loadArticles();
  }, []);

  const lastUpdate = articles.length
    ? articles.reduce((latest, a) => (a.fetched_at > latest ? a.fetched_at : latest), articles[0].fetched_at)
    : null;

  return (
    <>
      <Sidebar />
      <main className="sm:pl-24">
        <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur-md sm:hidden">
          <div className="mx-auto flex max-w-[1000px] items-center justify-between px-8 py-6">
            <div className="flex items-center gap-2.5 font-display font-semibold text-sm text-accent">
              <span className="h-2 w-2 bg-accent clip-corner-sm" />
              Zakariya Laidani
            </div>
            <a href="#contact" className="clip-corner-sm border border-accent px-4 py-2 font-mono text-xs text-accent hover:bg-accent hover:text-bg">Contact</a>
          </div>
        </header>

        <section className="mx-auto max-w-[1000px] px-8 pt-16 pb-14 text-center sm:pt-28">
          <div className="mb-7 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wide text-accent">
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
            L3 Informatique à l'Université Paris 8, dans le cadre d'une formation visant, sur le long terme, une carrière en cybersécurité.
          </p>
          <div className="mt-9 flex justify-center gap-3.5">
            <a href="/cv.pdf" className="clip-corner bg-accent px-7 py-3.5 font-semibold text-bg">Télécharger le CV</a>
            <a href="#projets" className="clip-corner border border-line px-7 py-3.5 font-semibold hover:border-accent hover:text-accent">Voir les projets</a>
          </div>
        </section>

        <section id="apropos" className="border-t border-line px-8 py-20">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-11 flex items-center gap-3.5">
              <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
              <h2 className="font-display text-xl font-bold">À propos</h2>
              <span className="h-px flex-1 bg-line" />
            </div>

            <p className="max-w-[720px] text-base leading-relaxed text-muted">
              Je suis étudiant en informatique en Île-de-France, en L3 après avoir validé un BTS SIO option SISR et une L2. Mon intérêt pour la cybersécurité est né d'une expérience concrète, car en construisant et en dépannant mes propres machines, j'ai appris à chercher les causes profondes des problèmes plutôt que de me contenter de solutions superficielles. C'est cette même approche que j'applique à mes projets, avec l'ambition, à terme, de devenir responsable de la sécurité des systèmes d'information.
            </p>
          </div>
        </section>

        <section id="parcours" className="border-t border-line px-8 py-20">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-4 flex items-center gap-3.5">
              <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
              <h2 className="font-display text-xl font-bold">Parcours</h2>
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-[11px] text-muted">04 / 05</span>
            </div>

            <p className="mb-10 whitespace-nowrap text-sm leading-relaxed text-muted">
              Chaque étape de ce parcours a renforcé mon orientation vers la sécurité informatique.
            </p>

            <div className="mb-16 flex gap-1.5">
              <span className="h-[3px] flex-1 bg-accent" />
              <span className="h-[3px] flex-1 bg-accent" />
              <span className="h-[3px] flex-1 bg-accent" />
              <span className="h-[3px] flex-1 bg-accent" />
              <span className="h-[3px] flex-1 bg-line" />
            </div>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-accent via-steel to-transparent" />

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
                <span className="absolute left-0 top-1.5 h-[17px] w-[17px] rotate-45 border-2 border-steel bg-bg" />
                <div>
                  <div className="font-display text-2xl font-bold text-text">2025 — 2026</div>
                  <div className="mt-1.5 text-base font-semibold">L2 Informatique — IED, Université Paris 8</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">Validée</div>
                </div>
              </div>

              <div className="relative flex gap-8 pb-14 pl-9">
                <span className="absolute left-[-3px] top-0 h-[23px] w-[23px] rotate-45 border-2 border-accent bg-accent shadow-[0_0_20px_rgba(127,168,201,0.5)]" />
                <div>
                  <div className="font-display text-3xl font-bold text-accent">2026 — 2027</div>
                  <div className="mt-1.5 text-lg font-semibold">L3 Informatique</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-accent">En cours</div>
                </div>
              </div>

              <div className="relative flex gap-8 pl-9 opacity-60">
                <span className="absolute left-0 top-1.5 h-[17px] w-[17px] rotate-45 border-2 border-dashed border-line bg-bg" />
                <div>
                  <div className="font-display text-2xl font-bold text-muted">Ensuite</div>
                  <div className="mt-1.5 text-base font-semibold text-muted">Master en Cybersécurité</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">Prochaine étape</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projets" className="border-t border-line px-8 py-20">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-11 flex items-center gap-3.5">
              <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
              <h2 className="font-display text-xl font-bold">Projets</h2>
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-[11px] text-muted">github.com/zl1326</span>
            </div>

            <div className="flex flex-col gap-14">
              <div>
                <div className="mb-5 font-mono text-[11px] uppercase tracking-wide text-accent">Sécurité</div>
                <div className="flex flex-col gap-6">
                  <div className="clip-corner border border-line bg-panel p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_20px_rgba(127,168,201,0.12)]">
                    <h3 className="font-display text-xl font-bold">Log Sentinel</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      Outil Python d'analyse de logs et de détection d'intrusion. Il parse des logs SSH, Apache et pare-feu, applique des règles de détection (bruteforce, scan de ports, user-agents suspects, scan de chemins) et affiche les alertes sur un dashboard en temps réel.
                    </p>

                    <div className="mt-5 flex gap-6 font-mono text-xs">
                      <a href="https://github.com/zl1326/log-sentinel" target="_blank" rel="noopener noreferrer" className="border-b border-accent pb-0.5 text-accent hover:opacity-70">Code source</a>
                    </div>

                    <details className="group mt-6 border-t border-line pt-5">
                      <summary className="flex cursor-pointer list-none items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted hover:text-accent">
                        <span className="inline-block transition-transform group-open:rotate-90">▸</span>
                        Lire le rapport du projet
                      </summary>
                      <div className="mt-4 clip-corner-sm border border-line">
                        <iframe src="/pdf/log-sentinel-rapport.pdf" className="h-[900px] w-full border-none" title="Rapport Log Sentinel" />
                      </div>
                    </details>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-5 font-mono text-[11px] uppercase tracking-wide text-accent">Systèmes</div>
                <div className="flex flex-col gap-6">
                  <div className="clip-corner border border-line bg-panel p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_20px_rgba(127,168,201,0.12)]">
                    <h3 className="font-display text-xl font-bold">MinishellSE</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      Mini-shell développé en C dans le cadre du projet final du cours de Systèmes d'Exploitation (IED Paris 8). Il intègre les commandes internes moncd, monexit et exit, la gestion des redirections d'entrée-sortie, des pipes, de l'exécution en arrière-plan, ainsi que l'auto-complétion des noms de fichiers en bonus.
                    </p>

                    <div className="mt-5 flex gap-6 font-mono text-xs">
                      <a href="/downloads/MinishellSE.zip" download className="flex items-center gap-1.5 border-b border-accent pb-0.5 text-accent hover:opacity-70">
                        <Download size={13} />
                        Télécharger le projet
                      </a>
                    </div>

                    <details className="group mt-6 border-t border-line pt-5">
                      <summary className="flex cursor-pointer list-none items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted hover:text-accent">
                        <span className="inline-block transition-transform group-open:rotate-90">▸</span>
                        Lire le rapport du projet
                      </summary>
                      <div className="mt-4 clip-corner-sm border border-line">
                        <iframe src="/pdf/minishellse-rapport.pdf" className="h-[900px] w-full border-none" title="Rapport MinishellSE" />
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="competences" className="border-t border-line px-8 py-20">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-11 flex items-center gap-3.5">
              <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
              <h2 className="font-display text-xl font-bold">Compétences</h2>
              <span className="h-px flex-1 bg-line" />
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <div className="mb-4 font-mono text-[11px] uppercase tracking-wide text-accent">Langages</div>
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
                  {skillsLangages.map((s) => (
                    <SkillTile key={s.label} skill={s} onSelect={setSelected} />
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-4 font-mono text-[11px] uppercase tracking-wide text-accent">Outils &amp; systèmes</div>
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
                  {skillsOutils.map((s) => (
                    <SkillTile key={s.label} skill={s} onSelect={setSelected} />
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-4 font-mono text-[11px] uppercase tracking-wide text-accent">Outils de développement</div>
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
                  {skillsDeploiement.map((s) => (
                    <SkillTile key={s.label} skill={s} onSelect={setSelected} />
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-4 font-mono text-[11px] uppercase tracking-wide text-accent">Sécurité</div>
                <div className="grid grid-cols-3 gap-3">
                  {skillsSecurite.map((s) => (
                    <SkillTile key={s.label} skill={s} onSelect={setSelected} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
                <section id="certifications" className="border-t border-line px-8 py-20">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-11 flex items-center gap-3.5">
              <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
              <h2 className="font-display text-xl font-bold">Certifications</h2>
              <span className="h-px flex-1 bg-line" />
            </div>

                        <div className="grid items-start gap-6 sm:grid-cols-2">
              {certifications.map((c) => (
                <div key={c.title} className="clip-corner flex flex-col border border-line bg-panel p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_20px_rgba(127,168,201,0.12)]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-accent"><Award size={26} /></span>
                    <span className="font-mono text-[11px] uppercase tracking-wide text-accent">{c.date}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
                  <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-muted">{c.issuer}</div>
                  <span className="clip-corner-sm mt-4 inline-block self-start border border-accent px-3 py-1 font-mono text-[11px] text-accent">{c.badge}</span>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{c.description}</p>

                  <details className="group mt-6 border-t border-line pt-5">
                    <summary className="flex cursor-pointer list-none items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted hover:text-accent">
                      <span className="inline-block transition-transform group-open:rotate-90">▸</span>
                      Voir le certificat
                    </summary>
                    <div className="mt-4 clip-corner-sm border border-line">
                      <iframe src={c.pdf + "#view=FitH&toolbar=0"} className="h-[380px] w-full border-none" title={"Certificat " + c.title} />
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="veille" className="border-t border-line px-8 py-20">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-3 flex items-center gap-3.5">
              <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
              <h2 className="font-display text-xl font-bold">Veille technologique</h2>
              <span className="h-px flex-1 bg-line" />
            </div>

            {lastUpdate && (
              <div className="mb-9 font-mono text-[11px] uppercase tracking-wide text-accent">
                Dernière MAJ : {formatDateFr(lastUpdate)}
              </div>
            )}

            {loadingArticles ? (
              <p className="text-sm text-muted">Chargement des derniers articles...</p>
            ) : articles.length === 0 ? (
              <p className="text-sm text-muted">Aucun article disponible pour le moment.</p>
            ) : (
              <div className="flex flex-col">
                {articles.map((article) => (
                  <ArticleRow key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="border-t border-line px-8 py-20">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-11 flex items-center gap-3.5">
              <span className="h-2.5 w-2.5 flex-shrink-0 bg-accent clip-corner-sm" />
              <h2 className="font-display text-xl font-bold">Contact</h2>
              <span className="h-px flex-1 bg-line" />
            </div>

            <p className="mb-10 whitespace-nowrap text-base leading-relaxed text-muted">
              N&apos;hésitez pas à me contacter pour toute question, opportunité ou échange autour de mon profil.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href="mailto:laidani.zakariya1326@gmail.com" className="clip-corner-sm flex items-center gap-3 border border-line bg-panel px-6 py-6 transition-colors hover:border-accent">
                <Mail size={22} className="flex-shrink-0 text-accent" />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-wide text-muted">Email</div>
                  <div className="mt-1 break-all text-sm">laidani.zakariya1326@gmail.com</div>
                </div>
              </a>

              <a href="tel:+33744117699" className="clip-corner-sm flex items-center gap-3 border border-line bg-panel px-6 py-6 transition-colors hover:border-accent">
                <Phone size={22} className="flex-shrink-0 text-accent" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wide text-muted">Téléphone</div>
                  <div className="mt-1 text-sm">+33 7 44 11 76 99</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/zakariya-laidani-698b38427/" target="_blank" rel="noopener noreferrer" className="clip-corner-sm flex items-center gap-3 border border-line bg-panel px-6 py-6 transition-colors hover:border-accent">
                <span className="flex-shrink-0 text-accent"><LinkedinIcon size={22} /></span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wide text-muted">LinkedIn</div>
                  <div className="mt-1 text-sm">Voir le profil</div>
                </div>
              </a>

              <a href="https://github.com/zl1326" target="_blank" rel="noopener noreferrer" className="clip-corner-sm flex items-center gap-3 border border-line bg-panel px-6 py-6 transition-colors hover:border-accent">
                <span className="flex-shrink-0 text-accent"><GithubIcon size={22} /></span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wide text-muted">GitHub</div>
                  <div className="mt-1 text-sm">Voir le profil</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-line px-8 py-8">
          <div className="mx-auto flex max-w-[1000px] items-center justify-between font-mono text-xs text-muted">
            <span>© 2026 Zakariya Laidani</span>
            <span>Île-de-France</span>
          </div>
        </footer>

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6" onClick={() => setSelected(null)}>
            <div className="clip-corner relative w-full max-w-[420px] border border-line bg-panel p-7" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4 text-muted hover:text-accent" aria-label="Fermer">
                <X size={18} />
              </button>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-accent">{selected.icon}</span>
                <h3 className="font-display text-xl font-bold">{selected.label}</h3>
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-wide text-accent">{selected.type}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{selected.definition}</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
