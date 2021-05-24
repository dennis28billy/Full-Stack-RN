import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor10,
  DummyDoctor11,
  DummyDoctor7,
  DummyDoctor8,
  DummyDoctor9,
} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';
const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        profile={DummyDoctor7}
        name="Alexander Janie"
        desc="Wanita"
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListDoctor
        profile={DummyDoctor8}
        name="John McParker Steve"
        desc="Pria"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor9}
        name="Nairobi Putri Hayza"
        desc="Wanita"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor10}
        name="James Rivillia"
        desc="Pria"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor11}
        name="Liu Yue Tian Park"
        desc="Wanita"
        type="next"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
