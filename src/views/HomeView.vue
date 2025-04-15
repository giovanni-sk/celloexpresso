<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    <!-- Services Section -->
    <ServicesSection />
    <!-- How It Works -->
    <ProcessSection />
    <!-- Testimonials -->
    <TestimonialsSection />
    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'

import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import CTASection from '../components/CTASection.vue'
// Navigation state
const mobileMenuOpen = ref(false)
const currentPage = ref('#accueil')

// Animation for counting up numbers
const animateCounters = () => {
  const counters = document.querySelectorAll('.counter')
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'))
    const suffix = counter.getAttribute('data-suffix') || ''
    const duration = 2000 // ms
    const increment = target / (duration / 16) // 60fps

    let current = 0
    const updateCounter = () => {
      current += increment
      if (current < target) {
        counter.innerText = Math.floor(current) + suffix
        requestAnimationFrame(updateCounter)
      } else {
        counter.innerText = target + suffix
      }
    }
    updateCounter()
  })
}

// Page transition animation
const handlePageTransition = (newPage) => {
  // Smooth scroll to top when changing pages
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // Update URL hash without scrolling
  setTimeout(() => {
    window.history.pushState(null, null, newPage)
    currentPage.value = newPage
  }, 500)
}

// References for parallax elements
const parallaxBg1 = ref(null)
const parallaxBg2 = ref(null)
const parallaxBg3 = ref(null)
const parallaxBg4 = ref(null)
const parallaxBg5 = ref(null)
const parallaxBg6 = ref(null)
const parallaxBg7 = ref(null)
const parallaxBg8 = ref(null)
const parallaxBg9 = ref(null)
const parallaxBg10 = ref(null)
const parallaxBg11 = ref(null)
const parallaxBg12 = ref(null)
const parallaxBgCalc1 = ref(null)
const parallaxBgCalc2 = ref(null)
// Parallax effect for background elements
const handleParallax = () => {
  const scrollY = window.scrollY
  const parallaxElements = [
    parallaxBg1.value,
    parallaxBg2.value,
    parallaxBg3.value,
    parallaxBg4.value,
    parallaxBg5.value,
    parallaxBg6.value,
    parallaxBg7.value,
    parallaxBg8.value,
    parallaxBg9.value,
    parallaxBg10.value,
    parallaxBg11.value,
    parallaxBg12.value,
    parallaxBgCalc1.value,
    parallaxBgCalc2.value,
  ]

  parallaxElements.forEach((element) => {
    if (element) {
      const speed = 0.05
      const yPos = -(scrollY * speed)
      element.style.transform = `translate3d(0, ${yPos}px, 0)`
    }
  })
}

// Intersection Observer for scroll animations
const setupScrollAnimations = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    })
  }, options)

  // Observe all elements with reveal-element class
  document.querySelectorAll('.reveal-element').forEach((element) => {
    observer.observe(element)
  })

  // Observe process lines for animation
  document.querySelectorAll('.process-line').forEach((element) => {
    observer.observe(element)
  })
}

// Watch for page changes
watch(currentPage, (newPage, oldPage) => {
  if (newPage !== oldPage) {
    // Reset animations when changing pages
    setTimeout(() => {
      setupScrollAnimations()
      if (newPage === '#accueil') {
        animateCounters()
      }
      if (newPage === '#calculateur' && mapInitialized.value === false) {
        initMap()
      }
    }, 100)
  }
})

// Check URL hash on load and setup animations
onMounted(() => {
  const hash = window.location.hash
  if (
    hash &&
    (hash === '#accueil' || hash === '#apropos' || hash === '#contact' || hash === '#calculateur')
  ) {
    currentPage.value = hash
  } else {
    currentPage.value = '#accueil'
  }

  // Setup animations
  setupScrollAnimations()
  animateCounters()

  // Add scroll event listener for parallax effects
  window.addEventListener('scroll', handleParallax)

  // Initialize map if on calculator page
  if (currentPage.value === '#calculateur') {
    initMap()
  }
})

// Clean up event listeners
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleParallax)
})
</script>
