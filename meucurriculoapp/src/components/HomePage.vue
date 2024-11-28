<template>

    
    <div class="min-h-screen flex flex-col">
      <!-- Navigation Menu -->
      <nav class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <!-- Logo/Brand -->
            <div class="flex-shrink-0">
              <h1 class="text-xl font-bold">MeuCurrículo</h1>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden">
              <button 
                @click="isMenuOpen = !isMenuOpen"
                class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
              >
                <MenuIcon v-if="!isMenuOpen" class="h-6 w-6" />
                <XIcon v-else class="h-6 w-6" />
              </button>
            </div>
            
            <!-- Desktop Navigation -->
            <div class="hidden md:flex md:items-center md:space-x-4">
              <router-link 
                v-for="item in menuItems" 
                :key="item.path"
                :to="item.path"
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
          
          <!-- Mobile Navigation -->
          <div 
            v-show="isMenuOpen" 
            class="md:hidden"
          >
            <div class="px-2 pt-2 pb-3 space-y-1">
              <router-link 
                v-for="item in menuItems" 
                :key="item.path"
                :to="item.path"
                class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                @click="isMenuOpen = false"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <main class="flex-grow">
        <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Seu Currículo Online
              </h2>
              <p class="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Crie e gerencie seus currículos profissionais de forma simples e eficiente. 
                Destaque suas habilidades e experiências para encontrar as melhores oportunidades.
              </p>
              <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div class="rounded-md shadow">
                  <router-link
                    to="/cadastrar"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Começar Agora
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Features Section -->
        <div class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div class="text-center">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white mx-auto">
                  <FileTextIcon class="h-6 w-6" />
                </div>
                <h3 class="mt-6 text-lg font-medium">Crie seu Currículo</h3>
                <p class="mt-2 text-gray-600">
                  Monte seu currículo profissional de forma rápida e intuitiva
                </p>
              </div>
  
              <div class="text-center">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white mx-auto">
                  <SaveIcon class="h-6 w-6" />
                </div>
                <h3 class="mt-6 text-lg font-medium">Salve e Edite</h3>
                <p class="mt-2 text-gray-600">
                  Mantenha seus dados sempre atualizados
                </p>
              </div>
  
              <div class="text-center">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white mx-auto">
                  <ShareIcon class="h-6 w-6" />
                </div>
                <h3 class="mt-6 text-lg font-medium">Compartilhe</h3>
                <p class="mt-2 text-gray-600">
                  Compartilhe seu currículo com empresas e recrutadores
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-4">Contato</h3>
              <div class="space-y-2">
                <p class="flex items-center">
                  <MailIcon class="h-5 w-5 mr-2" />
                  contato@meucurriculo.com
                </p>
                <p class="flex items-center">
                  <PhoneIcon class="h-5 w-5 mr-2" />
                  (11) 99999-9999
                </p>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="hover:text-gray-300">Sobre Nós</a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-300">Termos de Uso</a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-300">Política de Privacidade</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div class="flex space-x-4">
                <a href="#" class="hover:text-gray-300">
                  <LinkedinIcon class="h-6 w-6" />
                </a>
                <a href="#" class="hover:text-gray-300">
                  <InstagramIcon class="h-6 w-6" />
                </a>
                <a href="#" class="hover:text-gray-300">
                  <FacebookIcon class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div class="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 MeuCurrículo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { 
    MenuIcon, 
    XIcon, 
    FileTextIcon, 
    SaveIcon, 
    ShareIcon,
    MailIcon,
    PhoneIcon,
    LinkedinIcon,
    InstagramIcon,
    FacebookIcon
  } from 'lucide-vue-next'
  
  const isMenuOpen = ref(false)
  
  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Cadastrar Currículo', path: '/cadastrar' },
    { name: 'Ver Currículos', path: '/curriculos' }
  ]
  </script>