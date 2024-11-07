import React, { useState } from 'react';

function TodoApp() {
  // useStateは、関数コンポーネントのstateを保持したり、更新したりするためのフック
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('普');
  const [deadline, setDeadline] = useState('');
  const [todoList, setTodoList] = useState([]);

  // Hook
  const handleAddTodo = () => {
    // バリデーション
    if (todo === '') {
      alert('TODOは必須です');
      return;
    }

    if (deadline === '') {
      alert('期日は必須です');
      return;
    }

    if (deadline < new Date().toISOString().split('T')[0]) {
      alert('期日に今日より前の日付を設定することはできません');
      return;
    }

    const newTodo = {
      todo,
      priority,
      deadline,
      done: false, // 初期状態は未完了
    };

    setTodoList([...todoList, newTodo]);

    // フォームのリセット
    setTodo('');
    setPriority('普');
    setDeadline('');
  };

  const toggleDone = (index) => {
    // 完了状態の切り替え
    const updatedList = todoList.map((item, i) => {
      if (i === index) {
        return { ...item, done: !item.done };
      }
      return item;
    });

    setTodoList(updatedList);
  };

  return (
    <div>
      <h1>TODOリスト</h1>
      <div>
        <label>
          TODO: <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        </label>
        <br />
        <label>
          優先度:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="低">低</option>
            <option value="普">普</option>
            <option value="高">高</option>
          </select>
        </label>
        <br />
        <label>
          期日: <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </label>
        <br />
        <button onClick={handleAddTodo}>登録</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>TODO</th>
            <th>優先度</th>
            <th>期日</th>
            <th>完了</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item, index) => (
            <tr key={index} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
              <td>{item.todo}</td>
              <td>{item.priority}</td>
              <td>{item.deadline}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleDone(index)} // 完了状態の切り替え
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoApp;
