import { Asset } from "src/assets/entities/asset.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum OrderStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    FAILED = 'FAILED'
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => Asset)
    @JoinColumn({name: 'asset_id'})
    asset_id: string

    @Column({type: 'decimal', precision: 10, scale: 2})
    price: number

    @Column()
    status: OrderStatus = OrderStatus.PENDING
    
    static create(asset_id: string) {
        const order = new Order()
        order.asset_id = asset_id
        return order
    }
}
