export type Language = 'pl' | 'en'

export interface SetLanguage {
  (laguage: Language): void
}

export interface GetLanguage {
  (searchParams?: URL | string | null): Language
}
