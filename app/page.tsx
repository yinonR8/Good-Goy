"use client"

import { useCallback, useEffect, useState } from "react"
import { AlertCircle } from "lucide-react"
import { AnimalSearch } from "@/components/animal-search"
import { LanguageSelector } from "@/components/language-selector"
import { RecentSearches } from "@/components/recent-searches"
import { ResultCard } from "@/components/result-card"
import { type Animal } from "@/lib/animals"
import { useLanguage } from "@/lib/i18n/language-context"

const MAX_RECENT = 3

export default function Home() {
  const { code, strings } = useLanguage()
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null)
  const [recentSearches, setRecentSearches] = useState<Animal[]>([])
  const [notFound, setNotFound] = useState<string | null>(null)

  // Clear the displayed result when switching languages — animal references
  // belong to the previous language's data array, so the names wouldn't match.
  useEffect(() => {
    setSelectedAnimal(null)
    setNotFound(null)
    setRecentSearches([])
  }, [code])

  const addToRecent = useCallback((animal: Animal) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((a) => a.name !== animal.name)
      return [animal, ...filtered].slice(0, MAX_RECENT)
    })
  }, [])

  const handleSelect = useCallback(
    (animal: Animal) => {
      setSelectedAnimal(animal)
      setNotFound(null)
      addToRecent(animal)
    },
    [addToRecent]
  )

  const handleNotFound = useCallback((query: string) => {
    setSelectedAnimal(null)
    setNotFound(query)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Top-right language selector */}
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>

        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
              {strings.appTitle}
            </h1>
            <p className="text-base text-muted-foreground text-pretty">
              {strings.appTagline}
            </p>
          </div>

          {/* Search */}
          <div className="w-full flex flex-col items-center gap-6 mb-8">
            <AnimalSearch onSelect={handleSelect} onNotFound={handleNotFound} />

            {/* Recent Searches - only show when no result is displayed */}
            {!selectedAnimal && !notFound && recentSearches.length > 0 && (
              <RecentSearches animals={recentSearches} onSelect={handleSelect} />
            )}
          </div>

          {/* Results */}
          <div className="w-full flex flex-col items-center">
            {selectedAnimal && <ResultCard animal={selectedAnimal} />}

            {notFound && (
              <div className="w-full max-w-md rounded-2xl border border-destructive/30 bg-destructive-bg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {strings.animalNotFound}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      &quot;{notFound}&quot; — {strings.animalNotFoundDescription}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!selectedAnimal && !notFound && (
              <div className="text-center py-12">
                <p className="text-5xl mb-4">🔍</p>
                <p className="text-muted-foreground">{strings.emptyStateHint}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
