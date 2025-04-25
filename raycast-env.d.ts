/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `clipboard-concatenator` command */
  export type ClipboardConcatenator = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `clipboard-concatenator` command */
  export type ClipboardConcatenator = {
  /** Prepend */
  "prefix": string,
  /** Append */
  "suffix": string
}
}

