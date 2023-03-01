import React from 'react'

const CardInfo = () => {
  return (
    <>
      <div className="w-[222px] py-[23px] pl-[10px] flex flex-col gap-1 ml-10 border-[0.5px] border-tertiary my-10 md:my-20">
        <div className="flex gap-2 ">
          <span className="w-4 h-4 bg-[#C8C8C8] rounded-full"></span>
          <p className="text-sm">Ocupado</p>
        </div>
        <div className="flex gap-2 ">
          <span className="w-4 h-4 bg-yellow rounded-full"></span>
          <p className="text-sm">Disponible</p>
        </div>
        <div className="flex gap-2 ">
          <span className="w-4 h-4 bg-tertiary rounded-full"></span>
          <p className="text-sm">Seleccionados</p>
        </div>
      </div>
    </>
  )
}

export default CardInfo
