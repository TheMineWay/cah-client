import { createContext, useContext, useState } from "react";
import { ProviderError } from "../../errors/providers/provider.error";

export enum Themes {
  light = "light",
  dark = "dark",
}

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

const DEFAULT_THEME: Theme = {
  theme: Themes.dark,
};

type Props = {
  children: JSX.Element;
};

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

interface Theme {
  theme: Themes;
}

export const themes: Themes[] = [Themes.light, Themes.dark];

export function useThemeProvider() {
  const context = useContext(ThemeContext);

  if (!context) throw new ProviderError();

  return context;
}
