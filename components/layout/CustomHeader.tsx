import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native"
import React, { useRef } from "react"

import { Ionicons } from "@expo/vector-icons"
import Colors from "@/constants/Colors"
import SearchBar from "@/components/layout/SearchBar"
import BottomSheet from "@/components/sheet/BottomSheet"
import type { BottomSheetModal } from "@gorhom/bottom-sheet"

const CustomHeader = () => {
  const buttonSheetRef = useRef<BottomSheetModal>(null)
  const openModal = () => {
    buttonSheetRef.current?.present()
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={buttonSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={styles.bike}
            source={require("@/assets/images/bike.avif")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
          <Text style={styles.title}>Delivery - Now</Text>

          <View style={styles.locationName}>
            <Text style={styles.subTitle}>Alexandria, Egypt</Text>
            <Ionicons
              name="chevron-down-outline"
              size={20}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileBtn}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bike: {
    width: 50,
    height: 50,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationName: { flexDirection: "row", alignItems: "center", gap: 5 },
  profileBtn: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
})
