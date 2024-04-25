export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const ui: { [key: string]: { [key: string]: string } } = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    jobTitle: 'Developer',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    jobTitle: 'Développeur',
  },
} as const;

export const routes: { [key: string]: { [key: string]: string } } = {
  en: {
    home: 'home',
    about: 'about',
    projects: 'projects',
    blog: 'blog',
    contact: 'contact',
  },
  fr: {
    home: 'home',
    about: 'about',
    projects: 'projects',
    blog: 'blog',
    contact: 'contact',
  },
};

export const other: { [key: string]: { [key: string]: string } } = {
  en: {
    jobTitle: 'Web Developer',
  },
  fr: {
    jobTitle: 'Développeur Web',
  },
};

export const showDefaultLang = false;
