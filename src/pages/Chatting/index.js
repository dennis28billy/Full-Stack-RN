import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;

  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.category}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
          <ChatItem
            isMe
            text="Ibu dokter, apakah memakan jeruk tiap hari itu buruk?"
            time="4.20 AM"
          />
          <ChatItem
            text="Oh tentu saja tidak karena jeruk itu sangat sehat..."
            time="4.45 AM"
          />
          <ChatItem
            isMe
            text="Baik ibu, terima kasih atas waktu dan ilmunya ..."
            time="4.50 AM"
          />
        </ScrollView>
      </View>
      <InputChat
        value=""
        onChangeText={() => alert('input tap')}
        onButtonPress={() => alert('button press')}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
