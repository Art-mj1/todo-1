const Todo = ({ item, finishFunction, removeFunction }) => {
  return (
    <div key={item.id} className='component-style'>
      <h4 className='item-title'>{item.title}</h4>
      <p className='item-content'>{item.contents}</p>
      <br />
      <div className='buttons'>
        <button onClick={() => removeFunction(item.id)}>삭제하기</button>
        <br />
        <button onClick={() => finishFunction(item)}>완료하기</button>
      </div>
    </div>
  );
};
export default Todo;
