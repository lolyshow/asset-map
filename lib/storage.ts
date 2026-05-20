import { Asset } from "@/types"
import { starterAssets } from "@/data/assets"

const STORAGE_KEY = "campus-assets"

export function loadAssets(): Asset[] {
  if (typeof window === "undefined") return []

  const stored = localStorage.getItem(STORAGE_KEY)

  if (!stored) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(starterAssets)
    )
    return starterAssets
  }

  return JSON.parse(stored)
}

export function saveAssets(assets: Asset[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(assets)
  )
}