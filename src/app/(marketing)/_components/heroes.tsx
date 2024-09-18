import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className=" relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]">
          <Image
            src="/Male-working-on-the-creative-design.svg"
            alt="Documents"
            fill
            className=" object-contain"
            priority={true}
          />
        </div>
        {/* <div className=" relative w-[400px] h-[400px] hidden md:block">
          <Image
            src="/Working-on-a-project.svg"
            alt="Documents"
            fill
            className=" object-contain"
            priority={true}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Heroes;
