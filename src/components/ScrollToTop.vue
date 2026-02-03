<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button 
      v-show="visible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 group"
    >
      <div class="relative">
        <svg 
          class="w-14 h-14 -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            class="text-white/10"
            stroke="currentColor"
            stroke-width="4"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            class="text-accent transition-all duration-300"
            stroke="currentColor"
            stroke-width="4"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="circumference - (progress / 100) * circumference"
          />
        </svg>
        
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-10 h-10 rounded-full bg-secondary border border-white/10 flex items-center justify-center 
                      group-hover:bg-accent group-hover:border-accent transition-all duration-300">
            <svg 
              class="w-4 h-4 text-white group-hover:text-primary transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
const progress = ref(0)
const circumference = 2 * Math.PI * 45

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  
  visible.value = scrollTop > 300
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
