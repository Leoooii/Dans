import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import InputField from "@/components/InputField";
import { useEffect, useState } from "react";
import data from "../../data/MockData";
import { router } from "expo-router";
import { useAuth } from "@/context/ctx";

const dansatori = () => {
  const [filteredName, setFilteredName] = useState("");
  const { allUsers, test, user } = useAuth();

  useEffect(() => {
    console.log("useri:", allUsers, "rezultat test:", test, "user:", user);
  }, [allUsers, test, user]);

  const filteredData = data.filter((item) =>
    item.nume.toLowerCase().includes(filteredName.toLowerCase()),
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }} // Asigură-te că ocupă tot spațiul
    >
      <SafeAreaView className="bg-[#2A2D48] flex-1 px-5">
        <FlatList
          data={filteredData}
          ListHeaderComponent={
            <InputField
              label={"Cauta dansatori"}
              labelStyle={"text-white"}
              placeholder={"Leo..."}
              value={filteredName}
              onChangeText={setFilteredName}
            />
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={"bg-white p-3 flex-row justify-between mt-2 rounded-2xl"}
              onPress={() => {
                router.push({
                  pathname: "/(tabs)/DetaliiDansator", // Calea către pagina de detalii
                  params: {
                    id: item.id,
                    nume: item.nume,
                    activ: item.activ.toString(),
                  }, // Parametrii trimisi
                });
              }}
            >
              <Text className={"text-xl"}>{item.nume}</Text>
              {item.activ ? (
                <View className={"flex-row gap-1"}>
                  <Text className="text-green-500">activ</Text>
                  <AntDesign name="checksquareo" size={24} color="green" />
                </View>
              ) : (
                <View className={"flex-row gap-1"}>
                  <Text className="text-red-400"> inactiv</Text>
                  <AntDesign name="closesquareo" size={24} color="black" />
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default dansatori;
