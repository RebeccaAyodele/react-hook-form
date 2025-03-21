const Header = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 px-4 pb-4">
        <div className="flex">
            <p>Logo</p>
            <h1 className="text-2xl font-bold">TaskFlow</h1>
        </div>
        <div>
            <form className="w-full">
                <input type="text" placeholder="Search Tasks" className="bg-blue-50 rounded-xl w-[37vw] h-[56px] placeholder:text-center" />
            </form>
        </div>
        <div className="flex">
            <div className="h-[3rem] w-[3rem] rounded-[50%] bg-pink-300"></div>
            <h3>Rebecca Ayodele</h3>
        </div>
    </div>
  )
}

export default Header