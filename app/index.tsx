import { Text, ScrollView, StyleSheet } from "react-native"
import React from "react"
import Categories from "@/components/Categories"
import { SafeAreaView } from "react-native-safe-area-context"
import Restaurants from "@/components/Restaurants"
import Colors from "@/constants/Colors"

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    top: 70,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
})
