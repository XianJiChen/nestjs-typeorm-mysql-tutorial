import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { UsersService } from './users/services/users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Jimmy@MySQL',
      database: 'nestjs_mysql_tutorial',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    DataSource
  ],
  controllers: [AppController],
  providers: [UsersService],
})
export class AppModule {}
