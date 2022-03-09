import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { getDatabase,ref,set } from "firebase/database";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword, updateProfile } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const database = getDatabase();

  function signup(email, password,github,pref_domain,pref_stack,user_name) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        set(ref(database, 'users/' + auth.currentUser.uid), {
          userEmail: email,
          githubLink: github,
          domain: pref_domain,
          stack: pref_stack,
          username: user_name,

        })
      })
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePasswor(password) {
    return updatePassword(auth.currentUser, password)
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
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePasswor,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
