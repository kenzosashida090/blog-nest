import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileSizeValidationPipe } from './images.pipe';
import { CloudinaryService } from 'nestjs-cloudinary';
import { memoryStorage } from 'multer';

@Controller('images')
export class ImagesController {
  constructor(private readonly cloudinaryService: CloudinaryService) { }

  @Post('file')
  @UseInterceptors(FileInterceptor('file', {
    storage: memoryStorage()
  }))
  uploadFileAndValidate(@UploadedFile(
    new FileSizeValidationPipe()
  ) file: Express.Multer.File,) {
    console.log(file, '--------')
    return this.cloudinaryService.uploadFile(file)
  }
}
