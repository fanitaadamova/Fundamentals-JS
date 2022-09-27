function foreignLanguages(countryName) {
    let currentCountry = countryName;
    let language = `English`;

    switch (currentCountry) {
        case `England`:
        case `USA`:
            language = `English`;
            break;
        case `Spain`:
        case `Argentina`:
        case `Mexico`:
            language = `Spanish `;
            break;
        default:
            language = `unknown `;
            break;
    }
    console.log(language);
}
foreignLanguages(`England`)