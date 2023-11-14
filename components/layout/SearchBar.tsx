import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import React from "react"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Colors from "@/constants/Colors"

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            name="ios-search"
            size={20}
            color={Colors.medium}
            style={styles.searchIcon}
          />
          <TextInput
            placeholderTextColor={Colors.medium}
            style={styles.input}
            placeholder="Resturants, grocieries, dishes"
          />
        </View>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  searchField: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.grey,
    borderRadius: 8,
  },
  input: {
    padding: 5,
    color: Colors.mediumDark,
  },
  searchIcon: { paddingHorizontal: 5 },
  optionBtn: {
    padding: 10,
    borderRadius: 50,
  },
})
