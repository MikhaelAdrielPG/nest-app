import {
  Controller,
  Post,
  Body,
  UseGuards,
  Patch,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dtos/create-item.dto';
import { ItemsService } from './items.service';
import { AuthGuard } from '../guards/auth.guard';
import { User } from '../users/user.entity';
import { ItemDto } from './dtos/item.dto';
import { ApproveItemDto } from './dtos/approve-item.dto';
import { AdminGuard } from '../guards/admin.guard';
import { Serialize } from './interceptors/serialize.interceptor';
import { CurrentUser } from 'src/auth/decorators/current-user.decorators';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ItemDto)
  createItem(@Body() body: CreateItemDto, @CurrentUser() user: User) {
    return this.itemService.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approveItem(@Param('id') id: string, @Body() body: ApproveItemDto) {
    return this.itemService.approveItem(parseInt(id), body.approved);
  }
}
