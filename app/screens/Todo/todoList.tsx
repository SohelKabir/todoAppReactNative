import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import TodoCard from '../../components/TodoCard';

const TodoList: React.FC<Props> = () => {
  const todos = useSelector((state) => state.todosReducer.todos);

  return (
    <View>
      <FlatList
        //   ListHeaderComponent={
        //
        //   }
        data={todos}
        //  onRefresh={}
        // refreshing={}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => (
          <>
            <TodoCard item={itemData.item} />
          </>
        )}
        ListFooterComponent={
          //Footer Component // components below flat list will go here inside <> other compontes </>
          <>
            <View style={{ paddingBottom: 50 }}></View>
          </>
        }
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
