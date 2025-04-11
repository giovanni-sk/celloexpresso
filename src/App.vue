<template>
  <div class="min-h-screen flex flex-col font-sans">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <div class="bg-gradient-to-r from-violet-600 to-purple-500 p-2 rounded-lg">
              <Truck class="h-6 w-6 text-white" />
            </div>
            <span
              class="font-bold text-xl bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
              Cello Express
            </span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a v-for="(item, index) in navItems" :key="index" :href="item.path"
              class="relative font-medium text-gray-700 hover:text-violet-700 transition-colors"
              :class="{ 'text-violet-700': currentPage === item.path }">
              {{ item.name }}
              <span v-if="currentPage === item.path"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-purple-500"></span>
            </a>
          </div>
          <button
            class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-500 text-white px-5 py-2 rounded-full hover:shadow-lg transition-all"
            @click="currentPage = '#contact'">
            <Phone class="h-4 w-4" />
            <span>Nous contacter</span>
          </button>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6 text-gray-700" />
            <X v-else class="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
        <div class="container mx-auto px-4 py-4">
          <div class="flex flex-col space-y-4">
            <a v-for="(item, index) in navItems" :key="index" :href="item.path"
              class="py-2 px-4 rounded-md hover:bg-violet-50 transition-colors"
              :class="{ 'bg-violet-50 text-violet-700 font-medium': currentPage === item.path }"
              @click="mobileMenuOpen = false">
              {{ item.name }}
            </a>
            <button
              class="flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-500 text-white px-5 py-3 rounded-md hover:shadow-lg transition-all"
              @click="currentPage = '#contact'; mobileMenuOpen = false">
              <Phone class="h-4 w-4" />
              <span>Nous contacter</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-grow pt-16">
      <!-- Home Page -->
      <div v-if="currentPage === '#accueil'" class="w-full">
        <!-- Hero Section -->
        <section class="relative overflow-hidden">
          <!-- Background elements -->
          <div class="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 opacity-95"></div>
          <div class="absolute inset-0">
            <div
              class="absolute top-0 left-0 w-full h-full bg-[url('https://placehold.co/1920x1080/9333ea/FFFFFF?text=')] opacity-10 bg-cover bg-center">
            </div>
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
              ref="parallaxBg1"></div>
            <div
              class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
              ref="parallaxBg2"></div>
          </div>

          <div class="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 mb-12 md:mb-0 text-center md:text-left" ref="heroContent">
                <div
                  class="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 reveal-element">
                  Livraison rapide & sécurisée
                </div>
                <h1
                  class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight reveal-element reveal-delay-200">
                  Votre <span class="text-purple-300">livraison</span> mérite le meilleur service
                </h1>
                <p class="text-lg text-purple-100 mb-8 max-w-lg mx-auto md:mx-0 reveal-element reveal-delay-400">
                  Cello Express révolutionne la livraison avec des solutions rapides, fiables et adaptées à vos besoins
                  spécifiques.
                </p>
                <div
                  class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start reveal-element reveal-delay-600">
                  <button @click="currentPage = '#calculateur'"
                    class="bg-white text-violet-800 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all">
                    Calculer un tarif
                  </button>
                  <button @click="currentPage = '#apropos'"
                    class="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all">
                    En savoir plus
                  </button>
                </div>
              </div>
              <div class="md:w-1/2 relative" ref="heroImage">
                <div class="absolute -top-10 -left-10 w-40 h-40 bg-purple-400 rounded-full filter blur-3xl opacity-20">
                </div>
                <div
                  class="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-3 rounded-2xl shadow-xl reveal-element reveal-right">
                  <img src="https://placehold.co/600x400/9333ea/FFFFFF?text=Cello+Express" alt="Cello Express Delivery"
                    class="rounded-xl w-full h-auto" />
                </div>
                <div
                  class="absolute -bottom-4 -right-4 w-32 h-32 bg-violet-400 rounded-full filter blur-3xl opacity-20">
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div class="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center" ref="statsSection">
              <div v-for="(stat, index) in stats" :key="index"
                class="bg-white/10 backdrop-blur-sm rounded-xl p-6 reveal-element"
                :class="`reveal-delay-${index * 200}`">
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
              <path fill="#ffffff" fill-opacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
              </path>
            </svg>
          </div>
        </section>

        <!-- Services Section -->
        <section class="py-20 bg-white" ref="servicesSection">
          <div class="container mx-auto px-4">
            <div class="text-center mb-16 reveal-element">
              <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                Nos Services
              </div>
              <h2
                class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                Solutions de livraison sur mesure
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Découvrez notre gamme complète de services de livraison conçus pour répondre à tous vos besoins
                logistiques.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="(service, index) in services" :key="index"
                class="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 reveal-element"
                :class="`reveal-delay-${index * 200}`">
                <div
                  class="bg-gradient-to-br from-violet-500 to-purple-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

        <!-- How it works -->
        <section class="py-20 bg-gray-50" ref="processSection">
          <div class="container mx-auto px-4">
            <div class="text-center mb-16 reveal-element">
              <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                Notre Processus
              </div>
              <h2
                class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                Comment ça fonctionne
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Un processus simple et efficace pour assurer une livraison rapide et sans tracas.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div v-for="(step, index) in steps" :key="index" class="relative reveal-element"
                :class="`reveal-delay-${index * 200}`">
                <div class="bg-white rounded-2xl p-6 shadow-sm relative z-10">
                  <div class="bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <span class="text-xl font-bold text-violet-700">{{ index + 1 }}</span>
                  </div>
                  <h3 class="text-lg font-bold mb-3 text-gray-800">{{ step.title }}</h3>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
                <div v-if="index < steps.length - 1"
                  class="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-violet-300 to-transparent -translate-y-1/2 transform z-0 process-line">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Testimonials -->
        <section class="py-20 bg-white" ref="testimonialsSection">
          <div class="container mx-auto px-4">
            <div class="text-center mb-16 reveal-element">
              <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                Témoignages
              </div>
              <h2
                class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                Ce que nos clients disent
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Découvrez pourquoi nos clients nous font confiance pour leurs besoins de livraison.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="(testimonial, index) in testimonials" :key="index"
                class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 shadow-sm relative reveal-element"
                :class="`reveal-delay-${index * 200}`">
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

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 relative overflow-hidden"
          ref="ctaSection">
          <!-- Background elements -->
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
            ref="parallaxBg3"></div>
          <div
            class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
            ref="parallaxBg4"></div>

          <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-3xl mx-auto text-center reveal-element">
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Prêt à simplifier vos livraisons?</h2>
              <p class="text-lg text-purple-200 mb-8">
                Rejoignez nos clients satisfaits et découvrez pourquoi Cello Express est le choix idéal pour vos besoins
                de livraison.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button @click="currentPage = '#calculateur'"
                  class="bg-white text-violet-800 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all">
                  Calculer un tarif
                </button>
                <button @click="currentPage = '#apropos'"
                  class="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- About Page -->
      <div v-if="currentPage === '#apropos'" class="w-full">
        <!-- Hero Section -->
        <section class="relative overflow-hidden">
          <!-- Background elements -->
          <div class="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 opacity-95"></div>
          <div class="absolute inset-0">
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
              ref="parallaxBg5"></div>
            <div
              class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
              ref="parallaxBg6"></div>
          </div>

          <div class="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center" ref="aboutHero">
            <div
              class="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 reveal-element">
              À Propos de Nous
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white reveal-element reveal-delay-200">
              Notre histoire et nos valeurs
            </h1>
            <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto reveal-element reveal-delay-400">
              Découvrez comment Cello Express est devenu un leader dans le secteur de la livraison grâce à notre
              engagement envers l'excellence.
            </p>
          </div>

          <!-- Wave separator -->
          <div class="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto">
              <path fill="#ffffff" fill-opacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
              </path>
            </svg>
          </div>
        </section>

        <!-- Our Story -->
        <section class="py-20 bg-white" ref="storySection">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center gap-12">
              <div class="md:w-1/2 relative reveal-element reveal-left">
                <div class="absolute -top-6 -left-6 w-32 h-32 bg-violet-200 rounded-full filter blur-3xl opacity-70">
                </div>
                <div class="relative z-10">
                  <img src="https://placehold.co/600x400/9333ea/FFFFFF?text=Notre+Histoire" alt="Notre Histoire"
                    class="rounded-2xl shadow-lg w-full h-auto" />
                </div>
                <div
                  class="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full filter blur-3xl opacity-70">
                </div>
              </div>
              <div class="md:w-1/2 reveal-element reveal-right">
                <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                  Notre Histoire
                </div>
                <h2
                  class="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                  Une extension naturelle au service de l'efficacité
                </h2>
                <p class="text-gray-600 mb-6">
                  Créée en 2025, Cello Express est née de la volonté de Cello Events d'optimiser la logistique de ses
                  événements. Pensée comme une branche opérationnelle de l'agence, elle s'est rapidement imposée comme
                  un maillon essentiel dans la chaîne de livraison.
                </p>
                <p class="text-gray-600 mb-6">
                  À ses débuts, avec seulement deux véhicules, Cello Express reflétait l'ambition de ses fondateurs :
                  proposer un service de livraison à la fois fiable, rapide et aligné sur les valeurs de proximité et
                  d'excellence portées par Cello Events.
                </p>
                <p class="text-gray-600">
                  Aujourd'hui, notre flotte s'est agrandie et notre équipe s'est étoffée, mais notre engagement reste le
                  même : offrir des solutions de livraison efficaces, personnalisées et responsables, tant pour les
                  particuliers que pour les entreprises.
                </p>
              </div>

            </div>
          </div>
        </section>

        <!-- Our Values -->
        <section class="py-20 bg-gray-50" ref="valuesSection">
          <div class="container mx-auto px-4">
            <div class="text-center mb-16 reveal-element">
              <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                Nos Valeurs
              </div>
              <h2
                class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                Ce qui nous définit
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Nos valeurs fondamentales guident chacune de nos actions et décisions.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="(value, index) in values" :key="index"
                class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all reveal-element"
                :class="`reveal-delay-${index * 200}`">
                <div
                  class="bg-gradient-to-br from-violet-500 to-purple-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <component :is="value.icon" class="h-8 w-8 text-white" />
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-800">{{ value.title }}</h3>
                <p class="text-gray-600">
                  {{ value.description }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Our Team -->
        <section class="py-20 bg-white" ref="teamSection">
          <div class="container mx-auto px-4">
            <div class="text-center mb-16 reveal-element">
              <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                Notre Équipe
              </div>
              <h2
                class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                Les visages derrière Cello Express
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Rencontrez les professionnels passionnés qui font de Cello Express un leader dans le secteur de la
                livraison.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="(member, index) in team" :key="index" class="group reveal-element"
                :class="`reveal-delay-${index * 200}`">
                <div
                  class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 shadow-sm group-hover:shadow-lg transition-all relative overflow-hidden">
                  <div
                    class="w-32 h-32 rounded-full bg-gradient-to-br from-violet-200 to-purple-200 mx-auto mb-6 flex items-center justify-center relative z-10">
                    <User class="h-16 w-16 text-violet-700" />
                  </div>
                  <h3 class="text-xl font-bold mb-1 text-center text-gray-800">{{ member.name }}</h3>
                  <p class="text-violet-600 mb-4 text-center">{{ member.position }}</p>
                  <p class="text-gray-600 text-center">{{ member.bio }}</p>
                  <div
                    class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Why Choose Us -->
        <section class="py-20 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 relative overflow-hidden"
          ref="whyUsSection">
          <!-- Background elements -->
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
            ref="parallaxBg7"></div>
          <div
            class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
            ref="parallaxBg8"></div>

          <div class="container mx-auto px-4 relative z-10">
            <div class="text-center mb-16 reveal-element">
              <div
                class="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Pourquoi Nous Choisir
              </div>
              <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ce qui nous distingue
              </h2>
              <p class="text-purple-200 max-w-2xl mx-auto">
                Découvrez pourquoi Cello Express est le partenaire idé al pour tous vos besoins de livraison.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div v-for="(feature, index) in features" :key="index"
                class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all reveal-element"
                :class="`reveal-delay-${index * 200}`">
                <div class="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <component :is="feature.icon" class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-bold mb-2 text-white">{{ feature.title }}</h3>
                <p class="text-purple-200">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Calculateur de Prix Page -->
      <div v-if="currentPage === '#calculateur'" class="w-full">
        <!-- Hero Section -->
        <section class="relative overflow-hidden">
          <!-- Background elements -->
          <div class="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 opacity-95"></div>
          <div class="absolute inset-0">
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
              ref="parallaxBgCalc1"></div>
            <div
              class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
              ref="parallaxBgCalc2"></div>
          </div>

          <div class="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center" ref="calculatorHero">
            <div
              class="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 reveal-element">
              Calculateur de Prix
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white reveal-element reveal-delay-200">
              Estimez le coût de votre livraison
            </h1>
            <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto reveal-element reveal-delay-400">
              Utilisez notre calculateur pour obtenir une estimation précise du coût de votre livraison en fonction de la distance.
            </p>
          </div>

          <!-- Wave separator -->
          <div class="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto">
              <path fill="#ffffff" fill-opacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
              </path>
            </svg>
          </div>
        </section>

        <!-- Calculateur Section -->
        <section class="py-20 bg-white" ref="calculatorSection">
          <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
              <div class="flex flex-col lg:flex-row gap-12">
                <!-- Carte et formulaire -->
                <div class="lg:w-2/3 reveal-element reveal-left">
                  <div class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 shadow-sm h-full">
                    <div class="mb-6">
                      <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                        Sélectionnez les points de livraison
                      </div>
                      <h2 class="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                        Carte interactive
                      </h2>
                      <p class="text-gray-600 mb-6">
                        Cliquez sur la carte pour définir le point de départ et d'arrivée de votre livraison.
                      </p>
                    </div>

                    <!-- Formulaire d'adresse -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div class="relative overflow-hidden">
                        <label for="startAddress" class="block text-sm font-medium text-gray-700 mb-1">Adresse de départ</label>
                        <div class="flex">
                          <input type="text" id="startAddress" v-model="startAddress"
                            class="w-full px-4 py-3 rounded-l-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                            placeholder="Entrez l'adresse de départ" />
                          <button @click="searchStartAddress" 
                            class="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-4 py-2 rounded-r-lg">
                            <Search class="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div class="relative overflow-hidden">
                        <label for="endAddress" class="block text-sm font-medium text-gray-700 mb-1">Adresse d'arrivée</label>
                        <div class="flex">
                          <input type="text" id="endAddress" v-model="endAddress"
                            class="w-full px-4 py-3 rounded-l-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                            placeholder="Entrez l'adresse d'arrivée" />
                          <button @click="searchEndAddress" 
                            class="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-4 py-2 rounded-r-lg">
                            <Search class="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Carte -->
                    <div class="w-full h-96 rounded-xl overflow-hidden shadow-md mb-6" ref="mapContainer">
                      <!-- La carte sera chargée ici -->
                    </div>

                    <div class="flex justify-center">
                      <button @click="calculateRoute" 
                        class="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                        Calculer l'itinéraire
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Résultats et tarifs -->
                <div class="lg:w-1/3 reveal-element reveal-right">
                  <div class="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm h-full">
                    <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                      Résultat
                    </div>
                    <h2 class="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                      Estimation du prix
                    </h2>

                    <div v-if="distance > 0" class="mb-8">
                      <div class="flex justify-between items-center p-4 bg-violet-50 rounded-lg mb-4">
                        <div>
                          <p class="text-gray-700 font-medium">Distance calculée:</p>
                        </div>
                        <div>
                          <p class="text-xl font-bold text-violet-700">{{ distance.toFixed(2) }} km</p>
                        </div>
                      </div>

                      <div class="flex justify-between items-center p-4 bg-purple-50 rounded-lg mb-6">
                        <div>
                          <p class="text-gray-700 font-medium">Prix estimé:</p>
                        </div>
                        <div>
                          <p class="text-2xl font-bold text-purple-700">{{ calculatedPrice }} F</p>
                        </div>
                      </div>

                      <div class="text-center">
                        <button @click="currentPage = '#contact'" 
                          class="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all w-full">
                          Réserver cette livraison
                        </button>
                      </div>
                    </div>

                    <div v-else class="mb-8 text-center p-8">
                      <MapPin class="h-12 w-12 text-violet-300 mx-auto mb-4" />
                      <p class="text-gray-500">Sélectionnez les points de départ et d'arrivée sur la carte pour obtenir une estimation de prix.</p>
                    </div>

                    <!-- Grille tarifaire -->
                    <div class="mt-8">
                      <h3 class="font-bold text-gray-800 mb-4">Grille tarifaire</h3>
                      <div class="space-y-2 text-sm">
                        <div v-for="(rate, index) in deliveryRates" :key="index" 
                          class="flex justify-between p-2 rounded" 
                          :class="{'bg-violet-50': isCurrentRateCategory(rate)}">
                          <span class="text-gray-700">{{ rate.range }}</span>
                          <span class="font-medium" :class="{'text-violet-700 font-bold': isCurrentRateCategory(rate)}">
                            {{ rate.price }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-20 bg-gray-50" ref="faqCalculatorSection">
          <div class="container mx-auto px-4">
            <div class="text-center mb-16 reveal-element">
              <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                Questions fréquentes
              </div>
              <h2
                class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                À propos de nos tarifs
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Trouvez des réponses à vos questions concernant notre système de tarification.
              </p>
            </div>

            <div class="max-w-3xl mx-auto space-y-6">
              <div v-for="(faq, index) in pricingFaqs" :key="index"
                class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all reveal-element"
                :class="`reveal-delay-${index * 100}`">
                <h3 class="text-lg font-bold text-gray-800 mb-2">{{ faq.question }}</h3>
                <p class="text-gray-600">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Contact Page -->
      <div v-if="currentPage === '#contact'" class="w-full">
        <!-- Hero Section -->
        <section class="relative overflow-hidden">
          <!-- Background elements -->
          <div class="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 opacity-95"></div>
          <div class="absolute inset-0">
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
              ref="parallaxBg9"></div>
            <div
              class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
              ref="parallaxBg10"></div>
          </div>

          <div class="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center" ref="contactHero">
            <div
              class="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 reveal-element">
              Contactez-nous
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white reveal-element reveal-delay-200">
              Parlons de vos besoins
            </h1>
            <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto reveal-element reveal-delay-400">
              Vous avez des questions ou besoin d'un devis? Notre équipe est là pour vous aider.
            </p>
          </div>

          <!-- Wave separator -->
          <div class="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto">
              <path fill="#ffffff" fill-opacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
              </path>
            </svg>
          </div>
        </section>

        <!-- Contact Form Section -->
        <section class="py-20 bg-white" ref="contactFormSection">
          <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-12">
              <div class="lg:w-1/2 reveal-element reveal-left">
                <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                  Envoyez-nous un message
                </div>
                <h2
                  class="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                  Comment pouvons-nous vous aider?
                </h2>
                <p class="text-gray-600 mb-8">
                  Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais.
                </p>

                <form @submit.prevent="submitForm" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="relative overflow-hidden">
                      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <input type="text" id="name" v-model="contactForm.name"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        placeholder="Votre nom" required />
                      <div
                        class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transform scale-x-0 focus-within:scale-x-100 transition-transform origin-left duration-500">
                      </div>
                    </div>
                    <div class="relative overflow-hidden">
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" id="email" v-model="contactForm.email"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        placeholder="votre@email.com" required />
                      <div
                        class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transform scale-x-0 focus-within:scale-x-100 transition-transform origin-left duration-500">
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="relative overflow-hidden">
                      <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <input type="tel" id="phone" v-model="contactForm.phone"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        placeholder="+229 016 673 994 6" />
                      <div
                        class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transform scale-x-0 focus-within:scale-x-100 transition-transform origin-left duration-500">
                      </div>
                    </div>
                    <div class="relative overflow-hidden">
                      <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                      <select id="subject" v-model="contactForm.subject"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all">
                        <option value="devis">Demande de devis</option>
                        <option value="info">Informations générales</option>
                        <option value="support">Support client</option>
                        <option value="autre">Autre</option>
                      </select>
                      <div
                        class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transform scale-x-0 focus-within:scale-x-100 transition-transform origin-left duration-500">
                      </div>
                    </div>
                  </div>

                  <div class="relative overflow-hidden">
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" v-model="contactForm.message" rows="5"
                      class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      placeholder="Comment pouvons-nous vous aider?" required></textarea>
                    <div
                      class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transform scale-x-0 focus-within:scale-x-100 transition-transform origin-left duration-500">
                    </div>
                  </div>

                  <button type="submit"
                    class="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                    Envoyer le message
                  </button>
                </form>
              </div>

              <div class="lg:w-1/2 reveal-element reveal-right">
                <div class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 shadow-sm h-full">
                  <div
                    class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                    Nos Coordonnées
                  </div>
                  <h2
                    class="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                    Restons connectés
                  </h2>

                  <div class="space-y-8 mb-12">
                    <div class="flex items-start transform transition-all hover:translate-x-2">
                      <div class="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-lg mr-4">
                        <MapPin class="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 class="font-bold text-gray-800 mb-1">Adresse</h3>
                        <p class="text-gray-600">Agla von zero soucis, 5 eme von à droite<br />Cotonou, Bénin</p>
                      </div>
                    </div>

                    <div class="flex items-start transform transition-all hover:translate-x-2">
                      <div class="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-lg mr-4">
                        <Phone class="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 class="font-bold text-gray-800 mb-1">Téléphone</h3>
                        <p class="text-gray-600">+229 019 700 033 1</p>
                      </div>
                    </div>

                    <div class="flex items-start transform transition-all hover:translate-x-2">
                      <div class="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-lg mr-4">
                        <Mail class="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 class="font-bold text-gray-800 mb-1">Email</h3>
                        <p class="text-gray-600">celloexpresslivraison@gmail.com</p>
                      </div>
                    </div>

                    <div class="flex items-start transform transition-all hover:translate-x-2">
                      <div class="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-lg mr-4">
                        <Clock class="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 class="font-bold text-gray-800 mb-1">Heures d'ouverture</h3>
                        <p class="text-gray-600">Lundi - Samedi: 8h00 - 21h30</p>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <h3 class="font-bold text-gray-800 mb-3">Suivez-nous</h3>
                    <div class="flex space-x-4">
                      <a href="#"
                        class="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-lg text-white hover:shadow-lg transition-all hover:scale-110">
                        <Facebook class="h-5 w-5" />
                      </a>
                      <a href="#"
                        class="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-lg text-white hover:shadow-lg transition-all hover:scale-110">
                        <Twitter class="h-5 w-5" />
                      </a>
                      <a href="#"
                        class="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-lg text-white hover:shadow-lg transition-all hover:scale-110">
                        <Instagram class="h-5 w-5" />
                      </a>
                      <a href="#"
                        class="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-lg text-white hover:shadow-lg transition-all hover:scale-110">
                        <Linkedin class="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Map Section -->
        <section class="py-20 bg-gray-50" ref="mapSection">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12 reveal-element">
              <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                Notre Localisation
              </div>
              <h2
                class="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                Où nous trouver
              </h2>
            </div>

            <div class="bg-white rounded-2xl shadow-sm overflow-hidden reveal-element">
              <!-- Placeholder for map -->
              <div class="w-full h-96 bg-violet-100 flex items-center justify-center">
                <!-- <Map class="h-16 w-16 text-violet-800" /> -->
                <!-- <span class="ml-4 text-xl font-medium text-violet-800">Carte Google Maps</span> -->
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6051.853768392688!2d2.3422848295810206!3d6.37401353693427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102357165f400025%3A0x4af646956ca3b94d!2sCS%20Bilingue%20ADETRO!5e0!3m2!1sfr!2sbj!4v1744136426693!5m2!1sfr!2sbj"
                  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-20 bg-white" ref="faqSection">
          <div class="container mx-auto px-4">
            <div class="text-center mb-16 reveal-element">
              <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
                FAQ
              </div>
              <h2
                class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
                Questions fréquemment posées
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Trouvez rapidement des réponses à vos questions les plus courantes.
              </p>
            </div>

            <div class="max-w-3xl mx-auto space-y-6">
              <div v-for="(faq, index) in faqs" :key="index"
                class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all reveal-element"
                :class="`reveal-delay-${index * 100}`">
                <h3 class="text-lg font-bold text-gray-800 mb-2">{{ faq.question }}</h3>
                <p class="text-gray-600">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer
      class="bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 text-white py-16 relative overflow-hidden">
      <!-- Background elements -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
        ref="parallaxBg11"></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
        ref="parallaxBg12"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div class="flex items-center space-x-2 mb-6">
              <div class="bg-white/10 p-2 rounded-lg">
                <Truck class="h-6 w-6 text-white" />
              </div>
              <span class="font-bold text-xl">Cello Express</span>
            </div>
            <p class="text-purple-200 mb-6">
              Votre partenaire de confiance pour toutes vos livraisons rapides et sécurisées. Nous simplifions la
              logistique pour que vous puissiez vous concentrer sur votre activité.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook class="h-5 w-5" />
              </a>
              <a href="#" class="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter class="h-5 w-5" />
              </a>
              <a href="#" class="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram class="h-5 w-5" />
              </a>
              <a href="#" class="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Linkedin class="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-6">Liens Rapides</h3>
            <ul class="space-y-3">
              <li>
                <a href="#accueil" @click="currentPage = '#accueil'"
                  class="text-purple-200 hover:text-white transition-colors flex items-center group">
                  <ChevronRight class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" @click="currentPage = '#apropos'"
                  class="text-purple-200 hover:text-white transition-colors flex items-center group">
                  <ChevronRight class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  À Propos
                </a>
              </li>
              <li>
                <a href="#calculateur" @click="currentPage = '#calculateur'"
                  class="text-purple-200 hover:text-white transition-colors flex items-center group">
                  <ChevronRight class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Calculateur
                </a>
              </li>
              <li>
                <a href="#contact" @click="currentPage = '#contact'"
                  class="text-purple-200 hover:text-white transition-colors flex items-center group">
                  <ChevronRight class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-6">Nos Services</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-purple-200 hover:text-white transition-colors flex items-center group">
                  <ChevronRight class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Livraison Express
                </a>
              </li>
              <li>
                <a href="#" class="text-purple-200 hover:text-white transition-colors flex items-center group">
                  <ChevronRight class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Livraison Internationale
                </a>
              </li>
              <li>
                <a href="#" class="text-purple-200 hover:text-white transition-colors flex items-center group">
                  <ChevronRight class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Suivi en Temps Réel
                </a>
              </li>
              <li>
                <a href="#" class="text-purple-200 hover:text-white transition-colors flex items-center group">
                  <ChevronRight class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Solutions Entreprises
                </a>
              </li>
              <li>
                <a href="#" class="text-purple-200 hover:text-white transition-colors flex items-center group">
                  <ChevronRight class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Livraison Écologique
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-6">Newsletter</h3>
            <p class="text-purple-200 mb-4">
              Inscrivez-vous pour recevoir nos dernières actualités et offres spéciales.
            </p>
            <form @submit.prevent="subscribeNewsletter" class="space-y-4">
              <div class="flex relative overflow-hidden rounded-lg">
                <input type="email" v-model="newsletterEmail" placeholder="Votre email"
                  class="px-4 py-3 rounded-l-lg w-full focus:outline-none text-gray-800" required />
                <button type="submit"
                  class="bg-gradient-to-r from-violet-600 to-purple-500 px-4 py-3 rounded-r-lg transition-colors">
                  <Send class="h-5 w-5" />
                </button>
                <div
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transform scale-x-0 focus-within:scale-x-100 transition-transform origin-left duration-500">
                </div>
              </div>
              <p class="text-xs text-purple-300">
                En vous inscrivant, vous acceptez notre politique de confidentialité et nos conditions d'utilisation.
              </p>
            </form>
          </div>
        </div>

        <div class="border-t border-white/10 mt-12 pt-8 text-center text-purple-300">
          <p>&copy; {{ new Date().getFullYear() }} Cello Express. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import {
  Truck, Menu, X, User, Star, Shield, Heart, Leaf,
  MapPin, Phone, Mail, Clock, Map, Facebook, Twitter,
  Instagram, Linkedin, Send, ArrowRight, ChevronRight,
  ShieldCheck, HeartHandshake, Search
} from 'lucide-vue-next';


// Navigation state
const mobileMenuOpen = ref(false);
const currentPage = ref('#accueil');

// Navigation items
const navItems = [
  { name: 'Accueil', path: '#accueil' },
  { name: 'À Propos', path: '#apropos' },
  { name: 'Calculateur', path: '#calculateur' },
  { name: 'Contact', path: '#contact' }
];

// Services data
const services = [
  {
    title: 'Livraison Express',
    description: 'Livraison garantie pour tous vos colis urgents dans tout cotonou-Calavi-Ouidah et environs.',
    icon: Truck
  },
  {
    title: 'Livraison Continental',
    description: 'Expédiez vos colis partout en Afrique avec notre service fiable.',
    icon: MapPin
  },
  {
    title: 'Suivi en Temps Réel',
    description: 'Suivez vos colis en temps réel grâce à notre système de tracking avancé.',
    icon: Clock
  }
];

// Stats data
const stats = [
  { value: '500', suffix: '+', label: 'Livraisons par mois' },
  { value: '98', suffix: '%', label: 'Taux de satisfaction' },
  { value: '12', suffix: 'h', label: 'Livraison express' },
  { value: '1', suffix: '+', label: 'Années d\'expérience' }
];

// Steps data
const steps = [
  {
    title: 'Demande',
    description: 'Remplissez notre formulaire en ligne ou appelez-nous pour demander un devis.'
  },
  {
    title: 'Planification',
    description: 'Nous organisons la collecte et la livraison selon vos besoins spécifiques.'
  },
  {
    title: 'Livraison',
    description: 'Nos chauffeurs professionnels livrent votre colis en toute sécurité.'
  },
  {
    title: 'Confirmation',
    description: 'Vous recevez une confirmation de livraison avec signature électronique.'
  }
];

// Testimonials data
const testimonials = [
  {
    name: 'Merveille DONOU',
    company: 'Boutique à TOKPA',
    text: 'Cello Express m\'a vraiment facilité la vie en livrant rapidement et sans stress mes articles à mes clientes'
  },
  {
    name: 'ATAYI Constantin',
    company: 'Particulier',
    text: 'Cello Express m\'a sauvé plus d\'une fois avec leurs livraisons rapides et fiables de mes repas préférés, toujours chauds et bien emballés.'
  },
  {
    name: 'Vendeuse de friture d\'escargot',
    company: 'Restaurant',
    text: 'Service impeccable! Nos repas urgents arrivent toujours à temps grâce à Cello Express.'
  }
];

// Values data
const values = [
  {
    title: 'Fiabilité',
    description: 'Nous tenons nos promesses et livrons toujours à temps. La ponctualité et la fiabilité sont au cœur de notre service.',
    icon: Shield
  },
  {
    title: 'Service Client',
    description: 'Votre satisfaction est notre priorité absolue. Nous nous efforçons de dépasser vos attentes à chaque livraison.',
    icon: Heart
  },
  {
    title: 'Durabilité',
    description: 'Nous nous engageons à réduire notre impact environnemental en optimisant nos itinéraires et en adoptant des pratiques écologiques.',
    icon: Leaf
  }
];

// Features data
const features = [
  {
    title: 'Rapidité',
    description: 'Livraison express en 24h garantie pour tous vos envois urgents.',
    icon: Clock
  },
  {
    title: 'Sécurité',
    description: 'Vos colis sont assurés et manipulés avec le plus grand soin.',
    icon: ShieldCheck
  },
  {
    title: 'Suivi GPS',
    description: 'Suivez vos livraisons en temps réel grâce à notre système de tracking avancé.',
    icon: MapPin
  },
  {
    title: 'Support 24/7',
    description: 'Notre équipe de support est disponible à tout moment pour répondre à vos questions.',
    icon: HeartHandshake
  }
];

// Team members data
const team = [
  {
    name: 'Marcel ATAYI',
    position: 'Directeur Général',
    bio: 'Avec 5 ans d\'expérience dans la l\évenementiel, Marcel a fondé Cello Express avec une vision claire: offrir un service de livraison exceptionnel.'
  },
  {
    name: 'Gérard GBODO',
    position: 'Responsable Opérations',
    bio: 'Gérard supervise toutes les opérations quotidiennes et s\'assure que chaque livraison respecte nos standards de qualité.'
  },
  {
    name: 'Gabriella ABIDJO',
    position: 'Sécrétaire Générale',
    bio: 'Gabriella est dévouée à offrir une expérience client exceptionnelle et à résoudre rapidement tout problème.'
  },
  {
    name: 'Nabil BRYM',
    position: 'Livreur n°1',
    bio: 'Nabil est connu pour sa rapidité et prudence, il ne rate jamais une destination'
  },
  {
    name: 'Valentin AGBA',
    position: 'Livreur n°2',
    bio: 'Son sens du service et sa courtoisie font de lui un livreur apprécié des clients'
  }
];

// FAQ data
const faqs = [
  {
    question: 'Quels sont vos délais de livraison?',
    answer: 'Nous proposons plusieurs options de livraison, de la livraison standard (2-3 jours) à la livraison express en 24h. Les délais exacts dépendent de la destination.'
  },
  {
    question: 'Comment suivre ma livraison?',
    answer: 'Vous recevrez un numéro de suivi par email dès que votre colis sera pris en charge. Vous pourrez suivre votre livraison en temps réel sur notre site web ou notre application mobile.'
  },
  {
    question: 'Quelles sont vos zones de livraison?',
    answer: 'Nous livrons dans tout cotonou ainsi que dans plusieurs pays Africains. Pour les destinations internationales, veuillez nous contacter pour plus d\'informations.'
  },
  {
    question: 'Comment obtenir un devis?',
    answer: 'Vous pouvez demander un devis en remplissant notre formulaire de contact en ligne, en nous appelant ou en nous envoyant un email. Notre équipe commerciale vous répondra dans les 24 heures avec une proposition adaptée à vos besoins.'
  },
  {
    question: 'Proposez-vous une assurance pour les colis?',
    answer: 'Oui, tous nos envois sont assurés par défaut jusqu\'à une certaine valeur. Pour les objets de valeur supérieure, nous proposons des options d\'assurance complémentaires.'
  }
];

// Pricing FAQ data
const pricingFaqs = [
  {
    question: 'Comment calculez-vous le prix de la livraison?',
    answer: 'Notre tarification est basée sur la distance entre le point de départ et le point d\'arrivée. Nous utilisons un système de tranches kilométriques pour déterminer le prix final.'
  },
  {
    question: 'Y a-t-il des frais supplémentaires?',
    answer: 'Pour les livraisons standard, le prix affiché est tout compris. Des frais supplémentaires peuvent s\'appliquer pour les colis volumineux, lourds ou nécessitant une manipulation spéciale.'
  },
  {
    question: 'Proposez-vous des tarifs dégressifs pour les entreprises?',
    answer: 'Oui, nous offrons des tarifs préférentiels pour les entreprises avec des volumes réguliers. Contactez notre service commercial pour obtenir une offre personnalisée.'
  },
  {
    question: 'Le prix est-il le même pour toutes les zones de Cotonou?',
    answer: 'Oui, notre tarification est uniquement basée sur la distance, quelle que soit la zone de Cotonou. Cependant, certaines zones difficiles d\'accès peuvent nécessiter un supplément.'
  },
  {
    question: 'Comment puis-je payer ma livraison?',
    answer: 'Nous acceptons les paiements en espèces à la livraison, par mobile money, ou par virement bancaire pour les clients professionnels.'
  }
];

// Contact form
const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: 'devis',
  message: ''
});

