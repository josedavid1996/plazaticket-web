import { classNames } from '@utils/classNames'
import { OptionHTMLAttributes, SelectHTMLAttributes, useId } from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  withErrors?: boolean
}

export const Option = ({ children, ...props }: OptionHTMLAttributes<HTMLOptionElement>) => (
  <option {...props} className="bg-white ">
    {children}
  </option>
)

const Select = ({ children, label, className, withErrors = true, error, ...props }: Props) => {
  const uid = useId()
  return (
    <div>
      <div className={className}>
        <div className="relative bg-gray-200  bg-opacity-50  rounded shadow w-full">
          <select
            {...props}
            id={`input-${uid}`}
            className={`${
              !!error
                ? 'border-red-400 focus:border-red-600 '
                : 'border-transparent  focus:border-tertiary'
            } 
            peer bg-transparent outline-none w-full h-full   border-2 rounded transition-colors  p-[12px] text-sm`}>
            {children}
          </select>

          <label
            htmlFor={`input-${uid}`}
            className="top-1 left-2 text-primary-500  text-opacity-80 peer-focus:text-secondary-500 
            absolute peer-focus:top-1 peer-focus:left-2 transition-all">
            {label}
          </label>
        </div>
      </div>
      {withErrors && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Select
