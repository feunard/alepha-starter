import { $dictionary } from "alepha/react/i18n";

export class I18n {
	en = $dictionary({
		lazy: () => import("./locales/en.json"),
	});
	fr = $dictionary({
		lazy: () => import("./locales/fr.json"),
	});
}
