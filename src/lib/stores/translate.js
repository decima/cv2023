import {readable, writable} from "svelte/store";
import _ from "lodash";


async function initTranslator() {
    let translations = {}


    async function loadTranslations() {
        let content = {}
        content = await import( "../../assets/translations/fallback.json" /* @vite-ignore */);
        try {
            const resourceFile = "../../assets/translations/" + import.meta.env.VITE_LOCALE + ".json";
            const extra = await import(resourceFile /* @vite-ignore */)
            content = _.merge(content, extra);
        } catch (e) {
            console.error(e)
            // do nothing, use fallback
        }
        translations = content
    }

    await loadTranslations()

    return readable((key, values = []) => {
        let paragraph = _.get(translations, key)
        if (!paragraph) {
            return key;
        }
        if (values.length === 0) {
            return paragraph;
        }
        const regex = /\{[^\}]+\}/g;
        const founds = paragraph.match(regex);
        for (let found of founds) {
            const key = found.replace("{", "").replace("}", "");
            const value = values[key];
            paragraph = paragraph.replace(found, value);
        }

        return paragraph
    });
}

export const t = await initTranslator();