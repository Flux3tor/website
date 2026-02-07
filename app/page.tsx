import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <main className="w-full">

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          Flux3tor
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-xl">
          Building web apps, AI tools, and internet projects.
        </p>

        <p className="mt-2 text-neutral-500">
          Currently building and shipping nonstop.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="glass px-6 py-3 hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="mailto:me@flux3tor.xyz"
            className="glass px-6 py-3 hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>

        <StatusBar />
        
      </section>

    </main>
  );
}
