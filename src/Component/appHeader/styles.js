import {ScaledSheet} from 'react-native-size-matters';
import {primaryColor, secondaryColor, whiteColor} from '../../Utils';

export const styles = ScaledSheet.create({
  appHeader: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '6@ms',
  },
  title: {
    fontSize: '16@ms',
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: '12@ms',
    fontWeight: 'bold',
    color: secondaryColor,
  },
  icon: {
    height: '18@ms',
    width: '18@ms',
  },
  leftButton: {
    paddingLeft: '20@ms',
  },
  rightView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leftButton: {
    height: '35@ms',
    width: '35@ms',
    justifyContent: 'center',
    marginLeft: '10@ms',
  },
  rightButton: {
    height: '35@ms',
    width: '35@ms',
    marginRight: '10@ms',
    justifyContent: 'center',
  },
  rightButton2: {
    height: '35@ms',
    width: '35@ms',
    justifyContent: 'center',
  },
});
