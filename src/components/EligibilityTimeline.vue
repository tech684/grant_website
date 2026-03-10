<template>
  <section class="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-brand-sand relative overflow-hidden">
    <!-- Decorative Blurs -->
    <div class="absolute left-[-10%] top-[20%] w-[300px] h-[300px] bg-brand-plumLight/10 rounded-full blur-[80px]"></div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
      
      <!-- Eligibility -->
      <div class="animate-fade-in-up">
        <div class="inline-flex items-center gap-2 bg-brand-plumLight/10 rounded-full px-4 py-1.5 mb-6">
          <span class="text-brand-plumDark font-bold tracking-widest uppercase text-xs">Guidelines</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-brand-black mb-10">Eligibility Requirements</h2>
        <ul class="space-y-6">
          <li v-for="(req, index) in requirements" :key="index" class="flex gap-6 items-start bg-white/60 backdrop-blur-sm p-6 rounded-[1.5rem] shadow-sm border border-brand-plum/5 hover:border-brand-plumLight/40 hover:-translate-y-1 transition-all duration-300 group">
            <div class="min-w-10 min-h-10 rounded-2xl bg-pink-700 flex items-center justify-center text-white font-black text-lg shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
              {{ index + 1 }}
            </div>
            <p class="text-gray-600 leading-relaxed text-lg font-light group-hover:text-brand-black transition-colors">{{ req }}</p>
          </li>
        </ul>
      </div>

      <!-- Timeline -->
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <div class="inline-flex items-center gap-2 bg-[#FFDBDE]/50 rounded-full px-4 py-1.5 mb-6">
          <span class="text-brand-plumDark font-bold tracking-widest uppercase text-xs">Schedule</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-brand-black mb-10">Application Timeline</h2>
        
        <div class="relative border-l-2 border-brand-plum/20 ml-6 space-y-10 py-4">
          <div v-for="(event, index) in timeline" :key="index" class="relative pl-10 group">
            
            <!-- Timeline Dot -->
            <div class="absolute -left-[11px] top-3 w-5 h-5 rounded-full bg-pink-700 border-4 border-brand-sand shadow-md group-hover:scale-125 transition-transform duration-300"></div>
            
            <!-- Timeline Card -->
            <div class="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border border-white hover:border-brand-plumLight/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div class="absolute inset-0 bg-[#FCF0F1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span class="block text-xs font-black text-brand-plumLight mb-3 uppercase tracking-[0.15em] relative z-10">{{ event.date }}</span>
              <h3 class="text-2xl font-bold text-brand-black relative z-10">{{ event.title }}</h3>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const requirements = [
  "Business must be founded by a woman or have at least one founder who identifies as a woman.",
  "Must be a legally registered business (sole proprietorship, partnership, LLC, etc.) or demonstrate a clear path to registration.",
  "Business must be registered or operating in Nigeria.",
  "The business should have been operational for at least 6 months by the application deadline.",
  "Applicants must have a clear plan for how they will use the grant funds."
];

const timeline = [
  { date: "Wed 11th March, 2026", title: "Applications Open" },
  { date: "Thu 26th March, 2026", title: "Applications Close" },
  { date: "Tue 31st March, 2026", title: "Shortlist Announcement" },
  { date: "Sat 11th April, 2026", title: "Live Pitch Event & Finale" },
];
</script>
