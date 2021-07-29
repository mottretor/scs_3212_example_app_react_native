import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../resourses/styles';

const DetailsScreen = (props) => {
  console.log('second');

  const [count , setCount] = useState(0);
  const [step , setStep] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Hello, I have clicked the button {count} times</Text>
        <Button
            onPress={() => {
                setCount(count+1);
            }}

            title="Go Back"
        />
    </View>
  );
};

export default DetailsScreen;
