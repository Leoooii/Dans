import React, { useState } from "react";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { ReactNativeModal } from "react-native-modal";

const DetaliiDansator = () => {
  const glob = useGlobalSearchParams();
  const { id, nume, activ } = useLocalSearchParams();
  const [selectedTab, setSelectedTab] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <View className="flex-1  items-center bg-[#2A2D48] p-7">
      <StatusBar backgroundColor={"orange"} />
      <View className={"flex-row gap-5"}>
        <View>
          <Text className="text-white text-3xll">ID: {id}</Text>
          <Text className="text-white text-xl">{nume}</Text>
          <Text className="text-white text-xl">Abonament {activ ? "activ" : "inactiv"}</Text>
        </View>
        <Ionicons name="person-circle-sharp" size={100} color="white" />
      </View>
      <View
        className="bg-[#D9D9D9] flex-1 w-full flex-col items-center rounded-tl-xl rounded-tr-xl
       mt-5"
      >
        <View className="flex-row   bg-white w-full justify-between rounded-tl-xl rounded-tr-xl">
          <TouchableOpacity
            className={`justify-center items-center ${selectedTab === 1 && "bg-orange-400"} flex-1 py-2 rounded-tl-xl`}
            onPress={() => setSelectedTab(1)}
          >
            <Text>Prezente</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`justify-center items-center ${selectedTab === 2 && "bg-orange-400"} ${selectedTab === 2 && "border-amber-50"} flex-1 py-2 rounded-tr-xl`}
            onPress={() => setSelectedTab(2)}
          >
            <Text>Abonamente</Text>
          </TouchableOpacity>
        </View>
        {selectedTab === 1 ? (
          <ScrollView className={"bg-[#D9D9D9] w-full flex-1 p-5 flex-col "}>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 1</Text>
            <Text className={"text-xl"}>21.04.2024 - Grupa 120</Text>
          </ScrollView>
        ) : (
          <View className={"bg-[#D9D9D9] w-full flex-1 p-5 flex-col"}>
            <View className={"flex  w-full flex-row"}>
              <View
                className={"justify-center items-center bg-orange-400 flex-1 gap-1 rounded-xl p-1"}
              >
                <Text className={"text-base"}>21.04.2024 </Text>
                <Text className={`text-base`}>{activ === "true" ? "Activ" : "De platit"}</Text>
                <Text className={"text-base"}>21.04.2024 </Text>
              </View>
              <View className={"flex-1  justify-center " + "items-center"}>
                <Text className={"text-4xl "}>4/16</Text>
              </View>
            </View>

            <Text className={"mt-2"}>Lista abonamente</Text>
            <ScrollView className={"py-2 gap-y-4 mt-4"}>
              <View className={"flex-row justify-between bg-white p-3 rounded-xl"}>
                <Text>21.04.2024</Text>
                <Text>16</Text>
                <Text>21.04.2024</Text>
              </View>
              <View className={"flex-row justify-between bg-white p-3 rounded-xl"}>
                <Text>21.04.2024</Text>
                <Text>16</Text>
                <Text>21.04.2024</Text>
              </View>
              <View className={"flex-row justify-between bg-white p-3 rounded-xl"}>
                <Text>21.04.2024</Text>
                <Text>16</Text>
                <Text>21.04.2024</Text>
              </View>
              <View className={"flex-row justify-between bg-white p-3 rounded-xl"}>
                <Text>21.04.2024</Text>
                <Text>16</Text>
                <Text>21.04.2024</Text>
              </View>
              <View className={"flex-row justify-between bg-white p-3 rounded-xl"}>
                <Text>21.04.2024</Text>
                <Text>16</Text>
                <Text>21.04.2024</Text>
              </View>
              <View className={"flex-row justify-between bg-white p-3 rounded-xl"}>
                <Text>21.04.2024</Text>
                <Text>16</Text>
                <Text>21.04.2024</Text>
              </View>
            </ScrollView>
            <View className={" bg-red-200 "}>
              <CustomButton title={"Optiuni"} onPress={() => setShowSuccessModal(true)} />
            </View>
          </View>
        )}
      </View>
      <ReactNativeModal isVisible={showSuccessModal}>
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Text>Succes</Text>
          <CustomButton title={"Setare inactiv"} />
          <CustomButton title={"Atribuire abonament"} className="mt-5" />
          <CustomButton
            title="Inchide"
            onPress={() => {
              setShowSuccessModal(false);
            }}
            className="mt-5"
          />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default DetaliiDansator;
