import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import CustomButton from "@/components/CustomButton";
import logo from "../../assets/images/logo.png";

const Welcome = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === 1;

  return (
    <SafeAreaView className="h-full flex items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("..");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        <View className="flex-1 pt-32 items-center bg-amber-400">
          <Image source={logo} />
        </View>
        <View className="flex-1 justify-center items-center bg-amber-200">
          <CustomButton
            title={"Sign-In"}
            onPress={() => router.replace("/(auth)/sign-in")}
            className="w-11/12  bg-green-400"
          />
        </View>
        <View className="flex-1 justify-center items-center bg-amber-200">
          <CustomButton
            title={"Sign-Up"}
            onPress={() => router.replace("/(auth)/sign-up")}
            className="w-11/12  bg-green-400"
          />
        </View>
      </Swiper>
      {/*<CustomButton*/}
      {/*  title={isLastSlide ? "Get Started" : "Next"}*/}
      {/*  onPress={() =>*/}
      {/*    isLastSlide*/}
      {/*      ? router.replace("/(auth)/sign-up")*/}
      {/*      : swiperRef.current?.scrollBy(1)*/}
      {/*  }*/}
      {/*  className="w-11/12 mt-10"*/}
      {/*/>*/}
    </SafeAreaView>
  );
};

export default Welcome;
