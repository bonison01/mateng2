import { Footer } from ".../_components/footer-section";
import { Update } from "../_components/bottun_link";
import { PaddingMain } from "./_components/padding-main";

export default function DiscoverPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <PaddingMain />
      <Update currentPage="padding_order" />
      <Footer currentPage="padding" />
    </main>
  );
}
