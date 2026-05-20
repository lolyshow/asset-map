"use client"

import { useEffect, useState } from "react"
import CampusMap from "@/components/CampusMap"
import AssetPanel from "@/components/AssetPanel"
import { Asset } from "@/types"
import {
  loadAssets,
  saveAssets,
} from "@/lib/storage"

export default function HomePage() {
  const [assets, setAssets] = useState<Asset[]>([])

  useEffect(() => {
    setAssets(loadAssets())
  }, [])

  function moveAsset(
    assetId: string,
    buildingId: string
  ) {
    const updated = assets.map((a) =>
      a.id === assetId
        ? { ...a, buildingId }
        : a
    )

    setAssets(updated)
    saveAssets(updated)
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Campus Light Tracker
      </h1>

      <div className="grid lg:grid-cols-[320px_1fr] gap-6">
        {/* <AssetPanel
          assets={assets}
          onMove={moveAsset}
        /> */}

        <CampusMap assets={assets} />
      </div>
    </main>
  )
}