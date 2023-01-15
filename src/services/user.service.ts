import { AppDataSource } from "../config/database.config";
import { UserName } from "../entity/User";

class UserService {
  //   public async getUser() {
  //     const user = new UserName();
  //     user.name = "codng";
  //     user.email = "codinghustles@.com";
  //     user.lastName = "saud";
  //     // await user.softRemove();
  //     const userRepo = AppDataSource.getRepository(UserName);
  //     await userRepo.save(user);
  //     // await userRepo.delete(user.id);
  //     await userRepo
  //       .createQueryBuilder()
  //       .delete()
  //       .from(UserName)
  //       .where("email = :email", { email: user.email })
  //       .execute();
  //   }

  constructor(private userRepository) {}
  async signup() {}
}

export default new UserService();
