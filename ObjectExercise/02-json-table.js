function solve(dataEmployees) {
    return dataEmployees.reduce((html, dataEmployeeJson) => {
        const dataEmployee = JSON.parse(dataEmployeeJson);
        const {name: name, position: position, salary: salary} = dataEmployee;

        return html + `\t<tr>\n\t\t<td>${name}</td>\n\t\t<td>${position}</td>\n\t\t<td>${salary}</td>\n\t</tr>\n`;
    }, '<table>\n') + '</table>';
}
