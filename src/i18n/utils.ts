import { defaultLang, routes, showDefaultLang, ui } from './ui';

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang as string) {
    const pathName = path.replaceAll('/', '');
    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      routes[l][pathName] !== undefined;
    const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path;

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}

export function useTranslatedFragment(lang: keyof typeof ui) {
  return function translateFragment(path: string, l: string = lang as string) {
    const fragmentName = path.replaceAll('#', '');
    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      routes[l][fragmentName] !== undefined;
    const translatedFragment = hasTranslation
      ? '#' + routes[l][fragmentName]
      : path;

    return !showDefaultLang && l === defaultLang
      ? translatedFragment
      : `/${l}/${translatedFragment}`;
  };
}

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== undefined ? route[path] : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}

export function getFragmentFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('#');
  const section = parts.pop();

  if (section === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[section] !== undefined ? route[section] : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], section);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
