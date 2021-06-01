import { LangAction, LangState, SET_LANGUAGE } from '../types';

export const setLanguage = (lang: string): LangAction => {
    localStorage.setItem('language', lang);
    return {
        type: SET_LANGUAGE,
        payload: lang
    }

}