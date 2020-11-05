import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style="styles.top">
        <Text>Top</Text>
      </View>
      <View style="styles.bottom">
        <Text>Bottom</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    color: "white",
  },
  top: {
    backgroundColor: "#f9dbd2"
  },
  bottom: {
    backgroundColor: "#1b1f22"
  }
});

export default Welcome;
