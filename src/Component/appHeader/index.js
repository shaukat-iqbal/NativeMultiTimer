import React, {memo} from 'react';
import {View, Image, Text} from 'react-native';

import {styles} from './styles';

const AppHeader = (props) => {
  return (
    <View style={styles.appHeader}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      {props.subTitle && <Text style={styles.subTitle}>{props.subTitle}</Text>}
    </View>
  );
};

export default memo(AppHeader);
