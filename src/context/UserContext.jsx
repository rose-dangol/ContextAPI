import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserProvider = ({children})=>{
{/* 
    yo matra garda chai everytime refresh garda feri initial state lirako thiyo
    ignoring localStorage

    const [user, setUser] = useState({   
            name :'',
            isLoggedIn : false,
    })
*/}
    const savedUser = (localStorage.getItem('user')) 
    const [user, setUser] = useState(()=>{   
        return savedUser? JSON.parse(savedUser):{
            name :'',
            isLoggedIn : false,
        }
    })

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user))
    },[user]);
    
    const login = (username)=>{
        setUser((prev)=>({
            ...prev,
            name:username,
            isLoggedIn: true
        }))
        console.log(user.isLoggedIn) 
        console.log(user.name)
    }
    const logout = () =>{
        setUser({
            name : "",
            isLoggedIn : false,
        })
        localStorage.removeItem('user')
    }
    const value = {
        user,
        login,
        logout,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = ()=>{
    const context = useContext(UserContext)
    if(!context){
        throw new Error('useUser must be used within UserProvider');
    }
    return context
}
export {UserProvider, useUser};