import { createI18n } from 'vue-i18n'

type Messages = Record<string, Record<string, unknown>>

// Each language is a folder, and each file in it is a namespace:
// src/locales/ar/users.json holds the keys under `users.` in Arabic.
const files = import.meta.glob<Record<string, unknown>>('./locales/*/*.json', {
  eager: true,
  import: 'default'
})

const messages: Messages = {}
for (const [path, content] of Object.entries(files)) {
  const [, locale, namespace] = path.match(/\.\/locales\/([^/]+)\/([^/]+)\.json$/)!
  messages[locale!] ??= {}
  messages[locale!]![namespace!] = content
}

export const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', dir: 'ltr' }
] as const

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
