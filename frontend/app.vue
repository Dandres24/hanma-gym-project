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
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }
}
</style>