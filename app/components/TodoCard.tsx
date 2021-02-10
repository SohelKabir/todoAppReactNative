import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import dayjs from 'dayjs';
import NavigationService from '../navigation/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { deleteTodo } from '../store/actions/todos';
import { Button } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
  item: {
    id: number;
    createdAt: string;
    updatedAt: string;
    description: string;
    deadline: string;
    title: string;
    completed: boolean;
  };
}

const TodoCard: React.FC<Props> = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate('TodoDetails', { item })}>
      <View
        style={{
          // backgroundColor: itemData.item.completed ? '#dff' : 'grey',
          // padding: 10,
          marginVertical: 5,
          // paddingHorizontal: 10,
          shadowColor: 'black',
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 8,
          elevation: 5,
          borderRadius: 10,
          backgroundColor: 'white',
          height: 100,
          width: windowWidth - 10,
          marginHorizontal: 10,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 18 }}>{item.title}</Text>
        </View>
        <View
          style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              //alignSelf: 'flex-end',
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: item.completed ? 'green' : 'red',
              }}>
              {item.completed ? 'done' : 'not done'}
            </Text>
          </View>
          <View
            style={{
              //alignSelf: 'flex-end',
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: item.completed ? 'green' : 'red',
              }}>
              {dayjs('2019-01-25').format('DD/MM/YYYY hh/mm A')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoCard;

const styles = StyleSheet.create({});
