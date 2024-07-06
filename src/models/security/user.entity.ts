import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  constructor(newUser : {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isActive?: boolean;
  }) {
    this.firstName = newUser?.firstName;
    this.lastName = newUser?.lastName;
    this.email = newUser?.email;
    this.password = newUser?.password;
    this.isActive = newUser?.isActive || true;
  };
}
