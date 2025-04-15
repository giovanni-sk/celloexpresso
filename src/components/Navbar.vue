<template>
  <!-- Navigation -->
  <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img
            src="../assets/images/logoviolet.png"
            alt="Cello Express Logo"
            class="h-16 w-auto object-contain"
          />
          
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <a
            v-for="(item, index) in navItems"
            :key="index"
            :href="item.path"
            class="relative font-medium text-gray-700 hover:text-violet-700 transition-colors"
            :class="{ 'text-violet-700 font-bold': isActive(item.path) }"
          >
            {{ item.name }}
            <span
              v-if="isActive(item.path)"
              class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-purple-500"
            ></span>
          </a>
        </div>

        <!-- Contact Button (Desktop) -->
        <button
          class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-500 text-white px-5 py-2 rounded-full hover:shadow-lg transition-all"
          @click="currentPage = '/contact'"
        >
          <Phone class="h-4 w-4" />
          <span>Nous contacter</span>
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu v-if="!mobileMenuOpen" class="h-6 w-6 text-gray-700" />
          <X v-else class="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg"
    >
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col space-y-4">
          <!-- Mobile Navigation Links -->
          <a
            v-for="(item, index) in navItems"
            :key="index"
            :href="item.path"
            class="py-2 px-4 rounded-md hover:bg-violet-50 transition-colors"
            :class="{ 'bg-violet-50 text-violet-700 font-medium': isActive(item.path) }"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </a>

          <!-- Contact Button (Mobile) -->
          <button
            class="flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-500 text-white px-5 py-2 rounded-full hover:shadow-lg transition-all"
            @click="currentPage = '/contact'; mobileMenuOpen = false"
          >
            <Phone class="h-4 w-4" />
            <span>Nous contacter</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Truck, Menu, X, Phone } from 'lucide-vue-next';

// Navigation state
const mobileMenuOpen = ref(false);
const currentPage = ref('/'); // Initial page

// Navigation items
const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À Propos', path: '/apropos' },
  { name: 'Calculateur', path: '/calculateur' },
  { name: 'Contact', path: '/contact' },
];

// Helper function to check if the current page matches the link
const isActive = (path) => {
  return currentPage.value === path;
};
</script>