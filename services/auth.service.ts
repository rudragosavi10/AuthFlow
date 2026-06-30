import {
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

import type { LoginCredentials, SignupCredentials } from "@/types/auth";

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

class AuthService {
  async login({
    email,
    password,
  }: LoginCredentials): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async signup({
    name,
    email,
    password,
  }: SignupCredentials): Promise<UserCredential> {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (credential.user) {
      await updateProfile(credential.user, {
        displayName: name,
      });

      await setDoc(
        doc(db, "users", credential.user.uid),
        {
          uid: credential.user.uid,
          name,
          email,
          photoURL: credential.user.photoURL,
          provider: "password",
          createdAt: serverTimestamp(),
        },
        { merge: true }
      );
    }

    return credential;
  }

  async signInWithGoogle(): Promise<UserCredential> {
    const credential = await signInWithPopup(
      auth,
      googleProvider
    );

    const userRef = doc(db, "users", credential.user.uid);

    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      await setDoc(userRef, {
        uid: credential.user.uid,
        name: credential.user.displayName,
        email: credential.user.email,
        photoURL: credential.user.photoURL,
        provider: "google",
        createdAt: serverTimestamp(),
      });
    }

    return credential;
  }

  async resetPassword(email: string): Promise<void> {
    await sendPasswordResetEmail(auth, email);
  }

  async logout(): Promise<void> {
    await signOut(auth);
  }
}

export const authService = new AuthService();