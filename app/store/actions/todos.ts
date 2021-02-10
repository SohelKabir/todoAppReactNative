import * as types from './types';

export function setTodos() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://ec2-13-115-61-236.ap-northeast-1.compute.amazonaws.com:3000/tasks?page=1&limit=50',
      );
      // console.log(response);

      const resData = await response.json();

      dispatch({
        type: types.SET_TODOS,
        todos: resData.items,
      });
    } catch (error) {
      throw error;
    }
  };
}

export function addTodos(todoData) {
  console.log('From add Todo action');

  console.log('======todoDataAc==============================');
  console.log(todoData);
  console.log('========todoDataAc============================');

  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://ec2-13-115-61-236.ap-northeast-1.compute.amazonaws.com:3000/tasks',
        {
          method: 'POST',
          body: JSON.stringify(todoData),
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      console.log(response);

      const resData = await response.json();

      console.log('====================================');
      console.log(resData);
      console.log('====================================');

      // dispatch({
      //   type: types.SET_TODOS,
      //   todos: resData.items,
      // });
    } catch (error) {
      throw error;
    }
  };
}

export function deleteTodo(id: number) {
  console.log('From add Todo action id', id);

  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://ec2-13-115-61-236.ap-northeast-1.compute.amazonaws.com:3000/tasks/${id}`,
        {
          method: 'DELETE',
          // body: JSON.stringify(todoData),
          // headers: {
          //   'Content-Type': 'application/json',
          //   // 'Content-Type': 'application/x-www-form-urlencoded',
          // },
        },
      );
      // console.log(response);

      // const resData = await response.json();

      // console.log('====================================');
      // console.log(resData);
      // console.log('====================================');

      // dispatch({
      //   type: types.SET_TODOS,
      //   todos: resData.items,
      // });
    } catch (error) {
      throw error;
    }
  };
}

export function updateTodos(id, updatedData) {
  console.log('From add Todo action');

  console.log('======todoDataAc==============================');
  console.log(id, updatedData);
  console.log('========todoDataAc============================');

  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://ec2-13-115-61-236.ap-northeast-1.compute.amazonaws.com:3000/tasks/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedData),
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      console.log(response);

      const resData = await response.json();

      console.log('====================================');
      console.log(resData);
      console.log('====================================');

      // dispatch({
      //   type: types.SET_TODOS,
      //   todos: resData.items,
      // });
    } catch (error) {
      throw error;
    }
  };
}
