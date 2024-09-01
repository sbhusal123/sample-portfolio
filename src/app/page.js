import { Hero } from "@/components/Hero";
import { OurWork } from "@/components/OurWork";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-slate-300 sm:px-20 px-5 py-5">
      <Hero/>
      <Services/>
      <OurWork/>
    </main>
  );
}
