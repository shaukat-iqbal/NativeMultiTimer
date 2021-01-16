import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {secondaryColor} from '../Utils';

export default (props) => {
  const {onPress, children, id, check, status,filled} = props;
  const styles = _styles(props);

  const success = check && status ? true : false;
  const failure = check && id === check && !status ? true : false;

  return (
    <TouchableOpacity
      disabled={check}
      style={[
        styles.button,
        (success||filled) && styles.success,
        failure && styles.failure,
      ]}
      onPress={onPress}>
      <Text style={styles.txt}>{children}</Text>
    </TouchableOpacity>
  );
};

const _styles = ({full,filled}) => {
  return ScaledSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20@vs',
      borderRadius: '50@ms',
      paddingRight: '20@ms',
      paddingLeft: '20@ms',
      borderColor: !filled?secondaryColor:'green',
      borderWidth: 2,
      minWidth: full ? '100%' : '46%',
      maxWidth: full ? '100%' : '46%',
      paddingTop: '8@ms',
      paddingBottom: '8@ms',
      alignSelf: 'center',
    },
    txt: {
      color: !filled?secondaryColor:'white',
      fontWeight: 'bold',
      fontSize: '18@ms',
      maxWidth: '100%',
      textAlign: 'center',
    },
    success: {
      backgroundColor: 'green',
    },
    failure: {
      backgroundColor: 'red',
    },
  });
};
