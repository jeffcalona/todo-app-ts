import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = (
  { filterSelected, onFilterChange }
) => {
  return (
    <ul className='flex items-center bg-white rounded-md'>
        {
            Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
              const isSelected = key === filterSelected
              const className = isSelected ? 'bgGreenLight text-white rounded-md' : 'textGreenLightColor'
              return (
                    <li key={key} className={`${className} px-3 py-1`}>
                      <a
                        href={href}
                        onClick={(event) => {
                          event.preventDefault()
                          onFilterChange(key as FilterValue)
                        }}
                      >
                        {literal}
                      </a>
                    </li>
              )
            })
        }
    </ul>
  )
}
