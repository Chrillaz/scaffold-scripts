/**
 * Forwards ref (React.ForwardRef) and "Connects" (or registers) a component
 * within the Context system under a specified namespace.
 *
 * This is an (experimental) evolution of the initial connect() HOC.
 * The hope is that we can improve render performance by removing functional
 * component wrappers.
 *
 * @template {import('./polymorphic-component').PolymorphicComponentProps<{}, any>} P
 * @param {(props: P, ref: import('react').Ref<any>) => JSX.Element | null} Component            The component to register into the Context system.
 * @param {string}                                                          namespace            The namespace to register the component under.
 * @param {Object}                                                          options
 * @param {boolean}                                                         [options.memo=false]
 * @return {import('./polymorphic-component').PolymorphicComponent<import('./polymorphic-component').ElementTypeFromPolymorphicComponentProps<P>, import('./polymorphic-component').PropsFromPolymorphicComponentProps<P>>} The connected PolymorphicComponent
 */
export function contextConnect<P extends import("./polymorphic-component").PolymorphicComponentProps<{}, any>>(Component: (props: P, ref: import('react').Ref<any>) => JSX.Element | null, namespace: string, options?: {
    memo: boolean | undefined;
}): import("./polymorphic-component").PolymorphicComponent<import("./polymorphic-component").ElementTypeFromPolymorphicComponentProps<P>, import("./polymorphic-component").PropsFromPolymorphicComponentProps<P>>;
/**
 * Attempts to retrieve the connected namespace from a component.
 *
 * @param {import('react').ReactChild | undefined | {}} Component The component to retrieve a namespace from.
 * @return {Array<string>} The connected namespaces.
 */
export function getConnectNamespace(Component: import('react').ReactChild | undefined | {}): Array<string>;
/**
 * Checks to see if a component is connected within the Context system.
 *
 * @param {import('react').ReactNode} Component The component to retrieve a namespace from.
 * @param {Array<string>|string}      match     The namespace to check.
 * @return {boolean} The result.
 */
export function hasConnectNamespace(Component: import('react').ReactNode, match: Array<string> | string): boolean;
//# sourceMappingURL=context-connect.d.ts.map