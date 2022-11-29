import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

//import for Checkbox component. Make sure package is installed~
// DOES NOT WORK ~
// import CheckBox from "@react-native-community/checkbox";

// different checkbox package
import Checkbox from "expo-checkbox";

//redux hook import to call dispatch to execute the reducers
import { useDispatch } from "react-redux";

// import all the reducers from data slice
import {
  setLanguageOptionPython,
  setLanguageOptionJava,
  setLanguageOptionJavascript,
  setLanguageOptionC,
  setCompanyOptionFacebook,
  setCompanyOptionApple,
  setCompanyOptionNetflix,
  setCompanyOptionGoogle,
} from "../slices/questionSlice";

//imports for selectors
import { useSelector } from "react-redux";
import {
  selectLanguageOptionPython,
  selectLanguageOptionJava,
  selectLanguageOptionJavascript,
  selectLanguageOptionC,
  selectCompanyOptionFacebook,
  selectCompanyOptionApple,
  selectCompanyOptionNetflix,
  selectCompanyOptionGoogle,
} from "../slices/questionSlice";

//import for navigation
import { useNavigation } from "@react-navigation/native";

const QuestionCard = () => {
  const dispatch = useDispatch();
  const languageOptionPython = useSelector(selectLanguageOptionPython);
  const languageOptionJava = useSelector(selectLanguageOptionJava);
  const languageOptionJavascript = useSelector(selectLanguageOptionJavascript);
  const languageOptionC = useSelector(selectLanguageOptionC);
  const companyOptionFacebook = useSelector(selectCompanyOptionFacebook);
  const companyOptionApple = useSelector(selectCompanyOptionApple);
  const companyOptionNetflix = useSelector(selectCompanyOptionNetflix);
  const companyOptionGoogle = useSelector(selectCompanyOptionGoogle);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.questionWrapper}>
        <Text style={{ fontSize: 22, paddingBottom: 15 }}>
          Welcome, Jon Snow!
        </Text>

        <View>
          <Text style={styles.questionText}>
            Choose preferred programming languages:
          </Text>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={languageOptionPython}
              onValueChange={(newValue) => {
                dispatch(setLanguageOptionPython(newValue));
              }}
            />
            <Text>Python</Text>

            <View style={styles.questionOptions}>
              <Checkbox
                disabled={false}
                value={languageOptionJava}
                onValueChange={(newValue) => {
                  dispatch(setLanguageOptionJava(newValue));
                }}
              />
              <Text>Java</Text>
            </View>

            <View style={styles.questionOptions}>
              <Checkbox
                disabled={false}
                value={languageOptionJavascript}
                onValueChange={(newValue) => {
                  dispatch(setLanguageOptionJavascript(newValue));
                }}
              />
              <Text>JavaScript</Text>
            </View>

            <View style={styles.questionOptions}>
              <Checkbox
                disabled={false}
                value={languageOptionC}
                onValueChange={(newValue) => {
                  dispatch(setLanguageOptionC(newValue));
                }}
              />
              <Text>C/C++</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.questionText}>
            Choose companies to apply for job:
          </Text>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={companyOptionFacebook}
              onValueChange={(newValue) => {
                dispatch(setCompanyOptionFacebook(newValue));
              }}
            />
            <Text>Facebook</Text>
          </View>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={companyOptionApple}
              onValueChange={(newValue) => {
                dispatch(setCompanyOptionApple(newValue));
              }}
            />
            <Text>Apple</Text>
          </View>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={companyOptionNetflix}
              onValueChange={(newValue) => {
                dispatch(setCompanyOptionNetflix(newValue));
              }}
            />
            <Text>Netflix</Text>
          </View>

          <View style={styles.questionOptions}>
            <Checkbox
              disabled={false}
              value={companyOptionGoogle}
              onValueChange={(newValue) => {
                dispatch(setCompanyOptionGoogle(newValue));
              }}
            />
            <Text>Google</Text>
          </View>
        </View>

        <Button
          title="Submit"
          color="#f194ff"
          onPress={() => navigation.navigate("AnswerScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  questionWrapper: {
    display: "flex",
  },
  questionText: {
    fontSize: 18,
    padding: 10,
  },
  questionOptions: {
    // flex: 1,
    flexDirection: "row",
    gap: 10,
    // alignItems: "center",
    // justifyContent: "center",
    paddingLeft: 8,
  },
});
