const User2 = ({ item, removeFunction }) => {
  return (
    <div key={item.id} className='component-style'>
      {item.contents}-{item.title}
      <button onClick={() => removeFunction(item.id)}>삭제하기</button>
    </div>
  );
};

export default User2;
