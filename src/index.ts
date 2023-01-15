import { AppDataSource } from "./config/database.config";
import app from "./config/app";
import EnvConfiguration from "./config/env.config";
AppDataSource.initialize()
  .then(async () => {
    // console.log("database connection is", EnvConfiguration.PORT);
    app.listen(EnvConfiguration.PORT, () => {
      console.log(`server running at http://localhost${EnvConfiguration.PORT}`);
    });
  })
  .catch((error) => console.log(error));
