import "react-native-reanimated"; // Prevent the splash screen from auto-hiding before asset loading is complete.
// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();
import { Text, View } from "react-native";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { AuthProvider } from "@/context/ctx";

export default function RootLayout() {
  const [count, setCount] = useState(0);
  // const { signIn, user, loading } = useAuth();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <Drawer
          drawerContent={CustomDrawerContent}
          screenOptions={{
            drawerHideStatusBarOnOpen: true,
            drawerActiveBackgroundColor: "white",
            drawerActiveTintColor: "red",
            drawerLabelStyle: { marginLeft: 0 },
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              headerTitle: ({ tintColor }) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome
                    name="dashboard"
                    size={24}
                    color={tintColor} // Use tintColor for the icon color
                    style={{ marginRight: 10 }}
                  />
                  <Text
                    style={{
                      color: tintColor, // Use tintColor for the text color
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    Acasa
                  </Text>
                </View>
              ),
              headerShown: true,
              drawerLabel: "Acasa",
              headerStyle: { backgroundColor: "#D9D9D9" },
              headerTintColor: "black", // This color will now apply to both text and icon
              headerTitleStyle: {
                fontWeight: "bold",
              },
              drawerIcon: ({ size, color }) => (
                <FontAwesome name="dashboard" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="dansatori"
            options={{
              headerTitle: ({ tintColor }) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome6
                    name="people-group"
                    size={24}
                    color="black"
                    style={{ marginRight: 10 }}
                  />
                  <Text
                    style={{
                      color: tintColor, // Use tintColor for the text color
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    Dansatori
                  </Text>
                </View>
              ),
              headerShown: true,
              drawerLabel: "Dansatori",
              headerStyle: { backgroundColor: "#D9D9D9" },
              headerTintColor: "black", // This color will now apply to both text and icon
              headerTitleStyle: {
                fontWeight: "bold",
              },
              drawerIcon: ({ size, color }) => (
                <FontAwesome6 name="people-group" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="profile"
            options={{
              title: "Profil",
              drawerIcon: ({ size, color }) => (
                <Ionicons name="person-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="grupe"
            options={{
              title: "Grupe",
              drawerIcon: ({ size, color }) => (
                <FontAwesome name="group" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="DetaliiDansator"
            options={{
              title: "",
              drawerItemStyle: { display: "none" },
            }}
          />

          <Drawer.Screen
            name="not-found"
            options={{
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
        </Drawer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