// Newsletter email
const newsletterEmail = ref('');

// Form submission handlers
const submitForm = () => {
  alert('Votre message a été envoyé! Nous vous contacterons bientôt.');
  contactForm.value = {
    name: '',
    email: '',
    phone: '',
    subject: 'devis',
    message: ''
  };
};

const subscribeNewsletter = () => {
  alert('Merci de vous être inscrit à notre newsletter!');
  newsletterEmail.value = '';
};

// References for parallax elements
const parallaxBg1 = ref(null);
const parallaxBg2 = ref(null);
const parallaxBg3 = ref(null);
const parallaxBg4 = ref(null);
const parallaxBg5 = ref(null);
const parallaxBg6 = ref(null);
const parallaxBg7 = ref(null);
const parallaxBg8 = ref(null);
const parallaxBg9 = ref(null);
const parallaxBg10 = ref(null);
const parallaxBg11 = ref(null);
const parallaxBg12 = ref(null);
const parallaxBgCalc1 = ref(null);
const parallaxBgCalc2 = ref(null);

// References for sections
const heroContent = ref(null);
const heroImage = ref(null);
const statsSection = ref(null);
const servicesSection = ref(null);
const processSection = ref(null);
const testimonialsSection = ref(null);
const ctaSection = ref(null);
const aboutHero = ref(null);
const storySection = ref(null);
const valuesSection = ref(null);
const teamSection = ref(null);
const whyUsSection = ref(null);
const contactHero = ref(null);
const contactFormSection = ref(null);
const mapSection = ref(null);
const faqSection = ref(null);
const calculatorHero = ref(null);
const calculatorSection = ref(null);
const faqCalculatorSection = ref(null);

