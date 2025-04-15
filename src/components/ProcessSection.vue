<template>
  <!-- How it works -->
  <section class="py-20 bg-gray-50" ref="processSection">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 reveal-element">
        <div
          class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4"
        >
          Notre Processus
        </div>
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent"
        >
          Comment ça fonctionne
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Un processus simple et efficace pour assurer une livraison rapide et sans tracas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative reveal-element"
          :class="`reveal-delay-${index * 200}`"
        >
          <div class="bg-white rounded-2xl p-6 shadow-sm relative z-10">
            <div class="bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <span class="text-xl font-bold text-violet-700">{{ index + 1 }}</span>
            </div>
            <h3 class="text-lg font-bold mb-3 text-gray-800">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
          <div
            v-if="index < steps.length - 1"
            class="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-violet-300 to-transparent -translate-y-1/2 transform z-0 process-line"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Steps data
const steps = [
  {
    title: 'Demande',
    description: 'Remplissez notre formulaire en ligne ou appelez-nous pour demander un devis.',
  },
  {
    title: 'Planification',
    description: 'Nous organisons la collecte et la livraison selon vos besoins spécifiques.',
  },
  {
    title: 'Livraison',
    description: 'Nos chauffeurs professionnels livrent votre colis en toute sécurité.',
  },
  {
    title: 'Confirmation',
    description: 'Vous recevez une confirmation de livraison avec signature électronique.',
  },
]
</script>

<style></style>
