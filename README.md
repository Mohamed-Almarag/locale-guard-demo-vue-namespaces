# Locale Guard demo: Vue with namespace files

A small Vue admin panel in English, Arabic, French and German, translated with
[vue-i18n](https://vue-i18n.intlify.dev). Each language is a folder, and each
file in it is a namespace. It shows what
[Locale Guard](https://github.com/Mohamed-Almarag/locale-guard) reports on real
pull requests.

## Setup

| | |
|---|---|
| Framework | Vue 3 with Vite |
| Translation library | `vue-i18n` |
| Locale files | `src/locales/{locale}/*.json`: `src/locales/ar/users.json` holds the `users.*` keys in Arabic |
| Base locale | `en` |

The whole setup is one workflow file,
[.github/workflows/translations.yml](.github/workflows/translations.yml):

```yaml
- uses: Mohamed-Almarag/locale-guard@v1
  with:
    files: src/locales/{locale}/*.json
    format: vue-i18n
```

## Pull requests to look at

| Pull request | What it shows | Result |
|---|---|---|
| [#1 Add billing settings](https://github.com/Mohamed-Almarag/locale-guard-demo-vue-namespaces/pull/1) | A new namespace file that French never got, so the comment gives the whole file to create; plus a missing key in an existing file, a renamed placeholder, a link to another namespace that does not exist, an empty value and untranslated text | ❌ Fails |
| [#2 Add audit log](https://github.com/Mohamed-Almarag/locale-guard-demo-vue-namespaces/pull/2) | The first commit forgets French and German, the second one adds them, and the same comment turns green | ✅ Passes |
| [#3 Make the users table readable](https://github.com/Mohamed-Almarag/locale-guard-demo-vue-namespaces/pull/3) | A change that touches no translation file, so the check finishes in seconds | ✅ Passes |

The `main` branch already has two old issues: a role French never got, and a
German action that English no longer has. Locale Guard lists them apart from the
issues each pull request adds, collapsed, and they do not fail the check.

## Run the app

```bash
npm install
npm run dev
```
