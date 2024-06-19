import React from "react";
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await SecureStore.setItemAsync(key, jsonValue);
    } catch (error) {
      console.error('Error saving value to SecureStore:', error);
    }
  }

async function clear (key) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error('Error deleting value in SecureStore:', error);
  }
}