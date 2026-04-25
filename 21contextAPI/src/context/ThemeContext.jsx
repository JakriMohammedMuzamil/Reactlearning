import React, { createContext} from 'react'

//context used for comsuming keep same as file name as it is used mostly
export const ThemeContext = createContext()

//function tht returns jsx its a component used for wrapping
const ThemeProvider = ({children}) => {

  return (
        //providing value using context and passing children so whtevr it wrapps to use this value
        //if children not pass APP cant use this value so APP is child of Themeprovider it shld use this value
        <ThemeContext.Provider  value='muzamil'>
            {children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider
