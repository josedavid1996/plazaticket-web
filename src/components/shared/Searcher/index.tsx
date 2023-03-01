import React from 'react'
import useForm from 'src/hooks/useForm'
import Input from '../InputDate'
import Select, { Option } from '../Select'

const Searcher = () => {
  const { values, ...form } = useForm({
    initialValues: {
      lugar: '',
      tipoEvento: '',
      fecha: ''
    }
  })
  return (
    <>
      <div className="bg-white mt-4 sm:mt-8 md:mt-10 lg:mt-12">
        <form className="bg-tertiary px-5 pt-[15px]  pb-[13px] flex flex-col gap-[22px] w-full rounded-[4px] md:grid md:grid-cols-3">
          <Select className="bg-white w-full rounded-[4px]" {...form.inputProps('lugar')}>
            <Option value="" disabled hidden>
              Lugar
            </Option>
            <Option value="1">One</Option>
            <Option value="2">Two</Option>
          </Select>
          <Select className="bg-white w-full rounded-[4px]" {...form.inputProps('tipoEvento')}>
            <Option value="" disabled hidden>
              Tipo de evento
            </Option>
            <Option value="1">One</Option>
            <Option value="2">Two</Option>
          </Select>

          <Input
            onFocus={(e) => {
              if (e.target.value.length !== 0) {
                e.target.style.color = '#4D4D4D'
              }
              console.log(e.target.value)
            }}
            type="date"
            label="fecha"
            className="text-transparent text-sm"
            {...form.inputProps('fecha')}
          />
        </form>
      </div>
    </>
  )
}

export default Searcher
