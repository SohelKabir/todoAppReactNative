import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import dayjs from 'dayjs';
import AppStyle from '../../config/styles';
import { useSelector, useDispatch } from 'react-redux';

import { deleteTodo, setTodos, updateTodos } from '../../store/actions/todos';
import { Button } from 'react-native-elements';
import NavigationService from '../../navigation/NavigationService';

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

const TodoDetails: React.FC<Props> = ({ route }) => {
  const { item } = route.params;
  console.log('====================================');
  console.log(item);
  console.log('====================================');

  const dispatch = useDispatch();

  const deleteTodoHandler = async (id: number) => {
    try {
      await dispatch(deleteTodo(id));
      await dispatch(setTodos());
    } catch (error) {
      console.log(error);
    }

    NavigationService.goBack();
  };

  const updateTodoHandler = async (id, item) => {
    try {
      let updatedData = { ...item, completed: true };

      console.log('=============updatedData=======================');
      console.log(updatedData);
      console.log('============updatedData========================');
      await dispatch(updateTodos(id, updatedData));
      await dispatch(setTodos());
    } catch (error) {
      console.log(error);
    }

    NavigationService.navigate('Home');
  };

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: AppStyle.color.COLOR_GREY_WHITE,
        height: windowHeight,
      }}>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            color: AppStyle.color.COLOR_PRIMARY,
          }}>
          {item.title}
        </Text>
      </View>

      <View style={{ padding: 10 }}>
        <Text
          style={{
            color: AppStyle.color.COLOR_SECONDARY,
          }}>
          {item.description}
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            color: AppStyle.color.COLOR_GREY,
          }}>
          {' '}
          Deadline: {dayjs('2019-01-25').format('DD/MM/YYYY hh/mm A')}
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            color: item.completed ? AppStyle.color.COLOR_GREEN : 'red',
          }}>
          {item.completed ? 'done' : 'not done'}
        </Text>
      </View>
      {item.completed ? null : (
        <View style={{ padding: 10 }}>
          <Button
            title="Mark as Done"
            onPress={() => updateTodoHandler(item.id, item)}
            buttonStyle={{ height: 20, backgroundColor: 'blue' }}
          />
        </View>
      )}

      <View style={{ padding: 10 }}>
        <Button
          title="Delete"
          onPress={() => deleteTodoHandler(item.id)}
          buttonStyle={{ height: 20, backgroundColor: 'red' }}
        />
      </View>
    </View>
  );
};

export default TodoDetails;

const styles = StyleSheet.create({});
