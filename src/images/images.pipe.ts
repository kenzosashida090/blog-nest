import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

type FileType = {

  size: number

}
@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: FileType, metadata: ArgumentMetadata) {
    const oneKb = 80000;
    console.log(value, '---------------')
    console.log(metadata.metatype?.name)
    if (!value?.size || value.size > oneKb) {
      return false
    }

    return value
  }
}
