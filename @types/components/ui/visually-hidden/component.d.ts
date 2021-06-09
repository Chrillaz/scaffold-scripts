export default VisuallyHidden;
/**
 * `VisuallyHidden` is a component used to render text intended to be visually
 * hidden, but will show for alternate devices, for example a screen reader.
 *
 * @example
 * ```jsx
 * import { View, VisuallyHidden } from `@wordpress/components/ui`;
 *
 * function Example() {
 * 	return (
 * 		<VisuallyHidden>
 * 			<View as="label">Code is Poetry</View>
 * 		</VisuallyHidden>
 * 	);
 * }
 * ```
 */
declare const VisuallyHidden: import("../context").PolymorphicComponent<"div", {
    children: import("react").ReactNode;
}>;
//# sourceMappingURL=component.d.ts.map