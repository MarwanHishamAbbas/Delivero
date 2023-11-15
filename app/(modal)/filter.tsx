import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

import Colors from "@/constants/Colors"
import { useNavigation } from "expo-router"
import categories from "@/assets/data/filter.json"
import FilterItem from "@/components/filter/FilterItem"
import ItemBox from "@/components/filter/ItemBox"

const Filter = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* Filter List */}
      <FlatList
        data={categories}
        renderItem={FilterItem}
        ListHeaderComponent={<ItemBox />}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fullBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: 100,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullBtn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
})
