import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Colors } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function PasswordInput({ value, onChangeText, placeholder, error }) {
  const [secure, setSecure] = useState(true);

  return (
    <View style={{ marginBottom: 20 }}>
      <View style={[styles.container, error && styles.errorBorder]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#888"
          style={styles.input}
          secureTextEntry={secure}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Ionicons name={secure ? "eye-off" : "eye"} size={22} color="#555" />
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: { flex: 1, padding: 12 },
  errorBorder: { borderColor: Colors.error },
  errorText: { color: Colors.error, fontSize: 13, marginTop: 5 },
});
