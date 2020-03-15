import React, { createContext, useState } from "react";

import {
  getCurrentUser,
  createUserProfileDocument,
  auth,
  googleProvider
} from "../../firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  checkUserAuth: () => {},
  signOut: () => {},
  signInWithGoogle: () => {},
  signInWithCredentials: () => {},
  signUp: () => {}
});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const syncUser = async userAuth => {
    const userRef = await createUserProfileDocument(userAuth);
    if (userRef) {
      const userSnapshot = await userRef.get();

      setCurrentUser({
        id: userSnapshot.id,
        ...userSnapshot.data()
      });
    }
  };
  const checkUserAuth = async () => {
    const userAuth = await getCurrentUser();
    await syncUser(userAuth);
  };
  const signOut = async () => {
    await auth.signOut();
    setCurrentUser(null);
  };
  const signInWithGoogle = async () => {
    const { user } = await auth.signInWithPopup(googleProvider);
    await syncUser(user);
  };
  const signInWithCredentials = async ({ email, password }) => {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    await syncUser(user);
  };
  const signUp = async ({ displayName, email, password }) => {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user, { displayName });
    await syncUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        checkUserAuth,
        signOut,
        signInWithGoogle,
        signInWithCredentials,
        signUp
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
