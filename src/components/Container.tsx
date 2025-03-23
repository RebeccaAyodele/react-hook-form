import { AddTaskIcon } from "./Icons";

type Props = {
    types: string;
    heading?: string;
    description: string;
}

const Container = ({types, heading, description}: Props) => {
  return (
    <div className="min-h-[706px] w-[28%] bg-primary-color rounded-[1.4rem] pt-[2.6rem] px-[2rem] mt-8 flex flex-col">
        <div className="flex justify-between items-center">
        <h1 className="text-[22px] font-semibold">{types}</h1>
        <AddTaskIcon />
        </div>
        <div className="border border-[#81C3FF] w-[98%] h-[275px] mt-[4rem] rounded-3xl border-dotted flex flex-col justify-center items-center">
            <h1 className="font-bold text-gray-700 text-[14px]">{heading}</h1>
            <p className="text-gray-500 text-[14px]">{description}</p>
        </div>
    </div>
  )
}

export default Container