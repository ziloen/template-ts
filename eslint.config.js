import { format, typescript } from '@ziloen/eslint-config'

/** @type { import("@ziloen/eslint-config").ConfigArray } */
export default [
  ...typescript({ project: ['./tsconfig.json'] }),
  ...format({ project: ['./tsconfig.json'] }),
]