import Button from "../../../components/Button";
import icon1 from "../../../assets/icons/icon-why-choose-us1.png";
import icon2 from "../../../assets/icons/icon-why-choose-us2.png";
import icon3 from "../../../assets/icons/icon-why-choose-us3.png";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <section className="lg:h-screen w-[90%] lg:w-[85%] mx-auto flex flex-wrap justify-between items-center gap-12 py-10 lg:py-0">
      <div className="flex flex-1 flex-col justify-center gap-6">
        <p className="font-semibold text-xl text-center sm:text-left">
          Why Choose Us
        </p>
        <h1 className="text-black-800 text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="text-primary">Best</span> deals you will ever find
        </h1>
        <p className="text-gray-500 xl:text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>
        
        <Link to={"/book"} className="mt-4">
          <Button text={"Book Now"} variant={"text-white font-medium py-3 px-10 md:px-6 bg-primary rounded shadow-slate-400 hover:brightness-90 shadow-md"} />
        </Link>
      </div>

      <div className="lg:w-[30rem] flex flex-col lg:gap-4">
        <div className="flex items-center gap-4 md:gap-0">
          <img className="scale-75" src={icon1} alt="" />
          <div className="flex flex-col gap-2">
            <h5 className="text-lg font-semibold">Drive Anywhere</h5>
            <p className="leading-tight text-slate-600">No limit distances, ride anywhere you want, make it like yours</p>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-0">
          <img className="scale-75" src={icon2} alt="" />
          <div className="flex flex-col gap-2">
            <h5 className="text-lg font-semibold">All Included Pricing</h5>
            <p className="leading-tight text-slate-600">Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-0">
          <img className="scale-75" src={icon3} alt="" />
          <div className="flex flex-col gap-2">
            <h5 className="text-lg font-semibold">No Hidden Charges</h5>
            <p className="leading-tight text-slate-600">Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
