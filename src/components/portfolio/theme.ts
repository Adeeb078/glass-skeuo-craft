export type ThemeId = "sand" | "sage" | "dusk" | "midnight" | "noir";

export type ThemeOption = {
  id: ThemeId;
  label: string;
  hint: string;
  dark: boolean;
  swatch: [string, string, string];
};

export const THEMES: ThemeOption[] = [
  {
    id: "sand",
    label: "Warm Sand",
    hint: "Light · tactile neutrals",
    dark: false,
    swatch: ["oklch(0.972 0.009 84)", "oklch(0.9 0.02 82)", "oklch(0.55 0.05 68)"],
  },
  {
    id: "sage",
    label: "Sage Studio",
    hint: "Light · calm green",
    dark: false,
    swatch: ["oklch(0.965 0.015 141)", "oklch(0.89 0.03 143)", "oklch(0.5 0.07 152)"],
  },
  {
    id: "dusk",
    label: "Dusk Clay",
    hint: "Dark · warm amber",
    dark: true,
    swatch: ["oklch(0.21 0.016 60)", "oklch(0.32 0.021 62)", "oklch(0.78 0.09 68)"],
  },
  {
    id: "midnight",
    label: "Midnight Indigo",
    hint: "Dark · electric indigo",
    dark: true,
    swatch: ["oklch(0.17 0.038 266)", "oklch(0.27 0.045 268)", "oklch(0.7 0.16 272)"],
  },
  {
    id: "noir",
    label: "Noir & Gold",
    hint: "Dark · high contrast",
    dark: true,
    swatch: ["oklch(0.14 0.004 90)", "oklch(0.24 0.004 90)", "oklch(0.82 0.12 88)"],
  },
];

export const STORAGE_KEY = "portfolio-theme";
export const DEFAULT_THEME: ThemeId = "sand";

export function applyTheme(id: ThemeId) {
  const theme = THEMES.find((t) => t.id === id) ?? THEMES[0]!;
  const root = document.documentElement;
  root.dataset["theme"] = theme.id;
  root.classList.toggle("dark", theme.dark);
  root.style.colorScheme = theme.dark ? "dark" : "light";
}
