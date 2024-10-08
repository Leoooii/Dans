import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import data from "../../data/MockData";
import { useAuth } from "@/context/ctx";

export default function Page() {
  const { allUsers, user, test } = useAuth();

  return (
    <View className="flex-1 gap-y-5  items-center bg-[#2A2D48] p-2 pt-10 ">
      {/*<Text>Felicitari! Ai intrat in aplicatie</Text>*/}
      {/*<Button*/}
      {/*  title={"iesi"}*/}
      {/*  onPress={() => {*/}
      {/*    router.replace("..");*/}
      {/*  }}*/}
      {/*/>*/}
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => router.navigate("/(tabs)/dansatori")}
      >
        <Text className={"text-2xl text-black font-JakartaSemiBold"}>{data.length} Dansatori</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => router.navigate("/(tabs)/grupe")}
      >
        <Text className={"text-2xl text-black font-JakartaSemiBold"}>13 grupe active</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text className={"text-2xl text-black font-JakartaSemiBold"}>98 abonamente active</Text>
      </TouchableOpacity>
    </View>
  );
}
