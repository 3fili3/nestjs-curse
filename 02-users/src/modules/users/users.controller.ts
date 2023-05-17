import { Body, Controller, Post, Put, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user-dto';

@Controller('api/v1/Users')
export class UsersController {
    
    constructor(private userService: UsersService) {}

    @Post()
    createdUser(@Body() data: UserDto) {
       return this.userService.created(data)
    }

    @Put()
    updatedUser(@Body() data: UserDto) {
        return this.userService.updated(data)
    }

    @Delete('/:id')
    removedUser(@Param() data: { id: number }) {
        return this.userService.remove(data.id)
    }

    @Get('/:id')
    findOneUserById(@Param() data: { id: string }) {
        return this.userService.findOneById(data.id)
    }

    @Get()
    findAllUsers() {
        return this.userService.findAll()
    }
}
