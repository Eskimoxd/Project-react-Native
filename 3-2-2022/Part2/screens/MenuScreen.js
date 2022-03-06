import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userStoreContext } from "../context/UserContext";

const MenuScreen = ({ navigation }) => {
  const [profile, setProfile] = React.useState(null);
  const userStore = React.useContext(userStoreContext);
  React.useEffect(() => {
    const getProfile = async () => {
      const profile = await AsyncStorage.getItem("@profile");
      if (profile) {
        userStore.updateProfile(JSON.parse(profile));
        //setProfile(JSON.parse(profile));
      }
    };
    getProfile();
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: 150,
          width: undefined,
        }}
      >
        <Text
          style={{
            color: "blue",
            fontSize: 20,
            fontWeight: "bold",
            padding: 20,
          }}
        >
          เมนูหลัก
        </Text>
        {/* แสดงข้อมูล profile ที่เมนูด้านข้างต่อจากข้อความเมนูหลัก */}
      </View>
      {/* code from native base*/}
      {userStore.profile && (
        <>
          <Text
            style={{
              color: "blue",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Welcome{userStore.profile.name}
          </Text>
          <Text
            style={{
              color: "blue",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Email : {userStore.profile.email}
          </Text>
        </>
      )}
      <Content>
        <ListItem
          icon
          style={{ marginBottom: 10, marginTop: 10 }}
          onPress={() => navigation.navigate("HomeStack")}
        >
          <Left>
            <Button style={{ backgroundColor: "#dc143c" }}>
              <Icon active name="home" />
            </Button>
          </Left>
          <Body>
            <Text>หน้าหลัก</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon onPress={() => navigation.navigate("ProductStack")}>
          <Left>
            <Button style={{ backgroundColor: "#228b22" }}>
              <Icon active name="cube" />
            </Button>
          </Left>
          <Body>
            <Text>สินค้า</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        {!userStore.profile && (
          <ListItem icon onPress={() => navigation.navigate("Login")}>
            <Left>
              <Button style={{ backgroundColor: "#00008b" }}>
                <Icon active name="log-in" />
              </Button>
            </Left>
            <Body>
              <Text>เข้าสู่ระบบ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        )}
        {userStore.profile && (
          <ListItem
            icon
            onPress={async () => {
              await AsyncStorage.removeItem("@token");
              await AsyncStorage.removeItem("@profile");
              userStore.updateProfile(null);
              navigate.closeDrawer();
            }}
          >
            <Left>
              <Button style={{ backgroundColor: "#00008b" }}>
                <Icon active name="log-out" />
              </Button>
            </Left>
            <Body>
              <Text>เข้าสู่ระบบ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        )}
      </Content>
    </ScrollView>
  );
};

export default MenuScreen;