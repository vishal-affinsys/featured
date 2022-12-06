import { promises } from "fs";
const { rm } = promises;
import { applyPlugins } from "./template/plugins";

applyPlugins().then(async () => {
  await rm("./plugins", { recursive: true });
});
