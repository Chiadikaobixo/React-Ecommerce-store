import React, { createContext, useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase";

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)

                userRef.snapShot(snapShot => {
                    setUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                    setLoading(false)
                })
            }else{
                setUser(userAuth)
                setLoading(false)
            }
        })
        return () => unsubscribeFromAuth()
    })
    const contextValue = { user, loading}

    return(
        <UserContext.Provider value={contextValue}>
        { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider