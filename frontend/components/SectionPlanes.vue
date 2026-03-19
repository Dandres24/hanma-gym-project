<script setup>
// ¡Adiós a los datos estáticos! 
// Nuxt irá al puerto 4000, tocará la puerta de NestJS y traerá los planes.
const { data: planes } = await useFetch('https://hanma-gym-project-production.up.railway.app/api/planes')
</script>


<template>
  <section id="planes" class="py-20 bg-[#0a0a0a]">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bebas text-center text-white mb-16 tracking-wider">
        ELIGE TU <span class="text-red-600">CAMINO</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 items-center">
        
        <div 
          v-for="plan in planes" 
          :key="plan.id"
          :class="[
            'relative p-8 rounded-xl border transition-all duration-300 flex flex-col',
            plan.destacado 
              ? 'border-red-600 bg-zinc-900 scale-105 shadow-[0_0_30px_rgba(220,38,38,0.2)] z-10' 
              : 'border-zinc-800 bg-zinc-950 hover:border-zinc-600 opacity-90 hover:opacity-100'
          ]"
        >
          <div 
            v-if="plan.destacado" 
            class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-lg whitespace-nowrap"
          >
            🔥 El más ventajoso
          </div>

          <h3 class="text-3xl font-bebas text-white mb-2">{{ plan.nombre }}</h3>
          <p class="text-zinc-400 mb-6 text-sm h-12">{{ plan.descripcion }}</p>
          
          <div class="mb-8">
            <span class="text-4xl font-bold text-white">{{ plan.precio }}</span>
            <span class="text-zinc-500 text-sm">/mes</span>
          </div>

          <ul class="space-y-4 mb-8 text-sm flex-grow">
            <li 
              v-for="beneficio in plan.beneficios" 
              :key="beneficio.id"
              :class="['flex items-center', beneficio.activo ? 'text-zinc-200' : 'text-zinc-600 line-through']"
            >
              <span v-if="beneficio.activo" class="text-red-600 mr-3">✔️</span>
              <span v-else class="text-zinc-700 mr-3">✖️</span>
              {{ beneficio.texto }}
            </li>
          </ul>

          <button 
            :class="[
              'w-full py-4 rounded font-bold tracking-widest transition-colors uppercase text-sm',
              plan.destacado
                ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
                : 'bg-zinc-800 text-white hover:bg-zinc-700'
            ]"
          >
            Inscríbete Ahora
          </button>
        </div>

      </div>
    </div>
  </section>
</template>