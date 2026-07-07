import LazyHeroScene from "@/components/LazyHeroScene";
import ParallaxText from "@/components/ParallaxText";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden bg-grid-pattern">
      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen">
        {/* 3D Canvas Background */}
        <LazyHeroScene />

        {/* Content */}
        <div className="relative z-40 flex flex-col min-h-screen pointer-events-none">
          
          {/* Header */}
          <header className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pointer-events-auto">
            <ParallaxText offset={20} className="text-xs tracking-widest uppercase font-mono">
              <p>Not a studio.<br/>Not an agency.<br/>An album of minds.</p>
            </ParallaxText>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 text-sm">
              <ParallaxText offset={30}>
                <p>Collectiva is a collective of designers, artists, technologists, and strategists working as one.</p>
              </ParallaxText>
            </div>
            <ParallaxText offset={50} className="text-xs font-mono uppercase tracking-widest text-left md:text-right">
              6°10&apos;30&quot; — 107°36&apos;E — 7.9689°<br/>
              {new Date().getFullYear()} copyright collectiva®
            </ParallaxText>
          </header>

          {/* Hero Title */}
          <div className="flex-1 flex flex-col justify-center items-center text-center -mt-12 md:-mt-4 lg:mt-20">
            <ParallaxText hero offset={150}>
              <h1 className="text-[15vw] leading-none font-bold tracking-tighter text-[var(--foreground)] font-sans">
                collectiva
              </h1>
            </ParallaxText>
          </div>
          
          {/* Hero Footer / Info section */}
          <footer className="p-8 mt-auto pointer-events-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <ParallaxText offset={50}>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  3 cities <br/>
                  3 Continent <br/>
                  1 aim
                </h2>
              </ParallaxText>
              <ParallaxText offset={60}>
                <p className="text-lg md:text-xl max-w-md">
                  Assembled, not accumulated. Built different. A new shape of creative work. System over ego.
                </p>
              </ParallaxText>
            </div>
          </footer>
        </div>
      </div>

      {/* SECTION 2: The Editor's Note */}
      <section className="relative z-20 min-h-screen flex flex-col lg:flex-row">
        {/* Left Grid Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-[70%] md:w-[60%] lg:w-[60%] grid grid-cols-4 grid-rows-4 gap-3 md:gap-4 min-h-[300px] md:min-h-[375px] lg:min-h-[450px]">
          {/* Editorial visual boxes with extracted images */}
          <div className="bg-[var(--foreground)]/10 col-span-2 row-span-2 rounded-sm bg-cover bg-center" style={{ backgroundImage: "url('/images/coca-cola.jpg')" }} />
          <div className="bg-[var(--foreground)]/20 col-span-2 rounded-sm bg-cover bg-center" style={{ backgroundImage: "url('/images/Nike_Zoom_Fly.jpeg')" }} />
          <div className="bg-[var(--foreground)]/15 col-span-2 row-span-2 rounded-sm bg-cover bg-center" style={{ backgroundImage: "url('/images/fiat-bg.jpeg')" }} />
          <div className="bg-[var(--foreground)]/10 col-span-2 row-span-1 rounded-sm bg-cover bg-center" style={{ backgroundImage: "url('/images/farmers-market-bg.jpeg')" }} />
          <div className="bg-[var(--foreground)]/5 col-span-4 row-span-1 flex items-center justify-center rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/img-081.jpg')" }} />
            <span className="text-4xl font-bold tracking-tighter mix-blend-difference text-white relative z-10">the editor&apos;s note</span>
          </div>
        </div>
      </div>
      
      {/* Right Typography Side */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <ParallaxText offset={80}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-12 leading-none">
              Built different.<br/>Played loud.
            </h2>
          </ParallaxText>
          <div className="text-xl md:text-2xl space-y-8 max-w-lg">
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
      <section className="relative z-20 min-h-screen flex flex-col items-center justify-center pt-32 md:pt-48 pb-16 px-8 text-center">
        <ParallaxText offset={100}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-10 md:mb-16">A collective, by design</h2>
        </ParallaxText>
        <div className="text-xl sm:text-2xl md:text-3xl font-light space-y-4 md:space-y-6 max-w-2xl">
          <ParallaxText offset={110}><p>Different cities.</p></ParallaxText>
          <ParallaxText offset={120}><p>Different disciplines.</p></ParallaxText>
          <ParallaxText offset={130}><p>One shared standard.</p></ParallaxText>
        </div>
        <ParallaxText offset={150}>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl font-medium opacity-80 leading-relaxed mt-10 md:mt-12 mb-4">
              Rather than scaling through size, Collectiva® builds coherence, bringing the right
              minds together at the right moment, supported by broader infrastructure and vision.
            </p>
          </ParallaxText>
        <LogoMarquee />
      </section>

      {/* SECTION 4: What We Build */}
      <section className="relative z-20 min-h-screen p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <ParallaxText offset={80}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-16 max-w-4xl text-balance">
            From visuals to interaction, <br className="hidden md:block" />
            we design complete brand experiences.
          </h2>
        </ParallaxText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-lg md:text-xl max-w-5xl">
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
            <p>We craft compelling narratives through high-quality photography and video production, storytelling, and motion design.</p>
          </ParallaxText>
          <ParallaxText offset={160}>
            <h3 className="font-bold mb-4 border-b border-[var(--foreground)]/20 pb-4">Immersive Media / Immersive Experience Design</h3>
            <p>Blurring the lines between physical and digital spaces to create interactive and unforgettable brand experiences.</p>
          </ParallaxText>
        </div>
      </section>

      {/* SECTION 5: Brand Roster */}
      <section className="relative z-20 min-h-screen p-8">
        <div className="text-center mb-16 pt-16">
          <ParallaxText offset={60}>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Work that holds</h2>
          </ParallaxText>
          <ParallaxText offset={80}>
            <p className="text-lg md:text-xl">Collectiva® exists to make collaboration feel composed.</p>
          </ParallaxText>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8 max-w-6xl mx-auto">
          {/* Bento boxes for clients with extracted PDF thumbnails */}
          
          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/heinz.jpg')" }}>
            <div className="absolute inset-0 bg-[#000000]/60 group-hover:bg-[#000000]/20 transition-colors duration-500" />
            <img src="/images/heinz_2026_logo.svg" alt="Heinz" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg filter invert brightness-0" />
          </div>

          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/coca-cola.jpg')" }}>
            <div className="absolute inset-0 bg-[#000000]/60 group-hover:bg-[#000000]/20 transition-colors duration-500" />
            <img src="/images/logo-coca-cola.svg" alt="Coca-Cola" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg filter invert brightness-0" />
          </div>
          
          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/expo.jpg')" }}>
            <div className="absolute inset-0 bg-[#000000]/60 group-hover:bg-[#000000]/20 transition-colors duration-500" />
            <img src="/images/logo-expo.png" alt="Expo City Dubai" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg filter invert brightness-0" />
          </div>

          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/roast-bake.jpg')" }}>
            <div className="absolute inset-0 bg-[#7B519C]/70 group-hover:bg-[#7B519C]/30 transition-colors duration-500" />
            <img src="/images/roast_bake.svg" alt="Roast & Bake" className="relative z-10 max-w-[80%] max-h-32 object-contain drop-shadow-lg" />
          </div>
          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/fiat-bg.jpeg')" }}>
            <div className="absolute inset-0 bg-[#000000]/40 group-hover:bg-[#000000]/10 transition-colors duration-500" />
            <img src="/images/fiat.svg" alt="Fiat" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg filter invert brightness-0" />
          </div>

          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/farmers-market-bg.jpeg')" }}>
            <div className="absolute inset-0 bg-[#000000]/40 group-hover:bg-[#000000]/10 transition-colors duration-500" />
            <img src="/images/farmers-market-99.svg" alt="Farmers Market" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg filter invert brightness-0" />
          </div>
          
          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/Four_football_players_action_pose_202607072215.jpeg')" }}>
            <div className="absolute inset-0 bg-[#000000]/40 group-hover:bg-[#000000]/20 transition-colors duration-500" />
            <img src="/images/logo-fifae.png" alt="FIFAe" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg" />
          </div>
          

          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/Nike_Zoom_Fly.jpeg')" }}>
            <div className="absolute inset-0 bg-[#000000]/40 group-hover:bg-[#000000]/10 transition-colors duration-500" />
            <img src="/images/nike_Logo.svg" alt="Nike" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg filter invert brightness-0" />
          </div>
          
          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/aivory-14.jpg')" }}>
            <div className="absolute inset-0 bg-[#5700FF]/70 group-hover:bg-[#5700FF]/30 transition-colors duration-500" />
            <img src="/images/logo-aivory.png" alt="Aivory" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg" />
          </div>
          
          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/Nuitree_sip_tastic_compressed.jpeg')" }}>
            <div className="absolute inset-0 bg-[#000000]/60 group-hover:bg-[#000000]/20 transition-colors duration-500" />
            <img src="/images/logo-nuitree.png" alt="Nuitree" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg" />
          </div>
          

          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/chip_happens_compressed.jpeg')" }}>
            <div className="absolute inset-0 bg-[#000000]/60 group-hover:bg-[#000000]/20 transition-colors duration-500" />
            <img src="/images/chip_happens.svg" alt="Chip Happens" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg filter invert brightness-0" />
          </div>
          
          <div className="aspect-square rounded-lg p-4 md:p-8 flex items-center justify-center text-white text-3xl font-bold hover:scale-95 transition-transform cursor-pointer shadow-xl relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('/images/zensend-bag.jpeg')" }}>
            <div className="absolute inset-0 bg-[#000000]/50 group-hover:bg-[#000000]/20 transition-colors duration-500" />
            <img src="/images/ZenSendLogo_white.svg" alt="ZenSend" className="relative z-10 max-w-[80%] max-h-24 object-contain drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* SECTION 6: The Back Page (CTA) */}
      <section className="relative z-20 min-h-[70vh] text-[var(--foreground)] flex flex-col justify-between p-8 md:p-12 lg:p-16">
        <div className="mt-8">
          <ParallaxText offset={150}>
            <h2 className="text-[12vw] leading-none font-bold tracking-tighter opacity-80 hover:opacity-100 transition-opacity">CAN WE</h2>
          </ParallaxText>
          <ParallaxText offset={200}>
            <h2 className="text-[12vw] leading-none font-bold tracking-tighter md:ml-32 opacity-80 hover:opacity-100 transition-opacity">TALK?</h2>
          </ParallaxText>
        </div>
        
        <div className="flex flex-col gap-12 md:gap-16 mt-16 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
            <ParallaxText offset={50} className="w-full md:w-auto">
              <div className="flex flex-col items-start gap-8">
                <p className="text-lg md:text-xl max-w-md font-medium uppercase tracking-widest">Because growth starts when someone feels your brand belongs</p>
                <img src="/images/Footer_micro_graphic.svg" alt="Footer Graphic" className="h-12 md:h-20 w-auto object-contain shrink-0 opacity-80 -ml-2 md:-ml-6 lg:-ml-8" />
              </div>
            </ParallaxText>
            
            <ParallaxText offset={80} className="w-full md:w-auto">
              <a href="mailto:hello@collectiva.pro" className="inline-block text-xl md:text-3xl break-all font-bold border-b-4 border-[var(--foreground)] pb-2 hover:text-white hover:border-white transition-colors">hello@collectiva.pro</a>
            </ParallaxText>
          </div>
        </div>
      </section>
    </main>
  );
}
