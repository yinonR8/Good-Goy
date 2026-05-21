/**
 * Shared types for animal data across all languages.
 * Every language file imports Animal from here so the shape stays consistent.
 */

export interface Animal {
  name: string
  icon: string
  isKosher: boolean
  family: string
  explanation: string
}
