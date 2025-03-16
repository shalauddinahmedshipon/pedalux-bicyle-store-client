


const HeroSection = ({imageUrlLg,title}:{imageUrlLg:string,title:string}) => {
  return (
    <div style={{backgroundImage:`url(${imageUrlLg})`}} className={`relative w-full md:h-[200px] h-[300px] overflow-hidden   bg-fixed`}>
      <div className="flex items-center justify-center absolute text-white bg-black/50 w-full h-full">
        <h2 className="text-3xl font-semibold border-2 px-8 py-2">{title}</h2>
      </div>

    </div>
  );
};

export default HeroSection;