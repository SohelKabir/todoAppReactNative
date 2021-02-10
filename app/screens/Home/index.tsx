import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { setTodos } from '../../store/actions/todos';
import TodoList from '../Todo/todoList';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddTodoModal from '../Todo/addTodoModal';
import AppStyles from 'app/config/styles';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [addTodoModalVisible, setAddTodoModalVisible] = useState(false);

  useEffect(() => {
    dispatch(setTodos());
  }, []);

  // const onLogout = () => dispatch(loginActions.logOut());
  const addTodoHandler = () => {};
  return (
    <View style={styles.container}>
      <TodoList />

      <View style={{ width: windowWidth }}>
        <AddTodoModal
          setAddTodoModalVisible={setAddTodoModalVisible}
          addTodoModalVisible={addTodoModalVisible}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          // right: windowWidth / 2 - ,
          borderRadius: 50,
        }}>
        <Button
          title="Add Todo "
          raised
          onPress={() => setAddTodoModalVisible(!addTodoModalVisible)}
        />
      </View>
    </View>
  );
};

export default Home;
