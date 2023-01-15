import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";

export abstract class Base extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
