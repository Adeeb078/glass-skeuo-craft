import { useEffect, useState } from "react";
import { Check, Moon, Palette, Sun } from "lucide-react";
import { applyTheme, DEFAULT_THEME, STORAGE_KEY, THEMES, type ThemeId } from "./theme";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dusk" : DEFAULT_THEME);
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const select = (id: ThemeId) => {
    setTheme(id);
    applyTheme(id);
    window.localStorage.setItem(STORAGE_KEY, id);
    setOpen(false);
  };

  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0]!;
  const nextMode = current.dark ? "sand" : "dusk";

  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:top-6">
      <div className="glass-panel press flex items-center gap-1 rounded-full p-1">
        <button
          type="button"
          onClick={() => select(nextMode)}
          aria-label={current.dark ? "Switch to light theme" : "Switch to dark theme"}
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
        >
          {current.dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Choose a theme"
          className="flex h-9 items-center gap-2 rounded-full px-3 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">{current.label}</span>
        </button>
      </div>

      {open && (
        <div className="glass-panel w-60 animate-scale-in rounded-2xl p-2">
          <p className="px-2 pb-2 pt-1 font-display text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            Themes
          </p>
          <ul className="flex flex-col gap-1">
            {THEMES.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => select(t.id)}
                  className="press flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-foreground/5"
                >
                  <span className="emboss-sm flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                    <span className="flex h-full w-full">
                      {t.swatch.map((c) => (
                        <span key={c} className="h-full flex-1" style={{ background: c }} />
                      ))}
                    </span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {t.label}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">{t.hint}</span>
                  </span>
                  {t.id === theme && <Check className="h-4 w-4 shrink-0 text-primary" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