// Animation for counting up numbers
const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000; // ms
    const increment = target / (duration / 16); // 60fps

    let current = 0;
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.floor(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target + suffix;
      }
    };
    updateCounter();
  });
};

// Page transition animation
const handlePageTransition = (newPage) => {
  // Smooth scroll to top when changing pages
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update URL hash without scrolling
  setTimeout(() => {
    window.history.pushState(null, null, newPage);
    currentPage.value = newPage;
  }, 500);
};

// Parallax effect for background elements
const handleParallax = () => {
  const scrollY = window.scrollY;
  const parallaxElements = [
    parallaxBg1.value, parallaxBg2.value, parallaxBg3.value, parallaxBg4.value,
    parallaxBg5.value, parallaxBg6.value, parallaxBg7.value, parallaxBg8.value,
    parallaxBg9.value, parallaxBg10.value, parallaxBg11.value, parallaxBg12.value,
    parallaxBgCalc1.value, parallaxBgCalc2.value
  ];

  parallaxElements.forEach(element => {
    if (element) {
      const speed = 0.05;
      const yPos = -(scrollY * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
  });
};

// Intersection Observer for scroll animations
const setupScrollAnimations = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe all elements with reveal-element class
  document.querySelectorAll('.reveal-element').forEach(element => {
    observer.observe(element);
  });

  // Observe process lines for animation
  document.querySelectorAll('.process-line').forEach(element => {
    observer.observe(element);
  });
};

// Watch for page changes
watch(currentPage, (newPage, oldPage) => {
  if (newPage !== oldPage) {
    // Reset animations when changing pages
    setTimeout(() => {
      setupScrollAnimations();
      if (newPage === '#accueil') {
        animateCounters();
      }
      if (newPage === '#calculateur' && mapInitialized.value === false) {
        initMap();
      }
    }, 100);
  }
});

// Calculateur de prix variables
const mapContainer = ref(null);
const startAddress = ref('');
const endAddress = ref('');
const distance = ref(0);
const calculatedPrice = ref('0');
let map = null;
let startMarker = null;
let endMarker = null;
let routeLayer = null;
const mapInitialized = ref(false);

// Grille tarifaire
const deliveryRates = [
  { range: '1 à 5 km', price: '500F', min: 1, max: 5, value: 500 },
  { range: '6 à 10 km', price: '800F', min: 6, max: 10, value: 800 },
  { range: '11 à 15 km', price: '1000F - 1300F', min: 11, max: 15, minValue: 1000, maxValue: 1300 },
  { range: '16 à 20 km', price: '1300F - 1500F', min: 16, max: 20, minValue: 1300, maxValue: 1500 },
  { range: '21 à 25 km', price: '2000F', min: 21, max: 25, value: 2000 },
  { range: '26 à 30 km', price: '2500F', min: 26, max: 30, value: 2500 },
  { range: '31 à 35 km', price: '3000F', min: 31, max: 35, value: 3000 },
  { range: '36 à 40 km', price: '4000F', min: 36, max: 40, value: 4000 }
];

// Vérifier si la distance actuelle correspond à une catégorie de tarif
const isCurrentRateCategory = (rate) => {
  return distance.value >= rate.min && distance.value <= rate.max;
};

// Calculer le prix en fonction de la distance
const calculatePrice = (dist) => {
  for (const rate of deliveryRates) {
    if (dist >= rate.min && dist <= rate.max) {
      if (rate.value) {
        return rate.value.toString() + 'F';
      } else {
        // Pour les plages avec min et max (ex: 1000F-1300F)
        const range = rate.max - rate.min;
        const position = dist - rate.min;
        const ratio = position / range;
        const price = Math.round(rate.minValue + ratio * (rate.maxValue - rate.minValue));
        return price.toString() + 'F';
      }
    }
  }
  return '4000F+'; // Au-delà de 40km
};

// Charger Leaflet depuis CDN
const loadLeaflet = async () => {
  return new Promise((resolve) => {
    // Vérifier si Leaflet est déjà chargé
    if (window.L) {
      resolve();
      return;
    }
    
    // Charger le CSS de Leaflet
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(linkElement);
    
    // Charger le JS de Leaflet
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    scriptElement.onload = resolve;
    document.head.appendChild(scriptElement);
  });
};

// Initialiser la carte Leaflet
const initMap = async () => {
  if (!mapContainer.value || mapInitialized.value) return;

  // Charger Leaflet depuis CDN
  await loadLeaflet();
  
  // Coordonnées de Cotonou
  const cotonouCoords = [6.3676953, 2.4252507];
  
  // Créer la carte
  map = window.L.map(mapContainer.value).setView(cotonouCoords, 13);
  
  // Ajouter la couche de tuiles OpenStreetMap
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Ajouter des gestionnaires d'événements pour les clics sur la carte
  map.on('click', handleMapClick);
  
  mapInitialized.value = true;
};

// Gérer les clics sur la carte
const handleMapClick = (e) => {
  const { lat, lng } = e.latlng;
  const L = window.L; // Utiliser L depuis window
  
  // Si le marqueur de départ n'existe pas, le créer
  if (!startMarker) {
    startMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        html: `<div class="bg-violet-600 p-2 rounded-full border-2 border-white shadow-lg"></div>`,
        className: 'custom-div-icon'
      })
    }).addTo(map);
    startMarker.bindPopup('Point de départ').openPopup();
    
    // Mettre à jour l'adresse de départ via géocodage inverse
    reverseGeocode(lat, lng, (address) => {
      startAddress.value = address;
    });
  } 
  // Sinon, si le marqueur d'arrivée n'existe pas, le créer
  else if (!endMarker) {
    endMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        html: `<div class="bg-purple-600 p-2 rounded-full border-2 border-white shadow-lg"></div>`,
        className: 'custom-div-icon'
      })
    }).addTo(map);
    endMarker.bindPopup('Point d\'arrivée').openPopup();
    
    // Mettre à jour l'adresse d'arrivée via géocodage inverse
    reverseGeocode(lat, lng, (address) => {
      endAddress.value = address;
    });
    
    // Calculer l'itinéraire automatiquement
    calculateRoute();
  } 
  // Si les deux marqueurs existent déjà, réinitialiser et créer un nouveau marqueur de départ
  else {
    clearRoute();
    startMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        html: `<div class="bg-violet-600 p-2 rounded-full border-2 border-white shadow-lg"></div>`,
        className: 'custom-div-icon'
      })
    }).addTo(map);
    startMarker.bindPopup('Point de départ').openPopup();
    
    // Mettre à jour l'adresse de départ via géocodage inverse
    reverseGeocode(lat, lng, (address) => {
      startAddress.value = address;
    });
    
    endMarker = null;
    endAddress.value = '';
    distance.value = 0;
    calculatedPrice.value = '0';
  }
};

