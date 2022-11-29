import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

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

const AnswerCard = () => {
  const languageOptionPython = useSelector(selectLanguageOptionPython);
  const languageOptionJava = useSelector(selectLanguageOptionJava);
  const languageOptionJavascript = useSelector(selectLanguageOptionJavascript);
  const languageOptionC = useSelector(selectLanguageOptionC);
  const companyOptionFacebook = useSelector(selectCompanyOptionFacebook);
  const companyOptionApple = useSelector(selectCompanyOptionApple);
  const companyOptionNetflix = useSelector(selectCompanyOptionNetflix);
  const companyOptionGoogle = useSelector(selectCompanyOptionGoogle);
  return (
    <View>
      <Text>Jon Sno, Your Preferred Options are: </Text>

      <View style={styles.sectionWrapper}>
        <Text>Selected Programming Languages: </Text>
        {languageOptionPython && <Text>Python</Text>}
        {languageOptionJava && <Text>Java</Text>}
        {languageOptionJavascript && <Text>JavaScript</Text>}
        {languageOptionC && <Text>C/C++</Text>}
      </View>

      <View style={styles.sectionWrapper}>
        <Text>Selected Companies: </Text>
        {companyOptionFacebook && <Text>Facebook</Text>}
        {companyOptionApple && <Text>Apple</Text>}
        {companyOptionNetflix && <Text>Netflix</Text>}
        {companyOptionGoogle && <Text>Google</Text>}
      </View>
    </View>
  );
};

export default AnswerCard;

const styles = StyleSheet.create({
  sectionWrapper: {
    margin: 5,
    padding: 10,
  },
});
