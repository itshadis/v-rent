import rush from "./../../../assets/images/rush.png";
import shape from '../../../assets/shape/hero-shape.png';
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // Hero ngoding disini
    <section className="bg-section">
      <div className="container lg:h-screen flex justify-between items-center py-20 min-[1250px]:py-0">
        <div className="flex flex-col gap-6 w-[30rem]">
          <h2 className="text-3xl font-semibold">Plan Your Trip</h2>
          <h1 className="text-6xl font-semibold">Save <span className="text-primary">much</span> with our rental</h1>
          <p className="text-slate-600 w-80">Rent your dreams car. Low prices. drive anywhare. Easy pick-up options and more.</p>
          <Link to={"/book"}>
            <Button text={'Book Now'} variant={"text-white font-medium py-3 px-6 bg-primary rounded shadow-slate-400 hover:brightness-90 shadow-md"} />
          </Link>
        </div>

        <div className="invisible lg:visible absolute right-0">
          <img className='h-[28rem] min-[1250px]:h-[32rem]' src={shape} alt="hero-shape.png" />
          <img className="absolute z-10 top-32 -left-[50%] scale-110" src={rush} alt="eush.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;