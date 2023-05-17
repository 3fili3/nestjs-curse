import {
  IsOptional, IsNumber, IsPositive,
  IsString, IsNotEmpty, IsBoolean,
} from 'class-validator';

export class ProductDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsOptional()
  @IsBoolean()
  deleted: boolean;
}
