function companyUsers(array) {

    let companyList = {};

    array.forEach(element => {
        let [companyName, personId] = element.split(" -> ");

        if (!companyList.hasOwnProperty(companyName)) {
            //сетвам празен масив, като value, ако не се property name в обекта
            companyList[companyName] = [];
        }
        //push property value в обекта
        companyList[companyName].push(personId)
    });

    let sortedCompanies = Object.entries(companyList).sort((a, b) => a[0].localeCompare(b[0]));

    sortedCompanies.forEach(el => {
        const companyname = el[0];
        const allIDs = el[1];
        console.log(companyname);
        //така филтрирам само уникалните ID-та
        let uniqueIDs = new Set(allIDs);
        for (const id of uniqueIDs) {
            console.log(`-- ${id}`);
        }
    })

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)