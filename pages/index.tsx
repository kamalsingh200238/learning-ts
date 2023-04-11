import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-white">
      <Link href={"/days/day1"}>
        Day1
      </Link>
    </main>
  );
}
