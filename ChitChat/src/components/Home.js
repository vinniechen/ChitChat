import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  } from 'react-native'

import {
  Actions
} from 'react-native-router-flux'

class Home extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <View style={styles.background}>
      <View style= {styles.logo}>
        <Image source={require('../images/chitchat-logo.png')} />
      </View>
      <View style={styles.input}>

        <TextInput
          style={styles.nameInput}
          placeholder='Enter Your Name'
          onChangeText={(text) => {
              this.setState({
                  name: text,
              })
          }}
          value={this.state.name}
          />
        <TouchableOpacity
          onPress={() => {
              // move to chat screen and pass the name
              Actions.chat({ // key used in App.js for Chat
                name: this.state.name,
              });
          }}
        >
          <Text style={styles.buttonText}>
            Start Chatting
          </Text>
        </TouchableOpacity>

      </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#9AACD3',

  },
  logo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    flex: 1,
    backgroundColor: '#9AACD3',

  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    color: '#3f4655',
  },
  nameInput: {
    backgroundColor: '#b9caef',
    padding: 2,
    height: 40,
    borderWidth: 2,
    borderColor: '#3f4655',
    margin: 20,
  },
  buttonText: {
    color: '#3f4655',
    textAlign: 'right',
    marginRight: 20,
    fontSize: 20
  },
});

export default Home;
