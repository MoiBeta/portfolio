import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Moisés Betancourt
        </h1>

        <p className="text-zinc-400 mt-4 text-xl">
          Flutter & Full Stack Developer
        </p>
      </div>
    </main>
  );
}