import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { NamesService } from './names.service';

@Controller('api/v1/names')
export class NamesController {

    constructor(private nameService: NamesService) {

    }

    @Post()
    createdName(@Body() data: { name: string }) {
        return this.nameService.createdName(data.name)
    }

    @Put()
    updatedName(@Body() data: { name: string }) {
        return this.nameService.updatedName(data.name)
    }

    @Delete()
    removeName(@Body() data: { name: string }) {
        return this.nameService.removeName(data.name)
    }

    @Get()
    findAllNames() {
        return this.nameService.findAllNames()
    }
}
