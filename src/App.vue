<template>
  <div class="min-h-screen bg-brand-sand font-sans text-brand-black selection:bg-[#FFDBDE]/50 selection:text-brand-plum overflow-x-hidden relative">
    
    <!-- Premium Background Elements -->
    <div class="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FFDBDE]/60 rounded-full blur-[150px] pointer-events-none z-0"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-plumLight/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
    <div class="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none z-0"></div>

    <!-- Header -->


    <main class="relative z-10" v-if="currentRoute === '#/contact'">
      <ContactPage />
    </main>
    <main class="relative z-10" v-else>
      <HeroSection @scroll-to-apply="scrollToApply" />
      <AboutSection />
      <PrizeSection />
      <EligibilityTimeline />
      <ApplicationForm />
    </main>
    
    <footer class="bg-brand-black text-[#FCF0F1] py-16 px-6 relative z-10 overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div class="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <div class="flex items-center gap-6 mb-8">
          <a href="https://beautyhutafrica.com" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
            <img src="/logo.png" alt="Beauty Hut Logo" class="h-8 md:h-12 w-auto" />
          </a>
          <div class="h-6 w-[1px] bg-white/20"></div>
          <a href="https://busha.io/" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
            <img src="/busha_logo_white.png" alt="Busha Logo" class="h-4 md:h-5 w-auto opacity-80" />
          </a>
        </div>
        <p class="text-lg font-light tracking-wide">&copy; 2026 Beauty Hut Women’s Grant powered by Busha.</p>
        <p class="text-sm text-gray-400 mt-2">Empowering female founders across Nigeria.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PrizeSection from './components/PrizeSection.vue'
import EligibilityTimeline from './components/EligibilityTimeline.vue'
import ApplicationForm from './components/ApplicationForm.vue'
import ContactPage from './components/ContactPage.vue'

const currentRoute = ref(window.location.hash || '#/')

const updateRoute = () => {
  currentRoute.value = window.location.hash
}

onMounted(() => {
  window.addEventListener('hashchange', updateRoute)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', updateRoute)
})

const scrollToApply = () => {
  const el = document.getElementById('apply')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
