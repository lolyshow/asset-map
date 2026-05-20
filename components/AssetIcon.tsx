type Props = {
  name: string
}

export default function AssetIcon({ name }: Props) {
  return (
    <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
      🕒 {name}
    </div>
  )
}