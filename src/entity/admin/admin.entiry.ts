import { Role } from "./../../constants/enum";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RoleLevel } from "../../constants/enum";
import { Base } from "../base/base.entity";

export class Admin extends Base {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: "password" })
  password: string;

  @Column({ name: "role", type: "enum" })
  role: Role;

  @Column({ name: "role_level", type: "enum" })
  roleLevel: RoleLevel;
  //   @OneToMany(()=>Token,(token)=>token.admin,{nullable:true,onDelete:"CASCADE"})
}
