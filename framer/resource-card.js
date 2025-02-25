// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 152090e494160734 "XCoach Live", do not edit manually */
"use client";
import {
  NullState,
  defaultEvents,
  useIconSelection
} from "./chunks/chunk-BVM6H744.js";
import "./chunks/chunk-WSFCRVEQ.js";

// virtual:resource-card
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/sLdbagka5ptK5hJv3Q06/EOkxIjEEnmaPsWt9O8Ll/FpVImOlv9.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx, getFonts, Image, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "unframer";
import * as React2 from "react";

// /:https://framerusercontent.com/modules/hKjtTuWGYB451ckw6eTN/bbq95ZQZ142lE2fXscHd/Hero.js
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { addPropertyControls, ControlType, RenderTarget } from "unframer";
import { motion } from "unframer";

// /:https://framer.com/m/hero-icons/Home.js@0.0.28
var Component;
var Home_default = (React3) => {
  if (!Component) {
    const HomeIcon = React3.forwardRef(function HomeIcon2({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ React3.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
      }, props), title ? /* @__PURE__ */ React3.createElement("title", {
        id: titleId
      }, title) : null, /* @__PURE__ */ React3.createElement("path", {
        d: "M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
      }), /* @__PURE__ */ React3.createElement("path", {
        d: "m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
      }));
    });
    Component = HomeIcon;
  }
  return Component;
};

