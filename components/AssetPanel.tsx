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
  return (
    <div className="bg-white border rounded-2xl  shadow-lg">
      <h2 className="text-xl font-bold mb-1">
        Current Lamp Location
      </h2>

      <div className="space-y-2">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="border rounded-xl "
          >

            <select
              className="mt-2 w-full border rounded p-2"
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
        ))}
      </div>
    </div>
  )
}