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

class OtpSend extends Component {
  state = {
    modalShow: false,
    navigation: this.props.navigation,
  };

  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'white',
            margin: 50,
            padding: 40,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            You haven't sign in yet!
          </Text>
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
              width: '100%',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
              marginBottom: 20,
            }}
          />
          <Button
            title="Send OTP"
            onPress={() => this.state.navigation.navigate('OtpVerify')}
          />
          <View style={{marginTop: 10}}>
            <Button
              title="Cancel"
              onPress={() => this.state.navigation.goBack()}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default OtpSend;
