import { buildings } from "@/data/buildings";
import { Asset } from "@/types";

type Props = {
  assets: Asset[];
};

export default function CampusMap({ assets }: any) {
  return (
    <div className="relative w-full h-[700px] border rounded-2xl overflow-hidden">
      {/* MAP IMAGE */}
      <img
        src="/campus-map2.png"
        className="absolute w-full h-full object-cover"
      />

      {buildings.map((b) => {
        const buildingAssets = assets.filter((a: any) => a.buildingId === b.id);

        return (
          <div
            key={b?.id}
            className="absolute bg-white/90  rounded-2xl shadow-lg p-4 w-56"
            style={{
              left: `${b.x * 100}%`,
              top: `${b.y * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex flex-wrap gap-2 mt-2">
              {buildingAssets.map((a: any) => (
                <div
                  key={`${b.id}-${a.id}`}
                  className="text-[200px] px-2 py-1 rounded "
                >
                  💡
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