// Rechercher une adresse de départ
const searchStartAddress = () => {
  if (!startAddress.value) return;
  
  geocode(startAddress.value, (lat, lng) => {
    const L = window.L; // Utiliser L depuis window
    
    if (startMarker) {
      startMarker.setLatLng([lat, lng]);
    } else {
      startMarker = L.marker([lat, lng], {
        icon: L.divIcon({
          html: `<div class="bg-violet-600 p-2 rounded-full border-2 border-white shadow-lg"></div>`,
          className: 'custom-div-icon'
        })
      }).addTo(map);
    }
    
    map.setView([lat, lng], 13);
    startMarker.bindPopup('Point de départ').openPopup();
    
    if (endMarker) {
      calculateRoute();
    }
  });
};

// Rechercher une adresse d'arrivée
const searchEndAddress = () => {
  if (!endAddress.value) return;
  
  geocode(endAddress.value, (lat, lng) => {
    const L = window.L; // Utiliser L depuis window
    
    if (endMarker) {
      endMarker.setLatLng([lat, lng]);
    } else {
      endMarker = L.marker([lat, lng], {
        icon: L.divIcon({
          html: `<div class="bg-purple-600 p-2 rounded-full border-2 border-white shadow-lg"></div>`,
          className: 'custom-div-icon'
        })
      }).addTo(map);
    }
    
    map.setView([lat, lng], 13);
    endMarker.bindPopup('Point d\'arrivée').openPopup();
    
    if (startMarker) {
      calculateRoute();
    }
  });
};

