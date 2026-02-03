<template>
  <section id="skills" class="section-padding relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
    
    <div class="container-custom relative z-10">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div 
          v-scroll-animate="'fade-up'" 
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
        >
          <span class="text-xs font-semibold text-accent uppercase tracking-wider">Keahlian</span>
        </div>
        
        <h2 v-scroll-animate:100="'fade-up'" class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
          Teknologi yang Saya 
          <span class="text-gradient">Kuasai</span>
        </h2>
        
        <p v-scroll-animate:200="'fade-up'" class="text-zinc-400 leading-relaxed">
          Berikut adalah teknologi dan tools yang saya gunakan untuk membangun 
          aplikasi web modern dan solusi digital berkualitas tinggi.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          v-scroll-animate="'fade-up'"
          :style="{ transitionDelay: `${index * 75}ms` }"
          class="group"
        >
          <div 
            class="relative h-full p-6 rounded-2xl bg-secondary/50 border border-white/5 
                   hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <div 
                class="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                :style="{ backgroundColor: skill.bgColor }"
              >
                <img 
                  :src="skill.icon" 
                  :alt="skill.name"
                  class="w-10 h-10 object-contain"
                />
              </div>
              
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                {{ skill.name }}
              </h3>
              
              <p class="text-sm text-zinc-500">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <div v-scroll-animate="'fade-up'" class="text-center mb-10">
          <h3 class="text-xl font-semibold text-white mb-2">Tools & Environment</h3>
          <p class="text-zinc-500 text-sm">Software pendukung yang saya gunakan sehari-hari</p>
        </div>
        
        <div v-scroll-animate:100="'fade-up'" class="flex flex-wrap justify-center gap-4">
          <div 
            v-for="tool in tools" 
            :key="tool"
            class="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 
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
    description: 'PHP Framework untuk aplikasi web enterprise',
    icon: '/assets/img/about/laravel.png',
    bgColor: 'rgba(255, 45, 32, 0.1)',
  },
  {
    name: 'PHP',
    description: 'Server-side scripting language',
    icon: '/assets/img/about/php.png',
    bgColor: 'rgba(119, 123, 180, 0.1)',
  },
  {
    name: 'JavaScript',
    description: 'Interaktivitas dan logika frontend',
    icon: '/assets/img/about/js.png',
    bgColor: 'rgba(247, 223, 30, 0.1)',
  },
  {
    name: 'MySQL',
    description: 'Database management system',
    icon: '/assets/img/about/mysql.png',
    bgColor: 'rgba(0, 117, 143, 0.1)',
  },
  {
    name: 'HTML5',
    description: 'Struktur dan semantic markup',
    icon: '/assets/img/about/html5.png',
    bgColor: 'rgba(227, 79, 38, 0.1)',
  },
  {
    name: 'CSS3',
    description: 'Styling dan responsive design',
    icon: '/assets/img/about/css.png',
    bgColor: 'rgba(21, 114, 182, 0.1)',
  },
  {
    name: 'Bootstrap',
    description: 'CSS Framework untuk UI cepat',
    icon: '/assets/img/about/boot.png',
    bgColor: 'rgba(121, 82, 179, 0.1)',
  },
  {
    name: 'jQuery & AJAX',
    description: 'DOM manipulation & async requests',
    icon: '/assets/img/about/ajaxjquery.png',
    bgColor: 'rgba(0, 102, 153, 0.1)',
  },
]

const tools = [
  'Visual Studio Code',
  'Git & GitHub',
  'Postman',
  'phpMyAdmin',
  'XAMPP',
  'Figma',
  'Terminal',
  'Composer',
  'NPM',
]
</script>
