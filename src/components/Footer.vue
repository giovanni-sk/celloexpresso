<template>
  <footer
    class="bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 text-white py-16 relative overflow-hidden"
  >
    <!-- Background elements -->
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"
      ref="parallaxBg11"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2"
      ref="parallaxBg12"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div class="flex items-center space-x-2 mb-6">
            <img
            src="../assets/images/logowhite.png"
            alt="Cello Express Logo"
            class="h-16 w-auto object-contain"
          />
          </div>
          <p class="text-purple-200 mb-6">
            Votre partenaire de confiance pour toutes vos livraisons rapides et sécurisées. Nous
            simplifions la logistique pour que vous puissiez vous concentrer sur votre activité.
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
              <a
                href="#accueil"
                @click="currentPage = '#accueil'"
                class="text-purple-200 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight
                  class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                />
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#apropos"
                @click="currentPage = '#apropos'"
                class="text-purple-200 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight
                  class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                />
                À Propos
              </a>
            </li>
            <li>
              <a
                href="#calculateur"
                @click="currentPage = '#calculateur'"
                class="text-purple-200 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight
                  class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                />
                Calculateur
              </a>
            </li>
            <li>
              <a
                href="#contact"
                @click="currentPage = '#contact'"
                class="text-purple-200 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight
                  class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                />
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-6">Nos Services</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="text-purple-200 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight
                  class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                />
                Livraison Express
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-purple-200 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight
                  class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                />
                Livraison Internationale
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-purple-200 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight
                  class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                />
                Suivi en Temps Réel
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-purple-200 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight
                  class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                />
                Solutions Entreprises
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-purple-200 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight
                  class="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                />
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
            <div class="flex relative overflow-hidden rounded-lg bg-white">
              <input
                type="email"
                v-model="newsletterEmail"
                placeholder="Votre email"
                class="px-4 py-3 rounded-l-lg w-full focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                class="bg-gradient-to-r from-violet-600 to-purple-500 px-4 py-3 rounded-r-lg transition-colors"
              >
                <Send class="h-5 w-5" />
              </button>
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transform scale-x-0 focus-within:scale-x-100 transition-transform origin-left duration-500"
              ></div>
            </div>
            <p class="text-xs text-purple-300">
              En vous inscrivant, vous acceptez notre politique de confidentialité et nos conditions
              d'utilisation.
            </p>
          </form>
        </div>
      </div>

      <div class="border-t border-white/10 mt-12 pt-8 text-center text-purple-300">
        <p>&copy; {{ new Date().getFullYear() }} Cello Express. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
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
// Newsletter email
const newsletterEmail = ref('')

const subscribeNewsletter = () => {
  alert('Merci de vous être inscrit à notre newsletter!')
  newsletterEmail.value = ''
}
</script>
