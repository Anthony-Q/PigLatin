import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

const Form = ({ text, handleChange }) => {
  return (
    <TextInput
      multiline={true}
      numberOfLines={10}
      onChange={text => handleChange(text)}
    >
      {text}
    </TextInput>
  );
};

export default Form;
