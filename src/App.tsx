import { useState } from "react";

type Todo = {
  title: string;
  content: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const addTodo = () => {
    setTodos([...todos, { title, content }]);
    setTitle("");
    setContent("");
  };
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((t, i) => i != index));
  };

  return (
    <>
      <h1>Todo application</h1>
      {todos.map((t, i) => (
        <tr>
          <td>{t.title}</td>
          <td>{t.content}</td>
          <td>
            <button onClick={() => deleteTodo(i)}>削除</button>
          </td>
        </tr>
      ))}
      <div>
        <div>
          <label htmlFor="">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">内容</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button onClick={addTodo}>追加</button>
      </div>
    </>
  );
}

export default App;
