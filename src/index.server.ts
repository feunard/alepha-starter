import { Alepha, run } from "alepha";
import { AlephaReactHead } from "alepha/react/head";
import { AppRouter } from "./AppRouter.js";
import { TodoApi } from "./api/TodoApi.js";
import { I18n } from "./I18n.js";

const alepha = Alepha.create({
	env: {},
});

// alepha is bundled with modules
alepha.with(AlephaReactHead);

// you can add also you own services
alepha.with(AppRouter);
alepha.with(I18n);

// server-side specific imports
alepha.with(TodoApi);

run(alepha);
