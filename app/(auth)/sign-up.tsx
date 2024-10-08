import { ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { ReactNativeModal } from "react-native-modal";
import { router } from "expo-router";

const SignUp = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = () => {
    setShowSuccessModal(true);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View>
        <View className="relative w-full h-[250px]">
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create your account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign up"
            onPress={onSignUpPress}
            className="mt-6"
          />
        </View>

        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text>Succes</Text>
            <CustomButton
              title="Inchide"
              onPress={() => {
                setShowSuccessModal(false);
              }}
              className="mt-5"
            />
            <CustomButton
              title="Intra"
              onPress={() => {
                router.navigate("/(tabs)/profile");
              }}
              className="mt-5 bg-blue-400"
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

export default SignUp;
