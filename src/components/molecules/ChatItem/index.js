import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isMe, text, time}) => {
  if (isMe) {
    return <IsMe message={text} date={time} />;
  }
  return <Other message={text} date={time} />;
};

export default ChatItem;

const styles = StyleSheet.create({});
