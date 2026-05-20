export type Building = {
  id: string
  name: string
  x: number
  y: number
}

export type Asset = {
  id: string
  name: string
  buildingId: string
}