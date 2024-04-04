import { Footer } from ".../_components/footer-section";
import { Update } from "../_components/bottun_link";
import { TotalOrderMain } from "./_components/total-order-main";

export default function DiscoverPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <TotalOrderMain />
      <Update currentPage="total-order" />
      <Footer currentPage="total-order" />
    </main>
  );
}
