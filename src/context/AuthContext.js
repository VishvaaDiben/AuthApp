import { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
      } catch (error) {
        console.log("Error loading user:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

const login = async (email, password) => {
  try {
    const usersData = await AsyncStorage.getItem("users");
    const users = usersData ? JSON.parse(usersData) : [];

    const existingUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!existingUser) {
      return { success: false, error: "EMAIL_NOT_FOUND" };
    }

    if (existingUser.password !== password) {
      return { success: false, error: "INVALID_PASSWORD" };
    }

    // success
    setUser({ name: existingUser.name, email: existingUser.email });
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({ name: existingUser.name, email: existingUser.email })
    );
    return { success: true };
  } catch (error) {
    console.log("Login error:", error);
    return { success: false, error: "UNKNOWN_ERROR" };
  }
};


const signup = async (name, email, password) => {
  try {
    const usersData = await AsyncStorage.getItem("users");
    const users = usersData ? JSON.parse(usersData) : [];

    // check duplicate
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("Email already registered");
    }

    const newUser = { name, email, password };
    users.push(newUser);

    await AsyncStorage.setItem("users", JSON.stringify(users));
    await AsyncStorage.setItem("user", JSON.stringify({ name, email }));

    setUser({ name, email });
  } catch (error) {
    throw error;
  }
};

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
