export default ConnectedFlex;
/**
 * `Flex` is a primitive layout component that adaptively aligns child content
 * horizontally or vertically. `Flex` powers components like `HStack` and
 * `VStack`.
 *
 * `Flex` is used with any of it's two sub-components, `FlexItem` and `FlexBlock`.
 *
 * @example
 * ```jsx
 * import {
 * 	__experimentalFlex as Flex,
 * 	__experimentalFlexBlock as FlexBlock,
 * 	__experimentalFlexItem as FlexItem,
 * 	__experimentalText as Text
 * } from `@wordpress/components`;
 *
 * function Example() {
 * 	return (
 * 		<Flex>
 * 			<FlexItem>
 * 				<Text>Code</Text>
 * 			</FlexItem>
 * 			<FlexBlock>
 * 				<Text>Poetry</Text>
 * 			</FlexBlock>
 * 		</Flex>
 * 	);
 * }
 * ```
 *
 */
declare const ConnectedFlex: import("../../ui/context").PolymorphicComponent<"div", import("../types").FlexProps>;
//# sourceMappingURL=component.d.ts.map