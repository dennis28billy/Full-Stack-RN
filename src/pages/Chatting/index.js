import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = () => {
  return (
    <View style={styles.page}>
      <Header type="dark-profile" title="Nairobi Putri Hayza" />
      <View style={styles.content}>
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
      </View>
      <InputChat />
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
