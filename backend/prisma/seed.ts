// backend/prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// Prisma 6 es inteligente y lee el schema.prisma automáticamente
const prisma = new PrismaClient();

async function main() {
 console.log('Limpiando la arena de combate (Base de datos)...');

  // Borramos todo en este orden para evitar problemas de relación
  await prisma.beneficio.deleteMany();
  await prisma.plan.deleteMany();
  await prisma.disciplina.deleteMany();
  await prisma.galeria.deleteMany();

  console.log('Sembrando los nuevos datos...');
  // 1. Insertar Disciplinas (Ahora usando relaciones)
  await prisma.disciplina.create({
    data: {
      etiqueta: 'ENTRENAMIENTO', titulo: 'GRAPPLER TRAINING', descripcion: 'Domina la lucha de sumisión y el control total para someter a tu oponente.',
      items: {
        create: [
          { texto: 'Fuerza de agarre extrema' },
          { texto: 'Técnicas de estrangulamiento' },
          { texto: 'Resistencia cardiovascular' }
        ]
      }
    }
  });
  
  await prisma.disciplina.create({
    data: {
      etiqueta: 'COMBATE', titulo: 'LA CÚPULA', descripcion: 'Deja tus excusas afuera. Arena de combate real para forjar carácter.',
      items: {
        create: [
          { texto: 'Sparring a contacto pleno' },
          { texto: 'Técnicas de striking' },
          { texto: 'Acondicionamiento físico' }
        ]
      }
    }
  });
  
  await prisma.disciplina.create({
    data: {
      etiqueta: 'ENTRENAMIENTO', titulo: 'RESISTENCIA DEMONÍACA', descripcion: 'Entrenamiento enfocado en llevar tus músculos y pulmones más allá del límite.',
      items: {
        create: [
          { texto: 'Levantamiento de potencia' },
          { texto: 'Fuerza bruta estática' },
          { texto: 'Tolerancia al ácido láctico' }
        ]
      }
    }
  });

  // 2. Insertar Planes (Se quedan igual)
  await prisma.plan.create({
    data: {
      nombre: 'PLAN RETADOR', precio: '$69.000', destacado: false,
      beneficios: {
        create: [
          { texto: 'Acceso sala de pesas libre', activo: true },
          { texto: 'Zona cardio convencional', activo: true },
          { texto: 'Evaluación física mensual', activo: false }
        ]
      }
    }
  });

  await prisma.plan.create({
    data: {
      nombre: 'PLAN CAMPEÓN', precio: '$89.000', destacado: true,
      beneficios: {
        create: [
          { texto: 'Acceso sala de pesas libre', activo: true },
          { texto: 'Clases de boxeo / Muay Thai', activo: true },
          { texto: 'Evaluación física quincenal', activo: true }
        ]
      }
    }
  });

  // 3. Insertar Galería (Se queda igual)
  await prisma.galeria.create({
    data: { titulo: 'ZONA DE PESAS LIBRES', imagen: '/pesas.jpg', clases: 'md:col-span-2 md:row-span-2 min-h-[400px]' }
  });
  
  await prisma.galeria.create({
    data: { titulo: 'EL RING / LA CÚPULA', imagen: '/ring.jpg', clases: 'md:col-span-2 min-h-[250px]' }
  });

  console.log('✅ ¡Base de datos sembrada con éxito!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });