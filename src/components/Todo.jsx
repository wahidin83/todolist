import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
  const [todos, setTodos] = useState([
    'Belajar Figma',
    'Belajar React Dasar',
    'Belajar Javascrit ES6'
  ])
  const [task, setTask] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [todoIdx, setTodoIdx] = useState(0)
  return (
    <div className='container'>
      <div>
        <div className='todo'>Todo List</div>
        <div>
          <input
            className='inputTodo'
            type='text'
            name='todo'
            value={task}
            onChange={e => {
              setTask(e.target.value)
            }}
          />
          {isEdit > 0 ? (
            <button
              className='btnCreate'
              onClick={() => {
                setTodos(prev => {
                  let newData = [...prev]
                  newData.splice(todoIdx, 1, task)
                  return newData
                })
                setTodoIdx(0)
                setTask('')
              }}
            >
              {console.log('todoIdx', todoIdx)}
              Update
            </button>
          ) : (
            <button
              className='btnCreate'
              onClick={() => {
                setTodos(prev => [...prev, ...[task]])
                setTask('')
              }}
            >
              Create
            </button>
          )}
        </div>

        <div>
          {todos.map((v, i) => {
            return (
              <div key={v}>
                <div>
                  <div class='hasilTodo'>{v}</div>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setIsEdit(true)
                      setTask(v)
                      setTodoIdx(i)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setTodos(prev => {
                        let newData = [...prev]
                        newData.splice(i, 1)
                        return newData
                      })
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Todo
