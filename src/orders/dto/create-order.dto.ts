import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator"

export class CreateOrderDto {

    @IsNotEmpty()
    @IsString()
    asset_id: string

    @IsPositive()
    @IsInt()
    @IsNotEmpty()
    price: number
}
