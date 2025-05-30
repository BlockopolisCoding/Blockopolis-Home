// if you want to add a language, this is the spot
// after "import" put a name that has no symbols and doesnt start with a number
// then the file path should be self explanatory, just follow the ones already there
// you can find the actual language translations in the src/translations folder

import en from '../translations/en.json';
import test from '../translations/test.json';

// to add a language, the first part is the language code (ex: "es-419") or top level (ex: "en-US" goes to "en")
// the second part is the import name above that had no symbols
// its easy to just duplicate the "en": en, line and then change accordingly
const languages = {
    "en": en,                      // English
    
    // joke languages
    "test": test,                  // Test
};
// add languages that are RTL here
const rtlLanguages = [
];
// set pairs for language codes that should be interpreted as another language code
const autoLocale = {
};

export default {
    languages,
    rtlLanguages,
    autoLocale,
};
