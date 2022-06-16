
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <CustomInput></CustomInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
  borderColor: 'black',
borderWidth: 5,
  },
  button: {
backgroundColor: 'red',
borderColor: 'black',
borderWidth: 5,
}});

const CustomInput = (_props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
      />
       <TouchableOpacity
          style={styles.button}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
       </View>
  )
}