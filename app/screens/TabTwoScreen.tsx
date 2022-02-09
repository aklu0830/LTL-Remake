import {ImageEditor, StyleSheet, TextInput, TextInputComponent} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import LoginForm from "../components/LoginForm";
import {useState} from "react";

export default function TabTwoScreen() {
  const  [text, setText] = useState('');
  return (
      <View style={{padding: 10}}>
          <Text>Here</Text>
        <TextInput
            style={{height: 40, color: "#FFFF", borderBottomColor: "#FFFF", width: 50, margin: 12}}
            placeholder="Type here to translate!"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
