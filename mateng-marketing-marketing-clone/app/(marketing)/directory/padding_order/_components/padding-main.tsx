import { cn } from "@/lib/utils";

import { poppinsFont } from "../../_components/bottun_link";

export function PaddingMain() {
  
  return (
    <div
      className={cn(
        "text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4",
        poppinsFont.className
      )}
    >
      <div className="font-medium text-xl sm:text-4xl w-[70%]">
        We are currently building our discovery platform.
      </div>
      <div className="font-medium text-base sm:text-xl w-[70%] sm:pt-10">
        stay with us to get updates
      </div>
      
    <div/>
  );
}
