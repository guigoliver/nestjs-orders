import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './assets/entities/asset.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'sqlite',    
    database: 'nest',
    entities: [Asset],
    synchronize: true,
    logging: true,
  }), AssetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
