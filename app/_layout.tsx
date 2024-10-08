import "react-native-reanimated"; // Prevent the splash screen from auto-hiding before asset loading is complete.
// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();
import { StyleSheet } from "react-native";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "@/context/ctx";
import { Stack, useRouter, useSegments } from "expo-router";

export default function RootLayout() {
  const [count, setCount] = useState(0);
  // const { signIn, user, loading } = useAuth();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const router = useRouter();
  const segments = useSegments();

  // useEffect(() => {
  //   if (user) {
  //     console.log("este");
  //     router.replace("/(auth)/sign-in");
  //   } else {
  //     console.log("nu este");
  //     router.replace("/(auth)/welcome");
  //   }
  // }, [user]);

  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(tabs)"
            options={{
              title: "Acasa",
              headerShown: false,
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
