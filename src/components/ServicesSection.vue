<template>
  <!-- Services Section -->
  <section class="py-20 bg-white" ref="servicesSection">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 reveal-element">
        <div
          class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4"
        >
          Nos Services
        </div>
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent"
        >
          Solutions de livraison sur mesure
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Découvrez notre gamme complète de services de livraison conçus pour répondre à tous vos
          besoins logistiques.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 reveal-element"
          :class="`reveal-delay-${index * 200}`"
        >
          <div
            class="bg-gradient-to-br from-violet-500 to-purple-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
          >
            <component :is="service.icon" class="h-8 w-8 text-white" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">{{ service.title }}</h3>
          <p class="text-gray-600 mb-6">{{ service.description }}</p>
          <!-- <a href="#" class="inline-flex items-center text-violet-700 font-medium group-hover:text-purple-600">
                  En savoir plus
                  <ArrowRight class="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a> -->
        </div>
      </div>

      <!-- <div class="mt-16 text-center reveal-element reveal-delay-600">
              <button 
                @click="currentPage = '#contact'" 
                class="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              >
                Découvrir tous nos services
              </button>
            </div> -->
    </div>
  </section>
</template>

<script setup>
import {
  Truck,
  Menu,
  X,
  User,
  Star,
  Shield,
  Heart,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Clock,
  Map,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  HeartHandshake,
  Search,
} from 'lucide-vue-next'
// Services data
const services = [
  {
    title: 'Livraison Express',
    description:
      'Livraison garantie pour tous vos colis urgents dans tout cotonou-Calavi-Ouidah et environs.',
    icon: Truck,
  },
  {
    title: 'Livraison Continental',
    description: 'Expédiez vos colis partout en Afrique avec notre service fiable.',
    icon: MapPin,
  },
  {
    title: 'Suivi en Temps Réel',
    description: 'Suivez vos colis en temps réel grâce à notre système de tracking avancé.',
    icon: Clock,
  },
]
</script>

<style></style>
