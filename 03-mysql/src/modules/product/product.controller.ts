import { Controller, Post, Delete, Put, Get, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product-dto';

@Controller('api/v1/Products')
export class ProductController {

    constructor(private ProductService: ProductService) {
        
    }

    @Post()
    createdProduct(@Body() data: ProductDto) {
        return this.ProductService.created(data)
    }

    @Put() 
    updatedProduct(@Body() data:ProductDto) {
        return this.ProductService.updated(data)
    }

    @Delete('/:id')
    removedProduct(@Param() data: { id: number }) {
        return this.ProductService.removed(data.id)
    }

    @Get('/:id')
    async findOneByIdProduct(@Param() data: { id: number }) {
        return await this.ProductService.findOneById(data.id)
    }

    @Get()
    findAllProducts(){
        return this.ProductService.findAll()
    }

}
