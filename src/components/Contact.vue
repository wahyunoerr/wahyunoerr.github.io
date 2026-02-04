<template>
  <section id="contact" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <div 
            v-scroll-animate="'fade-up'" 
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <span class="text-xs font-semibold text-accent uppercase tracking-wider">Kontak</span>
          </div>
          
          <h2 v-scroll-animate:100="'fade-up'" class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Mari Bekerja
            <span class="text-gradient">Bersama</span>
          </h2>
          
          <p v-scroll-animate:200="'fade-up'" class="text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Tertarik untuk berkolaborasi atau punya proyek yang ingin didiskusikan? 
            Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <a 
            v-for="(contact, index) in contacts" 
            :key="contact.label"
            :href="contact.href"
            target="_blank"
            v-scroll-animate="'fade-up'"
            :style="{ transitionDelay: `${index * 100}ms` }"
            class="group"
          >
            <div class="h-full p-6 rounded-2xl bg-secondary/50 border border-white/5 hover:border-accent/30 
                        transition-all duration-500 hover:-translate-y-1 text-center">
              <div 
                class="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                :class="contact.bgClass"
              >
                <component :is="contact.icon" class="w-6 h-6" :class="contact.iconClass" />
              </div>
              
              <h3 class="text-sm text-zinc-500 mb-1">{{ contact.label }}</h3>
              <p class="text-white font-medium group-hover:text-accent transition-colors">
                {{ contact.value }}
              </p>
            </div>
          </a>
        </div>

        <div v-scroll-animate:400="'scale-up'" class="text-center">
          <p class="text-zinc-500 mb-6">Atau langsung kirim pesan via WhatsApp</p>
          <a 
            href="https://wa.me/6282286203247?text=Halo%20Wahyu,%20saya%20tertarik%20untuk%20berdiskusi%20tentang%20proyek." 
            target="_blank"
            class="btn-primary text-lg px-8 py-4"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const EmailIcon = {
  render() {
    return h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        'stroke-width': '2', 
        d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' 
      })
    ])
  }
}

const PhoneIcon = {
  render() {
    return h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        'stroke-width': '2', 
        d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' 
      })
    ])
  }
}

const LocationIcon = {
  render() {
    return h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        'stroke-width': '2', 
        d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' 
      }),
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        'stroke-width': '2', 
        d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' 
      })
    ])
  }
}

const contacts = [
  {
    label: 'Email',
    value: 'wahyunoer1001@gmail.com',
    href: 'mailto:wahyunoer1001@gmail.com',
    icon: EmailIcon,
    bgClass: 'bg-red-500/10',
    iconClass: 'text-red-400',
  },
  {
    label: 'Telepon',
    value: '+62 822 8620 3247',
    href: 'tel:+6282286203247',
    icon: PhoneIcon,
    bgClass: 'bg-green-500/10',
    iconClass: 'text-green-400',
  },
  {
    label: 'Lokasi',
    value: 'Pekanbaru, Riau',
    href: 'https://maps.google.com/?q=Pekanbaru,Riau',
    icon: LocationIcon,
    bgClass: 'bg-blue-500/10',
    iconClass: 'text-blue-400',
  },
]
</script>
