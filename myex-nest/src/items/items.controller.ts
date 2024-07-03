import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateItemDto } from './dtos/create-item.dto';
import { ItemsService } from './items.service';
import { AuthGuard } from '../guards/auth.guard';
import { User } from '../users/user.entity';
import { ItemDto } from './dtos/item.dto';
import { Serialize } from './interceptors/serialize.interceptor';
import { CurrentUser } from '../auth/decorators/current-user.decorators';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ItemDto)
  createItem(@Body() body: CreateItemDto, @CurrentUser() user: User) {
    return this.itemService.create(body, user);
  }
}
