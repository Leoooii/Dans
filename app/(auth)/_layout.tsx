import { Stack } from "expo-router";
import { AuthProvider } from "@/context/ctx";

const Layout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};
export default Layout;
