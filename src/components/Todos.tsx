import { type TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  OnToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, OnToggleCompleted }) => {
  return (
    <ul>
        {todos.map(todo => (
            <li
                key={todo.id}
                className={`${todo.completed ? 'bgSecondary border-[1px] border-white' : 'bgGreenLight'} h-14 my-2 flex items-center px-4 rounded-lg`}
            >
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onRemoveTodo={onRemoveTodo}
                    OnToggleCompleted={OnToggleCompleted}
                />
            </li>
        ))}
    </ul>
  )
}
