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
    <div className="bg-white border rounded-2xl p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Assets
      </h2>

      <div className="space-y-4">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="border rounded-xl p-3"
          >
            {/* <div className="font-semibold">
              {asset.name}
            </div> */}

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