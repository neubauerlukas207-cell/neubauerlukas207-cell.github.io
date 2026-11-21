export type Category = 'web' | 'backend' | 'desktop' | 'mobile' | 'ai' | 'systems' | 'database'

export interface Project {
  repo: string
  title: string
  description: string
  category: Category
  languages: string[]
  tech: string[]
  year: number
  featured?: boolean
  team?: boolean
  demo?: string
}

export const CATEGORY_LABELS: Record<Category, string> = {
  web: 'Web',
  backend: 'Backend',
  desktop: 'Desktop',
  mobile: 'Mobilní',
  ai: 'AI / ML',
  systems: 'Systémové',
  database: 'Databáze',
}

export const projects: Project[] = [
  {
    repo: 'pjp-compiler',
    title: 'Překladač jazyka PJP',
    description: 'Překladač podmnožiny Pascalu do tříadresného kódu – lexikální a syntaktická analýza, generování mezikódu, zotavení z chyb.',
    category: 'systems',
    languages: ['C'],
    tech: ['flex', 'bison', 'make'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'vehicle-registry-cpp',
    title: 'Registr vozidel',
    description: 'Evidence řidičů, vozidel a přestupků nad vlastními datovými strukturami: AVL strom, hashovací tabulka, binární halda.',
    category: 'systems',
    languages: ['C++'],
    tech: ['AVL strom', 'hash tabulka', 'halda'],
    year: 2025,
    featured: true,
  },
  {
    repo: 'fitko-symfony',
    title: 'Fitko – správa členů',
    description: 'Webová aplikace pro fitness centrum s přihlašováním, rolemi, CRUD členů a statistikami.',
    category: 'web',
    languages: ['PHP'],
    tech: ['Symfony 6', 'Doctrine ORM', 'Twig', 'MySQL'],
    year: 2025,
    featured: true,
  },
  {
    repo: 'advanced-programming-java',
    title: 'Pokročilé programovací techniky',
    description: 'JUnit 5 testy, hledání a oprava chyb, třívrstvá Swing aplikace a návrhové vzory Factory, Builder a Provider.',
    category: 'backend',
    languages: ['Java'],
    tech: ['JUnit 5', 'Swing', 'Maven'],
    year: 2026,
    featured: true,
    team: true,
  },
  {
    repo: 'android-apps',
    title: 'Android aplikace',
    description: 'Směnárna s kurzy ČNB (fragmenty, ViewModel, vlastní graf), BMI kalkulačka s testy a vizitka uživatele.',
    category: 'mobile',
    languages: ['Java'],
    tech: ['Android SDK', 'Gradle', 'JUnit 5'],
    year: 2026,
    featured: true,
    team: true,
  },
  {
    repo: 'ai-matlab',
    title: 'Algoritmy umělé inteligence',
    description: 'BFS/DFS, A*, minimax, Monte Carlo Tree Search, perceptron, backpropagation a transfer learning.',
    category: 'ai',
    languages: ['MATLAB'],
    tech: ['Deep Learning Toolbox', 'ML'],
    year: 2026,
    featured: true,
  },
  {
    repo: 'game-catalog-winforms',
    title: 'Kartotéka her',
    description: 'Desktopová evidence herní knihovny – CRUD, ukládání do souboru, jednotné téma aplikace.',
    category: 'desktop',
    languages: ['C#'],
    tech: ['.NET 8', 'Windows Forms'],
    year: 2025,
  },
  {
    repo: 'winforms-apps-csharp',
    title: 'WinForms aplikace',
    description: 'Pět desktopových aplikací – dědičnost, polymorfismus a vlastní výjimky v praxi.',
    category: 'desktop',
    languages: ['C#'],
    tech: ['.NET 8', 'Windows Forms'],
    year: 2026,
  },
  {
    repo: 'java-console-apps',
    title: 'Java aplikace',
    description: 'Šest aplikací od konzole po Swing GUI – OOP, vlastní výjimky, rozhraní a hra Miny.',
    category: 'desktop',
    languages: ['Java'],
    tech: ['Swing'],
    year: 2026,
  },
  {
    repo: 'fitness-reservation-db',
    title: 'Databáze rezervací fitness centra',
    description: 'Relační návrh s 15 tabulkami, PL/pgSQL triggerem pro kontrolu kapacity a komplexními dotazy.',
    category: 'database',
    languages: ['SQL'],
    tech: ['PostgreSQL', 'PL/pgSQL'],
    year: 2025,
  },
  {
    repo: 'pjp-lex-yacc-exercises',
    title: 'Cvičení z překladačů',
    description: 'Skenery a parsery ve flexu a bisonu – kalkulačky, tabulky symbolů, zotavení z chyb.',
    category: 'systems',
    languages: ['C'],
    tech: ['flex', 'bison'],
    year: 2026,
  },
  {
    repo: 'dsa-exercises-cpp',
    title: 'Datové struktury a algoritmy',
    description: 'Rekurze, spojový seznam a vyhledávání – cvičení v C++.',
    category: 'systems',
    languages: ['C++'],
    tech: ['algoritmy'],
    year: 2025,
  },
  {
    repo: 'computer-architecture-deeds-arduino',
    title: 'Architektura počítačů',
    description: 'Logické obvody v simulátoru Deeds a programy pro Arduino – LCD, sériová linka, motory.',
    category: 'systems',
    languages: ['C++'],
    tech: ['Arduino', 'Deeds'],
    year: 2025,
  },
  {
    repo: 'ui-design-nur',
    title: 'Návrh uživatelského rozhraní',
    description: 'HTML/CSS stránky a desktopová rozhraní ve Windows Forms.',
    category: 'web',
    languages: ['HTML', 'C#'],
    tech: ['CSS', 'Windows Forms'],
    year: 2025,
  },
  {
    repo: 'cpp-basics',
    title: 'Základy C/C++',
    description: 'Strukturované programování a první třídy z prvního ročníku.',
    category: 'systems',
    languages: ['C', 'C++'],
    tech: ['OOP'],
    year: 2024,
  },
  {
    repo: 'linux-bash-labs',
    title: 'Linux a bash',
    description: 'Správa uživatelů a oprávnění, bash skripty s parametry a cykly.',
    category: 'systems',
    languages: ['Bash'],
    tech: ['Linux'],
    year: 2025,
  },
]
