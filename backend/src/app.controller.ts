import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('planes')
  obtenerPlanes() {
    return this.appService.getPlanes();
  }

  // NUEVA RUTA PARA DISCIPLINAS
  @Get('disciplinas')
  obtenerDisciplinas() {
    return this.appService.getDisciplinas();
  }

  // NUEVA RUTA PARA GALERÍA
  @Get('galeria')
  obtenerGaleria() {
    return this.appService.getGaleria();
  }
}