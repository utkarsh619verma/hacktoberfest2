import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { ImCross } from "react-icons/im";

export const CreatePost = () => {
  const [cat, setcat] = useState("");
  const [category, addcat] = useState("");
  useEffect(() => {
    console.log(cat);
  }, [cat]);
  return (
    <>
      <Navbar />
      <div className="md:px-[200px] px-6 mt-8  ">
        <h1 className="font-bold text-xl md:text-2xl mt-8 ">Create a Post</h1>
        <form className="flex flex-col space-y-4 md:space-y-8 mt-4 " action="">
          <input
            onChange={(e)=>{setcat(e.target.value)}}
            type="text"
            name=""
            className="px-4 py-2 outline-none"
            placeholder="Enter post title"
            id=""
          />
          <input type="file" name="" className="px-4" id="" />
          <div className="flex flex-col">
            <div className="flex space-x-4 md:space-x-8 items-center ">
              <input
                className="px-4 py-2 outline-none"
                type="text"
                name=""
                placeholder="Enter post category"
                id=""
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addcat(cat);
                  updatevalue;
                }}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
              >
                Add
              </button>
            </div>
            <div className="flex px-4 mt-3">
              <div className=" flex justify-center items-center bg-gray-200 px-2 py-1 rounded-md space-x-2 mr-4 ">
                <p>Tech</p>
                <p className="text-white bg-black rounded-full cursor-pointer p-1 text-sm">
                  <ImCross />
                </p>
              </div>
            </div>
            <textarea
              rows={15}
              cols={31}
              className="px-4 py-2 outline outline-1 mt-3 ml-4  "
              placeholder="Enter post description"
            />
            <button className="bg-black text-white   md:mx-auto md:w-[20%] font-semibold text-lg md:text-xl w-full px-4 py-4 mt-[30px]">
              Create
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
