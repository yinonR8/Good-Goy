"use client"

/**
 * Language selector.
 *
 * Shown in the top-right corner of the page. The button shows the current
 * language's flag (a real SVG via flag-icons) plus its uppercase code
 * (e.g. a US flag + "EN"). Clicking opens a dropdown listing all languages
 * in alphabetical order (by code), with each name shown in the user's
 * currently selected language.
 *
 * Requires the flag-icons CSS to be imported in app/globals.css:
 *   @import 'flag-icons/css/flag-icons.min.css';
 */

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LANGUAGES } from "@/lib/i18n/languages"
import { Check } from "lucide-react"

export function LanguageSelector() {
  const { code, language, strings, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Close the dropdown when clicking outside or pressing Escape.
  useEffect(() => {
    if (!open) return

    const handleClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKey)
    }
  }, [open])

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={strings.selectLanguage}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <span
          className={`fi fi-${language.countryCode} rounded-sm`}
          style={{ width: "1.5rem", height: "1.125rem" }}
          aria-hidden="true"
        />
        <span className="text-sm font-semibold uppercase text-foreground">
          {language.code}
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={strings.selectLanguage}
          className="absolute end-0 top-12 z-20 max-h-96 w-56 overflow-y-auto rounded-2xl border border-border bg-card shadow-lg"
        >
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === code
            const displayName = lang.nameInLang[code]

            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLanguage(lang.code)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-start transition-colors ${
                  isSelected ? "bg-accent" : "hover:bg-accent/50"
                }`}
              >
                <span
                  className={`fi fi-${lang.countryCode} shrink-0 rounded-sm`}
                  style={{ width: "1.5rem", height: "1.125rem" }}
                  aria-hidden="true"
                />
                <span className="w-7 shrink-0 text-xs font-semibold uppercase text-muted-foreground">
                  {lang.code}
                </span>
                <span className="flex-1 font-medium text-foreground">
                  {displayName}
                </span>
                {isSelected && (
                  <Check
                    className="h-4 w-4 shrink-0 text-muted-foreground"
                    aria-hidden="true"
                  />
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}