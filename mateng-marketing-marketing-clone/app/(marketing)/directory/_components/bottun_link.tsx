import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["900", "800", "700", "500", "400", "300", "200", "100", "600"],
});

export function Update({ currentPage }: { currentPage?: string }) {
  return (
    <div className="w-full px-4 py-6 sm:w-3/6 flex flex-col items-center my-auto">
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
            "w-40 h-8 sm:w-52 sm:h-10",
            currentPage && currentPage === "today_order" && "hidden"
          )}
          asChild
        >
          <Link href={"/padding_order"}>Today order</Link>
        </Button>
        <Button
          className={cn(
            "w-40 h-8 sm:w-52 sm:h-10",
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
