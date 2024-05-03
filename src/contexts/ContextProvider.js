import React, {createContext , useState , useContext} from 'react';
import UserProfile from './../components/UserProfile';
const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    UserProfile:false,
    notification: false,
}

export const ContextProvider = ({children}) => {

    const [activeMenu , setActiveMenu] = useState (true);

    const [isClicked, setIsClicked] = useState (initialState)
     
    const [screenSize , setScreenSize] = useState (undefined)

    const handleClick =(clicked)  =>{
        setIsClicked({...initialState, [clicked]: true})
    }

    return (
        <StateContext.Provider   
        value= {{
        activeMenu ,
        setActiveMenu,
        isClicked , 
        setIsClicked,
        handleClick,
        screenSize,setScreenSize
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext)