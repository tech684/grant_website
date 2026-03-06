<template>
  <section class="min-h-screen pt-40 pb-32 px-6 lg:px-12 bg-white relative flex flex-col justify-center items-center">
    
    <div class="absolute top-6 left-6 md:top-10 md:left-12 z-20">
      <a href="#/">
        <img src="/logo.png" alt="Beauty Hut Logo" class="h-10 md:h-12 w-auto hover:scale-105 transition-transform" />
      </a>
    </div>

    <!-- Decorative Additions -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFDBDE]/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-plumLight/20 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

    <div class="w-full max-w-2xl glass-card rounded-[2.5rem] p-8 md:p-16 relative z-10 text-center animate-fade-in-up border-white/60 shadow-xl">
      <div class="w-20 h-20 md:w-24 md:h-24 mx-auto bg-pink-50 rounded-full flex items-center justify-center mb-8 text-pink-700 shadow-sm border border-pink-100">
        <svg class="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
      </div>
      
      <h2 class="text-3xl md:text-5xl font-black text-brand-black mb-6">Let's Connect</h2>
      <p class="text-md md:text-lg text-gray-500 mb-10 leading-relaxed font-light">
        We would love to hear from investors or partners eager to contribute. Reach out to our team directly.
      </p>

      <div class="space-y-6 text-left border border-gray-100 p-6 md:p-8 rounded-[1.5rem] bg-white/50 mb-10 shadow-sm">
        <div class="flex items-start gap-4">
          <div class="bg-pink-100 p-3 rounded-full text-pink-700 mt-1 shrink-0">
            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <div class="min-w-0">
            <span class="block text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</span>
            <a href="mailto:hello@beautyhut.com" class="text-lg md:text-xl font-bold text-brand-black hover:text-pink-700 transition-colors break-all">hello@beautyhut.com</a>
          </div>
        </div>
      </div>
      
      <a href="#/" class="inline-flex items-center gap-2 text-pink-700 font-bold hover:text-brand-black transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Return to Home
      </a>
    </div>
  </section>
</template>

<script setup>
</script>
