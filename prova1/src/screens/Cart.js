import { FlatList, Text, View, StyleSheet} from "react-native";
import { numberFormat } from "../services/numberFormat";

export const Cart = ({items, getTotalPrice}) => {
  return <FlatList
    data={items}
    renderItem={({ item }) =>
      <View style={styles.alinha}> 
        <Text style={styles.item}>{item.product.name} x {item.qty}</Text>
        <Text style={styles.preco}>{numberFormat((item.qty) * (item.product.price))}</Text>
      </View>}

      ListFooterComponent = {() =>
      <View style={styles.alinhaComLinha}>
        <Text style={styles.item}>Total</Text>
        <Text style={styles.preco}>{numberFormat(getTotalPrice())}</Text>
      </View>}
  />
};

const styles = StyleSheet.create({
  item:{
    padding: 10,
    fontSize: 20,
  },
  preco: {
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
  alinha:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  alinhaComLinha:{
    marginTop: 10,
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  }
  
});
