import { Footer } from "../_components/footer-section";


import { DirectoryMain } from "./_components/directory-main";

export default function DirectoryPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <DirectoryMain />
      
      
      <Footer currentPage="directory" />
    </div>
  );
}