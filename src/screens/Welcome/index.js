import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#f9dbd2'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#1b1f22'}}>
        <View style={styles.container}>
          <View style={styles.top}>
            <TextInput
              onChangeText={() => {}}
              placeholder={'Input your name'}
              placeholderTextColor={'white'}
              style={styles.textInput}
            />
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.buttonInput}
              onPress={() => navigation.navigate('Question')}>
              <Text style={styles.buttonText}>{'Start Quiz'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

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
  },
  bottom: {
    flex: 1,
    backgroundColor: '#1b1f22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
  },
  buttonInput: {
    width: 300,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#47ed4f',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

export default Welcome;
