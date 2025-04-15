<template>
  <!-- CTA Section -->
  <section
    class="py-20 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 relative overflow-hidden"
    ref="ctaSection"
  >
    <!-- Background elements -->
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
      ref="parallaxBg3"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
      ref="parallaxBg4"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl mx-auto text-center reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
          Prêt à simplifier vos livraisons?
        </h2>
        <p class="text-lg text-purple-200 mb-8">
          Rejoignez nos clients satisfaits et découvrez pourquoi Cello Express est le choix idéal
          pour vos besoins de livraison.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="currentPage = '#calculateur'"
            class="bg-white text-violet-800 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all"
          >
            Calculer un tarif
          </button>
          <button
            @click="currentPage = '#apropos'"
            class="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
