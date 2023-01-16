import React, { useContext, useState } from 'react'
import { createContext } from 'react'
export const UserContext = createContext()

const ContextUser = ({ children }) => {
const [newUser , setNewUser]= useState(false)
console.log(newUser)
const userInfo = {newUser , setNewUser}
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextUser