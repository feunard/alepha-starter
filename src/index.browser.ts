import { Alepha, run } from "alepha";
import { AlephaReactHead } from "alepha/react/head";
import { AppRouter } from "./AppRouter.js";
import { I18n } from "./I18n.js";

const alepha = Alepha.create({
	env: {},
});

// alepha is bundled with modules
alepha.with(AlephaReactHead);

// you can add also you own services
alepha.with(I18n);
alepha.with(AppRouter);

run(alepha);
