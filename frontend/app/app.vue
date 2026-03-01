<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/HeroSection.vue'
import SectionDisciplinas from './components/SectionDisciplinas.vue'
import SectionPlanes from './components/SectionPlanes.vue'
import SectionGaleria from './components/SectionGaleria.vue'

// Aquí podríamos cargar datos dinámicamente en el futuro, pero por ahora usaremos datos estáticos para las secciones.
</script>

<template>
  <div class="min-h-screen bg-[#121212] text-white flex flex-col">
    
    <AppHeader />
   <HeroSection /> 
   <SectionDisciplinas />
    <SectionPlanes />
    <SectionGaleria />
    <AppFooter />
    

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body { 
    background-color: #121212; 
    color: #F5F5F5; 
    font-family: 'Inter', sans-serif; 
  }
}
</style>