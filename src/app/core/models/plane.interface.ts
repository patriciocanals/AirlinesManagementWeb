export interface Plane {
    brand: string;
    model: string;
    cat: number;
    pax: number;
    range: number;
    speed: number;
    turnaround: number;
    consumption: number;
    price: number;
    img: string;
}
export type SortablePlaneKeys = 'cat' | 'pax' | 'range' | 'speed' | 'consumption' | 'price';