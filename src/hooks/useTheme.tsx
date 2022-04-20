import { createContext, useContext, useState } from "react";
import { ThemeProvider as ThemeProviderSC } from 'styled-components'

type ThemeType = {
  primary: string,
  primaryShaded: string,
  secondary: string,
  background: string,
  background2:string,
}
const themes:ThemeType[] = [
  {
    primary: '#303030',
    primaryShaded: '#404040',
    secondary: '#fafafa',
    background: '#eff0ba',
    background2:'#eeeef1',
  },
  {
    primary: '#fafafa',
    primaryShaded: '#ddd',
    secondary: '#303030',
    background: '#2f2e52',
    background2:'#0a0a16',
  },
]

type IThemeProvider = {
  theme:ThemeType
  useTheme():void
}

export const ThemeContext = createContext<IThemeProvider>({
  theme:themes[0],
  useTheme:()=>{},
})

export function useTheme():IThemeProvider{
  return useContext(ThemeContext)
}

export type ThemeProviderProps = {
  children: React.ReactNode
}
export function ThemeProvider({children}:ThemeProviderProps){
  const [theme,setTheme] = useState<ThemeType>(themes[0])

  function switchTheme(){
    if (theme === themes[0]) setTheme(themes[1])
    else setTheme(themes[0]);
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      useTheme,
    }}>
      <ThemeProviderSC theme={theme}>
        {children}
      </ThemeProviderSC>
    </ThemeContext.Provider>
  )
}