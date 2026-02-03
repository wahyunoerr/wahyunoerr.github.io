<template>
  <section id="about" class="section-padding relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent"></div>
    
    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
          <div class="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img 
              src="/assets/img/me.jpeg" 
              alt="Wahyu Nur"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>
          
          <div class="absolute -bottom-6 -right-6 lg:-right-12">
            <div class="glass rounded-2xl p-6">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <svg class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p class="text-2xl font-bold text-white">S.Kom</p>
                  <p class="text-sm text-zinc-400">UMRI Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span class="text-xs font-semibold text-accent uppercase tracking-wider">Tentang Saya</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Membangun Solusi Digital yang 
            <span class="text-gradient">Bermakna</span>
          </h2>

          <div class="space-y-4 text-zinc-400 leading-relaxed mb-8">
            <p>
              Saya Wahyu Nur, seorang Web Developer yang berbasis di Pekanbaru, Indonesia. 
              Saya memiliki keahlian kuat dalam pemrograman PHP, dengan spesialisasi pada 
              framework Laravel untuk mengembangkan aplikasi web yang efisien dan scalable.
            </p>
            <p>
              Selain itu, saya berpengalaman dalam mengimplementasikan fungsionalitas 
              interaktif menggunakan AJAX dan JavaScript. Keahlian saya juga mencakup 
              analisis data, di mana saya memanfaatkan query SQL untuk mengelola dan 
              menganalisis data secara efektif dengan MySQL.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 gap-4 mb-8">
            <div v-for="info in personalInfo" :key="info.label" class="group">
              <div class="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all duration-300">
                <p class="text-xs text-zinc-500 uppercase tracking-wider mb-1">{{ info.label }}</p>
                <a 
                  v-if="info.href" 
                  :href="info.href"
                  class="text-white font-medium group-hover:text-accent transition-colors"
                >
                  {{ info.value }}
                </a>
                <p v-else class="text-white font-medium">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4">
            <a href="#projects" class="btn-primary">
              <span>Lihat Portfolio</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="https://wa.me/6282286203247" 
              target="_blank" 
              class="btn-secondary"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
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
  { label: 'Telepon', value: '+62 822 8620 3247', href: 'tel:+6282286203247' },
  { label: 'Lokasi', value: 'Pekanbaru, Riau', href: null },
  { label: 'Pendidikan', value: 'Universitas Muhammadiyah Riau', href: null },
]
</script>
