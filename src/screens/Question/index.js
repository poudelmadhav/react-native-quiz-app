import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
const Question = ({navigation}) => (
  <>
    <SafeAreaView style={{flex: 0, backgroundColor: '#f9dbd2'}} />
    <SafeAreaView style={{flex: 1, backgroundColor: '#1b1f22'}}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={[styles.text, styles.currentQuestion]}>1/10</Text>
          <Text style={[styles.text]}>Question</Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.buttonInput} onPress={() => {}}>
            <Text style={styles.buttonText}>{'1'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonInput} onPress={() => {}}>
            <Text style={styles.buttonText}>{'2'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonInput} onPress={() => {}}>
            <Text style={styles.buttonText}>{'3'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonInput} onPress={() => {}}>
            <Text style={styles.buttonText}>{'4'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
  },
  top: {
    flex: 1,
    backgroundColor: '#f9dbd2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  bottom: {
    flex: 1,
    backgroundColor: '#1b1f22',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
  currentQuestion: {
    color: '#888',
    marginBottom: 5,
  },
  buttonInput: {
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#47ed4f',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
});
export default Question;
