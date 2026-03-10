<template>
  <section class="relative min-h-screen pt-40 pb-32 px-6 lg:px-12 bg-[#FFDBDE] overflow-hidden flex flex-col justify-center items-center text-center isolate">
    <div class="absolute top-6 left-6 md:top-10 md:left-12 z-20 flex items-center gap-4">
      <a href="https://beautyhutafrica.com" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
        <img src="/logo.png" alt="Beauty Hut Logo" class="h-8 md:h-12 w-auto" />
      </a>
      <div class="h-8 md:h-12 w-[1px] bg-black/10"></div>
      <a href="https://busha.io/" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
        <img src="/busha_logo.png" alt="Busha Logo" class="h-5 md:h-8 w-auto opacity-90" />
      </a>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto space-y-10">
      
      <!-- Badge #FFDBDE -->
      <!-- <div class="animate-fade-in-up" style="animation-delay: 0.1s;">
        <div class="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-brand-plum/10 rounded-full px-5 py-2 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span class="w-2 h-2 rounded-full bg-brand-plum animate-pulse"></span>
          <span class="text-brand-plumDark font-semibold tracking-widest uppercase text-xs">Empowering Female Founders</span>
        </div>
      </div> -->

      <!-- Main Headline -->
      <h1 class="text-6xl md:text-7xl font-black tracking-tight text-brand-black mb-6 leading-[1.1] animate-fade-in-up" style="animation-delay: 0.2s;">
        <span class="block text-black text-2xl md:text-4xl font-medium tracking-[0.2em] uppercase mb-4 font-sans leading-tight">Beauty Hut Women’s Grant</span>
        <span class="text-black text-4xl md:text-6xl font-light">powered by <span class="font-black">Busha</span></span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up" style="animation-delay: 0.3s;">
        Over <strong class="text-brand-plum font-semibold">₦6,000,000</strong> total in equity-free grants up for grabs to grow your business!
      </p>

      <!-- CTA -->
      <div class="pt-8 animate-fade-in-up" style="animation-delay: 0.4s;">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdcIBF_PYPTE3WS3neU2o6VKKATJUG0ZOYkmGi-ND1hnjmOFA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" class="group bg-pink-700 relative inline-flex items-center justify-center text-white px-12 py-5 rounded-full text-xl font-bold overflow-hidden transition-all">
          <span class="absolute inset-0 w-full h-full bg-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span class="relative flex items-center gap-3">
            Apply Now
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
        </a>
      </div>

      <!-- Floating UI element detail --> 
      <!-- <div class="mt-20 relative animate-fade-in-up" style="animation-delay: 0.5s;">
        <div class="absolute inset-0 bg-gradient-to-t from-brand-sand via-transparent to-transparent z-10 bottom-[-10px]"></div>
        <img src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=2000&auto=format&fit=crop" alt="Beauty Products" class="w-full h-[400px] object-cover rounded-[2.5rem] shadow-2xl border border-white/50" />
      </div> -->

    </div>
  </section>
</template>
