import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
    IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength, Min, } from "class-validator";

export class CreateProductoDto {
    @ApiProperty({example:'Galletas'})
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nombre: string;

    @ApiPropertyOptional({example:'bañadas de chocolate'})
    @IsString()
    @IsOptional()
    
    descripcion?: string;
    @ApiProperty({example: 3.50})
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    precio: number;

    @ApiProperty({example: '25',default: 0})
    @IsInt()
    @Min(0)
    @IsOptional()
    stock?: number;

     @ApiPropertyOptional({example: true, default: true})
     @IsBoolean()
     @IsOptional()
     activo?: boolean;
    
}
