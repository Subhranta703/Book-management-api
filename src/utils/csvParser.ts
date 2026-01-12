export function parseCSV(content: string) {
  const lines = content.trim().split("\n");
  const results: any[] = [];
  const errors: any[] = [];

  lines.forEach((line, index) => {
    const [title, author, year] = line.split(",");

    if (!title || !author || !year || isNaN(Number(year))) {
      errors.push({ row: index + 1, data: line });
    } else {
      results.push({
        title: title.trim(),
        author: author.trim(),
        publishedYear: Number(year.trim())
      });
    }
  });

  return { results, errors };
}
