import hero from "../../assets/kid 2.png"
import { FaSearch } from "react-icons/fa";
const Hero = () => {

  return (
    <div className="flex items-center justify-between p-20 bg-[#0063A4] -mt-[65px]">
      <div className="flex-1 ">
        <h1 className="text-6xl  font-bold text-white">
        Learn on your schedule
        </h1>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <button><FaSearch />
</button>
      </div>

      <div className="flex-1">
        <img className="" src={hero} alt="" />
      </div>
    </div>
  );
};
export default Hero;
