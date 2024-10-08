import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable } from "expo-router/build/views/Pressable";
import { AntDesign } from "@expo/vector-icons";

export default function CustomDrawerContent(props: any) {
  const { top, bottom } = useSafeAreaInsets();
  // const { signOutUser } = useAuth();

  return (
    <View style={{ flex: 1, backgroundColor: "#2A2D48" }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#2A2D48", paddingTop: top }}
      >
        <View style={{ padding: 5, alignItems: "center" }}>
          {/* Align items centers the image horizontally */}
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode={"contain"}
            style={{ width: 200, height: 200 }} // Set specific width and height
          />
        </View>
        <View style={{ backgroundColor: "orange" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#dde3fe",
          borderTopWidth: 1,
          padding: 20,
          paddingTop: 20 + bottom,
        }}
      >
        <Pressable
          onPress={() => {
            console.log("Navigating to root...");
            // signOutUser().then(() => {
            //   router.replace("../sign-in");
            // });
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#ccc" : "#f0f0f0",
              padding: 10,
              borderRadius: 5,
              display: "flex",
              flexDirection: "row",
              gap: 10,
            },
          ]}
        >
          <AntDesign name="logout" size={24} color="black" />
          <Text style={{ color: "black" }}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}
