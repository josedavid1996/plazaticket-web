import { classNames } from '@utils/classNames'
import { isEmpty } from '@utils/index'
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  SVGProps,
  useId,
  useState
} from 'react'
import IconComponent from '../icon'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: any
  rightElement?: ReactElement
  icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
  pt?: string
}
// ({ label, icon: Icon, rightElement, ref, ...props }: Props)
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, pt = 'pt-5', icon: Icon, rightElement, ...props }, ref) => {
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
      <div className="flex flex-col w-full md:w-auto ">
        <div className={props.className}>
          <div className="relative bg-gray-200  bg-opacity-50 h-full rounded shadow w-full border-[0.5px] border-tertiary">
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
                `peer bg-transparent outline-none w-full h-full ${pt} px-3 border-2 rounded transition-colors `
              ])}
            />
            <label
              htmlFor={`input-${uid}`}
              className={classNames([
                isValueEmpty
                  ? 'top-[15px] left-3 text-slate-500'
                  : 'top-1 left-2 text-primary-500 text-opacity-80',
                error ? 'text-red-600' : 'peer-focus:text-primary-500 ',
                'absolute peer-focus:top-1 peer-focus:left-2 transition-all'
              ])}>
              {label}
            </label>

            {/* eslint-disable */}
            {props.type === 'password' ? (
              <button
                onClick={() => setShow((prev) => !prev)}
                type="button"
                className={`${
                  error ? 'text-red-500' : 'text-tertiary'
                } btn-icon btn-ghost-primary absolute right-3 top-[16px]`}>
                {<IconComponent name={show ? 'eye-slash' : 'eye'} className="text-green" />}
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
export default Input
