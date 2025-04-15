<template>
  
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
        <div ref="mapContainer" class="w-full h-96"></div>
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
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
Truck, Menu, X, User, Star, Shield, Heart, Leaf,
MapPin, Phone, Mail, Clock, Map, Facebook, Twitter,
Instagram, Linkedin, Send, ArrowRight, ChevronRight,
ShieldCheck, HeartHandshake, Search
} from 'lucide-vue-next';

// Navigation state
const mobileMenuOpen = ref(false);
const currentPage = ref(null);
const mapContainer = ref(null);
let map = null;

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

const whyUsSection = ref(null);
const contactHero = ref(null);
const contactFormSection = ref(null);

// Contact form
const contactForm = ref({
name: '',
email: '',
phone: '',
subject: 'devis',
message: ''
});

// Initialize map
const initMap = () => {
if (mapContainer.value && !map) {
// Coordonnées d'Agla, Cotonou
map = L.map(mapContainer.value).setView([6.374013, 2.342284], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Custom icon
const customIcon = L.icon({
iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
iconSize: [25, 41],
iconAnchor: [12, 41],
popupAnchor: [1, -34],
shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
shadowSize: [41, 41]
});

// Add marker
L.marker([6.374013, 2.342284], { icon: customIcon })
.addTo(map)
.bindPopup("<b>Cello Express Livraison</b><br>Agla von zero soucis, 5 eme von à droite")
.openPopup();
}
};

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
window.scrollTo({ top: 0, behavior: 'smooth' });
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

document.querySelectorAll('.reveal-element').forEach(element => {
observer.observe(element);
});

document.querySelectorAll('.process-line').forEach(element => {
observer.observe(element);
});
};

// Watch for page changes
watch(currentPage, (newPage, oldPage) => {
if (newPage !== oldPage) {
setTimeout(() => {
setupScrollAnimations();
if (newPage === '#accueil') {
  animateCounters();
}
}, 100);
}
});

// Initialize on mount
onMounted(() => {
const hash = window.location.hash;
if (hash && (hash === '#accueil' || hash === '#apropos' || hash === '#contact' || hash === '#calculateur')) {
currentPage.value = hash;
} else {
currentPage.value = '#accueil';
}

setupScrollAnimations();
animateCounters();
window.addEventListener('scroll', handleParallax);

// Initialize map after slight delay to ensure DOM is ready
setTimeout(initMap, 300);
});

// Clean up
onBeforeUnmount(() => {
window.removeEventListener('scroll', handleParallax);
if (map) {
map.remove();
}
});
</script>

<style>
/* Leaflet map container style */
.leaflet-container {
background: #f8fafc !important;
}

/* Animation styles */
.reveal-element {
opacity: 0;
transform: translateY(20px);
transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal-element.revealed {
opacity: 1;
transform: translateY(0);
}

.reveal-element.reveal-delay-200 {
transition-delay: 200ms;
}

.reveal-element.reveal-delay-400 {
transition-delay: 400ms;
}

.reveal-left {
transform: translateX(-20px);
}

.reveal-left.revealed {
transform: translateX(0);
}

.reveal-right {
transform: translateX(20px);
}

.reveal-right.revealed {
transform: translateX(0);
}
</style>