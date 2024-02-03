import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './assets/entities/asset.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'sqlite',    
    database: 'nest',
    entities: [Asset],
    synchronize: true,
    logging: true,
  }), AssetsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
