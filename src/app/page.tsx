import HeroScene from "@/components/HeroScene";
import ParallaxText from "@/components/ParallaxText";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden bg-grid-pattern">
      
      {/* 3D Canvas Background */}
      <HeroScene />



      {/* Content */}
      <div className="relative z-40 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[var(--foreground)]/20 gap-4">
          <ParallaxText offset={20} className="text-sm tracking-widest uppercase font-mono">
            <p>Not a studio.<br/>Not an agency.<br/>An album of minds.</p>
          </ParallaxText>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm">
            <ParallaxText offset={30}>
              <p>Collectiva is a living record of creative forces<br/>designers, artists, technologists, strategists<br/>pressed together into one coherent sound.</p>
            </ParallaxText>
            <ParallaxText offset={40}>
              <p>Collectiva exists to do what single studios<br/>can&apos;t: compose at scale, without losing soul.</p>
            </ParallaxText>
          </div>
          <ParallaxText offset={50} className="text-xs font-mono uppercase tracking-widest text-left md:text-right">
            6°10&apos;30&quot; — 107°36&apos;E — 7.9689°<br/>
            {new Date().getFullYear()} copyright collectiva®
          </ParallaxText>
        </header>

        {/* Hero Title */}
        <div className="flex-1 flex flex-col justify-center items-center text-center mt-20 pointer-events-none">
          <ParallaxText hero offset={150}>
            <h1 className="text-[15vw] leading-none font-bold tracking-tighter text-[var(--foreground)]">
              collectiva
            </h1>
          </ParallaxText>
        </div>
        
        {/* Hero Footer / Info section */}
        <footer className="p-8 mt-auto border-t border-[var(--foreground)]/20 bg-[var(--background)]/80 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <ParallaxText offset={50}>
              <h2 className="text-5xl font-medium tracking-tight">
                3 cities <br/>
                100 minds <br/>
                1 aim
              </h2>
            </ParallaxText>
            <ParallaxText offset={60}>
              <p className="text-xl max-w-md">
                Assembled, not accumulated. Built different. A new shape of creative work. System over ego.
              </p>
            </ParallaxText>
          </div>
        </footer>
      </div>

      {/* SECTION 2: The Editor's Note */}
      <section className="relative z-20 min-h-screen border-t border-[var(--foreground)]/20 flex flex-col md:flex-row">
        {/* Left Grid Side */}
        <div className="w-full md:w-1/2 border-r border-[var(--foreground)]/20 grid grid-cols-4 grid-rows-4 p-8 gap-4 min-h-[600px]">
          {/* Editorial visual boxes with extracted images */}
          <div className="bg-[var(--foreground)]/10 col-span-2 row-span-2 rounded-sm bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('/images/img-000.png')" }} />
          <div className="bg-[var(--foreground)]/20 col-span-2 rounded-sm bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('/images/img-054.png')" }} />
          <div className="bg-[var(--foreground)]/15 col-span-2 row-span-2 rounded-sm bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('/images/img-044.png')" }} />
          <div className="bg-[var(--foreground)]/10 col-span-2 row-span-1 rounded-sm bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('/images/img-028.png')" }} />
          <div className="bg-[var(--foreground)]/5 col-span-4 row-span-1 flex items-center justify-center rounded-sm overflow-hidden relative group">
            <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-100 transition-opacity duration-700 grayscale" style={{ backgroundImage: "url('/images/img-081.png')" }} />
            <span className="text-4xl font-bold tracking-tighter mix-blend-difference text-white relative z-10">the editor's note</span>
          </div>
        </div>
        
        {/* Right Typography Side */}
        <div className="w-full md:w-1/2 p-16 flex flex-col justify-center">
          <ParallaxText offset={80}>
            <h2 className="text-7xl font-bold tracking-tighter mb-12 leading-none">
              Built different.<br/>Played loud.
            </h2>
          </ParallaxText>
          <div className="text-2xl space-y-8 max-w-lg">
            <ParallaxText offset={100}>
              <p>Collectiva® is a creative workforce built for impact. Fast, focused, and in sync.</p>
            </ParallaxText>
            <ParallaxText offset={120}>
              <p>Less corporate structure, more band on tour. Individual excellence, collective precision moving as one when it counts.</p>
            </ParallaxText>
            <ParallaxText offset={140}>
              <p>Creative work with presence. Trusted in structure. Alive in execution.</p>
            </ParallaxText>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Collective (Structure) */}
      <section className="relative z-20 min-h-screen border-t border-[var(--foreground)]/20 bg-[var(--foreground)] text-[var(--background)] flex flex-col items-center justify-center pt-48 pb-16 px-8 text-center">
        <ParallaxText offset={100}>
          <h2 className="text-8xl font-bold tracking-tighter mb-16">A collective, by design</h2>
        </ParallaxText>
        <div className="text-3xl font-light space-y-6 max-w-2xl">
          <ParallaxText offset={110}><p>Different cities.</p></ParallaxText>
          <ParallaxText offset={120}><p>Different disciplines.</p></ParallaxText>
          <ParallaxText offset={130}><p>One shared standard.</p></ParallaxText>
        </div>
        <ParallaxText offset={150}>
            <p className="text-xl max-w-2xl font-medium opacity-80 leading-relaxed mt-12 mb-4">
              Rather than scaling through size, Collectiva® builds coherence, bringing the right
              minds together at the right moment, supported by broader infrastructure and vision.
            </p>
          </ParallaxText>
        <LogoMarquee />
      </section>

      {/* SECTION 4: What We Build */}
      <section className="relative z-20 min-h-screen border-t border-[var(--foreground)]/20 p-16 flex flex-col justify-center">
        <ParallaxText offset={80}>
          <h2 className="text-6xl font-bold tracking-tighter mb-16 max-w-2xl">Branding doesn't end at visuals. It continues into experience.</h2>
        </ParallaxText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-xl max-w-5xl">
          <ParallaxText offset={100}>
            <h3 className="font-bold mb-4 border-b border-[var(--foreground)]/20 pb-4">Brand Design</h3>
            <p>We design brand systems that live across identity, interface, and interaction.</p>
          </ParallaxText>
          <ParallaxText offset={120}>
            <h3 className="font-bold mb-4 border-b border-[var(--foreground)]/20 pb-4">Digital Products</h3>
            <p>Websites, UI/UX, and digital products are treated as brand surfaces, not technical deliverables.</p>
          </ParallaxText>
          <ParallaxText offset={140}>
            <h3 className="font-bold mb-4 border-b border-[var(--foreground)]/20 pb-4">AV Production (Audio-Visual Production)</h3>
            <p>We craft compelling narratives through high-quality video production, storytelling, and motion design.</p>
          </ParallaxText>
          <ParallaxText offset={160}>
            <h3 className="font-bold mb-4 border-b border-[var(--foreground)]/20 pb-4">Immersive Media / Immersive Experience Design</h3>
            <p>Blurring the lines between physical and digital spaces to create interactive and unforgettable brand experiences.</p>
          </ParallaxText>
        </div>
      </section>

      {/* SECTION 5: Brand Roster */}
      <section className="relative z-20 min-h-screen border-t border-[var(--foreground)]/20 bg-[var(--background)] p-8">
        <div className="text-center mb-16 pt-16">
          <ParallaxText offset={60}>
            <h2 className="text-7xl font-bold tracking-tighter mb-4">Work that holds</h2>
          </ParallaxText>
          <ParallaxText offset={80}>
            <p className="text-xl">Collectiva® exists to make collaboration feel composed.</p>
          </ParallaxText>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
          {/* Bento boxes for clients with extracted PDF thumbnails */}
          <div className="aspect-square rounded-lg p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/aivory-14.png')" }}>
            <div className="absolute inset-0 bg-[#5700FF]/70 group-hover:bg-[#5700FF]/30 transition-colors duration-500" />
            <img src="/images/logo-aivory.png" alt="Aivory" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg" />
          </div>
          
          <div className="aspect-square rounded-lg p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/nuitree-21.png')" }}>
            <div className="absolute inset-0 bg-[#0D9158]/70 group-hover:bg-[#0D9158]/30 transition-colors duration-500" />
            <img src="/images/logo-nuitree.png" alt="Nuitree" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg" />
          </div>
          
          <div className="aspect-square rounded-lg p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/fifae-28.png')" }}>
            <div className="absolute inset-0 bg-[#3A332C]/70 group-hover:bg-[#3A332C]/30 transition-colors duration-500" />
            <img src="/images/logo-fifae.png" alt="FIFAe" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg" />
          </div>
          
          <div className="aspect-square rounded-lg p-8 flex items-center justify-center text-white text-3xl font-bold text-center hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/asean-30.png')" }}>
            <div className="absolute inset-0 bg-[#B68B40]/70 group-hover:bg-[#B68B40]/30 transition-colors duration-500" />
            <img src="/images/logo-asean.png" alt="ASEAN United FC" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg" />
          </div>
          
          <div className="aspect-square rounded-lg p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/artifisial-18.png')" }}>
            <div className="absolute inset-0 bg-[#7248EE]/70 group-hover:bg-[#7248EE]/30 transition-colors duration-500" />
            <img src="/images/logo-artifisial.png" alt="Artifisial" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* SECTION 6: The Back Page (CTA) */}
      <section className="relative z-20 min-h-[70vh] border-t border-[var(--foreground)]/20 text-[var(--foreground)] flex flex-col justify-between p-16">
        <div className="mt-8">
          <ParallaxText offset={150}>
            <h2 className="text-[12vw] leading-none font-bold tracking-tighter opacity-80 hover:opacity-100 transition-opacity">CAN WE</h2>
          </ParallaxText>
          <ParallaxText offset={200}>
            <h2 className="text-[12vw] leading-none font-bold tracking-tighter md:ml-32 opacity-80 hover:opacity-100 transition-opacity">TALK?</h2>
          </ParallaxText>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end mt-16 border-t border-[var(--foreground)]/20 pt-8">
          <ParallaxText offset={50} className="w-full md:w-auto">
            <p className="text-xl max-w-md font-medium uppercase tracking-widest mb-8 md:mb-0">Because growth starts when someone feels your brand belongs</p>
          </ParallaxText>
          <ParallaxText offset={80}>
            <a href="mailto:hello@collectiva.pro" className="text-3xl font-bold border-b-4 border-[var(--foreground)] pb-2 hover:text-white hover:border-white transition-colors">hello@collectiva.pro</a>
          </ParallaxText>
        </div>
      </section>
    </main>
  );
}
