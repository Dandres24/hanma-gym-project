<script setup>
// ¡Aquí está la magia! Le pedimos las fotos al backend de NestJS
const { data: galeria, pending } = await useFetch('https://hanma-gym-project-production.up.railway.app/api/galeria')
</script>

<template>
  <section class="w-full bg-[#121212] py-24 border-t border-white/5">
    <div class="max-w-6xl mx-auto px-5 md:px-10">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/10 pb-6">
        <div>
          <h2 class="text-4xl md:text-5xl font-display tracking-widest mb-2">EL CAMPO DE <span class="text-primary">BATALLA</span></h2>
          <p class="text-gray-400 text-lg">Instalaciones de primer nivel forjadas para el máximo rendimiento.</p>
        </div>
        <button class="border-b-2 border-primary text-white font-display text-xl pb-1 hover:text-primary transition-colors shrink-0">
          VER TODAS LAS ZONAS ➔
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
        
        <div 
          v-for="img in galeria" 
          :key="img.id" 
          :class="['relative group overflow-hidden bg-[#1A1A1A] rounded-lg cursor-pointer', img.clases]"
        >
          <div 
            class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            :style="{ backgroundImage: 'url(' + img.imagen + ')' }"
          ></div>

          <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>
          
          <div class="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          <h3 class="absolute bottom-6 left-6 z-20 text-2xl font-display tracking-wide transform translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
            {{ img.titulo }}
          </h3>
        </div>

      </div>

    </div>
  </section>
</template>