import type { ReactNode } from 'react';
export interface ZStackProps {
    /**
     * Layers children elements on top of each other (first: highest z-index, last: lowest z-index).
     *
     * @default true
     */
    isLayered?: boolean;
    /**
     * Reverse the layer ordering (first: lowest z-index, last: highest z-index).
     *
     * @default false
     */
    isReversed?: boolean;
    /**
     * The amount of offset between each child element.
     *
     * @default 0
     */
    offset?: number;
    /**
     * Child elements.
     */
    children: ReactNode;
}
declare const _default: import("../ui/context").PolymorphicComponent<"div", ZStackProps>;
export default _default;
//# sourceMappingURL=component.d.ts.map