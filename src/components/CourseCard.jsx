import { Users, Star } from "lucide-react";

function CourseCard({ image, title }) {
  return (
<div className="group relative mx-auto aspect-square w-full max-w-[310px] overflow-hidden rounded-[16px] bg-[#fffdfa] p-3 shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:rounded-[18px] sm:p-3.5 lg:rounded-[22px] lg:p-4">

      {/* Image */}
      <div className="flex h-[55%] items-center justify-center overflow-hidden rounded-[12px] sm:rounded-[15px] lg:rounded-[18px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* Course title */}
      <h3 className="mt-2 text-center text-[15px] font-bold text-[#111820] sm:text-[18px] lg:text-[21px]">
        {title}
      </h3>

      {/* Bottom information */}
      <div className="mt-2 flex items-center justify-between sm:mt-3">
      </div>
    </div>
  );
}

export default CourseCard;