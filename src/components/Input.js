import { StyleSheet, Text, TextInput, View } from "react-native";

import { Colors } from "../constants/styles";

export default function Input({ placeholder, value, onChangeText, keyboardType = "default", error }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, error && styles.errorBorder]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor="#888"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  errorBorder: { borderColor: Colors.error },
  errorText: { color: Colors.error, fontSize: 13, marginTop: 5 },
});
