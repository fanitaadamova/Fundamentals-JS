function matchFullName(text) {
    
    let pattern = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g;

    let names = text.match(pattern);

    console.log(names.join(' '));

}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov") 