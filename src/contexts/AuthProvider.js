import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signup using email and password
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in using google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign in using github
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // profile info updating
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  //  sign in with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signUp,
        googleSignIn,
        githubSignIn,
        login,
        loading,
        setLoading,
        updateUserProfile,
        user,
        setUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
