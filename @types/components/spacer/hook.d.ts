/// <reference types="react" />
import type { PolymorphicComponentProps } from '../ui/context';
export interface SpacerProps {
    /**
     * Adjusts all margins.
     */
    margin?: number;
    /**
     * Adjusts top and bottom margins.
     */
    marginY?: number;
    /**
     * Adjusts left and right margins.
     */
    marginX?: number;
    /**
     * Adjusts top margins.
     */
    marginTop?: number;
    /**
     * Adjusts bottom margins.
     *
     * @default 2
     */
    marginBottom?: number;
    /**
     * Adjusts left margins.
     */
    marginLeft?: number;
    /**
     * Adjusts right margins.
     */
    marginRight?: number;
    /**
     * Adjusts all padding.
     */
    padding?: number;
    /**
     * Adjusts top and bottom padding.
     */
    paddingY?: number;
    /**
     * Adjusts left and right padding.
     */
    paddingX?: number;
    /**
     * Adjusts top padding.
     */
    paddingTop?: number;
    /**
     * Adjusts bottom padding.
     */
    paddingBottom?: number;
    /**
     * Adjusts left padding.
     */
    paddingLeft?: number;
    /**
     * Adjusts right padding.
     */
    paddingRight?: number;
    /**
     * The children elements.
     */
    children?: React.ReactNode;
}
export declare function useSpacer(props: PolymorphicComponentProps<SpacerProps, 'div'>): {
    className: string;
    /**
     * The children elements.
     */
    children?: import("react").ReactNode;
    hidden?: boolean | undefined;
    color?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    translate?: "yes" | "no" | undefined;
    prefix?: string | undefined;
    slot?: string | undefined;
    title?: string | undefined;
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
    key?: string | number | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    contentEditable?: boolean | "inherit" | "false" | "true" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | "false" | "true" | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: boolean | "false" | "true" | undefined;
    tabIndex?: number | undefined;
    radioGroup?: string | undefined;
    role?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "numeric" | "search" | "tel" | "url" | "email" | "decimal" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "false" | "true" | undefined;
    'aria-autocomplete'?: "both" | "none" | "inline" | "list" | undefined;
    'aria-busy'?: boolean | "false" | "true" | undefined;
    'aria-checked'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "page" | "false" | "true" | "time" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: boolean | "false" | "true" | undefined;
    'aria-dropeffect'?: "none" | "copy" | "move" | "link" | "execute" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "false" | "true" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "false" | "true" | undefined;
    'aria-haspopup'?: boolean | "listbox" | "grid" | "menu" | "false" | "true" | "dialog" | "tree" | undefined;
    'aria-hidden'?: boolean | "false" | "true" | undefined;
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "false" | "true" | undefined;
    'aria-multiline'?: boolean | "false" | "true" | undefined;
    'aria-multiselectable'?: boolean | "false" | "true" | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-readonly'?: boolean | "false" | "true" | undefined;
    'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: boolean | "false" | "true" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: boolean | "false" | "true" | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: ((event: import("react").ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onCopyCapture?: ((event: import("react").ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onCut?: ((event: import("react").ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onCutCapture?: ((event: import("react").ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onPaste?: ((event: import("react").ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onPasteCapture?: ((event: import("react").ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onCompositionEnd?: ((event: import("react").CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionEndCapture?: ((event: import("react").CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionStart?: ((event: import("react").CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionStartCapture?: ((event: import("react").CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionUpdate?: ((event: import("react").CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionUpdateCapture?: ((event: import("react").CompositionEvent<HTMLDivElement>) => void) | undefined;
    onFocus?: ((event: import("react").FocusEvent<HTMLDivElement>) => void) | undefined;
    onFocusCapture?: ((event: import("react").FocusEvent<HTMLDivElement>) => void) | undefined;
    onBlur?: ((event: import("react").FocusEvent<HTMLDivElement>) => void) | undefined;
    onBlurCapture?: ((event: import("react").FocusEvent<HTMLDivElement>) => void) | undefined;
    onChange?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onChangeCapture?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onBeforeInput?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onBeforeInputCapture?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onInput?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onInputCapture?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onReset?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onResetCapture?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onSubmit?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onSubmitCapture?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onInvalid?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onInvalidCapture?: ((event: import("react").FormEvent<HTMLDivElement>) => void) | undefined;
    onLoad?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onError?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onErrorCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onKeyDown?: ((event: import("react").KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyDownCapture?: ((event: import("react").KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyPress?: ((event: import("react").KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyPressCapture?: ((event: import("react").KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyUp?: ((event: import("react").KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyUpCapture?: ((event: import("react").KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onAbort?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onAbortCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onCanPlay?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onCanPlayCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onCanPlayThrough?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onCanPlayThroughCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onDurationChange?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onDurationChangeCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEmptied?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEmptiedCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEncrypted?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEncryptedCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEnded?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEndedCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadedData?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadedDataCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadedMetadata?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadedMetadataCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadStart?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadStartCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPause?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPauseCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPlay?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPlayCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPlaying?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPlayingCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onProgress?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onProgressCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onRateChange?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onRateChangeCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSeeked?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSeekedCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSeeking?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSeekingCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onStalled?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onStalledCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSuspend?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSuspendCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onTimeUpdate?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onTimeUpdateCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onVolumeChange?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onVolumeChangeCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onWaiting?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onWaitingCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onAuxClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onAuxClickCapture?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onClickCapture?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onContextMenu?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onContextMenuCapture?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onDoubleClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onDoubleClickCapture?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onDrag?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragCapture?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragEnd?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragEndCapture?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragEnter?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragEnterCapture?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragExit?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragExitCapture?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragLeave?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragLeaveCapture?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragOver?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragOverCapture?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragStart?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDragStartCapture?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDrop?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onDropCapture?: ((event: import("react").DragEvent<HTMLDivElement>) => void) | undefined;
    onMouseDown?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseDownCapture?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseEnter?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseLeave?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseMove?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseMoveCapture?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseOut?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseOutCapture?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseOver?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseOverCapture?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseUp?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseUpCapture?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onSelect?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSelectCapture?: ((event: import("react").SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onTouchCancel?: ((event: import("react").TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchCancelCapture?: ((event: import("react").TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchEnd?: ((event: import("react").TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchEndCapture?: ((event: import("react").TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchMove?: ((event: import("react").TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchMoveCapture?: ((event: import("react").TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchStart?: ((event: import("react").TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchStartCapture?: ((event: import("react").TouchEvent<HTMLDivElement>) => void) | undefined;
    onPointerDown?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerDownCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerMove?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerMoveCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerUp?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerUpCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerCancel?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerCancelCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerEnter?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerEnterCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerLeave?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerLeaveCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerOver?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerOverCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerOut?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerOutCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onGotPointerCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onGotPointerCaptureCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onLostPointerCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onLostPointerCaptureCapture?: ((event: import("react").PointerEvent<HTMLDivElement>) => void) | undefined;
    onScroll?: ((event: import("react").UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
    onScrollCapture?: ((event: import("react").UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
    onWheel?: ((event: import("react").WheelEvent<HTMLDivElement>) => void) | undefined;
    onWheelCapture?: ((event: import("react").WheelEvent<HTMLDivElement>) => void) | undefined;
    onAnimationStart?: ((event: import("react").AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationStartCapture?: ((event: import("react").AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationEnd?: ((event: import("react").AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationEndCapture?: ((event: import("react").AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationIteration?: ((event: import("react").AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationIterationCapture?: ((event: import("react").AnimationEvent<HTMLDivElement>) => void) | undefined;
    onTransitionEnd?: ((event: import("react").TransitionEvent<HTMLDivElement>) => void) | undefined;
    onTransitionEndCapture?: ((event: import("react").TransitionEvent<HTMLDivElement>) => void) | undefined;
    css?: import("@emotion/core").InterpolationWithTheme<any>;
    as?: "symbol" | "object" | "button" | "meter" | "textarea" | "style" | "progress" | "text" | "ruby" | "table" | "small" | "sub" | "circle" | "embed" | "pre" | "caption" | "menu" | "menuitem" | "clipPath" | "filter" | "mask" | "marker" | "big" | "link" | "sup" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "canvas" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "main" | "map" | "mark" | "meta" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "q" | "rp" | "rt" | "s" | "samp" | "slot" | "script" | "section" | "select" | "source" | "span" | "strong" | "summary" | "template" | "tbody" | "td" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "textPath" | "tspan" | "use" | "view" | undefined;
};
//# sourceMappingURL=hook.d.ts.map