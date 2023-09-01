import React, { useState, useEffect, useContext } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {   
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signOut() {
        return auth.signOut();
    }

    function passwordReset(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function changeEmail(email) {
        return currentUser.updateEmail(email);
    }

    function changePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signUp,
        signIn,
        signOut,
        passwordReset,
        changeEmail,
        changePassword
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}