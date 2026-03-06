<template>
  <section class="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
    <!-- Background Accents -->
    <div class="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FFDBDE]/30 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
    
    <div class="max-w-7xl mx-auto relative z-10 text-center">
      <div class="inline-flex items-center gap-2 bg-brand-plumLight/10 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
        <span class="text-brand-plumDark font-bold tracking-widest uppercase text-xs">The Rewards</span>
      </div>
      <h2 class="text-4xl md:text-6xl font-black text-brand-black mb-16 animate-fade-in-up">Winner Prizes</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        <!-- 2nd Place -->
        <div class="order-2 md:order-1 animate-fade-in-up" style="animation-delay: 0.1s;">
          <div class="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-brand-sand/20 border-white hover:border-brand-plum/20 transition-all duration-500 group">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-gray-400 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
              <span class="text-xl md:text-2xl font-black">2nd</span>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-gray-600 mb-1 md:mb-2 text-nowrap">Second Place</h3>
            <p class="text-2xl md:text-3xl font-black text-brand-black tracking-tight whitespace-nowrap">₦2,000,000</p>
            <p class="text-xs md:text-sm text-gray-400 mt-2 md:mt-4 font-light italic">Equity-free grant funding</p>
          </div>
        </div>

        <!-- 1st Place -->
        <div class="order-1 md:order-2 animate-fade-in-up" style="animation-delay: 0s;">
          <div class="glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-white to-[#FFDBDE]/30 border-brand-plum/20 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div class="absolute top-0 right-0 p-3 md:p-4">
              <div class="bg-brand-plum text-white text-[9px] md:text-[10px] font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-widest">Grand Prize</div>
            </div>
            <div class="w-16 h-16 md:w-20 md:h-20 bg-brand-plum rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 text-white shadow-lg group-hover:rotate-6 transition-transform">
              <svg class="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-brand-black mb-1 md:mb-2 text-nowrap">First Place</h3>
            <p class="text-3xl md:text-5xl font-black text-pink-700 tracking-tighter whitespace-nowrap">₦3,000,000</p>
          </div>
        </div>

        <!-- 3rd Place -->
        <div class="order-3 animate-fade-in-up" style="animation-delay: 0.2s;">
          <div class="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-brand-sand/20 border-white hover:border-brand-plum/20 transition-all duration-500 group">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-amber-700/50 shadow-sm border border-amber-100 group-hover:scale-110 transition-transform">
              <span class="text-xl md:text-2xl font-black">3rd</span>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-gray-600 mb-1 md:mb-2 text-nowrap">Third Place</h3>
            <p class="text-2xl md:text-3xl font-black text-brand-black tracking-tight whitespace-nowrap">₦1,000,000</p>
            <p class="text-xs md:text-sm text-gray-400 mt-2 md:mt-4 font-light italic">Equity-free grant funding</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props or logic can be added here if needed
</script>
