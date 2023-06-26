import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Todo from "./components/Todo";
import Finish from "./components/Finish";
const App = () => {
  const [initial, initialState] = useState([
    { id: 0, title: "리액트", contents: "리액트를 해봅시다" },
    { id: 1, title: "none1", contents: "none1" },
    { id: 2, title: "none2", contents: "none2" },
  ]);

  const [doneTodo, setDoneTodo] = useState([
    { id: 0, title: "리액트", contents: "리액트 1차완료" },
  ]);

  const [title, setName] = useState("");
  const [contents, setContents] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  };
  //추가버튼클릭
  const clickAddButtonHandler = () => {
    //1.새로운 형태의 이것을 만든다.
    //newUser:{ id: 1, age: 30, title: "송중기" },
    //2.newUser을 배열에 더한다
    const newUser = {
      id: initial.length + 1,
      contents,
      title: title,
      isDone: false,
    };
    initialState([...initial, newUser]);
  };

  // 완료버튼 상태 초기값

  //할일삭제버튼클릭
  const clickRemoveButtonHandler = (id) => {
    const newUsers = initial.filter((user) => user.id !== id);
    initialState(newUsers);
  };
  //할일완료기능

  const clickFinishButtonHandler = (fin) => {
    const newTodoDone = {
      id: fin.id,
      title: fin.title,
      contents: fin.contents,
    };
    setDoneTodo([...doneTodo, newTodoDone]);
    initialState(initial.filter((s) => s.id !== fin.id));
  };
  // 완료취소기능
  const doneCancelHandler = (t) => {
    const newTodo = {
      id: t.id,
      title: t.title,
      contents: t.contents,
    };
    initialState([...initial, newTodo]);
    setDoneTodo(doneTodo.filter((fin) => t.id !== fin.id));
  };
  // 완료삭제기능
  const deletedoneHandler = (dt) => {
    setDoneTodo(doneTodo.filter((fin) => fin.id !== dt));
  };
  return (
    <div className='wrap'>
      <div class='total'>
        <div className='titles-wrap'>
          <div className='titles'>
            <div className='titles-tit'>
              <h4>제목:</h4>
              <input
                value={title}
                onChange={(event) => {
                  nameChangeHandler(event);
                }}
              />
            </div>
            <div className='titles-con'>
              <h4>내용:</h4>
              <input value={contents} onChange={contentsChangeHandler} />
            </div>
            <div className='btn'>
              <Button
                type='button'
                clickAddButtonHandler={clickAddButtonHandler}
                className='Add'>
                추가
              </Button>
            </div>
          </div>
        </div>
        <div className='main'>
          <h2 className='title'>✅Todo</h2>
          <div className='todo-style'>
            {initial.map((item) => {
              return (
                <Todo
                  key={item.id}
                  item={item}
                  removeFunction={clickRemoveButtonHandler}
                  finishFunction={clickFinishButtonHandler}
                />
              );
            })}
          </div>
        </div>

        <div className='main'>
          <h2 className='title'>🐾Done</h2>
          <div className='finish-style'>
            {doneTodo.map((doneTodo) => {
              return (
                <Finish
                  key={doneTodo.id}
                  item={doneTodo}
                  removeFunction={deletedoneHandler}
                  finishFunction={doneCancelHandler}
                  removeButton='삭제하기'
                  cancelButton='취소하기'
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
