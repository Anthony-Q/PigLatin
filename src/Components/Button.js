import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

const Submission = ({ text, translate }) => {
  return <Button title={"translate"} onPress={text => translate(text)} />;
};

export default Submission;
