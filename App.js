import { StyleSheet, Text, View } from "react-native";

//React native navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuestionScreen from "./screens/QuestionScreen";
import AnswerScreen from "./screens/AnswerScreen";

//Redux imports
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="QuestionScreen"
            component={QuestionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AnswerScreen"
            component={AnswerScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
