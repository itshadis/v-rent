// eslint-disable-next-line react/prop-types
const Card = ({ comment, img, name }) => {
  return (
    <div className="w-full sm:w-80 h-80 bg-white rounded flex flex-col justify-between p-4">
      <p className="text-justify text-gray-800">{comment}</p>
      <div className="flex gap-4">
        <img className="w-20" src={img} alt="" />
        <span className="font-medium mt-2">{name}</span>
      </div>
    </div>
  )
}

export default Card