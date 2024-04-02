import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/buttun_link";

import { DirectoryMain } from "./_components/services-main";

export default function DirectoryPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <DirectoryMain />
      <QuickLink />
      <Footer currentPage="directory" />
    </div>
  );
}
