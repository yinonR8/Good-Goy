"use client"

import {
  useState,
  useEffect,
  useRef,
  type KeyboardEvent,
  type ChangeEvent,
} from "react"
import { Search } from "lucide-react"
import { getAnimalData, type Animal } from "@/lib/animals"
import { useLanguage } from "@/lib/i18n/language-context"
import { findAnimals, findExactAnimal } from "@/lib/search/search-engine"

interface AnimalSearchProps {
  onSelect: (animal: Animal) => void
  onNotFound: (query: string) => void
}

export function AnimalSearch({ onSelect, onNotFound }: AnimalSearchProps) {
  const { code, strings } = useLanguage()
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<Animal[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Recompute suggestions whenever the query OR the language changes.
  // The language-aware search engine strips Hebrew nikud / Arabic diacritics
  // so users can type without them.
  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    const animals = getAnimalData(code)
    const filtered = findAnimals(animals, query, code)

    setSuggestions(filtered)
    setShowSuggestions(filtered.length > 0)
    setSelectedIndex(-1)
  }, [query, code])

  // Clear the input when the language changes — old query may not match new data.
  useEffect(() => {
    setQuery("")
  }, [code])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) {
      if (e.key === "Enter" && query.trim()) {
        submitSearch()
      }
      return
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        )
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          pickSuggestion(suggestions[selectedIndex])
        } else if (query.trim()) {
          submitSearch()
        }
        break
      case "Escape":
        setShowSuggestions(false)
        setSelectedIndex(-1)
        break
    }
  }

  const pickSuggestion = (animal: Animal) => {
    setQuery("")
    setShowSuggestions(false)
    setSelectedIndex(-1)
    onSelect(animal)
  }

  const submitSearch = () => {
    setShowSuggestions(false)
    const animals = getAnimalData(code)
    const exact = findExactAnimal(animals, query, code)
    if (exact) {
      onSelect(exact)
    } else {
      onNotFound(query)
    }
    setQuery("")
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute start-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          placeholder={strings.searchPlaceholder}
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0) setShowSuggestions(true)
          }}
          className="w-full ps-12 pe-4 py-4 text-base bg-card border border-border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 placeholder:text-muted-foreground"
        />
      </div>

      {showSuggestions && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 w-full mt-2 bg-card border border-border rounded-2xl shadow-lg overflow-hidden"
        >
          {suggestions.map((animal: Animal, index: number) => (
            <button
              key={animal.name}
              onClick={() => pickSuggestion(animal)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-start transition-colors ${
                index === selectedIndex ? "bg-accent" : "hover:bg-accent/50"
              }`}
            >
              <span
                className="text-2xl shrink-0"
                role="img"
                aria-label={animal.name}
              >
                {animal.icon}
              </span>
              <span className="font-medium text-foreground">{animal.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
