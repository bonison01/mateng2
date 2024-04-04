import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { poppinsFont } from "../../_components/quick-link-section";

import Link from "next/link";


export function Update({ currentPage }: { currentPage?: string }) {
  return (
    <div className="w-full px-4 py-6 sm:w-3/6 flex flex-col items-start my-auto">
      <p
        className={cn(
          "text-blue-800 text-lg font-medium sm:font-semibold",
          poppinsFont.className
        )}
      >
        UPDATE
      </p>
      <Separator className="h-[1px] rounded-md bg-gray-600 sm:mt-2" />
      <div className="flex flex-col items-center sm:flex-row justify-center sm:space-x-8 space-y-2 sm:space-y-0 mt-2 sm:mt-4 w-full">
        <Button
          className={cn(
            "w-40 h-10 sm:w-52 sm:h-30",
            currentPage && currentPage === "total_order" && "hidden"
          )}
          asChild
        >
          <Link href={"/padding_order"}>TOTAL ORDER</Link>
        </Button>
        <Button
          className={cn(
            "w-40 h-10 sm:w-52 sm:h-30",
            currentPage && currentPage === "today_order" && "hidden"
          )}
          asChild
        >
          <Link href={"/padding_order"}>Today order</Link>
        </Button>
        <Button
          className={cn(
            "w-40 h-10 sm:w-52 sm:h-30",
            currentPage && currentPage === "padding_order" && "hidden"
          )}
          asChild
        >
          <Link href={"/padding_order"}>Padding</Link>
        </Button>
       
        
      </div>
    </div>
  );
}
