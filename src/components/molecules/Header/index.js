import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {IconBackDark} from '../../../assets/';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    color: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
  },
});
