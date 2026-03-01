// backend/src/app.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  // Inyectamos nuestro puente de Prisma
  constructor(private prisma: PrismaService) {}

  async getPlanes() {
    // findMany trae todos los planes, y con "include" traemos sus beneficios relacionados
    return this.prisma.plan.findMany({
      include: { beneficios: true }
    });
  }

  async getDisciplinas() {
    const disciplinas = await this.prisma.disciplina.findMany({
      include: { items: true }
    });
    
    // Adaptamos los items para que el Frontend reciba los textos justos como antes
    return disciplinas.map(d => ({
      ...d,
      items: d.items.map(item => item.texto)
    }));
  }

  async getGaleria() {
    return this.prisma.galeria.findMany();
  }


}