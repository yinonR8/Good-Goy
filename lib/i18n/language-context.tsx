"use client"

/**
 * Language context.
 *
 * Holds the user's selected language and persists it to localStorage
 * so it's remembered between sessions.
 *
 * Wrap the app in <LanguageProvider> (in app/layout.tsx), then use
 * `useLanguage()` inside any client component to read or change it.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import {
  DEFAULT_LANGUAGE,
  getLanguage,
  type Language,
  type LanguageCode,
} from "./languages"
import { getUIStrings, type UIStrings } from "./ui-strings"

const STORAGE_KEY = "kosher-app:language"

interface LanguageContextValue {
  code: LanguageCode
  language: Language
  strings: UIStrings
  setLanguage: (code: LanguageCode) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState<LanguageCode>(DEFAULT_LANGUAGE)

  // Load saved language on mount. We do this in an effect (not useState
  // initializer) because localStorage doesn't exist during server rendering.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null
    if (saved && getLanguage(saved).code === saved) {
      setCode(saved)
    }
  }, [])

  // Sync <html lang> and <html dir> whenever the language changes,
  // so RTL languages flip the layout automatically.
  useEffect(() => {
    const language = getLanguage(code)
    document.documentElement.lang = code
    document.documentElement.dir = language.direction
  }, [code])

  const setLanguage = (newCode: LanguageCode) => {
    setCode(newCode)
    localStorage.setItem(STORAGE_KEY, newCode)
  }

  const value: LanguageContextValue = {
    code,
    language: getLanguage(code),
    strings: getUIStrings(code),
    setLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>")
  }
  return ctx
}
