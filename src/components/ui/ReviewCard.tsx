

export type ReviewType = {
  name: string;
  date: string;
  rating: number;
  review: string;
  imageUrl: string;
};

const ReviewCard = ({user}:{user:ReviewType}) => {
  const maxStars = 5;

  return (
    <div className="container flex flex-col w-full  mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 relative  p-5">
        <div className="absolute right-0 -top-10 z-20 border-2 border-rose-500 rounded-full bg-white">
            <img
              src={user.imageUrl}
              alt={user.name}
              className="object-cover w-20 h-20 rounded-full dark:bg-gray-500"
            />
          </div>
      <div className="flex flex-col justify-between  gap-4 ">
        <div className="flex space-x-4">
          
          <div>
            <h4 className="font-bold">{user.name}</h4>
            <span className="text-xs dark:text-gray-600">{user.date}</span>
            <div className="flex items-center  space-x-1 text-yellow-500">
          {[...Array(maxStars)].map((_, index) => (
            <span key={index}>
              {index + 1 <= Math.floor(user.rating) ? "★" : index < user.rating ? "★" : "☆"}
            </span>
          ))}
        </div>
          </div>
        </div>
       <div>
     
       </div>
      </div>
      <div className=" space-y-2 h-full  text-sm text-gray-700  dark:text-white w-full pt-3">
        <p>
        {user.review}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
