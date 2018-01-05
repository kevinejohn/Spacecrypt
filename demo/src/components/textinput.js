import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

class ComponentTextInput extends Component {
  render() {
    const { value, onChangeText, placeholder, editable, style } = this.props;

    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          margin: 4,
          shadowRadius: 4,
          shadowOpacity: 0.3,
          shadowColor: 'black',
          shadowOffset: { width: 1, height: 1 },
        }}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          editable={editable}
          onChangeText={text => onChangeText && onChangeText(text)}
          style={{
            flex: 1,
            marginLeft: 6,
            fontSize: 18,
            height: 50,
            ...style,
          }}
        />
      </View>
    );
  }
}

ComponentTextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  style: PropTypes.object,
};

export default ComponentTextInput;
