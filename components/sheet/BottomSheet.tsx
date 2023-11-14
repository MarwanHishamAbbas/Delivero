import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { forwardRef, useCallback, useMemo } from "react"
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet"
import Colors from "@/constants/Colors"

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
      <View>
        <Text>Bottom Sheet</Text>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttomText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  )
})

export default BottomSheet

const styles = StyleSheet.create({
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
