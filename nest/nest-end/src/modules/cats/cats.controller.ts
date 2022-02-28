import { Controller, Get, Post, Body, HttpCode, Header, Redirect, Query, Param, Put, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  // @Get()  路由名字，可以重定向

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params);
    return `This action returns a #${JSON.stringify(params)} cat`;
  }
  
  // @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }

  // // 路由通配符
  // @Get('ab*cd')
  // @HttpCode(200)
  // @Header('Cache-Control', 'none')
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
