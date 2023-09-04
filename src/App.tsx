import { useState } from 'react'
import { Todos } from './components/Todos'
import { type FilterValue, type TodoId, type Todo as TodoType, type TodoTitle } from './types'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: true
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const filterdTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='w-[50%] h-[80vh] bg-slate-50 rounded-3xl drop-shadow-lg'>
        <div className='p-3 space-y-4 h-full'>
          <h1 className='text-[#0B1D51] font-semibold text-center text-lg'>Tareas</h1>
          <Header filterSelected={filterSelected} handleFilterChange={handleFilterChange} />
          <div className='bg-white h-[75%] py-1 px-3 rounded-3xl'>
            <Todos todos={filterdTodos} onRemoveTodo={handleRemove} OnToggleCompleted={handleCompleted} />
          </div>
          <Footer onAddTodo={handleAddTodo} />
        </div>
      </div>
    </main>
  )
}

export default App
