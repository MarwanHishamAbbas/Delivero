import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { forwardRef, useCallback, useMemo } from "react"
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet"
import Colors from "@/constants/Colors"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], [])
  const { dismiss } = useBottomSheetModal()
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  )
  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
      ref={ref}
      snapPoints={snapPoints}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInActive}>
            <Text style={styles.inActiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeader}>Your Location</Text>
        <Link href={"/(modal)/location-search"} asChild>
          <TouchableOpacity>
            <View style={styles.inputItem}>
              <Ionicons
                name="location-outline"
                size={20}
                color={Colors.medium}
              />
              <Text style={{ flex: 1 }}>Use Current Location</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>
        <Text style={styles.subHeader}>Arrival Time</Text>
        <TouchableOpacity>
          <View style={styles.inputItem}>
            <Ionicons
              name="stopwatch-outline"
              size={20}
              color={Colors.medium}
            />
            <Text style={{ flex: 1 }}>Now</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttomText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  )
})

export default BottomSheet

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  toggleInActive: {
    padding: 5,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  inActiveText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 16,
  },
  inputItem: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    margin: 15,
    alignItems: "center",
  },
  buttomText: {
    color: "#fff",
    fontWeight: "bold",
  },
})
