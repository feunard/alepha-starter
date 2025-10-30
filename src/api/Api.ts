import { $module } from "alepha";
import { AlephaServerCompress } from "alepha/server/compress";
import { ApiDoc } from "./ApiDoc.ts";
import { ApiSeed } from "./ApiSeed.ts";
import { TaskController } from "./controllers/TaskController.ts";

export const Api = $module({
  name: "my.api",
  services: [AlephaServerCompress, ApiDoc, ApiSeed, TaskController],
});
