import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import questions from '../../services/data/questions.json';
const Question = ({ navigation }) => {
  const [state, setState] = useState({
    currentQn: 0,
    end: false,
    wrongAns: false,
  });

  const handleAnswer = (selectedAns) => {
    const newState = {...state};

    if (selectedAns === questions[state.currentQn].correct) {
      if (state.currentQn < questions.length - 1) {
        newState.currentQn = state.currentQn + 1;
      } else {
        newState.end = true;
      }
    } else {
      newState.wrongAns = true;
    }
    setState(newState);
  };

  useEffect(() => {
    if (state.end || state.wrongAns) {
      navigation.navigate({
        name: state.end ? 'Result' : 'Gameover',
      });
    }
  }, [navigation, state]);

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#f9dbd2' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1b1f22' }}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={[styles.text, styles.currentQuestion]}>
              {state.currentQn + 1}/{questions.length}
            </Text>
            <Text style={[styles.text]}>
              {state.currentQn + 1}. {questions[state.currentQn].title}
            </Text>
          </View>
          <View style={styles.bottom}>
            {questions[state.currentQn].options.map((q, i) => (
              <TouchableOpacity
                style={styles.buttonInput}
                onPress={() => handleAnswer(i)}
                key={i}>
                <Text style={styles.buttonText}>{q}</Text>
              </TouchableOpacity>
            ))}
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
