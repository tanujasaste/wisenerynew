import { Users, Star } from "lucide-react";

function CourseCard({ image, title }) {
  return (
    <div className="group relative h-[310px] w-[310px] overflow-hidden rounded-[22px] bg-[#fffdfa] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.06)]">

      {/* Image */}
      <div className="flex h-[210px] items-center justify-center overflow-hidden rounded-[18px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* Course title */}
      <h3 className="mt-2 text-[21px] font-bold text-[#111820] text-center">
        {title}
      </h3>

      {/* Bottom information */}
      <div className="mt-3 flex items-center justify-between">
      </div>
    </div>
  );
}

export default CourseCard;