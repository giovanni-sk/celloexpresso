<template>
  <!-- Hero Section -->
  <section class="relative overflow-hidden">
    <!-- Background elements -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 opacity-95"
    ></div>
    <div class="absolute inset-0">
    <!-- Image de fond avec opacité augmentée -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-[url('../assets/images/amazone.webp')] opacity-30 bg-cover bg-center"
    ></div>
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
      ref="parallaxBg1"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
      ref="parallaxBg2"
    ></div>
  </div>

    <div class="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-12 md:mb-0 text-center md:text-left" ref="heroContent">
          <div
            class="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 reveal-element"
          >
            Livraison rapide & sécurisée
          </div>
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight reveal-element reveal-delay-200"
          >
            Votre <span class="text-purple-300">livraison</span> mérite le meilleur service
          </h1>
          <p
            class="text-lg text-purple-100 mb-8 max-w-lg mx-auto md:mx-0 reveal-element reveal-delay-400"
          >
            Cello Express révolutionne la livraison avec des solutions rapides, fiables et adaptées
            à vos besoins spécifiques.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start reveal-element reveal-delay-600"
          >
            <button
              @click="currentPage = '#calculateur'"
              class="bg-white text-violet-800 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Calculer un tarif
            </button>
            <button
              @click="currentPage = '#apropos'"
              class="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              En savoir plus
            </button>
          </div>
        </div>
        <div class="md:w-1/2 relative" ref="heroImage">
          <div
            class="absolute -top-10 -left-10 w-40 h-40 bg-purple-400 rounded-full filter blur-3xl opacity-20"
          ></div>
          <div
            class="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-3 rounded-2xl shadow-xl reveal-element reveal-right"
          >
            <img
              src="../assets/images/hero.png"
              alt="Cello Express Delivery"
              class="rounded-xl w-full h-auto"
            />
          </div>
          <div
            class="absolute -bottom-4 -right-4 w-32 h-32 bg-violet-400 rounded-full filter blur-3xl opacity-20"
          ></div>
        </div>
      </div>

      <!-- Stats -->
      <div
        class="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        ref="statsSection"
      >
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 reveal-element"
          :class="`reveal-delay-${index * 200}`"
        >
          <div class="text-3xl font-bold text-white mb-1">
            <span class="counter" :data-target="stat.value" :data-suffix="stat.suffix">0</span>
          </div>
          <div class="text-purple-200">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Wave separator -->
    <div class="absolute bottom-0 left-0 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
  </section>
</template>
<script setup>
// Stats data
const stats = [
  { value: '500', suffix: '+', label: 'Livraisons par mois' },
  { value: '98', suffix: '%', label: 'Taux de satisfaction' },
  { value: '12', suffix: 'h', label: 'Livraison express' },
  { value: '1', suffix: '+', label: "Années d'expérience" },
]
</script>
