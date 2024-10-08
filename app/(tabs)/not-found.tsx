// app/not-found.tsx
import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

const NotFoundScreen = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        404 - Pagina nu a fost găsită
      </Text>
      <Button title="Înapoi la Acasă" onPress={() => router.navigate("/")} />
    </View>
  );
};

export default NotFoundScreen;
