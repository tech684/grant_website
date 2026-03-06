<template>
  <section id="apply" class="py-32 px-6 lg:px-12 bg-white relative">
    
    <!-- Decorative Accents -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFDBDE]/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-plumLight/20 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

    <div class="max-w-4xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-16 relative z-10 border-white/60">
      
      <!-- Progress Indicator -->
      <div v-if="step > 1 && step < 5" class="mb-12 animate-fade-in-up">
        <div class="flex justify-between text-xs font-black text-brand-black mb-3 uppercase tracking-widest">
          <span>Section {{ step }} of 4</span>
          <span class="text-brand-plumLight">{{ Math.round((step / 4) * 100) }}% Complete</span>
        </div>
        <div class="w-full bg-brand-sand h-3 rounded-full overflow-hidden border border-brand-plum/5">
          <div class="bg-gradient-to-r from-brand-plumLight to-brand-plum h-full rounded-full transition-all duration-700 ease-out relative" :style="{ width: `${(step / 4) * 100}%` }">
            <div class="absolute inset-0 bg-white/20 w-full h-full"></div>
          </div>
        </div>
      </div>

      <!-- Step 1: Welcome -->
      <div v-if="step === 1" class="text-center animate-fade-in-up py-4">
        <div class="w-32 h-32 mx-auto bg-gradient-to-br from-[#FFDBDE] to-white rounded-full flex items-center justify-center mb-10 shadow-lg border border-white">
          <svg class="w-16 h-16 text-brand-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-brand-black mb-6 leading-tight">Welcome to the <br/><span class="text-pink-700">Grant Application</span></h2>
        <p class="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          We’re proud to support ambitious female entrepreneurs across Nigeria. 
          This grant includes up to <strong class="text-brand-plum font-bold">₦3,000,000</strong> in funding and expert mentorship.
        </p>
        <div class="inline-block bg-brand-sand border border-brand-plum/10 px-6 py-2 rounded-full mb-12">
          <p class="text-brand-plumDark uppercase text-sm tracking-widest font-bold">Closes March 20, 2026</p>
        </div>
        
        <div>
          <a href="https://docs.google.com/forms/d/1dh8EXanFdyuas8tiOhDYuS43GMndSkfAunDyoZlBHIc/edit?ts=699dae6e" target="_blank" rel="noopener noreferrer" class="inline-block bg-pink-700 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-[0_20px_40px_-10px_rgba(216,27,96,0.5)] transition-all duration-300 w-full md:w-auto hover:-translate-y-1">
            Start Application
          </a>
        </div>
      </div>

      <!-- Step 2: Personal & Business Info -->
      <div v-if="step === 2" class="animate-fade-in-up">
        <div class="mb-10 text-center">
          <h2 class="text-3xl md:text-4xl font-black text-brand-black mb-3">Personal & Business Info</h2>
          <p class="text-gray-500 font-light text-lg">Tell us about yourself and your business footprint.</p>
        </div>

        <form @submit.prevent="nextStep" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="form-group">
              <label>First Name *</label>
              <input type="text" required v-model="form.firstName">
            </div>
            <div class="form-group">
              <label>Last Name *</label>
              <input type="text" required v-model="form.lastName">
            </div>
            <div class="form-group">
              <label>Email Address *</label>
              <input type="email" required v-model="form.email">
            </div>
            <div class="form-group">
              <label>Phone Number *</label>
              <input type="tel" required v-model="form.phone">
            </div>
          </div>

          <hr class="border-brand-sand my-8" />

          <div class="form-group">
            <label>Business Name *</label>
            <input type="text" required v-model="form.businessName">
          </div>
          <div class="form-group">
            <label>Business Website * <span class="text-gray-400 font-normal ml-2 text-xs">(If none, type "N/A")</span></label>
            <input type="text" required v-model="form.website">
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="form-group">
              <label>Instagram Link *</label>
              <input type="url" required v-model="form.instagram" placeholder="https://instagram.com/...">
            </div>
            <div class="form-group">
              <label>LinkedIn Link</label>
              <input type="url" v-model="form.linkedin">
            </div>
            <div class="form-group">
              <label>TikTok Link</label>
              <input type="url" v-model="form.tiktok">
            </div>
          </div>

          <hr class="border-brand-sand my-8" />

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="form-group">
              <label>Business Location (Area/State) *</label>
              <input type="text" required v-model="form.location">
            </div>
            <div class="form-group">
              <label>Have a Busha account? *</label>
              <div class="relative">
                <select required v-model="form.hasBusha" class="appearance-none w-full">
                  <option value="" disabled>Select option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-plum">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="form.hasBusha === 'yes'" class="animate-fade-in-up bg-brand-sand/50 p-8 rounded-[1.5rem] border border-brand-plum/10 mt-6">
            <div class="form-group mb-0">
              <label>Busha Business ID *</label>
              <p class="text-xs text-brand-plumLight mb-3">Your unique Busha business identifier.</p>
              <input type="text" required v-model="form.bushaId" class="bg-white">
            </div>
          </div>

          <div class="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-12">
            <button type="button" @click="prevStep" class="btn-secondary">Back</button>
            <button type="submit" class="btn-primary">Continue</button>
          </div>
        </form>
      </div>

      <!-- Step 3: Business Background & Impact -->
      <div v-if="step === 3" class="animate-fade-in-up">
         <div class="mb-10 text-center">
          <h2 class="text-3xl md:text-4xl font-black text-brand-black mb-3">Background & Impact</h2>
          <p class="text-gray-500 font-light text-lg">Share your business journey, stage, and vision.</p>
        </div>

        <form @submit.prevent="nextStep" class="space-y-8">
          <div class="form-group">
            <label>What products or services do you offer? *</label>
            <textarea required v-model="form.offerings" rows="3"></textarea>
          </div>
          
          <div class="form-group">
            <label>How did you start your beauty business? *</label>
            <textarea required v-model="form.inspiration" rows="3"></textarea>
          </div>

          <div class="form-group">
            <label>Who is your target audience? *</label>
            <input type="text" required v-model="form.targetAudience" placeholder="e.g. Women 20-50 who love skincare">
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="form-group">
              <label>What stage is your business in? *</label>
              <div class="relative">
                <select required v-model="form.stage" class="appearance-none w-full">
                  <option value="" disabled>Select option</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1-3 years">1–3 years</option>
                  <option value="3+ years">3+ years</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-plum">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Current team size? <span class="text-gray-400 font-normal ml-1">(Part time = ½)</span> *</label>
              <input type="number" required v-model="form.teamSize" min="0.5" step="0.5">
            </div>
          </div>

          <div class="form-group">
            <label>Business revenue in 2024? *</label>
            <input type="text" required v-model="form.revenue2024" placeholder="Amount or 'N/A'">
          </div>

          <div class="form-group">
            <label>How does your business impact the community? *</label>
            <textarea required v-model="form.impact" rows="3"></textarea>
          </div>
          
          <div class="form-group">
            <label>How will this grant help your business grow? *</label>
            <textarea required v-model="form.grantUsage" rows="3"></textarea>
          </div>

          <div class="form-group">
            <label>Upload your business deck * (PDF)</label>
            <div class="border-2 border-dashed border-brand-plum/20 rounded-[1.5rem] p-12 text-center hover:bg-brand-sand/30 hover:border-brand-plum transition-all cursor-pointer group bg-brand-sand/10">
              <div class="w-20 h-20 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="h-10 w-10 text-brand-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              </div>
              <p class="text-lg"><span class="text-brand-plum font-bold">Click to upload</span> or drag and drop</p>
              <p class="text-sm text-gray-400 mt-2 tracking-wide">Max file size: 10MB</p>
            </div>
          </div>

          <div class="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-12">
            <button type="button" @click="prevStep" class="btn-secondary">Back</button>
            <button type="submit" class="btn-primary">Continue</button>
          </div>
        </form>
      </div>

      <!-- Step 4: Final Pitch -->
      <div v-if="step === 4" class="animate-fade-in-up">
        <div class="mb-10 text-center">
          <h2 class="text-3xl md:text-4xl font-black text-brand-black mb-3">The Final Pitch</h2>
          <p class="text-gray-500 font-light text-lg">Make your compelling case for the grant.</p>
        </div>

        <form @submit.prevent="submitForm" class="space-y-8">
          <div class="form-group bg-brand-plumLight/5 p-8 rounded-[2rem] border border-brand-plum/10">
            <label class="text-xl">Why should you be selected for this Grant? *</label>
            <div class="flex items-center gap-2 mb-4 mt-2">
              <span class="w-2 h-2 rounded-full bg-brand-plum"></span>
              <p class="text-sm text-brand-plum font-bold tracking-widest uppercase">Tip: Be bold, be authentic, tell us your "why."</p>
            </div>
            <textarea required v-model="form.finalPitch" rows="10" class="bg-white text-lg mt-4"></textarea>
          </div>

          <div class="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-12">
            <button type="button" @click="prevStep" class="btn-secondary">Back</button>
            <button type="submit" class="group relative inline-flex items-center justify-center bg-brand-plum text-white px-12 py-4 rounded-full text-lg font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(216,27,96,0.4)] w-full sm:w-auto">
              <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-plumLight to-brand-plumDark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative flex items-center gap-3">
                Submit Application
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </button>
          </div>
        </form>
      </div>
      
      <!-- Success State -->
      <div v-if="step === 5" class="text-center animate-fade-in-up py-16">
        <div class="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-8 text-white shadow-[0_0_50px_rgba(74,222,128,0.4)]">
          <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 class="text-5xl font-black text-brand-black mb-6">Application Submitted!</h2>
        <p class="text-xl text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed font-light">
          Thank you for applying to the Beauty Hut Women's Grant powered by Busha. We can't wait to learn more about your brilliant brand!
        </p>
        <button @click="resetForm" class="btn-secondary inline-block">
          Return to Home
        </button>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const step = ref(1)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  businessName: '',
  website: '',
  instagram: '',
  linkedin: '',
  tiktok: '',
  location: '',
  hasBusha: '',
  bushaId: '',
  offerings: '',
  inspiration: '',
  targetAudience: '',
  stage: '',
  teamSize: '',
  revenue2024: '',
  impact: '',
  grantUsage: '',
  finalPitch: ''
})

