import En from "../Translations/En"
import Fa from "../Translations/Fa";


export const translate = (key: string, language: string): string => {
    let langData: { [key: string]: any } = {};

    if (language === "EN") {
        langData = En;
    } else if (language === "Fa") {
        langData = Fa;
    }
    return langData[key];
}