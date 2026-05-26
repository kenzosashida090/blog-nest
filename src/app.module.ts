import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma/primsa.service';
import { ImagesController } from './images/images.controller';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryModule } from 'nestjs-cloudinary';

@Module({
  imports: [
    MulterModule.register({
      dest: './images'
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
    CloudinaryModule.forRootAsync({
      imports: [],
      useFactory: (configService: ConfigService) => ({
        isGlobal: true,
        cloud_name: configService.get('CLOUDINARY_NAME'),
        api_key: configService.get('CLOUDINARY_API_KEY'),
        api_secret: configService.get('CLOUDINARY_API_SECRET')
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController, PostController, ImagesController],
  providers: [AppService, PostService, PrismaService]
})
export class AppModule { }
