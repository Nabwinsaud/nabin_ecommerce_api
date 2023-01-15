// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   OneToMany,
//   ManyToOne,
// } from "typeorm";
// import { Base } from "./base/base.entity";

// @Entity()
// export class UserName extends Base {
//   @Column({ name: "firstName" })
//   name: string;
//   @Column({ name: "last_name" })
//   lastName: string;
//   @Column({ unique: true })
//   email: string;
//   @OneToMany((type) => Post, (post) => post.authorId, {
//     nullable: true,
//     onDelete: "CASCADE",
//   })
//   post: Post[];
// }

// @Entity()
// export class Post extends Base {
//   @Column({ nullable: true })
//   title: string;
//   @Column({ nullable: true })
//   description: string;
//   @Column({ default: false, nullable: true })
//   isPublishd: boolean;
//   @ManyToOne((type) => UserName, (user) => user.post, {
//     nullable: true,
//     onDelete: "CASCADE",
//   })
//   user: UserName;
//   authorId: string;
// }

// /*

// */
