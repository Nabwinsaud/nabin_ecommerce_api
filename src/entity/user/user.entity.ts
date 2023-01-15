import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";
import { Base } from "../base/base.entity";

@Entity()
export class User extends Base {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false, name: "is_active" })
  isActive: boolean;
}