// Géocodage (adresse -> coordonnées)
const geocode = (address, callback) => {
  // Utiliser Nominatim pour le géocodage (gratuit)
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`)
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        callback(parseFloat(data[0].lat), parseFloat(data[0].lon));
      } else {
        alert('Adresse non trouvée. Veuillez essayer avec une adresse plus précise.');
      }
    })
    .catch(error => {
      console.error('Erreur de géocodage:', error);
      alert('Erreur lors de la recherche de l\'adresse. Veuillez réessayer.');
    });
};

// Géocodage inverse (coordonnées -> adresse)
const reverseGeocode = (lat, lng, callback) => {
  // Utiliser Nominatim pour le géocodage inverse (gratuit)
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`)
    .then(response => response.json())
    .then(data => {
      if (data && data.display_name) {
        callback(data.display_name);
      } else {
        callback('Adresse inconnue');
      }
    })
    .catch(error => {
      console.error('Erreur de géocodage inverse:', error);
      callback('Adresse inconnue');
    });
};

// Calculer l'itinéraire entre les deux points
const calculateRoute = () => {
  if (!startMarker || !endMarker) {
    alert('Veuillez sélectionner les points de départ et d\'arrivée.');
    return;
  }
  
  const L = window.L; // Utiliser L depuis window
  
  // Effacer l'itinéraire précédent s'il existe
  if (routeLayer) {
    map.removeLayer(routeLayer);
    routeLayer = null;
  }
  
  const startLatLng = startMarker.getLatLng();
  const endLatLng = endMarker.getLatLng();
  
  // Utiliser OpenRouteService pour calculer l'itinéraire (gratuit avec limitations)
  // Note: Dans un environnement de production, vous devriez obtenir votre propre clé API
  const apiKey = '5b3ce3597851110001cf6248f6c8e5b6b9f94a6f9f5d7e1a1c9c2c7c';
  const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${startLatLng.lng},${startLatLng.lat}&end=${endLatLng.lng},${endLatLng.lat}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data.features && data.features.length > 0) {
        // Extraire la géométrie de l'itinéraire
        const route = data.features[0];
        const coordinates = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
        
        // Créer une ligne pour l'itinéraire
        routeLayer = L.polyline(coordinates, {
          color: '#8b5cf6',
          weight: 6,
          opacity: 0.7,
          lineJoin: 'round'
        }).addTo(map);
        
        // Ajuster la vue pour voir tout l'itinéraire
        map.fitBounds(routeLayer.getBounds(), { padding: [50, 50] });
        
        // Calculer la distance en kilomètres
        distance.value = route.properties.summary.distance / 1000;
        
        // Calculer le prix
        calculatedPrice.value = calculatePrice(distance.value);
      } else {
        // Fallback: calculer la distance à vol d'oiseau si l'API échoue
        distance.value = startLatLng.distanceTo(endLatLng) / 1000;
        calculatedPrice.value = calculatePrice(distance.value);
        
        // Créer une ligne droite entre les points
        routeLayer = L.polyline([startLatLng, endLatLng], {
          color: '#8b5cf6',
          weight: 6,
          opacity: 0.7,
          dashArray: '10, 10',
          lineJoin: 'round'
        }).addTo(map);
        
        // Ajuster la vue
        map.fitBounds(routeLayer.getBounds(), { padding: [50, 50] });
        
        alert('Calcul d\'itinéraire précis indisponible. Distance à vol d\'oiseau utilisée.');
      }
    })
    .catch(error => {
      console.error('Erreur de calcul d\'itinéraire:', error);
      
      // Fallback: calculer la distance à vol d'oiseau
      distance.value = startLatLng.distanceTo(endLatLng) / 1000;
      calculatedPrice.value = calculatePrice(distance.value);
      
      // Créer une ligne droite entre les points
      routeLayer = L.polyline([startLatLng, endLatLng], {
        color: '#8b5cf6',
        weight: 6,
        opacity: 0.7,
        dashArray: '10, 10',
        lineJoin: 'round'
      }).addTo(map);
      
      // Ajuster la vue
      map.fitBounds(routeLayer.getBounds(), { padding: [50, 50] });
      
      alert('Erreur lors du calcul de l\'itinéraire. Distance à vol d\'oiseau utilisée.');
    });
};

