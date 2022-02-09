import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";
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
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => alert("ลงทะเบียน")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);

  //useEffect จะทำงานเมื่อคลิกที่เมนูสินค้า
  useEffect(() => {
    //getData() for get data from backend
    const getData = async () => {
      const res = await axios.get("https://api.codingthailand.com/api/course");
      //alert(JSON.stringify(res.data.data));
      setProduct(res.data.data);
    };
    getData();
  }, []);

  return (
    <View>
      <FlatList
        //data ใช้สำหรับวนรอบเพื่อแสดงข้อมูลใน backend
        data={product}
        //keyExtractor คีย์หลัก
        keyExtractor={(item, index) => item.id.toString()}
        //renderItem สำหรับ render ui ที่จะให้ user มองเห็น
        renderItem={(item) => (
          <ListItem thumbnail>
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
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});