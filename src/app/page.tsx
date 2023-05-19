import { Domine } from "next/font/google";
import HomeBrand from "@/components/home_brand/home_brand.component";
import HomeTitle from "@/components/home_title/home_title.component";

const domine = Domine({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`h-screen w-full bg-[#1b1c1f] flex flex-col items-center justify-center font-bold ${domine.className}`}
    >
      <HomeBrand />

      <HomeTitle />
    </div>
  );
}