// /:https://framerusercontent.com/modules/hKjtTuWGYB451ckw6eTN/bbq95ZQZ142lE2fXscHd/Hero.js
var iconKeys = ["AcademicCap", "AdjustmentsVertical", "ArchiveBox", "ArchiveBoxArrowDown", "ArchiveBoxXMark", "ArrowDown", "ArrowDownCircle", "ArrowDownLeft", "ArrowDownOnSquare", "ArrowDownRight", "ArrowDownTray", "ArrowLeft", "ArrowLeftCircle", "ArrowLeftOnRectangle", "ArrowLongDown", "ArrowLongLeft", "ArrowLongRight", "ArrowLongUp", "ArrowPath", "ArrowRight", "ArrowRightCircle", "ArrowSmallDown", "ArrowSmallLeft", "ArrowSmallRight", "ArrowSmallUp", "ArrowTrendingDown", "ArrowTrendingUp", "ArrowUp", "ArrowUpCircle", "ArrowUpLeft", "ArrowUpOnSquare", "ArrowUpOnSquareStack", "ArrowUpRight", "ArrowUpTray", "ArrowUturnDown", "ArrowUturnLeft", "ArrowUturnRight", "ArrowUturnUp", "ArrowsPointingIn", "ArrowsPointingOut", "ArrowsRightLeft", "ArrowsUpDown", "AtSymbol", "Backspace", "Backward", "Banknotes", "Bars2", "Bars3", "Bars3BottomLeft", "Bars3BottomRight", "Bars3CenterLeft", "Bars4", "BarsArrowDown", "BarsArrowUp", "Battery0", "Battery100", "Battery50", "Beaker", "Bell", "BellAlert", "BellSlash", "BellSnooze", "Bolt", "BoltSlash", "BookOpen", "Bookmark", "BookmarkSlash", "BookmarkSquare", "Briefcase", "BugAnt", "BuildingLibrary", "BuildingOffice", "BuildingOffice2", "BuildingStorefront", "Cake", "Calculator", "Calendar", "CalendarDays", "Camera", "ChartBar", "ChartBarSquare", "ChartPie", "ChatBubbleLeft", "ChatBubbleLeftRight", "ChatBubbleOvalLeft", "Check", "CheckBadge", "CheckCircle", "ChevronDoubleDown", "ChevronDoubleLeft", "ChevronDoubleRight", "ChevronDoubleUp", "ChevronDown", "ChevronLeft", "ChevronRight", "ChevronUp", "ChevronUpDown", "CircleStack", "Clipboard", "ClipboardDocument", "Clock", "Cloud", "CloudArrowDown", "CloudArrowUp", "CodeBracket", "CodeBracketSquare", "Cog", "Cog6Tooth", "Cog8Tooth", "CommandLine", "ComputerDesktop", "CpuChip", "CreditCard", "Cube", "CubeTransparent", "CurrencyBangladeshi", "CurrencyDollar", "CurrencyEuro", "CurrencyPound", "CurrencyRupee", "CurrencyYen", "CursorArrowRays", "CursorArrowRipple", "DevicePhoneMobile", "DeviceTablet", "Document", "DocumentArrowDown", "DocumentArrowUp", "DocumentChartBar", "DocumentCheck", "DocumentDuplicate", "DocumentMinus", "DocumentPlus", "DocumentText", "EllipsisHorizontal", "EllipsisVertical", "Envelope", "EnvelopeOpen", "ExclamationCircle", "ExclamationTriangle", "Eye", "EyeDropper", "EyeSlash", "FaceFrown", "FaceSmile", "Film", "FingerPrint", "Fire", "Flag", "Folder", "FolderArrowDown", "FolderMinus", "FolderOpen", "FolderPlus", "Forward", "Funnel", "Gif", "Gift", "GiftTop", "GlobeAlt", "GlobeAmericas", "GlobeAsiaAustralia", "GlobeEuropeAfrica", "HandRaised", "HandThumbDown", "HandThumbUp", "Hashtag", "Heart", "Home", "HomeModern", "Identification", "Inbox", "InboxArrowDown", "InboxStack", "InformationCircle", "Key", "Language", "Lifebuoy", "LightBulb", "Link", "ListBullet", "LockClosed", "LockOpen", "MagnifyingGlass", "MagnifyingGlassMinus", "MagnifyingGlassPlus", "Map", "MapPin", "Megaphone", "Microphone", "Minus", "MinusCircle", "MinusSmall", "Moon", "MusicalNote", "Newspaper", "NoSymbol", "PaintBrush", "PaperAirplane", "PaperClip", "Pause", "PauseCircle", "Pencil", "PencilSquare", "Phone", "PhoneArrowDownLeft", "PhoneArrowUpRight", "PhoneXMark", "Photo", "Play", "PlayCircle", "PlayPause", "Plus", "PlusCircle", "PlusSmall", "Power", "PresentationChartBar", "Printer", "PuzzlePiece", "QrCode", "QuestionMarkCircle", "QueueList", "Radio", "ReceiptPercent", "ReceiptRefund", "RectangleGroup", "RectangleStack", "RocketLaunch", "Rss", "Scale", "Scissors", "Server", "ServerStack", "Share", "ShieldCheck", "ShieldExclamation", "ShoppingBag", "ShoppingCart", "Signal", "SignalSlash", "Sparkles", "SpeakerWave", "SpeakerXMark", "Square2Stack", "Square3Stack3D", "Squares2X2", "SquaresPlus", "Star", "Stop", "StopCircle", "Sun", "Swatch", "TableCells", "Tag", "Ticket", "Trash", "Trophy", "Truck", "Tv", "User", "UserCircle", "UserGroup", "UserMinus", "UserPlus", "Users", "Variable", "VideoCamera", "VideoCameraSlash", "ViewColumns", "ViewfinderCircle", "Wallet", "Wifi", "Window", "Wrench", "WrenchScrewdriver", "XCircle", "XMark", "index"];
var moduleBaseUrl = "https://framer.com/m/hero-icons/";
var lowercaseIconKeyPairs = iconKeys.reduce((res, key) => {
  res[key.toLowerCase()] = key;
  return res;
}, {});
function Icon(props) {
  const { color, selectByList, iconSearch, iconSelection, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, mirrored } = props;
  const isMounted = useRef(false);
  const iconKey = useIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs);
  const [SelectedIcon, setSelectedIcon] = useState(iconKey === "Home" ? Home_default(React) : null);
  async function importModule() {
    try {
      const iconModuleUrl = `${moduleBaseUrl}${iconKey}.js@0.0.28`;
      const module = await import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        iconModuleUrl
      );
      if (isMounted.current) setSelectedIcon(module.default(React));
    } catch {
      if (isMounted.current) setSelectedIcon(null);
    }
  }
  useEffect(() => {
    isMounted.current = true;
    importModule();
    return () => {
      isMounted.current = false;
    };
  }, [iconKey]);
  const isOnCanvas = RenderTarget.current() === RenderTarget.canvas;
  const emptyState = isOnCanvas ? /* @__PURE__ */ _jsx(NullState, {}) : null;
  return /* @__PURE__ */ _jsx(motion.div, { style: { display: "contents" }, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, children: SelectedIcon ? /* @__PURE__ */ _jsx(SelectedIcon, { style: { width: "100%", height: "100%", transform: mirrored ? "scale(-1, 1)" : void 0 }, color }) : emptyState });
}
Icon.displayName = "Hero";
Icon.defaultProps = { width: 24, height: 24, iconSelection: "Home", iconSearch: "Home", color: "#66F", selectByList: true, mirrored: false };
addPropertyControls(Icon, { selectByList: { type: ControlType.Boolean, title: "Select", enabledTitle: "List", disabledTitle: "Search", defaultValue: Icon.defaultProps.selectByList }, iconSelection: { type: ControlType.Enum, options: iconKeys, defaultValue: Icon.defaultProps.iconSelection, title: "Name", hidden: ({ selectByList }) => !selectByList, description: "Find every icon name on the [Hero site](https://heroicons.com/)" }, iconSearch: { type: ControlType.String, title: "Name", placeholder: "Menu, Wifi, Box\u2026", hidden: ({ selectByList }) => selectByList }, mirrored: { type: ControlType.Boolean, enabledTitle: "Yes", disabledTitle: "No", defaultValue: Icon.defaultProps.mirrored }, color: { type: ControlType.Color, title: "Color", defaultValue: Icon.defaultProps.color }, ...defaultEvents });

