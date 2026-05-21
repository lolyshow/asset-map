import { Asset } from "@/types"
import { buildings } from "@/data/buildings"

type Props = {
  assets: Asset[]
  onMove: (assetId: string, buildingId: string) => void
}

export default function AssetPanel({
  assets,
  onMove,
}: Props) {
  const asset = assets[0]

  if (!asset) return null

  return (
    <div className="bg-white border rounded-2xl p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Move Light Bulb
      </h2>

      <select
        className="w-full border rounded p-2"
        value={asset.buildingId}
        onChange={(e) =>
          onMove(asset.id, e.target.value)
        }
      >
        {buildings.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
    </div>
  )
}