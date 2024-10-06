import React from "react";

// react icons
import { FaPen } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";

const Todo = () => {
  const iconSize = 35;

  return (
    <>
      <div className="px-5 py-2  my-2 flex items-center justify-between border border-black rounded-lg">
        <div>
          <h1 className="text-2xl font-semibold">Todo Title</h1>
          <p className="text-lg mt-2 font-medium">Description</p>
        </div>
        <div id="action" className="flex items-center justify-center gap-2">
          <div className="">
            <FaPen
              color="white"
              className="bg-yellow-500 px-2 rounded-xl cursor-pointer"
              size={iconSize}
            />
          </div>

          <div>
            <ImBin2
              color="white"
              className="bg-red-500 px-2 rounded-xl cursor-pointer"
              size={iconSize}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
