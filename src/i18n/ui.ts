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
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
  },
} as const;

export const routes: { [key: string]: { [key: string]: string } } = {
  fr: {
    home: 'accueil',
    about: 'a-propos',
    projects: 'projets',
    blog: 'blog',
    contact: 'contact',
  },
};

export const showDefaultLang = false;
