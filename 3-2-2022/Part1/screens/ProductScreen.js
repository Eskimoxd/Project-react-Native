import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import axios from "axios";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from "native-base";

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Register"
            iconName="person-add"
            onPress={() => navigation.navigate("Register")}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);

  let cancelToken;

  //getData from server
  const getData = async () => {
    setloading(true);
    const res = await axios.get("https://api.codingthailand.com/api/course", {
      cancelToken: cancelToken.token,
    });
    // alert(JSON.stringify(res.data.data[0].title));
    setProduct(res.data.data);
    setloading(false);
  };
  //ทุกๆครั้งที่เข้าหน้าProduct หรือ focus ที่หน้า Product จะให้ดึงข้อมูลใหม่ตลอด
  useFocusEffect(
    //usecallBack เอาไว้ optimize ฟังก์ชัน เพื่อไม่ให้ re-render ของ child component
    React.useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getData();
      return () => {
        //alert("Exit ProductScreen");
        cancelToken.cancel();
      };
    }, [])
  );

  //useEffect จะทำงานเมื่อคลิกที่เมนูสินค้า(แค่รอบเดียวเท่านั้น)
  //useEffect(() => {
  //getData();
  // return () => {
  //   second;
  // };
  //}, []);

  if (loading == true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getData();
  };

  return (
    <View>
      <FlatList
        // set the data form server ใช้สำหรับวนรอบแสดงข้อมูลใน backend
        data={product}
        // Extract the key from the data with keyExtractor คีย์หลัก
        keyExtractor={(item, index) => item.id.toString()}
        //pull to refresh
        onRefresh={_onRefresh}
        refreshing={loading} // ถ้า refreshing เป็น true คือจะรอให้ refresh data
        // render the data with renderItem render ui gพื่อที่จะให้ user มองเห็น
        renderItem={({ item }) => (
          <ListItem
            thumbnail
            onPress={() => {
              navigation.navigate("Details", {
                id: item.id,
                title: item.title, //นำค่า title จาก backend ส่งให้ตัวแปร title เพื่อนำไปใช้ใน page DetailScreen
              });
            }}
          >
            <Left>
              <Thumbnail square source={{ uri: item.picture }} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
              {/* <Button transparent>
                <Text>View</Text>
              </Button> */}
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});