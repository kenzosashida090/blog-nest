import { Body, Controller, Get, Post, } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as blogPostType, } from '../../generated/prisma/client';
import { PostCreateInput } from '../../generated/prisma/models';



@Controller('posts')
export class PostController {
  constructor(private readonly postsService: PostService) { }

  @Get()
  async findAll(): Promise<blogPostType[]> {
    console.log("g ooola")
    return this.postsService.findAll();
  }
  @Post()
  async create(@Body() postDto: PostCreateInput): Promise<any> {
    console.log(postDto, "-----------")
    return this.postsService.create(postDto)
  }
}
