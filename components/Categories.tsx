import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { categories } from "@/assets/data/home"

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10,
      }}
    >
      {categories.map((category, idx) => (
        <View style={styles.categoryCard} key={idx}>
          <Image source={category.img} />
          <Text style={styles.categoryText}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
  },
  categoryText: {
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
})
