import axios from "axios";
import brio from "../../../assets/images/brio.png";
import hiace from "../../../assets/images/hiace.png";
import innova from "../../../assets/images/innova.png";
import rush from "../../../assets/images/rush.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function VehicleModels() {
  const [cars, setCars] = useState();
  const [currentCar, setCurrentCar] = useState(0);

  useEffect(() => {
    getCar();
  }, []);

  const getCar = async () => {
    axios
      .get("https://v-rent-backend.vercel.app/api/cars")
      .then((res) => setCars(res.data.data));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentCar(e.target.value);
  };

  return (
    <section id="vehicle-models" className="bg-primary pt-8 pb-12 lg:h-[90%]">
      <div className="flex flex-col items-center text-white gap-2 mb-20">
        <p className="text-2xl">Vehicle Models</p>
        <h1 className="text-4xl font-medium">Our Rental Fleet</h1>
        <h3 className="lg:w-96 text-center">
          Choose a variety of our amazing vehicles to rent for your next trip
        </h3>
      </div>

      <div className="w-[90%] lg:w-[80%] mx-auto flex justify-between flex-wrap gap-12 lg:gap-16">
        <div className="w-full min-[800px]:w-1/3 lg:w-80 min-[1300px]:w-52 flex flex-col justify-between gap-2">
          <ul className="text-xl font-medium flex flex-col gap-2">
            {cars?.map((car, index) => (
              <li
                key={index}
                onClick={handleClick}
                value={index}
                className="text-center bg-white hover:bg-black hover:text-white py-2 px-8 cursor-pointer"
              >
                {car.name}
              </li>
            ))}
          </ul>

          <Link to="/book">
            <button className="w-full text-white py-3 px-4 bg-black rounded shadow-slate-400 hover:brightness-90">
              Book Now
            </button>
          </Link>
        </div>

        <div className="w-full min-[800px]:w-auto flex justify-center">
          <img
            className="w-72 h-auto md:h-64 md:w-auto"
            src={
              currentCar === 0
                ? innova
                : currentCar === 1
                ? rush
                : currentCar === 2
                ? hiace
                : currentCar === 3
                ? brio
                : ""
            }
            alt=""
          />
        </div>

        <div className="w-full flex flex-1 min-[1300px]:flex-grow-0 flex-col">
          <>
            <div className="h-14 min-[850px]:h-12 px-28 sm:px-40 min-[850px]:px-0 flex items-center justify-center bg-black text-white text-4xl min-[850px]:text-2xl font-bold">
              RP&nbsp;
              <span className="price">
                {cars ? cars[currentCar].price : 400}
              </span>
              <span className="text-sm font-normal ml-2">/day</span>
            </div>
          </>
          <div className="flex text-lg font-medium bg-white">
            <ul className="list-none w-1/2">
              <li className="flex border h-10 items-center justify-center">
                Brand
              </li>
              <li className="flex border h-10 items-center justify-center">
                Type
              </li>
              <li className="flex border h-10 items-center justify-center">
                Year
              </li>
              <li className="flex border h-10 items-center justify-center">
                Seat
              </li>
              <li className="flex border h-10 items-center justify-center">
                AC
              </li>
              <li className="flex border h-10 min-[850px]:h-10 items-center justify-center px-10">
                Transmission
              </li>
            </ul>
            <ul className="font-normal text-slate-500 w-1/2">
              <li className="flex border h-10 items-center justify-center">
                {cars ? cars[currentCar].brand : "Toyota"}
              </li>
              <li className="flex border h-10 items-center justify-center">
                {cars ? cars[currentCar].type : "GR Sport"}
              </li>
              <li className="flex border h-10 items-center justify-center">
                {cars ? cars[currentCar].year : 2022}
              </li>
              <li className="flex border h-10 items-center justify-center">
                {cars ? cars[currentCar].seat : 6}
              </li>
              <li className="flex border h-10 items-center justify-center">
                {cars ? cars[currentCar].ac : "Yes"}
              </li>
              <li className="flex border h-10 items-center justify-center">
                <span className="text-center">
                  {cars ? cars[currentCar].transmission : "Manual"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehicleModels;
