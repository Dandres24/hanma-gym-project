<template>
  <header class="w-full bg-[#121212] border-b border-white/10 py-4 px-5 md:px-10 flex justify-between items-center z-50">
    
    <div class="text-3xl font-display tracking-widest text-white cursor-pointer flex items-center gap-2">
      <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center border border-white"></div>
      <div>HANMA <span class="text-primary">GYM</span></div>
    </div>

    <nav class="hidden md:block">
      <ul class="flex gap-8 text-sm font-medium text-gray-300">
        <li class="hover:text-primary cursor-pointer transition">DISCIPLINAS</li>
        <li class="hover:text-primary cursor-pointer transition">PLANES</li>
        <li class="hover:text-primary cursor-pointer transition">LA CÚPULA</li>
      </ul>
    </nav>

    <div class="flex items-center gap-4">
      <button class="hidden md:block bg-primary text-white px-6 py-2 font-display tracking-wider hover:bg-red-700 transition">
        INICIAR SESIÓN
      </button>

      <button class="md:hidden text-white hover:text-primary transition">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

  </header>
</template>

<script setup>
// Lógica del header
</script>