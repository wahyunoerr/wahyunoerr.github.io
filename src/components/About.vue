<template>
  <section id="about" class="section-padding relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent"></div>
    
    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <!-- Image Section -->
        <div class="relative" v-scroll-animate="'fade-right'">
          <div class="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
          <div class="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden">
            <img 
              src="/assets/img/me.jpeg" 
              alt="Wahyu Nur"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>
          
          <!-- B.Sc Badge - Fixed positioning for mobile -->
          <div class="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 lg:-right-12" v-scroll-animate:300="'scale-up'">
            <div class="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-7 sm:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p class="text-xl sm:text-2xl font-bold text-white">B.Sc</p>
                  <p class="text-xs sm:text-sm text-zinc-400">Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div>
          <div 
            v-scroll-animate="'fade-up'" 
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4 sm:mb-6"
          >
            <span class="text-xs font-semibold text-accent uppercase tracking-wider">About Me</span>
          </div>

          <h2 
            v-scroll-animate:100="'fade-up'" 
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Building Digital Solutions That 
            <span class="text-gradient">Drive Results</span>
          </h2>

          <div v-scroll-animate:200="'fade-up'" class="space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed mb-6 sm:mb-8">
            <p>
              I'm Wahyu Nur, a Full-Stack Web Developer based in Pekanbaru, Indonesia with 
              <span class="text-white font-medium">3+ years of experience</span> building web applications 
              that solve real business problems. I specialize in the Laravel ecosystem and have 
              successfully delivered <span class="text-white font-medium">10+ production-ready projects</span>.
            </p>
            <p>
              My expertise includes developing scalable backend systems, implementing RESTful APIs, 
              creating interactive user interfaces with JavaScript/AJAX, and optimizing database 
              performance with MySQL. I'm passionate about writing clean, maintainable code and 
              following best practices in software development.
            </p>
          </div>

          <!-- Key Highlights for Recruiters -->
          <div v-scroll-animate:250="'fade-up'" class="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div class="flex items-center gap-2 text-xs sm:text-sm">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-zinc-300">Problem Solver</span>
            </div>
            <div class="flex items-center gap-2 text-xs sm:text-sm">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-zinc-300">Team Player</span>
            </div>
            <div class="flex items-center gap-2 text-xs sm:text-sm">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-zinc-300">Fast Learner</span>
            </div>
            <div class="flex items-center gap-2 text-xs sm:text-sm">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-zinc-300">Detail Oriented</span>
            </div>
          </div>

          <!-- Personal Info Cards -->
          <div v-scroll-animate:300="'fade-up'" class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div v-for="info in personalInfo" :key="info.label" class="group">
              <div class="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all duration-300">
                <p class="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider mb-1">{{ info.label }}</p>
                <a 
                  v-if="info.href" 
                  :href="info.href"
                  class="text-sm sm:text-base text-white font-medium group-hover:text-accent transition-colors break-all"
                >
                  {{ info.value }}
                </a>
                <p v-else class="text-sm sm:text-base text-white font-medium">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div v-scroll-animate:400="'fade-up'" class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a href="#projects" class="btn-primary justify-center sm:justify-start">
              <span>View Projects</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              class="btn-secondary justify-center sm:justify-start"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const personalInfo = [
  { label: 'Email', value: 'wahyunoer1001@gmail.com', href: 'mailto:wahyunoer1001@gmail.com' },
  { label: 'Phone', value: '+62 822 8620 3247', href: 'tel:+6282286203247' },
  { label: 'Location', value: 'Pekanbaru, Indonesia', href: null },
  { label: 'Education', value: 'Muhammadiyah University of Riau', href: null },
]
</script>
