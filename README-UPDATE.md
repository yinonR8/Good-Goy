# Update Instructions

This ZIP contains all the new/changed files for the language-switching feature.

## How to apply

1. **Extract** this ZIP somewhere temporary.
2. **Copy all files** into your project, **overwriting** existing files where prompted.
   The folder structure matches your project exactly.
3. **Reinstall dependencies** to drop the removed packages:
   ```
   rm -rf node_modules package-lock.json
   npm install
   ```
   (On Windows PowerShell: `Remove-Item -Recurse -Force node_modules, package-lock.json; npm install`)

4. **Run the app** — press `Ctrl+Shift+B` in VS Code, or run `npm run dev` in the terminal.

## What's new

- **Top-right flag button** with dropdown of all 10 languages
- **Language is saved** to localStorage and remembered between sessions
- **RTL/LTR auto-switching** for Hebrew and Arabic
- **Hebrew search ignores nikud** — typing "פרה" matches "פָּרָה"
- **Arabic search ignores diacritics** (ready for when you add Arabic data)
- **Single search engine** for all languages (one place to maintain)
- **English + Hebrew work fully now**; other 8 languages fall back to English data
  with translated UI strings — until you add their animal-data files

## Files changed/added

```
app/
  layout.tsx                                ← UPDATED
  page.tsx                                  ← UPDATED
components/
  animal-search.tsx                         ← UPDATED
  language-selector.tsx                     ← NEW (was empty)
  recent-searches.tsx                       ← UPDATED
  result-card.tsx                           ← UPDATED
lib/
  animals/
    animal-data-en.ts                       ← UPDATED (imports Animal from types.ts)
    animal-data-he.ts                       ← UPDATED (imports Animal from types.ts)
    index.ts                                ← NEW (was empty)
    types.ts                                ← NEW (was empty)
  i18n/
    language-context.tsx                    ← NEW
    languages.ts                            ← NEW (was empty)
    ui-strings.ts                           ← NEW (was empty)
  search/
    search-engine.ts                        ← NEW (was empty)
next.config.mjs                             ← UPDATED (removed ignoreBuildErrors)
package.json                                ← UPDATED (removed ~30 unused deps)
```

## Adding a new language's animal data

When you're ready to translate the animals into Chinese, Spanish, etc.:

1. Open the empty `lib/animals/animal-data-<code>.ts` file
2. Copy the structure from `animal-data-en.ts` (the `import` lines at the top, then `export const animalData = [...]`)
3. Translate each animal's `name` and `explanation` field
4. Open `lib/animals/index.ts` and uncomment the matching import + map entry

That's it — the picker, search, and RTL switching all work automatically.
