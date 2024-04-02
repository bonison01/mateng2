import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/bottun_link";

import { Main } from "./_components/main-section";
export default function DirectoryPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      
      <QuickLink />
      <Footer currentPage="directory" />
    </div>
  );
}
