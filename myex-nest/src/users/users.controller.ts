import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
constructor(private usersService: UsersService){}

  @Post()
  createUser(@Body() body: CreateUserDto) {
     this.usersService.create(body.name, body.email, body.password);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOneBy(parseInt(id));
  }


  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }
}
