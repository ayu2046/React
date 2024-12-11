import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    theme: 'dark',
    lighttheme : () =>{},
    darktheme : () =>{}
})

//creating a provider to provide the theme data to the consumer
export const ThemeProvider = ThemeContext.Provider

//creating a function that can directly use the context and can give you access to the data
export default function useTheme(){

    return useContext(ThemeContext)
}