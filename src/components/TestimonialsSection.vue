<template>
  <!-- Testimonials -->
  <section class="py-20 bg-white" ref="testimonialsSection">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 reveal-element">
        <div
          class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4"
        >
          Témoignages
        </div>
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent"
        >
          Ce que nos clients disent
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Découvrez pourquoi nos clients nous font confiance pour leurs besoins de livraison.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 shadow-sm relative reveal-element"
          :class="`reveal-delay-${index * 200}`"
        >
          <div class="absolute top-6 right-8 text-6xl font-serif text-violet-200">"</div>
          <div class="flex items-center mb-6">
            <div class="bg-gradient-to-br from-violet-500 to-purple-600 rounded-full p-1">
              <User class="h-6 w-6 text-white" />
            </div>
            <div class="ml-3">
              <p class="font-bold text-gray-800">{{ testimonial.name }}</p>
              <p class="text-violet-600 text-sm">{{ testimonial.company }}</p>
            </div>
          </div>
          <p class="text-gray-600 mb-6 relative z-10">{{ testimonial.text }}</p>
          <div class="flex">
            <Star v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { User, Star } from 'lucide-vue-next'

// Testimonials data
const testimonials = [
  {
    name: 'Merveille DONOU',
    company: 'Boutique à TOKPA',
    text: "Cello Express m'a vraiment facilité la vie en livrant rapidement et sans stress mes articles à mes clientes",
  },
  {
    name: 'ATAYI Constantin',
    company: 'Particulier',
    text: "Cello Express m'a sauvé plus d'une fois avec leurs livraisons rapides et fiables de mes repas préférés, toujours chauds et bien emballés.",
  },
  {
    name: "Vendeuse de friture d'escargot",
    company: 'Restaurant',
    text: 'Service impeccable! Nos repas urgents arrivent toujours à temps grâce à Cello Express.',
  },
]
</script>
