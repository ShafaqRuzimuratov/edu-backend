import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number; // Non-null assertion operator

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    age!: number;

    @Column()
    password!: string;
}
