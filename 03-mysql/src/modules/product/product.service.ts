import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from './entity/product.entity'
import { Repository } from 'typeorm'
import { ProductDto } from './dto/product-dto';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {

    }

    created(product: ProductDto) {
        return this.productRepository.save(product)
    }

    updated(product: ProductDto) {
        return this.productRepository.update(product.id, product)
    }

    removed(id: number) {
        return this.productRepository.update(id, { deleted: true })
    }

    async findOneById(id: number) {
        const product = await this.productRepository.findOne({ where: { id, deleted: false } })
        if(product === null) return { error: "Product not found", status: 404 }
        return product
    }

    findAll() {
        return this.productRepository.find({
            where: { deleted: false }
        })
    }
}
