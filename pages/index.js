import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen">
      {/*Hero Section*/}
      <section className="h-[300px] bg-gray-300"></section>
      {/*Products Section*/}
      <section className="h-[300px] bg-green-300"></section>
      {/*Hero Section*/}
      <section className="h-[300px] bg-red-300"></section>
      {/*Hero Section*/}
      <section className="h-[300px] bg-yellow-300"></section>
    </main>
  );
}
