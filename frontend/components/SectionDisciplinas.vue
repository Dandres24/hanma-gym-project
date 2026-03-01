<script setup>
const { data: disciplinas } = await useFetch('http://localhost:4000/api/disciplinas')
</script>

<template>
  <div>
    <div class="w-full bg-[#0E0E0E] border-y border-white/10 py-6">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center px-10 gap-6 font-display text-xl tracking-widest text-gray-300">
        <div class="flex items-center gap-3"><span class="w-3 h-3 bg-primary"></span> 0% EXCUSAS</div>
        <div class="flex items-center gap-3"><span class="w-3 h-3 bg-primary"></span> 100% DISCIPLINA</div>
        <div class="flex items-center gap-3"><span class="w-3 h-3 bg-primary"></span> PODER ILIMITADO</div>
      </div>
    </div>

    <section class="max-w-6xl mx-auto py-24 px-10">
      <h2 class="text-4xl md:text-5xl font-display text-center mb-16 tracking-widest">DISCIPLINAS</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="disciplina in disciplinas" :key="disciplina.id" class="bg-[#1A1A1A] border border-white/10 p-8 rounded-xl flex flex-col hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <span class="text-primary text-xs font-bold tracking-widest mb-4 uppercase">{{ disciplina.etiqueta }}</span>
          <h3 class="text-3xl font-display mb-4 tracking-wide">{{ disciplina.titulo }}</h3>
          <p class="text-gray-400 text-sm mb-8 leading-relaxed flex-1">{{ disciplina.descripcion }}</p>
          
          <ul class="space-y-3 mb-8">
            <li v-for="(item, index) in disciplina.items" :key="index" class="text-sm text-gray-300 flex items-start gap-3">
              <span class="text-primary mt-0.5">✔</span> {{ item }}
            </li>
          </ul>

          <button class="w-full bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-white font-display py-3 text-lg tracking-widest transition-colors">
            VER MÁS
          </button>
        </div>
      </div>
    </section>
  </div>
</template>