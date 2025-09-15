import { ActivityIndicator, View } from "react-native";

import { AuthContext } from "../context/AuthContext";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "../screens/SignupScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "You’re in" }}  />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Welcome back" }} />
            <Stack.Screen name="Signup" component={SignupScreen}  options={{ title: "Join us" }}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
