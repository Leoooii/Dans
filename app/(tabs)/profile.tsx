import { Text, View } from "react-native";
import { useAuth } from "@/context/ctx";
import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase"; // Asigură-te că ai importat corect Firestore

type UserData = {
  displayName: string;
  email: string;
  role: string;
  subscriptionStatus: string;
  sex: string;
};

const Profile = () => {
  const { user, signOutUser, loading } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null); // Specificăm tipul așteptat
  const [fetchingUser, setFetchingUser] = useState(true);

  useEffect(() => {
    // Dacă utilizatorul nu este logat, redirectează către pagina de sign-in
    if (!loading && !user) {
      router.replace("/(auth)/sign-in");
    }

    const fetchUserData = async () => {
      if (user) {
        try {
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("email", "==", user.email));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const data = userDoc.data() as UserData; // Convertim datele la tipul UserData
            setUserData(data);
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        } finally {
          setFetchingUser(false); // Setăm fetchingUser chiar și în cazul unei erori
        }
      }
    };

    // Apelează funcția asincronă
    fetchUserData();
  }, [loading, user]);

  if (loading || fetchingUser) {
    return <Text>Loading...</Text>;
  }

  if (!user || !userData) {
    return null;
  }

  return (
    <View className="bg-amber-500 p-1">
      <Text>Name: {userData.displayName || user.displayName}</Text>
      <Text>Email: {userData.email || user.email}</Text>
      <Text>Role: {userData.role}</Text>
      <Text>Subscription Status: {userData.subscriptionStatus}</Text>
      <Text>Sex: {userData.sex}</Text>
      <CustomButton title={"logout"} onPress={signOutUser} />
    </View>
  );
};

export default Profile;
