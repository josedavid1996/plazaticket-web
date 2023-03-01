import { classNames } from '@utils/classNames'
import { isEmpty } from '@utils/index'
import Icon from '@components/shared/icon'
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  SVGProps,
  useId,
  useState
} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: any
  rightElement?: ReactElement
  icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
}
// ({ label, icon: Icon, rightElement, ref, ...props }: Props)
const InputDate = React.forwardRef<HTMLInputElement, Props>(
  ({ label, icon: Icon, rightElement, ...props }, ref) => {
    const uid = useId()
    const [show, setShow] = useState(false)
    const [innerValue, setInnerValue] = useState('')

    const error = props?.error ?? null
    const value = props?.value ?? innerValue

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInnerValue(e.target.value)
    }

    const isValueEmpty = isEmpty((value as string) ?? '')

    return (
      <div className="flex flex-col w-full md:w-auto bg-white rounded-[4px]">
        <div className={props.className}>
          <div className="relative bg-gray-200  bg-opacity-50 h-full rounded shadow w-full">
            <input
              {...props}
              ref={ref}
              id={`input-${uid}`}
              value={value}
              autoComplete="off"
              onBlur={props?.onBlur}
              onChange={props?.onChange ?? handleChange}
              type={props.type === 'password' ? (show ? 'text' : 'password') : props.type}
              className={classNames([
                error
                  ? 'border-red-400 focus:border-red-600 '
                  : 'border-transparent focus:border-primary-500',
                'peer bg-transparent outline-none w-full h-full  border-2 rounded transition-colors  p-[12px]'
              ])}
            />
            <label
              htmlFor={`input-${uid}`}
              className={classNames([
                isValueEmpty
                  ? 'top-[15px] left-3 text-gray '
                  : 'top-1 left-2 text-gray hidden text-opacity-80',
                error ? 'text-red-600' : 'peer-focus:text-primary-500 ',
                'absolute peer-focus:top-1 peer-focus:hidden transition-all'
              ])}>
              {label}
            </label>

            {/* eslint-disable */}
            {props.type === 'password' ? (
              <button
                onClick={() => setShow((prev) => !prev)}
                type="button"
                className={`${
                  error ? 'text-red-500' : 'text-primary'
                } btn-icon btn-ghost-primary absolute right-3 top-[13px]`}>
                {show ? 'cerrado' : 'abierto'}
              </button>
            ) : null}

            {typeof Icon === 'function' ? (
              <button
                onClick={() => setShow((prev) => !prev)}
                type="button"
                className="btn-icon btn-ghost-primary absolute right-3 top-[13px]">
                {<Icon />}
              </button>
            ) : null}

            {rightElement ? <div className="">{rightElement}</div> : null}
            {/* eslint-enable */}
          </div>
        </div>
        <p className="text-sm text-red-500">{error}</p>
      </div>
    )
  }
)
export default InputDate
