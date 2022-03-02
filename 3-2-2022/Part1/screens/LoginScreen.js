import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from "native-base";
import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("กรุณากรอกอีเมลใหม่"),
  password: Yup.string()
    .min(3, "รหัสผ่านต้อง 3 ตัวอักษรขึ้นไป")
    .required("กรุณาป้อนรหัสผ่าน"),
});

const LoginScreen = () => {
  return (
    <Container>
      <Content padder>
        <Formik
          //ค่าเริ่มต้นของข้อมูลโดยกำหนดข้อมูลให้ตรงกับ backend
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validateSchema}
          //เมื่อคลิกปุ่ม register ให้ทำงานส่วนนี้
          onSubmit={async (values, { setSubmitting }) => {
            // same shape as initial values
            //console.log(values);
            //alert(JSON.stringify(values));
            // try {
            //   const url = "https://api.codingthailand.com/api/register";
            //   const res = await axios.post(url, {
            //     email: values.email,
            //     password: values.password,
            //   });
            //   alert(res.data.message);
            //   navigation.navigate("Home");
            // } catch (error) {
            //   //ถ้าไม่สามารถบันทึกข้อมูลลง server ได้ เช่น อีเมล์ซ้ำ
            //   alert(error.response.data.errors.email[0]);
            // } finally {
            //   //ให้ปุ่มสามารถกลับมากดได้อีกครั้ง
            //   setSubmitting(false);
            // }
          }}
        >
          {/*errors ใช้สำหรับตรวจสอบ state(ถ้าผู้ใช้ไม่กรอกข้อมูลให้ error อะไรเกิดขึ้น*/}
          {/* touched เมื่อผู้ใช้กดที่ name แล้วไปโดนส่วนอื่นโดยไม่กรอกข้อมูลในช่อง input */}
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              {/* กำหนดให้มีเส้นสีแดงถ้าผู้ใช้ไม่กรอกชื่อข้อมูล */}
              <Item
                fixedLabel
                last
                error={errors.email && touched.email ? true : false}
              >
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                last
                error={errors.password && touched.password ? true : false}
              >
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  keyboardType="number-pad"
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.password}</Label>
                </Item>
              )}
              <Button
                onPress={handleSubmit}
                //ไว้สำหรับเปิดปิดปุ่มการทำงาน
                disabled={isSubmitting}
                block
                large
                style={{ marginTop: 30, backgroundColor: "darkblue" }}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  Login
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default LoginScreen;