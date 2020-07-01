import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  Button,
  TextInput,
} from 'react-native';

class OtpVerify extends Component {
  state = {
    navigation: this.props.navigation,
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          margin: 50,
          padding: 40,
          borderRadius: 10,
        }}>
        <View style={{marginBottom: 20}}>
          <TextInput
            autoFocus={true}
            keyboardType="numeric"
            style={{
              backgroundColor: '#f5f4f2',
              fontWeight: '600',
              alignSelf: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: 20,
              height: 55,
              width: '50%',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
            }}
          />
        </View>

        <Button
          title="Verify"
          onPress={() => this.state.navigation.navigate('ConfrimOrder')}
        />
      </View>
    );
  }
}
export default OtpVerify;
