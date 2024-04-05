import { BiLeftArrow } from "react-icons/bi";
const ProgressBar = ({ pbar }) => {
  const handleClick = () => {
    window.history.back();
  };
  return (
    <section className="h-auto m-10 flex">
      <div className="w-1/5 text-right">
        <BiLeftArrow
          className="cursor-pointer text-orange-800 active:bg-red-500 active:text-xl active:rounded-lg hover:bg-warning-700 hover:text-xl rounded-lg"
          onClick={handleClick}
        />
      </div>
      <div className="w-4/5">
        <div className="w-100 bg-gray-600 rounded-full">
          <div className={`h-2 bg-blue-500 rounded-full ${pbar}`}></div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
