<template>
  <section class="py-32 px-6 lg:px-12 bg-[#FFDBDE] text-black text-center relative overflow-hidden">
    <!-- Rich Dark Background Textures -->
    <!-- <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-brand-plumDark to-transparent opacity-50"></div>
     -->
    <!-- Glowing Orbs -->
    <!-- <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-plum/20 rounded-full blur-[150px] pointer-events-none"></div> -->
    <!-- <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div> -->

    <div class="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
      <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
        <span class="text-black font-bold tracking-widest uppercase text-xs">For Investors & Partners</span>
      </div>
      
      <h2 class="text-5xl md:text-7xl font-black mb-8">
        <span class="block text-black">Feeling Generous?</span>
      </h2>
      
      <p class="text-xl md:text-2xl mb-12 text-black leading-relaxed font-light max-w-3xl mx-auto">
        Are you a founder, venture capitalist, corporate employee, or other leader who wants to invest or contribute to funding a grant for a female business founder? 
      </p>
      
      <a href="#/contact" class="group relative inline-flex items-center justify-center bg-pink-700 text-white px-10 py-5 rounded-full text-xl font-bold overflow-hidden transition-all shadow-[0_0_40px_rgba(190,24,93,0.15)] hover:shadow-[0_0_60px_rgba(190,24,93,0.3)] hover:scale-105">
        <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/50 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
        <span class="relative flex items-center gap-3">
          Speak to the Team
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
