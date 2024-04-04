import { Footer } from "../_components/footer-section";

import { PaddingMain } from "./_components/padding-main";

export default function DiscoverPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <PaddingMain />
    
      <Footer currentPage="padding" />
    </main>
  );
}
