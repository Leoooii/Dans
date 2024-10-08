import { Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import { ReactNativeModal } from "react-native-modal";
import { router } from "expo-router";
import logo from "../../assets/images/logo.png";
import { useAuth } from "@/context/ctx";
import { Snackbar } from "react-native-paper";

const SignIn = () => {
  const { signIn, user, signUp } = useAuth();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSignInMode, setIsSignInMode] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleLogin = async () => {
    const isAuthenticated = await signIn(form.email, form.password);
    if (isAuthenticated) {
      router.navigate("/(tabs)"); // Navighează doar dacă autentificarea a reușit
    } else {
      setSnackbarMessage("Datele introduse sunt gresite");
      setSnackbarVisible(true); // Afișează Snackbar
    }
  };

  useEffect(() => {
    console.log("main-menu", user);
  }, []);

  const handleSignUp = async () => {
    try {
      const isRegistered = await signUp(form.email, form.password, form.name);
      if (isRegistered) {
        router.navigate("/(tabs)"); // Navighează doar dacă autentificarea a reușit
      } else {
        setSnackbarMessage("Adresa de email folosia deja/ Nu ai introdus tot ce trebuia");
        setSnackbarVisible(true); // Afișează Snackbar
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScrollView className="flex-1 bg-[#2A2D48] p-1">
      <View className="relative w-full h-[200px] mt-5 justify-center flex-col">
        <Image source={logo} resizeMode="contain" className={"self-center mb-5"} />
        <View className={"flex-row justify-around"}>
          <CustomButton
            title={"Sign up"}
            bgVariant={`${!isSignInMode ? "success" : "secondary"}`}
            onPress={() => {
              setIsSignInMode(false);
            }}
          />
          <CustomButton
            title={"Log in"}
            bgVariant={`${isSignInMode ? "success" : "secondary"}`}
            onPress={() => {
              setIsSignInMode(true);
            }}
          />
        </View>
      </View>
      <View className="p-5 flex-col justify-center align-items-center ">
        {!isSignInMode && (
          <InputField
            labelStyle={"text-gray-200"}
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
        )}
        <InputField
          labelStyle={"text-gray-200"}
          label="Email"
          placeholder="Enter your email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          labelStyle={"text-gray-200"}
          label="Password"
          placeholder="Enter your password"
          icon={icons.lock}
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />

        {isSignInMode ? (
          <CustomButton
            title="Lets's dance"
            onPress={handleLogin}
            className="mt-6 mb-6"
            bgVariant={"success"}
          />
        ) : (
          <CustomButton
            title="Lets's start to dance"
            onPress={handleSignUp}
            className="mt-6 mb-6"
            bgVariant={"success"}
          />
        )}

        <CustomButton title={"Inapoi"} onPress={() => router.navigate("../")} className={""} />
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000} // Durata în milisecunde
        >
          {snackbarMessage}
        </Snackbar>
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
        </View>
      </ReactNativeModal>
    </ScrollView>
  );
};

export default SignIn;
