const NavBar = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 pt-[10rem] left-[2rem] h-screen w-[10rem] border-r-2 border-gray-300">
        <ul>
          <li className="mb-8 block">
            <a
              href="#"
              className="text-gray-500 text-xl hover:bg-primary-color hover:text-black hover:rounded"
            >
              Dashboard
            </a>
          </li>
          <li className="mb-8">
            <a
              href="#"
              className="text-gray-500 text-xl hover:bg-primary-color hover:text-black hover:rounded"
            >
              My Boards
            </a>
          </li>
          <li className="mb-8">
            <a
              href="#"
              className="text-gray-500 text-xl hover:bg-primary-color hover:text-black hover:rounded"
            >
              Teams
            </a>
          </li>
          <li className="mb-8">
            <a
              href="#"
              className="text-gray-500 text-xl hover:bg-primary-color hover:text-black hover:rounded"
            >
              Reports
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
