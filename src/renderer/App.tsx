import { useState } from "react";
import { Api } from "../main/preload";

type Todo = {
  title: string;
  content: string;
};

declare const api: Api;

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
  const save = async () => {
    await api.save(JSON.stringify({ todos }));
  };

  return (
    <>
      <h1>Todo application</h1>
      <table>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t, i) => (
            <tr key={i}>
              <td>{t.title}</td>
              <td>{t.content}</td>
              <td>
                <button onClick={() => deleteTodo(i)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
        <button onClick={save}>保存</button>
      </div>
    </>
  );
}

export default App;
