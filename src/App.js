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
  Keyboard
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
  }

  handleChange = text => {
    this.setState({ text: text });
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
    this.setState({ submission: newSentence });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type here to translate!"
          multiline={true}
          numberOfLines={10}
          onChangeText={this.handleChange}
        />
        <Text style={styles.instructions}>Pig Latin</Text>
        <Text>{this.state.submission}</Text>
        <Text> {this.state.text}</Text>
        <Button
          title="translate!"
          onPress={() => {
            Keyboard.dismiss();
            translate();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputForm: {
    flex: 1,
    backgroundColor: "black"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
