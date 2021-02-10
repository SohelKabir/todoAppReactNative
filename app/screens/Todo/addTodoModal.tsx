import React, { useState, Dispatch, SetStateAction } from 'react';
import { Button, Overlay, Input } from 'react-native-elements';
import { View, Text, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addTodos, setTodos } from '../../store/actions/todos';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
  addTodoModalVisible: boolean;
  setAddTodoModalVisible: Dispatch<SetStateAction<boolean>>;
}

const addTodoModal: React.FC<Props> = ({
  addTodoModalVisible,
  setAddTodoModalVisible,
}) => {
  //   const toggleOverlay = () => {
  //     setVisible(!visible);
  //   };

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);

  const submitTodoHandler = async () => {
    var today = new Date();
    var nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const todoData = {
      title: title,
      description: description,
      deadline: nextWeek.toISOString(), // deadline set to a week from creation of todo
      completed: false,
    };

    console.log('===========todoData=========================');
    console.log(todoData);
    console.log('============todoData========================');

    try {
      setLoading(true);
      await dispatch(addTodos(todoData));
      setLoading(false);

      await dispatch(setTodos());

      setAddTodoModalVisible(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={{ width: windowWidth }}>
      <Overlay
        isVisible={addTodoModalVisible}
        onBackdropPress={() => setAddTodoModalVisible(!addTodoModalVisible)}>
        <View
          style={{
            padding: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 18, color: 'green' }}>Add New Todo</Text>
          <View style={{ width: windowWidth - 20 }}>
            <Input
              placeholder="Title"
              //  leftIcon={{ type: 'font-awesome', name: 'comment' }}
              style={{ width: windowWidth }}
              onChangeText={(value) => setTitle(value)}
            />
          </View>
          <View style={{ width: windowWidth - 20 }}>
            <Input
              placeholder="Description"
              //  leftIcon={{ type: 'font-awesome', name: 'comment' }}
              style={{ width: windowWidth }}
              onChangeText={(value) => setDescription(value)}
            />
          </View>
          <View style={{ width: windowWidth - 20 }}>
            <Button
              title="Submit"
              raised
              onPress={submitTodoHandler}
              loading={loading}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
};
export default addTodoModal;
