"use client"

import { type Animal } from "@/lib/animals"
import { useLanguage } from "@/lib/i18n/language-context"
import { Clock } from "lucide-react"

interface RecentSearchesProps {
  animals: Animal[]
  onSelect: (animal: Animal) => void
}

export function RecentSearches({ animals, onSelect }: RecentSearchesProps) {
  const { strings } = useLanguage()

  if (animals.length === 0) return null

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-medium text-muted-foreground">
          {strings.recentSearches}
        </h3>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {animals.map((animal) => (
          <button
            key={animal.name}
            onClick={() => onSelect(animal)}
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:bg-accent transition-colors shadow-sm whitespace-nowrap flex-shrink-0"
          >
            <span className="text-lg" role="img" aria-label={animal.name}>
              {animal.icon}
            </span>
            <span className="text-sm font-medium text-foreground">
              {animal.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