// /:https://framerusercontent.com/modules/sLdbagka5ptK5hJv3Q06/EOkxIjEEnmaPsWt9O8Ll/FpVImOlv9.js
var HeroFonts = getFonts(Icon);
var enabledGestures = { kbLeGFono: { hover: true }, wGb_k2W7t: { hover: true } };
var cycleOrder = ["wGb_k2W7t", "kbLeGFono"];
var serializationHash = "framer-vK1ZS";
var variantClassNames = { kbLeGFono: "framer-v-n9gcnv", wGb_k2W7t: "framer-v-28ie74" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var numberToPixelString = (value) => {
  if (typeof value !== "number") return value;
  if (!Number.isFinite(value)) return void 0;
  return Math.max(0, value) + "px";
};
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion2.create(React2.Fragment);
var humanReadableVariantMap = { Default: "wGb_k2W7t", Featured: "kbLeGFono" };
var getProps = ({ description, height, id, image, link, newTab, padding, title, width, ...props }) => {
  return { ...props, BsHsqglBl: padding ?? props.BsHsqglBl ?? "10px", gl_YdUGgq: link ?? props.gl_YdUGgq, hqN6wCrd9: newTab ?? props.hqN6wCrd9, IbxlTdagD: description ?? props.IbxlTdagD ?? "Maximize Your Team's Productivity with Suprema", NaoIA95Mh: title ?? props.NaoIA95Mh ?? "Productivity", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "wGb_k2W7t", zPOA1UdC9: image ?? props.zPOA1UdC9 ?? { src: "https://framerusercontent.com/images/GRWmOZOJgbQ4QeaEcxsaskhm4s.svg" } };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, gl_YdUGgq, hqN6wCrd9, zPOA1UdC9, IbxlTdagD, NaoIA95Mh, BsHsqglBl, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "wGb_k2W7t", enabledGestures, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const ref1 = React2.useRef(null);
  const defaultLayoutId = React2.useId();
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsx2(Link, { href: gl_YdUGgq, nodeId: "wGb_k2W7t", openInNewTab: hqN6wCrd9, children: /* @__PURE__ */ _jsxs(motion2.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-28ie74", className, classNames)} framer-y5v43j`, "data-border": true, "data-framer-name": "Default", layoutDependency, layoutId: "wGb_k2W7t", ref: ref ?? ref1, style: { "--1p6fj7c": numberToPixelString(BsHsqglBl), "--border-bottom-width": "1px", "--border-color": "rgb(23, 25, 27)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgb(7, 7, 7)", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, ...style }, variants: { kbLeGFono: { "--border-color": "rgb(54, 54, 59)" } }, ...addPropertyOverrides({ "kbLeGFono-hover": { "data-framer-name": void 0 }, "wGb_k2W7t-hover": { "data-framer-name": void 0 }, kbLeGFono: { "data-framer-name": "Featured" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx2(Image, { background: { alt: "", fit: "fill", sizes: `calc(${componentViewport?.width || "100vw"} - 20px)`, ...toResponsiveImage(zPOA1UdC9) }, className: "framer-192zch3", "data-framer-name": "Image", layoutDependency, layoutId: "ulI9JrHu0", style: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 }, ...addPropertyOverrides({ kbLeGFono: { background: { alt: "", fit: "fill", sizes: `max((${componentViewport?.width || "100vw"} - ${BsHsqglBl * 2}px) * 0.375, 1px)`, ...toResponsiveImage(zPOA1UdC9) } } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsxs(motion2.div, { className: "framer-uch6j", "data-framer-name": "Container", layoutDependency, layoutId: "JhDSqES0P", children: [/* @__PURE__ */ _jsxs(motion2.div, { className: "framer-17m9hp3", "data-framer-name": "Sub Container", layoutDependency, layoutId: "UE0zYhbdT", children: [/* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1c03gk", "data-framer-name": "Container", layoutDependency, layoutId: "JGYKCGdvC", children: /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { style: { "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif', "--framer-font-size": "18px", "--framer-font-weight": "500", "--framer-line-height": "150%", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7e1afdaf-d292-4673-a95e-cd1e9e0cbb00, rgb(51, 204, 51)))" }, children: "Green" }) }), className: "framer-1fdjyy2", "data-framer-name": "Label", fonts: ["Inter-Medium"], layoutDependency, layoutId: "vGmsrsRxV", style: { "--extracted-r6o4lv": "var(--token-7e1afdaf-d292-4673-a95e-cd1e9e0cbb00, rgb(51, 204, 51))", "--framer-paragraph-spacing": "5px" }, text: NaoIA95Mh, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsxs(React2.Fragment, { children: [/* @__PURE__ */ _jsx2(motion2.p, { style: { "--framer-font-size": "20px", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "Hallo" }), /* @__PURE__ */ _jsx2(motion2.p, { children: /* @__PURE__ */ _jsx2(motion2.br, { className: "trailing-break" }) })] }), className: "framer-ye50f9", fonts: ["Inter"], layoutDependency, layoutId: "hJ0Ez8OnO", style: { "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: IbxlTdagD, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsxs(motion2.div, { className: "framer-r35dcm", "data-framer-name": "Button/Text Link Button", layoutDependency, layoutId: "cm5fTZzI2", children: [/* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { style: { "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw", "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif', "--framer-font-size": "18px", "--framer-font-weight": "500", "--framer-line-height": "150%", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8d7e0ee3-cbeb-4f0c-8fae-b1180c2c0a4a, rgb(173, 176, 183)))" }, children: "Start Learning" }) }), className: "framer-wgcgh8", "data-framer-name": "Text", fonts: ["GF;Inter Tight-500"], layoutDependency, layoutId: "fLl6bHsp_", style: { "--extracted-r6o4lv": "var(--token-8d7e0ee3-cbeb-4f0c-8fae-b1180c2c0a4a, rgb(173, 176, 183))", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-9puhlr", "data-framer-name": "Sub Container", layoutDependency, layoutId: "OviBcQ15r", children: /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1owhbnk-container", layoutDependency, layoutId: "rvb1Ved2p-container", children: /* @__PURE__ */ _jsx2(Icon, { color: "var(--token-8d7e0ee3-cbeb-4f0c-8fae-b1180c2c0a4a, rgb(173, 176, 183))", height: "100%", iconSearch: "Home", iconSelection: "ChevronRight", id: "rvb1Ved2p", layoutId: "rvb1Ved2p", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, width: "100%" }) }) }) })] })] })] }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-vK1ZS.framer-y5v43j, .framer-vK1ZS .framer-y5v43j { display: block; }", ".framer-vK1ZS.framer-28ie74 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px; position: relative; text-decoration: none; width: 347px; }", ".framer-vK1ZS .framer-192zch3 { aspect-ratio: 1.4446902654867257 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 226px); position: relative; width: 100%; }", ".framer-vK1ZS .framer-uch6j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 100%; }", ".framer-vK1ZS .framer-17m9hp3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-vK1ZS .framer-1c03gk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-vK1ZS .framer-1fdjyy2 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-vK1ZS .framer-ye50f9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-vK1ZS .framer-r35dcm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-vK1ZS .framer-wgcgh8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-vK1ZS .framer-9puhlr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 14px; }", ".framer-vK1ZS .framer-1owhbnk-container { flex: none; height: 11px; position: relative; width: 11px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vK1ZS.framer-28ie74, .framer-vK1ZS .framer-uch6j, .framer-vK1ZS .framer-17m9hp3, .framer-vK1ZS .framer-1c03gk, .framer-vK1ZS .framer-r35dcm, .framer-vK1ZS .framer-9puhlr { gap: 0px; } .framer-vK1ZS.framer-28ie74 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-vK1ZS.framer-28ie74 > :first-child, .framer-vK1ZS .framer-uch6j > :first-child, .framer-vK1ZS .framer-17m9hp3 > :first-child { margin-top: 0px; } .framer-vK1ZS.framer-28ie74 > :last-child, .framer-vK1ZS .framer-uch6j > :last-child, .framer-vK1ZS .framer-17m9hp3 > :last-child { margin-bottom: 0px; } .framer-vK1ZS .framer-uch6j > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-vK1ZS .framer-17m9hp3 > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-vK1ZS .framer-1c03gk > *, .framer-vK1ZS .framer-9puhlr > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-vK1ZS .framer-1c03gk > :first-child, .framer-vK1ZS .framer-r35dcm > :first-child, .framer-vK1ZS .framer-9puhlr > :first-child { margin-left: 0px; } .framer-vK1ZS .framer-1c03gk > :last-child, .framer-vK1ZS .framer-r35dcm > :last-child, .framer-vK1ZS .framer-9puhlr > :last-child { margin-right: 0px; } .framer-vK1ZS .framer-r35dcm > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }", ".framer-vK1ZS.framer-v-n9gcnv.framer-28ie74 { flex-direction: row; height: 306px; padding: var(--1p6fj7c); width: 1400px; }", ".framer-vK1ZS.framer-v-n9gcnv .framer-192zch3 { aspect-ratio: unset; flex: 0.6 0 0px; height: 100%; width: 1px; }", ".framer-vK1ZS.framer-v-n9gcnv .framer-uch6j { flex: 1 0 0px; width: 1px; }", ".framer-vK1ZS.framer-v-n9gcnv .framer-17m9hp3 { order: 0; }", ".framer-vK1ZS.framer-v-n9gcnv .framer-r35dcm { order: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vK1ZS.framer-v-n9gcnv.framer-28ie74 { gap: 0px; } .framer-vK1ZS.framer-v-n9gcnv.framer-28ie74 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-vK1ZS.framer-v-n9gcnv.framer-28ie74 > :first-child { margin-left: 0px; } .framer-vK1ZS.framer-v-n9gcnv.framer-28ie74 > :last-child { margin-right: 0px; } }", ".framer-vK1ZS.framer-v-28ie74.hover.framer-28ie74 { width: 347px; }", ".framer-vK1ZS.framer-v-28ie74.hover .framer-9puhlr { justify-content: flex-end; }", ".framer-vK1ZS.framer-v-n9gcnv.hover .framer-192zch3 { aspect-ratio: unset; }", '.framer-vK1ZS[data-border="true"]::after, .framer-vK1ZS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerFpVImOlv9 = withCSS(Component2, css, "framer-vK1ZS");
var stdin_default = FramerFpVImOlv9;
FramerFpVImOlv9.displayName = "Resource Card";
FramerFpVImOlv9.defaultProps = { height: 426, width: 347 };
addPropertyControls2(FramerFpVImOlv9, { variant: { options: ["wGb_k2W7t", "kbLeGFono"], optionTitles: ["Default", "Featured"], title: "Variant", type: ControlType2.Enum }, gl_YdUGgq: { title: "Link", type: ControlType2.Link }, hqN6wCrd9: { defaultValue: false, title: "New Tab", type: ControlType2.Boolean }, zPOA1UdC9: { __defaultAssetReference: "data:framer/asset-reference,GRWmOZOJgbQ4QeaEcxsaskhm4s.svg?originalFilename=image+%283%29.svg&preferredSize=auto", title: "Image", type: ControlType2.ResponsiveImage }, IbxlTdagD: { defaultValue: "Maximize Your Team's Productivity with Suprema", title: "Description", type: ControlType2.String }, NaoIA95Mh: { defaultValue: "Productivity", title: "Title", type: ControlType2.String }, BsHsqglBl: { defaultValue: "10px", title: "Padding", type: ControlType2.Padding } });
addFonts(FramerFpVImOlv9, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { family: "Inter Tight", source: "google", style: "normal", url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2", weight: "500" }] }, ...HeroFonts], { supportsExplicitInterCodegen: true });

// virtual:resource-card
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "wGb_k2W7t",
  "2xl": "kbLeGFono"
};
stdin_default.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "D7JfQzcFE": { "path": "/old-home" }, "JLBLCL477": { "path": "/old-home-2" }, "wFUCP7EbJ": { "path": "/" }, "j20c7CBt8": { "path": "/contact" }, "dCQba3aXF": { "path": "/404" }, "TRcv32SXA": { "path": "/termsofservice" }, "B5dfGT1pj": { "path": "/privacypolicy" }, "DBq8BLySG": { "path": "/resources/:slug" }, "Z3WAV4g6R": { "path": "/resources" }, "VXGmiTIXy": { "path": "/post-library" }, "e5qG0Ggci": { "path": "/xcoach" }, "qkAMGsJca": { "path": "/modules/:slug" }, "a3NtNdbRe": { "path": "/blog" }, "djq5xP7VW": { "path": "/blog-2" }, "oRREYimL5": { "path": "/content-calendar-form" }, "BkhRBgpzH": { "path": "/accepttos" }, "Ame28p5hH": { "path": "/walletlogin" }, "UzTzpUG6b": { "path": "/tos-platform" }, "OgIbwVnYR": { "path": "/tosandprivacy" }, "gaWcayxzI": { "path": "/privacy-platform" }, "Z8LQigAb0": { "path": "/signin" }, "VL1ylP_dL": { "path": "/signup" }, "dOUf4DGqu": { "path": "/forgot-password" }, "y3kJvef3X": { "path": "/dashboard" }, "er0IY7Kbu": { "path": "/feedback" }, "PnwAXvkqj": { "path": "/contactplatform" }, "LvVkreb1I": { "path": "/platformguide" }, "OjqC4VzT2": { "path": "/content-calendar/:slug" }, "F7W0Fm0A4": { "path": "/content-calendar/:slug/marketer" }, "NWH0m1ji0": { "path": "/content-calendar/:slug/coach" }, "OYMtZIuTD": { "path": "/content-calendar/:slug/founder" }, "PgGBdNejT": { "path": "/content-calendar/:slug/web-developer" }, "oHcEjPfak": { "path": "/content-calendar/:slug/freelancer" }, "PEObos5r6": { "path": "/content-calendar/:slug/content-creator" }, "pzHXEqCVr": { "path": "/privacy-policy" }, "aaK5IL9zW": { "path": "/terms-of-service" }, "WSOjyoevd": { "path": "/changelog" }, "TxPzyHuP8": { "path": "/thankyou" }, "hdyhYnHJZ": { "path": "/post-library/:slug" }, "tBLHi6Uzh": { "path": "/new-content-calendar" }, "ewtpCRU7d": { "path": "/test" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default,
          variants: defaultResponsiveVariants,
          ...rest
        }
      ),
      framerSiteId: "152090e49416073430ac9c758337b4c915a3d2ab480672003930cf9741316417",
      locale,
      locales
    }
  );
};
function ComponentWithRoot({ locale, ...rest }) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: {
        "D7JfQzcFE": {
          "path": "/old-home"
        },
        "JLBLCL477": {
          "path": "/old-home-2"
        },
        "wFUCP7EbJ": {
          "path": "/"
        },
        "j20c7CBt8": {
          "path": "/contact"
        },
        "dCQba3aXF": {
          "path": "/404"
        },
        "TRcv32SXA": {
          "path": "/termsofservice"
        },
        "B5dfGT1pj": {
          "path": "/privacypolicy"
        },
        "DBq8BLySG": {
          "path": "/resources/:slug"
        },
        "Z3WAV4g6R": {
          "path": "/resources"
        },
        "VXGmiTIXy": {
          "path": "/post-library"
        },
        "e5qG0Ggci": {
          "path": "/xcoach"
        },
        "qkAMGsJca": {
          "path": "/modules/:slug"
        },
        "a3NtNdbRe": {
          "path": "/blog"
        },
        "djq5xP7VW": {
          "path": "/blog-2"
        },
        "oRREYimL5": {
          "path": "/content-calendar-form"
        },
        "BkhRBgpzH": {
          "path": "/accepttos"
        },
        "Ame28p5hH": {
          "path": "/walletlogin"
        },
        "UzTzpUG6b": {
          "path": "/tos-platform"
        },
        "OgIbwVnYR": {
          "path": "/tosandprivacy"
        },
        "gaWcayxzI": {
          "path": "/privacy-platform"
        },
        "Z8LQigAb0": {
          "path": "/signin"
        },
        "VL1ylP_dL": {
          "path": "/signup"
        },
        "dOUf4DGqu": {
          "path": "/forgot-password"
        },
        "y3kJvef3X": {
          "path": "/dashboard"
        },
        "er0IY7Kbu": {
          "path": "/feedback"
        },
        "PnwAXvkqj": {
          "path": "/contactplatform"
        },
        "LvVkreb1I": {
          "path": "/platformguide"
        },
        "OjqC4VzT2": {
          "path": "/content-calendar/:slug"
        },
        "F7W0Fm0A4": {
          "path": "/content-calendar/:slug/marketer"
        },
        "NWH0m1ji0": {
          "path": "/content-calendar/:slug/coach"
        },
        "OYMtZIuTD": {
          "path": "/content-calendar/:slug/founder"
        },
        "PgGBdNejT": {
          "path": "/content-calendar/:slug/web-developer"
        },
        "oHcEjPfak": {
          "path": "/content-calendar/:slug/freelancer"
        },
        "PEObos5r6": {
          "path": "/content-calendar/:slug/content-creator"
        },
        "pzHXEqCVr": {
          "path": "/privacy-policy"
        },
        "aaK5IL9zW": {
          "path": "/terms-of-service"
        },
        "WSOjyoevd": {
          "path": "/changelog"
        },
        "TxPzyHuP8": {
          "path": "/thankyou"
        },
        "hdyhYnHJZ": {
          "path": "/post-library/:slug"
        },
        "tBLHi6Uzh": {
          "path": "/new-content-calendar"
        },
        "ewtpCRU7d": {
          "path": "/test"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default, { ...rest }),
      framerSiteId: "152090e49416073430ac9c758337b4c915a3d2ab480672003930cf9741316417",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default);
export {
  ComponentWithRoot as default
};
