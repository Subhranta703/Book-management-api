"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCSV = parseCSV;
function parseCSV(content) {
    const lines = content.trim().split("\n");
    const results = [];
    const errors = [];
    lines.forEach((line, index) => {
        const [title, author, year] = line.split(",");
        if (!title || !author || !year || isNaN(Number(year))) {
            errors.push({ row: index + 1, data: line });
        }
        else {
            results.push({
                title: title.trim(),
                author: author.trim(),
                publishedYear: Number(year.trim())
            });
        }
    });
    return { results, errors };
}
//# sourceMappingURL=csvParser.js.map