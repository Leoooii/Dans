import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Page() {
  const router = useRouter();

  // const [isSignedIn, setIsSignedIn] = useState(true);
  //
  // if (isSignedIn) {
  //   return <Redirect href="/(tabs)/profile" />;
  // }

  // return <Redirect href="/(auth)/welcome" />;

  const handleNavigation = () => {
    router.navigate("/(auth)/sign-in");
  };

  return (
    <SafeAreaView className="bg-[#2A2D48] flex-1 justify-center flex-col text-center p-10 gap-y-10">
      <CustomButton
        title={"Dansator"}
        bgVariant={"dancer"}
        IconLeft={<FontAwesome5 name="user-circle" size={24} color="white" />}
        onPress={handleNavigation}
      />
      <CustomButton
        title={"Profesor"}
        bgVariant={"danger"}
        onPress={handleNavigation}
        IconLeft={<FontAwesome5 name="star" size={24} color="white" />}
      />
    </SafeAreaView>
  );
}
