import { Button, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { validateEmail, validatePassword, validateRequired } from "../utils/validators";

import { AuthContext } from "../context/AuthContext";
import { Colors } from "../constants/styles";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";

export default function SignupScreen({ navigation }) {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleNameChange = (text) => {
    setName(text);
    setErrors((prev) => ({ ...prev, name: validateRequired(text, "Name") }));
  };

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
      name &&
      email &&
      password &&
      !validateRequired(name, "Name") &&
      !validateEmail(email) &&
      !validatePassword(password)
    );
  }, [name, email, password, errors]);

const handleSignup = async () => {
  try {
    let newErrors = {};
    const nameError = validateRequired(name, "Name");
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (nameError) newErrors.name = nameError;
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await signup(name, email, password);
    }
  } catch (error) {
    setErrors({ email: error.message }); // show "Email already registered"
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>

      <Input
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}
        error={errors.name}
      />

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
        <Button title="Signup" onPress={handleSignup} disabled={!isValid} color={Colors.primary} />
      </View>
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
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

