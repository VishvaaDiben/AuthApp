import { Button, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../utils/validators";

import { AuthContext } from "../context/AuthContext";
import { Colors } from "../constants/styles";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
    setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setErrors((prev) => ({ ...prev, password: validatePassword(text) }));
  };

  useEffect(() => {
    setIsValid(
      email && password && !validateEmail(email) && !validatePassword(password)
    );
  }, [email, password, errors]);

const handleLogin = async () => {
  const result = await login(email, password);

  if (!result.success) {
    if (result.error === "EMAIL_NOT_FOUND") {
      setErrors({ email: "This email is not registered" });
    } else if (result.error === "INVALID_PASSWORD") {
      setErrors({ password: "Incorrect password" });
    } else {
      setErrors({ email: "Something went wrong, try again" });
    }
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s sign you in</Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        error={errors.email}
      />

      <PasswordInput
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        error={errors.password}
      />

      <View style={styles.buttonWrapper}>
        <Button title="Login" onPress={handleLogin} disabled={!isValid} color={Colors.primary} />
      </View>
      <Button title="Go to Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 20, 
    backgroundColor: Colors.background 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: Colors.primary, 
    marginBottom: 30, 
    textAlign: "center" 
  },
  buttonWrapper: { marginVertical: 10 },
});

