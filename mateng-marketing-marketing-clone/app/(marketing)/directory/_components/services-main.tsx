import { cn } from "@/lib/utils";
import { poppinsFont } from "../../_components/quick-link-section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function ServicesMain() {
  return (
    
    <div
      className={cn(
        "pt-20 pb-10 sm:pt-32 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-x-12 px-4 sm:px-0",
        poppinsFont.className
      )}
    >
      <div className="flex flex-col items-start font-light text-sm sm:text-base space-y-2">
 
        <div className="space-y-2 sm:space-y-6">
          
        
         
         
         
        </div>
      </div>
      <div className="sm:w-48">
        <Button className="w-full text-wrap h-12 sm:text-base sm:h-16 rounded-none">
          click here to connect with us
        </Button>
      </div>
    </div>
  );
}
