import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const grupe = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View className="bg-[#2A2D48] flex-1 p-5">
      <Text className={"text-white"}>Lista grupe</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        mode={"dialog"}
        style={{ backgroundColor: "orange", marginTop: 20 }}
      >
        <Picker.Item label="Alexandra - Alege grupa" value="" enabled={false} />
        <Picker.Item label="Grupa 1" value="Grupa 1" />
        <Picker.Item label="Grupa 2" value="Grupa 2" />
      </Picker>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        mode={"dialog"}
        style={{ backgroundColor: "orange" }}
      >
        <Picker.Item label="Cata - Alege grupa" value="" enabled={false} />
        <Picker.Item label="Grupa 1" value="Grupa 1" />
        <Picker.Item label="Grupa 2" value="Grupa 2" />
      </Picker>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        mode={"dialog"}
        style={{ backgroundColor: "orange" }}
      >
        <Picker.Item label="Miriam - Alege grupa" value="" enabled={false} />
        <Picker.Item label="Grupa 1" value="Grupa 1" />
        <Picker.Item label="Grupa 2" value="Grupa 2" />
      </Picker>
    </View>
  );
};

export default grupe;
