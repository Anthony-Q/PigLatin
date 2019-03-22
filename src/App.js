/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Keyboard,
  Clipboard
} from "react-native";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      submission: "",
      text: ""
    };
    translate = this.translate.bind(this);
    handleChange = this.handleChange.bind(this);
    copyToClipboard = this.copyToClipboard.bind(this);
  }

  handleChange = text => {
    this.setState({ text: text });
  };

  copyToClipboard = async () => {
    let clipboardContent = await Clipboard.setString(this.state.submission);
    alert("Copied to clipboard!");
  };

  translate = () => {
    let input = this.state.text.slice();
    let result = [];
    let translation = input.split(" ").map(word => {
      let restOfWord = word.slice(1, word.length);
      let firstLetter = word.slice(0, 1);
      restOfWord += firstLetter;
      restOfWord += "ay";
      result.push(restOfWord);
    });
    let newSentence = result.join(" ");
    if (newSentence !== "ay") {
      this.setState({ submission: newSentence });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pig Latin</Text>
        <TextInput
          style={styles.inputForm}
          placeholder="Type here to translate!"
          multiline={true}
          numberOfLines={5}
          onChangeText={this.handleChange}
        />
        <Text>{this.state.submission}</Text>
        <Button
          title="translate!"
          onPress={() => {
            Keyboard.dismiss();
            translate();
          }}
        />
        <Button title="copy!" onPress={() => this.copyToClipboard()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputForm: {
    flex: 3,
    borderRadius: 10,
    width: 300,
    borderWidth: 2,
    borderColor: "#333333"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 90,
    flex: 1,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  submission: {
    flex: 2,
    backgroundColor: "#F5FCFF",
    alignItems: "center"
  }
});
