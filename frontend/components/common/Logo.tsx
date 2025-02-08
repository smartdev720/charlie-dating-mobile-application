import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import InfiniteScalingView from "../animation/InfiniteScalingView";
import { logoTexts } from "@/constants/initialValues";
import InfiniteTransitionView from "../animation/InfiniteTransitionView";

const LogoImage = require("@/assets/images/logo.png");

export default function Logo() {
  return (
    <View className="w-full">
      <InfiniteScalingView>
        <View className="flex items-center justify-center w-full">
          <Image source={LogoImage} style={styles.logoImage} />
        </View>
      </InfiniteScalingView>
      <InfiniteTransitionView labels={logoTexts} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: 100,
    height: 100,
  },
});
