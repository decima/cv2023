import _ from "lodash";
export async function dataLoad(resource) {


    return new Promise(async (resolve, reject) => {
        let content = {}
        try {
            content = (await import("../../assets/data/" + resource + "Fallback.json" /* @vite-ignore */)).default;

        } catch (e) {
            reject(e);
        }

        const resourceFile = "../../assets/data/" + resource + import.meta.env.VITE_LOCALE + ".json";
        try {
            const localized = (await import(resourceFile  /* @vite-ignore */)).default
            content = _.merge(content,localized);
        } catch (e) {
            console.error("Error loading " + resourceFile + ", using fallback only ("+e+")");
        }


        resolve(content);
    });
}