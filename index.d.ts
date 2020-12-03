declare module '@streamlinehq/streamline-wrapper-vue' {
    export type iconSlug = string;
    export type iconWidth = number;
    export type iconHeight = number;
    export type iconOptions = {
        fill: string;
        stroke: string;
        'stroke-linecap': 'butt' | 'round' | 'square' | 'inherit';
        'stroke-linejoin': 'miter' | 'round' | 'bevel' | 'inherit';
        'stroke-width': number | string;
    };
    export type iconRepresentation = string;
    export type Icon = [
        iconSlug,
        iconWidth,
        iconHeight,
        iconOptions[],
        iconRepresentation[]
    ];
}
