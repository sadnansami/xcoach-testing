// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 152090e494160734 "XCoach Live", do not edit manually */
// /:https://framer.com/m/framer/icon-nullstate.js@0.7.0
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
var containerStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(149, 149, 149, 0.1)",
  border: "1px dashed rgba(149, 149, 149, 0.15)",
  color: "#a5a5a5",
  flexDirection: "column"
};
var NullState = /* @__PURE__ */ React.forwardRef((_, ref) => {
  return /* @__PURE__ */ _jsx("div", {
    style: emptyStateStyle,
    ref
  });
});

// /:https://framerusercontent.com/modules/Ma20hU0GGRxLxZphbywl/OSpwWF91FHPVFyQJjMHt/utils.js
import { useMemo } from "react";
import { ControlType } from "unframer";
var defaultEvents = { onClick: { type: ControlType.EventHandler }, onMouseDown: { type: ControlType.EventHandler }, onMouseUp: { type: ControlType.EventHandler }, onMouseEnter: { type: ControlType.EventHandler }, onMouseLeave: { type: ControlType.EventHandler } };
var findByArray = (arr, search) => arr.find((a) => a.toLowerCase().includes(search));
function useIconSelection(iconKeys, selectByList, iconSearch = "", iconSelection, lowercaseIconKeyPairs) {
  const iconSearchResult = useMemo(() => {
    if (iconSearch == null || (iconSearch === null || iconSearch === void 0 ? void 0 : iconSearch.length) === 0) return null;
    const iconSearchTerm = iconSearch.toLowerCase().replace(/-|\s/g, "");
    var _iconSearchTerm;
    const searchResult = (_iconSearchTerm = lowercaseIconKeyPairs[iconSearchTerm]) !== null && _iconSearchTerm !== void 0 ? _iconSearchTerm : findByArray(iconKeys, iconSearchTerm);
    return searchResult;
  }, [iconSelection, iconSearch]);
  const name = selectByList ? iconSelection : iconSearchResult;
  return name;
}

export {
  NullState,
  defaultEvents,
  useIconSelection
};
