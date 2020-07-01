import * as React from 'react';
import {Button, View, Text} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate('OtpSend')}
      />
    </View>
  );
}

export default HomeScreen;
