// AuthContext.tsx
import React, { createContext, useContext, useState } from "react";
import auth, { db } from "../firebase"; // Configurarea Firebase
import { signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

interface AuthContextType {
  user: any;
  loading: boolean;
  allUsers: Users[];
  signIn: (email: string, password: string) => Promise<boolean>; // Modificat aici
  signOutUser: () => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<boolean>;
  test: string;
}

interface Users {
  displayName: string;
  email: string;
  id: string;
  role: string;
  sex: string;
  subscriptionStatus: string;
  verified: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [allUsers, setAllUsers] = useState<Users[]>([
    // {
    //   displayName: "Test User",
    //   email: "test@example.com",
    //   id: "1",
    //   role: "user",
    //   sex: "male",
    //   subscriptionStatus: "free",
    //   verified: true,
    // },
  ]);
  const [test, setTest] = useState("neefectuat");

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //     setLoading(false);
  //   });
  //
  //   return () => unsubscribe();
  // }, []);

  const signUp = async (email: string, password: string, displayName: string) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: displayName });

      const userRef = doc(db, "users", userCredential.user.uid);
      const userData = {
        displayName: displayName,
        email: userCredential.user.email,
        verified: false,
        subscriptionStatus: "free",
        sex: "",
        role: "user",
        createdAt: new Date(),
      };
      await setDoc(userRef, userData);

      console.log(userData);
      setUser(userData);

      return true;
    } catch (error) {
      console.log("Autentificare nereusita", error);

      return false;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userRef = doc(db, "users", userCredential.user.uid);
      const userDoc = await getDoc(userRef);
      console.log("1");
      if (userDoc.exists()) {
        console.log("2");
        const userData = userDoc.data();
        // setUser({ uid: userCredential.user.uid, ...userData });

        setUser({ nume: "Leo" });
        setTest("efectuat");

        if (userData.role === "admin") {
          const usersCollectionRef = collection(db, "users");
          const querySnapshot = await getDocs(usersCollectionRef);

          const usersList = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              displayName: data.displayName ?? "aaa", // Adaugă un fallback
              email: data.email ?? "aaa", // Adaugă un fallback
              role: data.role ?? "aaa", // Adaugă un fallback
              sex: data.sex ?? "aaa", // Adaugă un fallback
              subscriptionStatus: data.subscriptionStatus ?? "aaa", // Adaugă un fallback
              verified: data.verified ?? false, // Adaugă un fallback
            } as Users; // Asigură-te că este de tip Users
          });

          console.log("Setting allUsers withaasdas:", usersList); // Verifică aici
          // setAllUsers((prevUsers) => [
          //   ...prevUsers,
          //   {
          //     displayName: "Test User",
          //     email: "test@example.com",
          //     id: "1",
          //     role: "user",
          //     sex: "male",
          //     subscriptionStatus: "free",
          //     verified: true,
          //   },
          // ]);
          // setTest("efectuat");

          // setAllUsers(usersList);
        }
      }

      return true; // Autentificare reușită
    } catch (error) {
      console.error("Authentication failed:", error);
      return false; // Autentificare eșuată
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth); // Corecție: utilizare signOut din firebase/auth
      // router.navigate("/");
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ allUsers, user, signUp, loading, signIn, signOutUser, test }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
