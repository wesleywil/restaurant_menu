import { Parisienne, Domine } from "next/font/google";

const parisienne = Parisienne({ weight: "400", subsets: ["latin"] });
const domine = Domine({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`  h-screen w-full bg-[#1b1c1f] flex flex-col items-center justify-center font-bold ${domine.className}`}
    >
      <div
        className={`mt-[-5rem] text-center text-[#e1d498] text-6xl flex justify-center gap-2 ${parisienne.className}`}
      >
        <h1>Holy</h1>
        <h1>Fork</h1>
      </div>

      <div
        className={`mt-8 flex flex-col items-center gap-2 justify-center text-[#4aba2e] text-9xl border-b-4 border-[#4aba2e] `}
      >
        <h1>FOOD</h1>
        <h1>MENU</h1>
      </div>
    </div>
  );
}