// Effacer l'itinéraire et les marqueurs
const clearRoute = () => {
  if (routeLayer) {
    map.removeLayer(routeLayer);
    routeLayer = null;
  }
  
  if (startMarker) {
    map.removeLayer(startMarker);
    startMarker = null;
  }
  
  if (endMarker) {
    map.removeLayer(endMarker);
    endMarker = null;
  }
  
  distance.value = 0;
  calculatedPrice.value = '0';
};

// Check URL hash on load and setup animations
onMounted(() => {
  const hash = window.location.hash;
  if (hash && (hash === '#accueil' || hash === '#apropos' || hash === '#contact' || hash === '#calculateur')) {
    currentPage.value = hash;
  } else {
    currentPage.value = '#accueil';
  }

  // Setup animations
  setupScrollAnimations();
  animateCounters();

  // Add scroll event listener for parallax effects
  window.addEventListener('scroll', handleParallax);
  
  // Initialize map if on calculator page
  if (currentPage.value === '#calculateur') {
    initMap();
  }
});

// Clean up event listeners
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleParallax);
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
}

/* Scroll animations */
.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-element.reveal-left {
  transform: translateX(-50px);
}

.reveal-element.reveal-right {
  transform: translateX(50px);
}

.reveal-element.reveal-delay-200 {
  transition-delay: 0.2s;
}

.reveal-element.reveal-delay-400 {
  transition-delay: 0.4s;
}

.reveal-element.reveal-delay-600 {
  transition-delay: 0.6s;
}

.reveal-element.revealed {
  opacity: 1;
  transform: translate(0, 0);
}

/* Process line animation */
.process-line {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s ease 0.5s;
}

.process-line.revealed {
  transform: scaleX(1);
}

/* Custom focus styles */
input:focus,
textarea:focus,
select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Styles pour les marqueurs personnalisés */
.custom-div-icon {
  background: transparent;
  border: none;
}

/* Styles pour les popups Leaflet */
.leaflet-popup-content-wrapper {
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.leaflet-popup-content {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #4B5563;
}

.leaflet-popup-tip {
  background-color: white;
}
</style>
