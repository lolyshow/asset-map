import { buildings } from "@/data/buildings"
import { Asset } from "@/types"

type Props = {
  assets: Asset[]
  activeAssetId: string
}

export default function CampusMap({
  assets,
  activeAssetId,
}: Props) {
  const activeAsset = assets.find(
    (a) => a.id === activeAssetId
  )

  const building = buildings.find(
    (b) => b.id === activeAsset?.buildingId
  )

  return (
    <div className="relative w-full h-[700px] border rounded-2xl overflow-hidden">
      {/* MAP IMAGE */}
      <img
        src="/campus-map2.png"
        className="absolute w-full h-full object-cover"
      />

      {/* ONLY ONE BULB */}
      {activeAsset && building && (
        <div
          className="absolute text-6xl animate-pulse"
          style={{
            left: `${building.x * 100}%`,
            top: `${building.y * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          💡
        </div>
      )}
    </div>
  )
}