export interface IResort {
    id: number,
    state: string,
    city: string
}

export type TResortRequest = {
    state: string,
    town: string
}

export type SkiCenter = {
    state: string
    center: string
}

export interface IResortReport {
    id: number;
    city: string;
    state: string;
    openLifts: string
    openTerrain: string
    openTrails: string
    snowConditions: string
    status: boolean
}