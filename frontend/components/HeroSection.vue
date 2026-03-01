<template>
   <main class="relative flex-1 flex flex-col items-center justify-center p-10 border-t border-white/10 min-h-[80vh]">
      
      <div class="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
      
      <div class="absolute inset-0 bg-gradient-to-b from-[#121212]/80 to-[#121212] z-0"></div>

      <div class="relative z-10 flex flex-col items-center">
        <h1 class="text-6xl md:text-8xl font-display text-white tracking-widest text-center mt-12">
          ENTRENA SIN <span class="text-primary">LÍMITES</span>
        </h1>
        <p class="text-gray-400 mt-4 text-xl md:text-2xl">
          Transforma tu cuerpo y mente
        </p>
        
        <div class="mt-10 flex flex-col sm:flex-row gap-6">
          <button class="bg-primary text-white font-display px-10 py-4 text-xl tracking-wider hover:bg-red-700 transition shadow-lg shadow-red-900/50">
            ÚNETE
          </button>
          <button class="border border-white text-white font-display px-10 py-4 text-xl tracking-wider hover:bg-white hover:text-black transition">
            VER DISCIPLINAS
          </button>
        </div>
      </div>
      
    </main>

</template>