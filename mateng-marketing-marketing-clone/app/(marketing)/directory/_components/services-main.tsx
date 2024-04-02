import { cn } from "@/lib/utils";
import { poppinsFont } from "../../_components/quick-link-section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function DirectoryMain() {
  return (
    
    <div
      className={cn(
        "pt-20 pb-10 sm:pt-32 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-x-12 px-4 sm:px-0",
        poppinsFont.className
      )}
    >
       <h2 className="text-2xl font-bold">Welcome to the Directory</h2>
      <p className="text-lg">This is an example of content in the Directory page.</p>
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
        Explore
      </Button>
     
    </div>
  );
}
