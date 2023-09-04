import { type TodoId, type Todo as TodoType } from '../types'
import CheckIcon from './Ui/Icons/Check'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  OnToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, OnToggleCompleted }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    OnToggleCompleted({
      id,
      completed: event.target.checked
    })
  }

  return (
    <>
        <input
            id={id}
            className='peer appearance-none h-5 w-5 border-[1px] border-white rounded-md z-20 cursor-pointer mr-2'
            checked={completed}
            type="checkbox"
            onChange={ handleChangeCheckbox }
        />
        <CheckIcon className='text-[15px] fill-white absolute opacity-0 z-10 peer-checked:opacity-100 ml-[3px]'/>
        <label htmlFor={id} className={`text-white font-light flex items-center cursor-pointer ${completed ? 'line-through' : 'no-underline'}`}>
            {title}
        </label>
        <button
            className='ml-auto text-white font-light text-sm'
            onClick={() => { onRemoveTodo({ id }) }}
        >x</button>
    </>
  )
}
