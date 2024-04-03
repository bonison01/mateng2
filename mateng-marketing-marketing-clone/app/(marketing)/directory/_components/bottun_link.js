"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickLink = exports.poppinsFont = void 0;
var button_1 = require("@/components/ui/button");
var separator_1 = require("@/components/ui/separator");
var utils_1 = require("@/lib/utils");
var google_1 = require("next/font/google");
var link_1 = require("next/link");
exports.poppinsFont = (0, google_1.Poppins)({
    subsets: ["latin"],
    weight: ["900", "800", "700", "500", "400", "300", "200", "100", "600"],
});
function QuickLink(_a) {
    var currentPage = _a.currentPage;
    return (<div className="w-full px-4 py-6 sm:w-3/6 flex flex-col items-center my-auto">
      <p className={(0, utils_1.cn)("text-blue-800 text-lg font-medium sm:font-semibold", exports.poppinsFont.className)}>
        UPDATE
      </p>
      <separator_1.Separator className="h-[1px] rounded-md bg-gray-600 sm:mt-2"/>
      <div className="flex flex-col items-center sm:flex-row justify-center sm:space-x-8 space-y-2 sm:space-y-0 mt-2 sm:mt-4 w-full">
        <button_1.Button className={(0, utils_1.cn)("w-40 h-8 sm:w-52 sm:h-10", currentPage && currentPage === "total_order" && "hidden")} asChild>
          <link_1.default href={"/total_order"}>TOTAL ORDER</link_1.default>
        </button_1.Button>
        <button_1.Button className={(0, utils_1.cn)("w-40 h-8 sm:w-52 sm:h-10", currentPage && currentPage === "today_order" && "hidden")} asChild>
          <link_1.default href={"/today_order"}>Today order</link_1.default>
        </button_1.Button>
        <button_1.Button className={(0, utils_1.cn)("w-40 h-8 sm:w-52 sm:h-10", currentPage && currentPage === "padding_order" && "hidden")} asChild>
          <link_1.default href={"/padding_order"}>Padding</link_1.default>
        </button_1.Button>
       
        
      </div>
    </div>);
}
exports.QuickLink = QuickLink;
