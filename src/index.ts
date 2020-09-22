import { MikroORM } from "@mikro-orm/core";
import { __prod } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "training_arc",
    user: "root",
    password: "123456789",
    debug: !__prod,
    type: "mysql",
  });
};

main();
