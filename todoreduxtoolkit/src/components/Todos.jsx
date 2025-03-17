import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
    const [editTodoId, setEditTodoId] = useState(null);
    const [editText, setEditText] = useState('');

    return (
        <div className="border border-black/10 rounded-lg px-3 py-1.5 text-black">
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                        {/* If editing, show input field */}
                        {editTodoId === todo.id ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="text-white px-2 py-1 rounded w-full"
                            />
                        ) : (
                            <div className="text-white">{todo.text}</div>
                        )}

                        <div className="flex gap-2">
                            {/* Edit Button */}
                            {editTodoId === todo.id ? (
                                <button
                                    className="px-2 py-1 bg-blue-600 text-white rounded"
                                    onClick={() => {
                                        dispatch(updateTodo({ id: todo.id, text: editText }));
                                        setEditTodoId(null);
                                    }}
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    className="px-2 py-1 bg-yellow-600 text-white rounded"
                                    onClick={() => {
                                        setEditTodoId(todo.id);
                                        setEditText(todo.text);
                                    }}
                                >
                                    ✏️ Edit
                                </button>
                            )}

                            {/* Delete Button */}
                            <button
                                className="px-2 py-1 bg-red-600 text-white rounded"
                                onClick={() => dispatch(deleteTodo(todo.id))}
                            >
                                ❌ Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
