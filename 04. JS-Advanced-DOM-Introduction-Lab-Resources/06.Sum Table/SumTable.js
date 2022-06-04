function sumTable() {
  let total = 0;
  let rows = document.querySelectorAll("tr");

  for (let i = 1; i < rows.length - 1; i++) {
    let row = rows[i].children;
    total += Number(row[1].textContent);
  }
  return (document.getElementById("sum").textContent = total);
}
