// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI_IfT85J0B9Fe0VfOtOxYK4_ZI_Htv9s",
  authDomain: "dansschedule-fd2f8.firebaseapp.com",
  projectId: "dansschedule-fd2f8",
  storageBucket: "dansschedule-fd2f8.appspot.com",
  messagingSenderId: "102074292781",
  appId: "1:102074292781:web:83381111dbe9b605a376a4",
  measurementId: "G-9R1D3Y1PY3",
};

// Check if any Firebase apps are already initialized, if not, initialize one
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // If already initialized, use that instance
}

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default auth;
