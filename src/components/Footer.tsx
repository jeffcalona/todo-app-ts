import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Footer: React.FC<Props> = ({
  onAddTodo
}) => {
  return (
        <footer className='relative h-9 w-full'>
            <CreateTodo saveTodo={onAddTodo} />
        </footer>
  )
}
