import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from "expo-secure-store";

export type User = {
  username: string;
  email: string;
  password: string;
};

export const saveUser = async (user: User) => {
  try {
    const storedUsers = await SecureStore.getItemAsync("users");
    const users: User[] = [];

    if (storedUsers) {
      users.push(...JSON.parse(storedUsers));
    }

    users.push(user);
    await SecureStore.setItemAsync("users", JSON.stringify(users));
  } 
  catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const storedUsers = await SecureStore.getItemAsync("users");
    if (storedUsers) {
      return JSON.parse(storedUsers);
    }
    return [];
  } 
  catch (error) {
    console.log(error);
    return [];
  }
};

export const setSession = async (isActive: boolean) => {
  try {
    const value = isActive ? "true" : "false";
    await AsyncStorage.setItem('session', value);
  } 
  catch (error) {
    console.log(error);
  }
};

export const getSession = async () => {
  try {
    const session = await AsyncStorage.getItem('session');
    return session === "true";
  } 
  catch (error) {
    console.log(error);
    return false;
  }
};

export const saveFavorites = async (favorites: number[]) => {
  try {
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  } 
  catch (error) {
    console.log(error);
  }
};

export const loadFavorites = async () => {
  try {
    const storedFavorites = await AsyncStorage.getItem("favorites");
    if (storedFavorites) {
      return JSON.parse(storedFavorites);
    }
    return [];
  } 
  catch (error) {
    console.log(error);
    return [];
  }
};