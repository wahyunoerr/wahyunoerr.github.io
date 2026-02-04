<template>
  <section id="skills" class="section-padding relative overflow-hidden">
    <!-- Background Effect -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-accent/5 rounded-full blur-3xl"></div>
    
    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div 
          v-scroll-animate="'fade-up'" 
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-5"
        >
          <span class="text-xs font-semibold text-accent uppercase tracking-wider">Skills</span>
        </div>
        
        <h2 v-scroll-animate:100="'fade-up'" class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-4">
          Technologies I 
          <span class="text-gradient">Work With</span>
        </h2>
        
        <p v-scroll-animate:200="'fade-up'" class="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Here are the technologies and tools I use to build modern web applications 
          and high-quality digital solutions.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          v-scroll-animate="'fade-up'"
          :style="{ transitionDelay: `${index * 50}ms` }"
          class="group"
        >
          <div 
            class="relative h-full p-4 sm:p-5 rounded-xl bg-secondary/50 border border-white/5 
                   hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <!-- Icon -->
              <div 
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                :style="{ backgroundColor: skill.bgColor }"
              >
                <img 
                  :src="skill.icon" 
                  :alt="skill.name"
                  class="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              
              <!-- Name -->
              <h3 class="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                {{ skill.name }}
              </h3>
              
              <!-- Description - Hidden on mobile -->
              <p class="text-xs text-zinc-500 hidden sm:block line-clamp-2">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div class="mt-12 sm:mt-16">
        <div v-scroll-animate="'fade-up'" class="text-center mb-6">
          <h3 class="text-base sm:text-lg font-semibold text-white mb-1">Tools & Environment</h3>
          <p class="text-zinc-500 text-xs sm:text-sm">Software and tools I use daily</p>
        </div>
        
        <div v-scroll-animate:100="'fade-up'" class="flex flex-wrap justify-center gap-2">
          <div 
            v-for="tool in tools" 
            :key="tool"
            class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-400 
                   hover:border-accent/30 hover:text-white transition-all duration-300"
          >
            {{ tool }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    name: 'Laravel',
    description: 'PHP Framework for enterprise web apps',
    icon: '/assets/img/about/laravel.svg',
    bgColor: 'rgba(255, 45, 32, 0.1)',
  },
  {
    name: 'PHP',
    description: 'Server-side scripting language',
    icon: '/assets/img/about/php.svg',
    bgColor: 'rgba(119, 123, 180, 0.1)',
  },
  {
    name: 'Livewire',
    description: 'Full-stack framework for Laravel',
    icon: '/assets/img/about/livewire.svg',
    bgColor: 'rgba(251, 112, 167, 0.1)',
  },
  {
    name: 'Alpine.js',
    description: 'Lightweight JavaScript framework',
    icon: '/assets/img/about/alpinejs.svg',
    bgColor: 'rgba(119, 197, 213, 0.1)',
  },
  {
    name: 'Vue.js',
    description: 'Progressive JavaScript framework',
    icon: '/assets/img/about/vuejs.svg',
    bgColor: 'rgba(65, 184, 131, 0.1)',
  },
  {
    name: 'JavaScript',
    description: 'Frontend interactivity & logic',
    icon: '/assets/img/about/javascript.svg',
    bgColor: 'rgba(247, 223, 30, 0.1)',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    icon: '/assets/img/about/tailwindcss.svg',
    bgColor: 'rgba(56, 189, 248, 0.1)',
  },
  {
    name: 'MySQL',
    description: 'Relational database management',
    icon: '/assets/img/about/mysql.svg',
    bgColor: 'rgba(0, 117, 143, 0.1)',
  },
  {
    name: 'PostgreSQL',
    description: 'Advanced open-source database',
    icon: '/assets/img/about/postgresql.svg',
    bgColor: 'rgba(51, 103, 145, 0.1)',
  },
  {
    name: 'HTML5',
    description: 'Structure & semantic markup',
    icon: '/assets/img/about/html5.svg',
    bgColor: 'rgba(227, 79, 38, 0.1)',
  },
  {
    name: 'CSS3',
    description: 'Styling & responsive design',
    icon: '/assets/img/about/css3.svg',
    bgColor: 'rgba(21, 114, 182, 0.1)',
  },
  {
    name: 'Bootstrap',
    description: 'Rapid UI development framework',
    icon: '/assets/img/about/bootstrap.svg',
    bgColor: 'rgba(121, 82, 179, 0.1)',
  },
  {
    name: 'jQuery & AJAX',
    description: 'DOM manipulation & async requests',
    icon: '/assets/img/about/jquery.svg',
    bgColor: 'rgba(0, 102, 153, 0.1)',
  },
]

const tools = [
  'VS Code',
  'Git & GitHub',
  'Linux',
  'VPS',
  'Postman',
  'phpMyAdmin',
  'XAMPP',
  'Figma',
  'Terminal',
  'Composer',
  'NPM',
]
</script>
