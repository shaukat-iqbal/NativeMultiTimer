import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {Button} from '../../Component';
import {secondaryColor} from '../../Utils';

export default (props) => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.centerElement}>
        <View>
          <Text style={[styles.bigText, {color: secondaryColor}]}>
            Multi Timer
          </Text>
          <Text style={styles.instruction}>
            Keep track of time
          </Text>
        </View>

        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/Animations/start.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>

        <Button onPress={() => navigation.navigate('MainPage')}>
          Start
        </Button>
      </View>
    </View>
  );
};
