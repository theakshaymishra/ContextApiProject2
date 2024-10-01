import { createContext, useContext } from "react";

 export const UserContext = createContext({
    themeMode : "light" ,
    darkTheme: () => {},
    lightTheme: () => {},
 });

//  We can also give Default value as variable and Methods to createContext..

// We can also make provider here..

export const ThemeProvider = UserContext.Provider;

// Now creating Custom Hook

export default function useTheme(){
    return useContext(UserContext);
}