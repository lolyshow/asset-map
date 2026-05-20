import { Asset, Building } from "@/types"
import AssetIcon from "./AssetIcon"

type Props = {
  building: Building
  assets: Asset[]
}

export default function BuildingCard({
  building,
  assets,
}: Props) {
  const buildingAssets = assets.filter(
    (asset) => asset.buildingId === building.id
  )

  return (
    <div
      className="absolute bg-white border-2 border-gray-300 rounded-2xl shadow-lg p-4"
      style={{
        left: building.x,
        top: building.y,
        width: 240,
        height: 180,
      }}
    >
      <h2 className="text-xl font-bold">
        {building.name}
      </h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {buildingAssets.map((asset) => (
          <AssetIcon
            key={asset.id}
            name={asset.name}
          />
        ))}
      </div>
    </div>
  )
}