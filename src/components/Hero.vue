<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl opacity-20"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_70%)]"></div>
    </div>

    <div
      class="absolute inset-0 opacity-[0.015]"
      style="
        background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E&quot;);
      "
    ></div>

    <div class="container-custom relative z-10 pt-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div class="order-2 lg:order-1 text-center lg:text-left">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in"
          >
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span class="text-sm font-medium text-accent">Tersedia untuk proyek baru</span>
          </div>

          <h1
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 animate-slide-up"
          >
            <span class="text-white">Web</span>
            <br />
            <span class="text-gradient">Developer</span>
          </h1>

          <p
            class="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-slide-up animate-delay-200"
          >
            Membangun aplikasi web yang efisien dan scalable dengan Laravel, PHP, dan teknologi modern lainnya. Berbasis
            di Pekanbaru, Indonesia.
          </p>

          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up animate-delay-300"
          >
            <a href="#projects" class="btn-primary">
              <span>Lihat Portfolio</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a href="#contact" class="btn-secondary">
              <span>Hubungi Saya</span>
            </a>
          </div>

          <div class="flex items-center gap-6 justify-center lg:justify-start animate-fade-in animate-delay-400">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              :aria-label="social.name"
              class="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center animate-scale-in animate-delay-200">
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-br from-accent/30 to-amber-600/30 rounded-3xl blur-2xl opacity-40 animate-pulse-slow"
            ></div>
            <div
              class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/10"
            >
              <img src="/assets/img/profile-removebg.png" alt="Wahyu Nur" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            </div>

            <div class="absolute -bottom-4 -right-4 px-5 py-3 glass rounded-xl animate-slide-up animate-delay-500">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-zinc-400">Pengalaman</p>
                  <p class="text-sm font-semibold text-white">2+ Tahun</p>
                </div>
              </div>
            </div>

            <div class="absolute -top-4 -left-4 px-5 py-3 glass rounded-xl animate-slide-up animate-delay-400">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-zinc-400">Proyek Selesai</p>
                  <p class="text-sm font-semibold text-white">10+ Proyek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <a href="#about" class="flex flex-col items-center gap-2 text-zinc-500 hover:text-accent transition-colors">
          <span class="text-xs uppercase tracking-widest">Scroll</span>
          <svg class="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

const GithubIcon = {
  render() {
    return h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', {
        d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      }),
    ]);
  },
};

const LinkedinIcon = {
  render() {
    return h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', {
        d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      }),
    ]);
  },
};

const InstagramIcon = {
  render() {
    return h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', {
        d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      }),
    ]);
  },
};

const socials = [
  { name: 'GitHub', url: 'https://github.com/wahyunoerr', icon: GithubIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/wahyu-nur-6804112b7', icon: LinkedinIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/whynoerr/', icon: InstagramIcon },
];
</script>
