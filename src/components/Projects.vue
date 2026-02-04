<template>
  <section id="projects" class="section-padding relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent"></div>
    
    <div class="container-custom relative z-10">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div 
          v-scroll-animate="'fade-up'" 
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
        >
          <span class="text-xs font-semibold text-accent uppercase tracking-wider">Portfolio</span>
        </div>
        
        <h2 v-scroll-animate:100="'fade-up'" class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
          Featured 
          <span class="text-gradient">Projects</span>
        </h2>
        
        <p v-scroll-animate:200="'fade-up'" class="text-zinc-400 leading-relaxed">
          A selection of projects I've built, including information systems, 
          e-commerce platforms, and inventory management applications.
        </p>
      </div>

      <div v-scroll-animate:300="'fade-up'" class="flex flex-wrap justify-center gap-2 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="[
            activeCategory === category 
              ? 'bg-accent text-primary' 
              : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TransitionGroup 
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="project.title"
            v-scroll-animate="'fade-up'"
            :style="{ transitionDelay: `${index * 100}ms` }"
            class="group"
          >
            <div class="card card-hover h-full flex flex-col">
              <div class="relative aspect-video overflow-hidden">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-60"></div>
                
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 rounded-full text-xs font-medium bg-accent/90 text-primary">
                    {{ project.category }}
                  </span>
                </div>
                
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button 
                    @click="openModal(project)"
                    class="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white 
                           hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300
                           transform translate-y-4 group-hover:translate-y-0"
                  >
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-zinc-500 mb-4 flex-1 line-clamp-2">
                  {{ project.description }}
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.tech" 
                    :key="tech"
                    class="px-2.5 py-1 rounded-md text-xs bg-white/5 text-zinc-400"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>

    <!-- Modal with smooth animations -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="modalOpen" 
          class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          @click.self="closeModal"
          @keydown.esc="closeModal"
        >
          <!-- Backdrop -->
          <div 
            class="absolute inset-0 bg-black/80 backdrop-blur-sm"
            @click="closeModal"
          ></div>
          
          <!-- Modal Content -->
          <div 
            class="modal-content relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-secondary border border-white/10 shadow-2xl overflow-hidden flex flex-col"
          >
            <!-- Close Button -->
            <button 
              @click="closeModal"
              class="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 backdrop-blur-sm text-white 
                     hover:bg-accent hover:text-primary transition-all duration-300"
              aria-label="Close modal"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <!-- Image Container -->
            <div v-if="selectedProject" class="relative w-full flex-shrink-0">
              <div class="relative w-full" style="padding-bottom: 56.25%;">
                <img 
                  :src="selectedProject.image" 
                  :alt="selectedProject.title"
                  class="absolute inset-0 w-full h-full object-contain bg-black/50"
                />
              </div>
              <!-- Gradient overlay -->
              <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-secondary to-transparent"></div>
            </div>
            
            <!-- Content -->
            <div class="p-6 overflow-y-auto flex-1" v-if="selectedProject">
              <span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent mb-4">
                {{ selectedProject.category }}
              </span>
              
              <h3 class="text-2xl font-bold text-white mb-3">{{ selectedProject.title }}</h3>
              <p class="text-zinc-400 mb-6 leading-relaxed">{{ selectedProject.fullDescription }}</p>
              
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in selectedProject.tech" 
                  :key="tech"
                  class="px-3 py-1.5 rounded-lg text-sm bg-white/5 text-zinc-300 border border-white/5"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const activeCategory = ref('All')
const modalOpen = ref(false)
const selectedProject = ref(null)

const categories = ['All', 'E-Commerce', 'Information System', 'Inventory', 'Website']

const projects = [
  {
    title: 'Azwa App - E-Commerce',
    description: 'Full-featured e-commerce platform for children\'s clothing with complete sales system.',
    fullDescription: 'A comprehensive e-commerce platform for Azwa, specializing in children\'s apparel. Built with product management, shopping cart, payment processing, and admin dashboard for order management. Increased online sales efficiency by 40%.',
    image: '/assets/img/azwaAppLanding.png',
    category: 'E-Commerce',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'AJAX'],
  },
  {
    title: 'Azwa Admin Dashboard',
    description: 'Administration panel for managing products and e-commerce orders.',
    fullDescription: 'A powerful admin dashboard for managing all aspects of the Azwa online store. Includes product management, order processing, customer management, sales reports, and analytics. Features real-time data visualization with Chart.js.',
    image: '/assets/img/azwadashboard.png',
    category: 'E-Commerce',
    tech: ['Laravel', 'MySQL', 'Chart.js', 'DataTables'],
  },
  {
    title: 'SMA Muhammadiyah Bangkinang',
    description: 'School profile website to enhance visibility and information access.',
    fullDescription: 'Official website for SMA Muhammadiyah Bangkinang designed to provide comprehensive school information, educational programs, activities, and announcements to students, parents, and the community. Improved school communication efficiency.',
    image: '/assets/img/smamhubia.png',
    category: 'Website',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Room Booking System',
    description: 'Application for efficient room reservation management.',
    fullDescription: 'A room booking information system that enables users to view availability, make reservations, and manage room schedules in real-time. Integrated with FullCalendar for intuitive scheduling visualization. Reduced booking conflicts by 95%.',
    image: '/assets/img/ruangan.png',
    category: 'Information System',
    tech: ['Laravel', 'MySQL', 'FullCalendar', 'AJAX'],
  },
  {
    title: 'Dhica Fashion Inventory',
    description: 'Inventory management system for fashion retail business.',
    fullDescription: 'Inventory management application for Dhica Fashion that includes stock tracking, purchase orders, sales records, and inventory reports to support data-driven business decisions. Features Excel export for reporting.',
    image: '/assets/img/inventorydhica.png',
    category: 'Inventory',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'Excel Export'],
  },
  {
    title: 'Cooperative Inventory System',
    description: 'Complete inventory system for cooperative with full features.',
    fullDescription: 'Inventory management system specifically designed for cooperatives, covering stock management, buy-sell transactions, member management, and financial reporting. Streamlined operations for 500+ product SKUs.',
    image: '/assets/img/inventorykoperasi.png',
    category: 'Inventory',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'PDF Report'],
  },
  {
    title: 'Sigalon - Water Gallon Management',
    description: 'Financial system for water gallon distribution business.',
    fullDescription: 'Financial management application for water gallon distribution business. Includes sales tracking, regular customer management, accounts receivable, and daily/monthly financial reports. Automated billing reduced manual work by 60%.',
    image: '/assets/img/sigalon.png',
    category: 'Information System',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Sikosan Dashboard',
    description: 'Dashboard for boarding house information system.',
    fullDescription: 'Management dashboard for boarding house owners displaying room information, tenant details, payment tracking, and occupancy statistics in real-time. Improved rent collection rate to 98%.',
    image: '/assets/img/sikosanDashboard.png',
    category: 'Information System',
    tech: ['Laravel', 'MySQL', 'Chart.js', 'Bootstrap'],
  },
  {
    title: 'Sikosan Landing Page',
    description: 'Landing page for online boarding house booking system.',
    fullDescription: 'Modern landing page for online boarding house booking system. Displays available rooms, facilities, pricing, and booking forms for prospective tenants. Mobile-responsive design for optimal user experience.',
    image: '/assets/img/landingsikosan.png',
    category: 'Website',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'AOS'],
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Dashboard template for e-commerce platforms.',
    fullDescription: 'Clean and modern e-commerce dashboard design with various widgets displaying sales statistics, best-selling products, and recent activities. Fully responsive and customizable template.',
    image: '/assets/img/ecommerce.png',
    category: 'E-Commerce',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})

// Preload image before opening modal
const preloadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = resolve
    img.src = src
  })
}

const openModal = async (project) => {
  // Preload image first to prevent lag
  await preloadImage(project.image)
  selectedProject.value = project
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modalOpen.value = false
  // Delay clearing selected project until animation completes
  setTimeout(() => {
    selectedProject.value = null
  }, 300)
  document.body.style.overflow = ''
}

// Handle ESC key
const handleKeydown = (e) => {
  if (e.key === 'Escape' && modalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Modal Transitions - GPU Accelerated */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
              opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}

.modal-enter-to .modal-content,
.modal-leave-from .modal-content {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Ensure smooth rendering */
.modal-content {
  will-change: transform, opacity;
  backface-visibility: hidden;
}
</style>
