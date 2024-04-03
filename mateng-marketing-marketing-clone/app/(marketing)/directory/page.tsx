import { Footer } from "../_components/footer-section";
import { Update } from "./_components/bottun_link";
import { DirectoryMain } from "./_components/directory-main";

export default function DirectoryPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <DirectoryMain />
      <Update/>
      <Footer currentPage="directory" />
      
      
    </div>
  );
}
