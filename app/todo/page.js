'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * TodoList 컴포넌트 - 할 일 목록을 관리하고 표시하는 클라이언트 컴포넌트
 * 
 * @returns {JSX.Element} 할 일 목록 UI를 렌더링하는 React 컴포넌트
 */
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '프로젝트 기획하기', completed: true },
    { id: 2, text: 'Next.js 학습하기', completed: false },
    { id: 3, text: 'Docker 설정하기', completed: true },
  ]);
  const [newTodo, setNewTodo] = useState('');

  /**
   * 새로운 할 일을 목록에 추가하는 함수
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - 폼 제출 이벤트 객체
   * @returns {void}
   */
  function handleAddTodo(e) {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    const newTodoItem = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };
    
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  }

  /**
   * 할 일의 완료 상태를 토글하는 함수
   * 
   * @param {number} id - 상태를 변경할 할 일의 고유 ID
   * @returns {void}
   */
  function toggleTodoStatus(id) {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  /**
   * 할 일을 목록에서 삭제하는 함수
   * 
   * @param {number} id - 삭제할 할 일의 고유 ID
   * @returns {void}
   */
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">할 일 목록</h1>
      
      <div className="w-full max-w-md">
        {/* 할 일 추가 폼 */}
        <form onSubmit={handleAddTodo} className="mb-6">
          <div className="flex items-center">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="새 할 일을 입력하세요"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              추가
            </button>
          </div>
        </form>
        
        {/* 할 일 목록 */}
        <ul className="space-y-2">
          {todos.map(todo => (
            <li 
              key={todo.id}
              className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded shadow-sm"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodoStatus(todo.id)}
                  className="w-5 h-5 mr-3 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
        
        {/* 통계 */}
        <div className="mt-6 p-4 bg-gray-50 rounded">
          <p className="text-sm text-gray-600">
            전체: {todos.length}개 | 
            완료: {todos.filter(todo => todo.completed).length}개 | 
            미완료: {todos.filter(todo => !todo.completed).length}개
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <Link
          href="/"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default TodoList;
