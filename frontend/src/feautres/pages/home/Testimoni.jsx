import Card from "../../../components/Card";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

const Testimoni = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const testimonies = [
    {
      name: "James Potter",
      img: "/user1.png",
      comment: "The car rental service boasts an impressive selection of vehicles, ranging from sleek sedans to spacious SUVs, ensuring you find the perfect fit for any occasion. Each vehicle is expertly maintained, guaranteeing a smooth and comfortable ride."
    },
    {
      name: "Randy",
      img: "/user2.png",
      comment: "Saving your valuable time is a top priority for this service. With their user-friendly online platform, you can easily browse through available vehicles, check availability, and book your car within minutes, all from the comfort of your own home."
    },
    {
      name: "Ryan Rondolf",
      img: "/user3.png",
      comment: "The professional team behind this service is dedicated to providing exceptional customer support. They are available around the clock to assist with any concerns or inquiries, ensuring a stress"
    },
    {
      name: "John Perry",
      img: "/user4.png",
      comment: "The reservation process is swift and efficient. With a user-friendly online platform, you can easily browse through available cars, select your desired dates, and make a reservation in just a few clicks. Additionally, VRent offers flexible pickup and drop-off options, ensuring maximum convenience, whether you're"
    },
    {
      name: "Rooney",
      img: "/user5.png",
      comment: "I recently rented a car for a weekend and I was so surprised at how cheap it was! I was expecting the price to be much higher, but it was surprisingly affordable. I was very happy with the cost and the quality of the service I received. Car rental is definitely a great option for those who need to travel on a budget."
    },
    {
      name: "Lingard",
      img: "/user6.png",
      comment: "It was spotless inside and out, with no dirt or debris in the car. The car was in like-new condition. Overall, I found the car rental experience to be one of the best I have ever had and I would highly recommend it to anyone looking for a clean and reliable car rental"
    },

  ]
  return (
    
    <section className="bg-section xl:h-screen flex flex-col items-center py-16 lg:py-0 lg:pt-12 gap-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-2xl font-semibold">Reviewed by Client</p>
        <h1 className="text-center text-5xl font-semibold tracking-tight mb-2">
          Our&apos;s Testimoni
        </h1>
        <p className=" text-gray-500 text-center w-2/3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type
        </p>
      </div>
      <div className="container flex">
        <AliceCarousel
          responsive={responsive}
          animationType="slide"
          animationDuration={500}
          disableDotsControls
          infinite
        >
          {
            testimonies.map((item, index) => (
              <Card key={index} name={item.name} comment={item.comment} img={item.img} />
            ))
          }
        </AliceCarousel>
      </div>
    </section>
  );
};

export default Testimoni;
