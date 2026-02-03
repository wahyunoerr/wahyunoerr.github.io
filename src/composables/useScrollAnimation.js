import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable untuk scroll-triggered animations
 * Menggunakan Intersection Observer API (performant, tidak lag)
 * 
 * @param {Object} options
 * @param {number} options.threshold - Persentase element yang terlihat (0-1)
 * @param {string} options.rootMargin - Margin dari viewport
 * @param {boolean} options.once - Animasi hanya sekali (default: true)
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options

  const elements = ref(new Map())
  let observer = null

  const createObserver = () => {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible')
          entry.target.classList.remove('scroll-hidden')
          
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          entry.target.classList.remove('scroll-visible')
          entry.target.classList.add('scroll-hidden')
        }
      })
    }, {
      threshold,
      rootMargin
    })
  }

  const observe = (el) => {
    if (!el || !observer) return
    
    // Tambahkan class awal
    el.classList.add('scroll-hidden')
    observer.observe(el)
    elements.value.set(el, true)
  }

  const unobserve = (el) => {
    if (!el || !observer) return
    
    observer.unobserve(el)
    elements.value.delete(el)
  }

  // Directive untuk Vue template
  const vScrollAnimate = {
    mounted(el, binding) {
      // Tambahkan animation class dari binding
      const animationType = binding.value || 'fade-up'
      el.dataset.scrollAnimation = animationType
      
      // Delay jika ada modifier
      if (binding.arg) {
        el.style.transitionDelay = `${binding.arg}ms`
      }
      
      observe(el)
    },
    unmounted(el) {
      unobserve(el)
    }
  }

  onMounted(() => {
    createObserver()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    observe,
    unobserve,
    vScrollAnimate
  }
}

/**
 * Plugin untuk register directive secara global
 */
export const ScrollAnimationPlugin = {
  install(app) {
    let observer = null

    const createObserver = () => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible')
            entry.target.classList.remove('scroll-hidden')
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
    }

    createObserver()

    app.directive('scroll-animate', {
      mounted(el, binding) {
        const animationType = binding.value || 'fade-up'
        el.dataset.scrollAnimation = animationType
        
        // Delay dari argument (v-scroll-animate:200)
        if (binding.arg) {
          el.style.transitionDelay = `${binding.arg}ms`
        }
        
        el.classList.add('scroll-hidden')
        observer.observe(el)
      },
      unmounted(el) {
        if (observer) {
          observer.unobserve(el)
        }
      }
    })
  }
}
