import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/primsa.service';
import { PostCreateInput } from '../../generated/prisma/models/Post';
@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    const findPosts = await this.prisma.post.findMany();
    return findPosts;
  }
  async create(postData: PostCreateInput) {
    const data = await this.prisma.post.create({ data: postData });
    return data;
  }

}
