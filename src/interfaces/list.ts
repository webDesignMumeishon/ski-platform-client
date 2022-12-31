import { ReactElement } from "react";

export interface IListItem {
    id: number,
    Icon: ReactElement,
    label: string,
    route: string
}