import { $inject, Alepha } from "alepha";
import { $swagger } from "alepha/server/swagger";

export class ApiDoc {
  alepha = $inject(Alepha);

  docs = $swagger({
    disabled: this.alepha.isProduction(),
    info: {
      title: "My API",
      description: "API documentation for My Application",
      version: "1.0.0",
    },
  });
}
