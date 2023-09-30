import img1 from "../../../assets/images/about1.jpg";
import img2 from "../../../assets/images/about2.jpg";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

const Content = () => {
  return (
    // Hero About ngoding disini
    <section>
      <div className="lg:h-screen flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 py-16 lg:py-0">
        <div className="flex items-start pr-10 lg:pr-0">
          <img src={img1}/>
        </div>
        <div className="w-[90%] mx-auto lg:w-1/2 lg:mr-[4rem] flex justify-center flex-col gap-4">
          <h1 className="font-semibold text-4xl">About V-rent</h1>
          <p className="text-xl text-justify text-grey-text">
            <strong className="text-black">V-rent</strong> is Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Nihil esse molestiae quasi
            necessitatibus provident nesciunt quas eligendi pariatur, cumque
            ipsum libero quidem! Ducimus asperiores officia, consequuntur
            voluptate, nemo laboriosam accusamus ab dolore dolor impedit ex. At
            illum fugiat reiciendis ab. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti aliquid at numquam omnis quaerat
            reprehenderit nihil, obcaecati vel a iusto asperiores! Odio
            excepturi delectus culpa! Hic accusantium saepe ducimus eaque!
          </p>
        </div>
      </div>

      <div className="lg:h-screen bg-section flex flex-col justify-between items-center gap-10 lg:gap-20 lg:flex-row-reverse py-20 lg:py-0">
        <div className="flex items-start pl-10 lg:pl-0">
          <img src={img2} alt="" />
        </div>
        <div className="w-[90%] mx-auto lg:w-1/2 lg:ml-[4rem] flex justify-center flex-col gap-4 lg:gap-6">
          <h1 className="font-semibold text-4xl">
            Best <span className="text-primary border-transparent"> solution</span> for your transportation needs
          </h1>
          <p className="text-xl text-justify text-grey-text">
            V-rent is Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis nesciunt ipsam maiores iure reiciendis consequatur quaerat
            eveniet temporibus minima reprehenderit laborum mollitia totam quia
            voluptatibus molestias.
          </p>
          <Link to={"/book"}>
          <Button text={"Book Now"} variant={"text-white font-medium py-3 px-6 bg-primary rounded shadow-slate-400 hover:brightness-90 shadow-md"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Content;
