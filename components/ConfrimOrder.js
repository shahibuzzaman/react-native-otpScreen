import * as React from 'react';
import {Button, View, Text, ScrollView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const ConfrimOrder = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}>
      <View style={{padding: 100}}>
        <Text>Order History With total price</Text>
      </View>
      <View style={{margin: 20}}>
        <Text>Name :</Text>
        <TextInput style={{borderWidth: 1, borderColor: 'black'}} />
      </View>
      <View style={{margin: 20}}>
        <Text>Contact No :</Text>
        <TextInput style={{borderWidth: 1, borderColor: 'black'}} />
      </View>
      <View style={{margin: 20}}>
        <Text>Address :</Text>
        <TextInput
          multiline={true}
          style={{borderWidth: 1, borderColor: 'black'}}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{textAlign: 'center'}}>Cash on Delivery</Text>
      </View>
      <Button title="Confirm Order" />
    </ScrollView>
  );
};

export default ConfrimOrder;
