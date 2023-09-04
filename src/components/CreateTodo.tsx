import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({
  saveTodo
}) => {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
            className="h-11 w-full px-4 absolute bottom-0 rounded-xl"
            value={inputValue}
            onChange={(evt) => { setInputValue(evt.target.value) }}
            placeholder="¿Escríbe tu tarea?"
            autoFocus
        />
    </form>
  )
}
