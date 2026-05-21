"use client"

import { type Animal } from "@/lib/animals"
import { useLanguage } from "@/lib/i18n/language-context"
import { CheckCircle2, XCircle } from "lucide-react"

interface ResultCardProps {
  animal: Animal
}

export function ResultCard({ animal }: ResultCardProps) {
  const { strings } = useLanguage()

  return (
    <div
      className={`w-full max-w-md rounded-2xl border p-6 transition-all duration-300 ${
        animal.isKosher
          ? "bg-success-bg border-success/30"
          : "bg-destructive-bg border-destructive/30"
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-5xl shrink-0" role="img" aria-label={animal.name}>
          {animal.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold text-foreground">{animal.name}</h2>
          <div
            className={`flex items-center gap-2 mt-1 ${
              animal.isKosher ? "text-success" : "text-destructive"
            }`}
          >
            {animal.isKosher ? (
              <>
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="font-semibold">{strings.kosher}</span>
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5 shrink-0" />
                <span className="font-semibold">{strings.notKosher}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <p className="text-foreground leading-relaxed">
        <span
          className={`font-bold ${
            animal.isKosher ? "text-success" : "text-destructive"
          }`}
        >
          {animal.isKosher ? strings.yes : strings.no}
        </span>
        {" — "}
        {animal.explanation}
      </p>
    </div>
  )
}
