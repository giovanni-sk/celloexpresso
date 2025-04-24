<template>
  <!-- Hero Section -->
  <section class="relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 opacity-95"></div>
    <div class="absolute inset-0">
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
        ref="parallaxBgCalc1"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
        ref="parallaxBgCalc2"
      ></div>
    </div>

    <div class="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center" ref="calculatorHero">
      <div class="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 reveal-element">
        Calculateur de Prix
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white reveal-element reveal-delay-200">
        Estimez le coût de votre livraison
      </h1>
      <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto reveal-element reveal-delay-400">
        Utilisez notre calculateur pour obtenir une estimation précise du coût de votre livraison en
        fonction de la distance.
      </p>
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
                  Cliquez sur la carte ou recherchez une adresse pour définir les points de livraison.
                </p>
              </div>

              <!-- Formulaire d'adresse avec autocomplétion -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="relative overflow-hidden">
                  <label for="startAddress" class="block text-sm font-medium text-gray-700 mb-1">Adresse de départ</label>
                  <div class="relative">
                    <input
                      type="text"
                      id="startAddress"
                      v-model="startAddress"
                      @input="searchAddress('start')"
                      @focus="showStartSuggestions = true"
                      @blur="handleBlur('start')"
                      class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      placeholder="Entrez l'adresse de départ"
                    />
                    <Search v-if="isLoadingSuggestions && showStartSuggestions" class="absolute right-3 top-3.5 h-5 w-5 text-gray-400 animate-pulse" />
                    
                    <ul v-if="startSuggestions.length > 0 && showStartSuggestions" class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                      <li
                        v-for="(suggestion, index) in startSuggestions"
                        :key="index"
                        @mousedown.prevent="selectAddress(suggestion, 'start')"
                        class="px-4 py-2 hover:bg-violet-50 cursor-pointer flex items-start"
                      >
                        <MapPin class="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div class="font-medium text-gray-900">{{ suggestion.name || suggestion.display_name.split(',')[0] }}</div>
                          <div class="text-xs text-gray-500">{{ suggestion.display_name }}</div>
                        </div>
                      </li>
                    </ul>
                    <div v-else-if="isLoadingSuggestions && showStartSuggestions" class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-center text-gray-500">
                      Recherche en cours...
                    </div>
                  </div>
                </div>
                <div class="relative overflow-hidden">
                  <label for="endAddress" class="block text-sm font-medium text-gray-700 mb-1">Adresse d'arrivée</label>
                  <div class="relative">
                    <input
                      type="text"
                      id="endAddress"
                      v-model="endAddress"
                      @input="searchAddress('end')"
                      @focus="showEndSuggestions = true"
                      @blur="handleBlur('end')"
                      class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      placeholder="Entrez l'adresse d'arrivée"
                    />
                    <Search v-if="isLoadingSuggestions && showEndSuggestions" class="absolute right-3 top-3.5 h-5 w-5 text-gray-400 animate-pulse" />
                    
                    <ul v-if="endSuggestions.length > 0 && showEndSuggestions" class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                      <li
                        v-for="(suggestion, index) in endSuggestions"
                        :key="index"
                        @mousedown.prevent="selectAddress(suggestion, 'end')"
                        class="px-4 py-2 hover:bg-violet-50 cursor-pointer flex items-start"
                      >
                        <MapPin class="h-4 w-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div class="font-medium text-gray-900">{{ suggestion.name || suggestion.display_name.split(',')[0] }}</div>
                          <div class="text-xs text-gray-500">{{ suggestion.display_name }}</div>
                        </div>
                      </li>
                    </ul>
                    <div v-else-if="isLoadingSuggestions && showEndSuggestions" class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-center text-gray-500">
                      Recherche en cours...
                    </div>
                  </div>
                </div>
              </div>

              <!-- Carte -->
              <div class="w-full h-96 rounded-xl overflow-hidden shadow-md mb-6" ref="mapContainer">
                <!-- La carte sera chargée ici -->
              </div>

              <div class="flex justify-center">
                <button
                  @click="calculateRoute"
                  class="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                >
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
                    <p class="text-2xl font-bold text-purple-700">{{ calculatedPrice }} FCFA</p>
                  </div>
                </div>

                <div class="text-center">
                  <button
                    @click="currentPage = '#contact'"
                    class="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all w-full"
                  >
                    Réserver cette livraison
                  </button>
                </div>
              </div>

              <div v-else class="mb-8 text-center p-8">
                <MapPin class="h-12 w-12 text-violet-300 mx-auto mb-4" />
                <p class="text-gray-500">
                  Sélectionnez les points de départ et d'arrivée pour obtenir une estimation de prix.
                </p>
              </div>

              <!-- Grille tarifaire dynamique -->
              <div class="mt-8">
                <h3 class="font-bold text-gray-800 mb-4">Grille tarifaire</h3>
                <div class="space-y-2 text-sm">
                  <div
                    v-for="(rate, index) in deliveryRates"
                    :key="index"
                    class="flex justify-between p-2 rounded"
                    :class="{ 'bg-violet-50': isCurrentRateCategory(rate) }"
                  >
                    <span class="text-gray-700">{{ rate.range }}</span>
                    <span
                      class="font-medium"
                      :class="{ 'text-violet-700 font-bold': isCurrentRateCategory(rate) }"
                    >
                      {{ rate.price }} FCFA
                    </span>
                  </div>
                </div>
                <div class="mt-4 text-xs text-gray-500">
                  * Tarifs indicatifs pour les colis standards (jusqu'à 5kg)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white" ref="faqCalculatorSection">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 reveal-element">
        <div class="inline-block px-3 py-1 bg-violet-100 rounded-full text-violet-800 text-sm font-medium mb-4">
          FAQ
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
          Questions fréquemment posées
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Trouvez rapidement des réponses à vos questions sur notre calculateur de prix.
        </p>
      </div>
      <div class="max-w-3xl mx-auto space-y-6">
        <div
          v-for="(item, index) in pricingFaqs"
          :key="index"
          class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <h3 class="text-lg font-bold text-gray-800">{{ item.question }}</h3>
          <p class="text-gray-600 mt-2">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import { debounce } from 'lodash-es'
import {
  MapPin, Search
} from 'lucide-vue-next'

// Navigation state
const currentPage = ref('#calculator')
const {setTimeout}=window

const handleBlur = (type) => {
  setTimeout(() => {
    if (type === 'start') {
      showStartSuggestions.value = false
    } else {
      showEndSuggestions.value = false
    }
  }, 200)
}

// Calculateur de prix variables
const mapContainer = ref(null)
const distance = ref(0)
let map = null
let startMarker = null
let endMarker = null
let routeLayer = null
const startAddress = ref('')
const endAddress = ref('')
const calculatedPrice = ref('0')
let mapInitialized = ref(false)

// Autocomplétion
const startSuggestions = ref([])
const endSuggestions = ref([])
const showStartSuggestions = ref(false)
const showEndSuggestions = ref(false)
const isLoadingSuggestions = ref(false)

// Pricing FAQ data
const pricingFaqs = [
  {
    question: 'Comment calculez-vous le prix de la livraison?',
    answer: "Notre tarification est basée sur la distance entre le point de départ et le point d'arrivée. Nous utilisons un système de tranches kilométriques pour déterminer le prix final.",
  },
  {
    question: 'Y a-t-il des frais supplémentaires?',
    answer: "Pour les livraisons standard, le prix affiché est tout compris. Des frais supplémentaires peuvent s'appliquer pour les colis volumineux (>50cm), lourds (>5kg) ou nécessitant une manipulation spéciale.",
  },
  {
    question: 'Proposez-vous des tarifs dégressifs pour les entreprises?',
    answer: 'Oui, nous offrons des tarifs préférentiels pour les entreprises avec des volumes réguliers. Contactez notre service commercial pour obtenir une offre personnalisée.',
  },
  {
    question: 'Le prix est-il garanti?',
    answer: "L'estimation fournie par le calculateur est indicative. Le prix final peut varier en fonction du trafic, des conditions météorologiques ou de la disponibilité des livreurs.",
  },
  {
    question: 'Comment puis-je payer ma livraison?',
    answer: 'Nous acceptons les paiements en espèces à la livraison, par mobile money (MTN, Moov), ou par virement bancaire pour les clients professionnels.',
  },
]

// Grille tarifaire dynamique
const deliveryRates = ref([
  { range: '0-5 km', price: '500', min: 0, max: 5 },
  { range: '6-10 km', price: '800', min: 6, max: 10 },
  { range: '11-15 km', price: '1,200', min: 11, max: 15 },
  { range: '16-20 km', price: '1,500', min: 16, max: 20 },
  { range: '21-25 km', price: '2,000', min: 21, max: 25 },
  { range: '26-30 km', price: '2,500', min: 26, max: 30 },
  { range: '31+ km', price: '3,000', min: 31, max: 999 }
])

// Recherche d'adresse avec debounce
const searchAddress = debounce(async (type) => {
  const query = type === 'start' ? startAddress.value : endAddress.value
  if (!query || query.length < 2) {
    if (type === 'start') startSuggestions.value = []
    else endSuggestions.value = []
    return
  }

  isLoadingSuggestions.value = true
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5&countrycodes=bj&featuretype=settlement,road&accept-language=fr`
    )
    const data = await response.json()
    
    // Filtrer les résultats pour ne garder que les plus pertinents
    const filteredData = data.filter(item => {
      return item.type === 'city' || item.type === 'town' || item.type === 'village' || 
             item.type === 'road' || item.type === 'street' || item.class === 'boundary'
    })
    
    if (type === 'start') {
      startSuggestions.value = filteredData
    } else {
      endSuggestions.value = filteredData
    }
  } catch (error) {
    console.error('Erreur de recherche:', error)
  } finally {
    isLoadingSuggestions.value = false
  }
}, 200)

// Sélection d'une adresse
const selectAddress = (suggestion, type) => {
  const address = suggestion.display_name
  const lat = parseFloat(suggestion.lat)
  const lon = parseFloat(suggestion.lon)

  if (type === 'start') {
    startAddress.value = address
    startSuggestions.value = []
    showStartSuggestions.value = false
    updateMarker(lat, lon, 'start')
  } else {
    endAddress.value = address
    endSuggestions.value = []
    showEndSuggestions.value = false
    updateMarker(lat, lon, 'end')
  }

  // Si les deux adresses sont définies, calculer l'itinéraire
  if (startAddress.value && endAddress.value) {
    calculateRoute()
  }
}

// Mettre à jour les marqueurs
const updateMarker = (lat, lon, type) => {
  if (!map) return

  const L = window.L
  const icon = L.divIcon({
    html: `<div class="bg-${type === 'start' ? 'violet' : 'purple'}-600 p-2 rounded-full border-2 border-white shadow-lg"></div>`,
    className: 'custom-div-icon',
  })

  if (type === 'start') {
    if (startMarker) {
      startMarker.setLatLng([lat, lon])
    } else {
      startMarker = L.marker([lat, lon], { icon }).addTo(map)
      startMarker.bindPopup('Point de départ').openPopup()
    }
  } else {
    if (endMarker) {
      endMarker.setLatLng([lat, lon])
    } else {
      endMarker = L.marker([lat, lon], { icon }).addTo(map)
      endMarker.bindPopup("Point d'arrivée").openPopup()
    }
  }

  // Centrer la carte sur le nouveau marqueur
  map.setView([lat, lon], 13)
}

// Vérifier si la distance actuelle correspond à une catégorie de tarif
const isCurrentRateCategory = (rate) => {
  return distance.value >= rate.min && distance.value <= rate.max
}

// Calculer le prix en fonction de la distance
const calculatePrice = (dist) => {
  for (const rate of deliveryRates.value) {
    if (dist >= rate.min && dist <= rate.max) {
      return rate.price
    }
  }
  return '3,000+' // Pour les distances > 30km
}

// Initialiser la carte Leaflet
const initMap = async () => {
  if (!mapContainer.value || mapInitialized.value) return

  // Charger Leaflet depuis CDN
  await loadLeaflet()

  // Coordonnées de Cotonou
  const cotonouCoords = [6.3676953, 2.4252507]

  // Créer la carte
  map = window.L.map(mapContainer.value).setView(cotonouCoords, 13)

  // Ajouter la couche de tuiles OpenStreetMap
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)

  // Gestionnaire de clic sur la carte
  map.on('click', (e) => {
    const { lat, lng } = e.latlng
    if (!startMarker) {
      createMarker(lat, lng, 'start')
      reverseGeocode(lat, lng, (address) => {
        startAddress.value = address
      })
    } else if (!endMarker) {
      createMarker(lat, lng, 'end')
      reverseGeocode(lat, lng, (address) => {
        endAddress.value = address
      })
      calculateRoute()
    } else {
      clearRoute()
      createMarker(lat, lng, 'start')
      reverseGeocode(lat, lng, (address) => {
        startAddress.value = address
      })
    }
  })

  mapInitialized.value = true
}

// Créer un marqueur
const createMarker = (lat, lng, type) => {
  const L = window.L
  const icon = L.divIcon({
    html: `<div class="bg-${type === 'start' ? 'violet' : 'purple'}-600 p-2 rounded-full border-2 border-white shadow-lg"></div>`,
    className: 'custom-div-icon',
  })

  if (type === 'start') {
    if (startMarker) map.removeLayer(startMarker)
    startMarker = L.marker([lat, lng], { icon }).addTo(map)
    startMarker.bindPopup('Point de départ').openPopup()
  } else {
    if (endMarker) map.removeLayer(endMarker)
    endMarker = L.marker([lat, lng], { icon }).addTo(map)
    endMarker.bindPopup("Point d'arrivée").openPopup()
  }
}

// Charger Leaflet depuis CDN
const loadLeaflet = () => {
  return new Promise((resolve) => {
    if (window.L) {
      resolve()
      return
    }

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = resolve
    document.head.appendChild(script)
  })
}

// Calculer l'itinéraire
const calculateRoute = async () => {
  if (!startMarker || !endMarker) {
    alert("Veuillez sélectionner les points de départ et d'arrivée.")
    return
  }

  const L = window.L
  const startLatLng = startMarker.getLatLng()
  const endLatLng = endMarker.getLatLng()

  // Effacer l'itinéraire précédent
  if (routeLayer) {
    map.removeLayer(routeLayer)
  }

  try {
    // Calculer la distance à vol d'oiseau (simplifié pour l'exemple)
    const dist = startLatLng.distanceTo(endLatLng) / 1000 // en km
    distance.value = dist
    calculatedPrice.value = calculatePrice(dist)

    // Dessiner une ligne droite entre les points
    routeLayer = L.polyline([startLatLng, endLatLng], {
      color: '#8b5cf6',
      weight: 6,
      opacity: 0.7,
      lineJoin: 'round',
    }).addTo(map)

    // Ajuster la vue pour voir tout l'itinéraire
    map.fitBounds(routeLayer.getBounds(), { padding: [50, 50] })

  } catch (error) {
    console.error("Erreur de calcul d'itinéraire:", error)
    alert("Erreur lors du calcul de l'itinéraire. Veuillez réessayer.")
  }
}

// Géocodage inverse
const reverseGeocode = (lat, lng, callback) => {
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18`)
    .then(response => response.json())
    .then(data => {
      if (data.display_name) {
        callback(data.display_name)
      }
    })
    .catch(error => {
      console.error('Erreur de géocodage inverse:', error)
    })
}

// Effacer l'itinéraire
const clearRoute = () => {
  if (routeLayer) {
    map.removeLayer(routeLayer)
    routeLayer = null
  }
  if (startMarker) {
    map.removeLayer(startMarker)
    startMarker = null
  }
  if (endMarker) {
    map.removeLayer(endMarker)
    endMarker = null
  }
  distance.value = 0
  calculatedPrice.value = '0'
  startAddress.value = ''
  endAddress.value = ''
}

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


// Initialisation
onMounted(() => {
  initMap()
  setupScrollAnimations()
})

// Nettoyage
onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style>
/* Styles pour la carte */
.leaflet-container {
  background: #f8fafc;
  z-index: 1;
}

/* Styles pour l'autocomplétion */
[class*="suggestions"] {
  z-index: 1000;
}

/* Styles pour les animations */
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

/* Styles personnalisés pour les marqueurs */
.custom-div-icon {
  background: transparent !important;
  border: none !important;
}
</style>