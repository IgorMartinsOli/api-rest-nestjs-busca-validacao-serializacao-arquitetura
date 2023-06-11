import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { FitroDeExcecaoHttp } from './common/filtros/filtro-de-excesao-http.filter';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FitroDeExcecaoHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ],
})
export class AppModule {}
