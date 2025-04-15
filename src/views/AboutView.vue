<template>
 
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
                  <img src="../assets/images/histoire.png" alt="Notre Histoire"
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
const currentPage = ref(null);
const aboutHero = ref(null);
const storySection = ref(null);
const valuesSection = ref(null);
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
    description: 'Livraison express en 24h et 7j/7 garantie pour tous vos envois urgents.',
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

</style>
