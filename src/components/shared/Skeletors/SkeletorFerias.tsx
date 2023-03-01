const SkeletorItemFerias = () => (
  <div className="flex flex-row gap-5 items-center w-full">
    <div className="flex flex-col sm:flex-row  gap-2 w-full border border-[#d1d5db]">
      <div className="w-full md:w-[30%] aspect-[2/1] transition-all animate-pulse rounded duration-150 ease-in-out bg-[#d1d5db] dark:bg-gray-700" />

      <div className="w-full md:w-[70%] flex flex-col md:flex-row gap-2 p-2">
        <div className="w-full md:w-[80%] flex flex-col gap-2">
          <div className="w-full md:w-[30%] h-[28px] transition-all animate-pulse rounded duration-150 ease-in-out bg-[#d1d5db] dark:bg-gray-700" />
          <div className="w-full h-[76px] transition-all animate-pulse rounded duration-150 ease-in-out bg-[#d1d5db] dark:bg-gray-700" />
          <div className="w-full m:w-[30%] h-[24px] transition-all animate-pulse rounded duration-150 ease-in-out bg-[#d1d5db] dark:bg-gray-700" />
        </div>
        <div className="w-full md:w-[20%] flex flex-col justify-center gap-2 items-center">
          <div className="w-full h-[24px] transition-all animate-pulse rounded duration-150 ease-in-out bg-[#d1d5db] dark:bg-gray-700" />
          <div className="w-[90%] h-[32px] transition-all animate-pulse rounded duration-150 ease-in-out bg-[#d1d5db] dark:bg-gray-700" />
        </div>
      </div>
    </div>
  </div>
)

export const SkeletorFerias = () => (
  <div className="flex flex-col gap-6 md:gap-[36px]">
    <SkeletorItemFerias />
    <SkeletorItemFerias />
    <SkeletorItemFerias />
  </div>
)
