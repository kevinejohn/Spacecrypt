import React, { Component } from 'react';
import TextInput from './components/textinput';
import { View, Text, Clipboard, TouchableOpacity } from 'react-native';
import Spacecrypt from './spacecrypt';

class App extends Component {
  constructor() {
    super();
    this.state = {
      publicMessage: '',
      privateMessage: '',
      encodedMessage: '',
      hiddenMessage: '',
      decodedMessage: '',
    };
  }

  render() {
    const {
      publicMessage,
      privateMessage,
      encodedMessage,
      hiddenMessage,
      decodedMessage,
    } = this.state;

    return (
      <View
        style={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <View style={{ padding: 10, paddingLeft: 20, backgroundColor: 'red' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Spacecrypt</Text>
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Create Hidden Message
          </Text>
          <View style={{ height: 20 }} />
          <Text style={{ fontSize: 16 }}>Public Message</Text>
          <TextInput
            placeholder="Hello World!"
            value={publicMessage}
            onChangeText={text => {
              this.setState({
                publicMessage: text,
                encodedMessage: Spacecrypt.encrypt(text, privateMessage),
              });
            }}
          />
          <View style={{ height: 20 }} />
          <Text style={{ fontSize: 18 }}>Private Message</Text>
          <TextInput
            placeholder="This is my hidden message"
            value={privateMessage}
            onChangeText={text => {
              this.setState({
                privateMessage: text,
                encodedMessage: Spacecrypt.encrypt(publicMessage, text),
              });
            }}
          />
          <View style={{ height: 20 }} />
          <Text style={{ fontSize: 18 }}>
            Copy Encoded Message to Clipboard
          </Text>
          <TouchableOpacity onPress={() => Clipboard.setString(encodedMessage)}>
            <TextInput
              placeholder="Encoded message will display here"
              editable={false}
              value={!!privateMessage ? encodedMessage : ''}
            />
          </TouchableOpacity>

          <View style={{ height: 20 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Decode Hidden Message
          </Text>
          <View style={{ height: 10 }} />

          <TextInput
            placeholder="Paste Message Here"
            value={hiddenMessage}
            onChangeText={text =>
              this.setState({
                hiddenMessage: text,
                decodedMessage: Spacecrypt.decrypt(text) || '',
              })}
          />
          <View style={{ height: 20 }} />

          <TouchableOpacity onPress={() => Clipboard.setString(decodedMessage)}>
            <TextInput
              editable={false}
              placeholder={
                hiddenMessage && !decodedMessage
                  ? 'There is no hidden message'
                  : 'The hidden message will show here'
              }
              value={decodedMessage}
            />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default App;
