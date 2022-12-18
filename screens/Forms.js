import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const FOODS = ['apples', 'doughnits', 'Yorkshire pie', 'pizza', 'jellied eels'];

export default function Forms() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <Text>Basic text input</Text>
      <Text>Current value: {value1}</Text>
      <TextInput
        style={styles.input}
        value={value1}
        onChangeText={setValue1}
        placeholder="Just an input"
      />

      <Text>Number input</Text>
      <Text>Current value: {value2}</Text>
      <TextInput
        style={styles.input}
        value={value2}
        onChangeText={setValue2}
        keyboardType="numeric"
        placeholder="Only number here!"
      />

      <Text>Password input</Text>
      <Text>Current value: 🤫</Text>
      <TextInput
        style={styles.input}
        value={value3}
        onChangeText={setValue3}
        secureTextEntry={true}
        placeholder="Something secret"
      />

      <Text>Multiline input</Text>
      <Text>Current value: {value4}</Text>
      <TextInput
        style={styles.input}
        value={value4}
        onChangeText={setValue4}
        multiline={true}
        numberOfLines={4}
        placeholder="So many lines, so little time!"
      />

      <Text>Selected: {value5} </Text>
      <Picker
        selectedValue={value5}
        onValueChange={(itemValue) => setValue5(itemValue)}
      >
        {FOODS.map((food, index) => (
          <Picker.Item key="index" label={food} value={food} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 5,
  },
});
