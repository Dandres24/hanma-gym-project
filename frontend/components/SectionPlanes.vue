<script setup>
// ¡Adiós a los datos estáticos! 
// Nuxt irá al puerto 4000, tocará la puerta de NestJS y traerá los planes.
const { data: planes } = await useFetch('http://localhost:4000/api/planes')
</script>


<template>
  <section class="w-full bg-[#0E0E0E] py-24 border-t border-white/5">
    <div class="max-w-6xl mx-auto px-5 md:px-10">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display tracking-widest mb-4">PLANES</h2>
        <p class="text-gray-400 text-lg">Elige tu nivel y entrena como si fueras a romper tus límites.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="plan in planes" :key="plan.id" :class="['p-8 rounded-xl flex flex-col relative transition-all duration-300', plan.destacado ? 'bg-[#1A1A1A] border-2 border-primary transform md:-translate-y-4 shadow-2xl shadow-primary/20' : 'bg-[#1A1A1A] border border-white/10 hover:border-white/30']">
          
          <div v-if="plan.destacado" class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold tracking-widest py-1 px-4 uppercase rounded-sm">
            RECOMENDADO
          </div>

          <h3 class="text-3xl font-display mb-2 tracking-wide text-center">{{ plan.nombre }}</h3>
          <div class="flex items-baseline justify-center mb-8 gap-1 border-b border-white/10 pb-8">
            <span class="text-4xl font-bold">{{ plan.precio }}</span>
            <span class="text-gray-400 text-sm">/ MES</span>
          </div>
          
          <ul class="space-y-4 mb-10 flex-1">
            <li v-for="(beneficio, index) in plan.beneficios" :key="index" :class="['text-sm flex items-start gap-3', beneficio.activo ? 'text-gray-300' : 'text-gray-600']">
              <svg v-if="beneficio.activo" class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <svg v-else class="w-5 h-5 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              {{ beneficio.texto }}
            </li>
          </ul>

          <button :class="['w-full font-display py-4 text-xl tracking-widest transition-colors', plan.destacado ? 'bg-primary text-white hover:bg-red-700' : 'bg-transparent border border-white text-white hover:bg-white hover:text-black']">
            ELEGIR
          </button>
        </div>
      </div>
    </div>
  </section>
</template>