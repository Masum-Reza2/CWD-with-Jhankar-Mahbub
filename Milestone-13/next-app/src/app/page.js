import Counter from "@/Components/Counter/Counter";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Let's explore NEXT js</h1>
      <Link href={'/news'}>
        <button className="border border-red-500 p-2 rounded-lg">News</button>
      </Link>
      <Link href={'/about'}>
        <button className="border border-red-500 p-2 rounded-lg">About</button>
      </Link>

      <Counter />
    </main>
  )
}