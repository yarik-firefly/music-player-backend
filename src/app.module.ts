import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicModule } from './music/music.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MusicModule,
    MongooseModule.forRoot(`mongodb+srv://Yaroslav:Yarik2002+++@cluster0.0khxa5u.mongodb.net/?retryWrites=true&w=majority`),
    ConfigModule.forRoot(),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
