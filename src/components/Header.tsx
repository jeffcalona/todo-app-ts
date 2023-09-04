import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Header: React.FC<Props> = ({
  filterSelected,
  handleFilterChange
}) => {
  return (
    <header className='flex justify-center'>
        <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
    </header>
  )
}
