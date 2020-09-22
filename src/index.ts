import { MikroORM } from "@mikro-orm/core";
import { __prod } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  //
  await orm.getMigrator().up();
  //Insert
  //   const post = orm.em.create(Post, { title: "Title Test" });
  //   await orm.em.persistAndFlush(post);
  //   GET
  const posts = await orm.em.find(Post, {});
  console.log(posts);
};

main();
