import { ListRenderItem, StyleSheet, Text, View } from "react-native"

interface Cateogry {
  name: string
  count: number
  checked?: boolean
}

const FilterItem: ListRenderItem<Cateogry> = ({ item }) => (
  <View>
    <Text>{item.name}</Text>
  </View>
)

export default FilterItem

const styles = StyleSheet.create({})
