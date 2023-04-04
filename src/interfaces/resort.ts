export interface IResort {
    id: number,
    state: string,
    city: string
}

export interface IResortReport {
    openLifts: string
    openTerrain: string
    openTrails: string
    snowConditions: string
    status: boolean
}