const nextStep = () => {
  if (step.value < 4) {
    step.value++
    scrollToTop()
  }
}

const prevStep = () => {
  if (step.value > 1) {
    step.value--
    scrollToTop()
  }
}

const submitForm = () => {
  // Mock submission
  step.value = 5
  scrollToTop()
}

const resetForm = () => {
  step.value = 1
  Object.keys(form).forEach(key => form[key] = '')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToTop = () => {
  const el = document.getElementById('apply')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.form-group label {
  @apply block text-sm font-bold text-brand-black mb-3 tracking-wide;
}

.form-group input, 
.form-group select, 
.form-group textarea {
  @apply w-full px-5 py-4 bg-brand-sand/20 border border-gray-200 rounded-2xl focus:border-brand-plum focus:ring-4 focus:ring-brand-plum/10 outline-none transition-all text-brand-black;
}

.form-group textarea {
  @apply resize-none;
}

.btn-primary {
  @apply bg-brand-plum text-white px-10 py-4 rounded-full font-bold hover:bg-brand-plumDark shadow-md hover:shadow-lg transition-all w-full sm:w-auto text-center hover:-translate-y-0.5 text-lg;
}

.btn-secondary {
  @apply px-10 py-4 rounded-full text-gray-600 font-bold hover:bg-gray-50 hover:text-brand-plum transition-colors w-full sm:w-auto text-center border border-gray-200 text-lg;
}
</style>
