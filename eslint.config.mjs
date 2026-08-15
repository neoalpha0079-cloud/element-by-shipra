import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const featureIsolationZones = readdirSync(path.join(dirname, "features"), {
  withFileTypes: true,
})
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({
    target: `./features/${entry.name}`,
    from: "./features",
    except: [`./${entry.name}`],
  }));

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { import: importPlugin },
    settings: {
      "import/resolver": {
        typescript: { project: "./tsconfig.json" },
      },
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "import/no-unresolved": "error",
      "import/no-cycle": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            { target: "./shared", from: "./features" },
            { target: "./shared", from: "./widgets" },
            { target: "./shared", from: "./app" },
            { target: "./features", from: "./widgets" },
            { target: "./features", from: "./app" },
            { target: "./widgets", from: "./app" },
            ...featureIsolationZones,
          ],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
    "public/**",
  ]),
]);

export default eslintConfig;
