let evenCollection = document.querySelectorAll("tbody tr:first-child");
let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)");
let lastCollection = document.querySelectorAll("tbody tr:last-child");

if (evenCollection && evenCollection.length > 0) {
  for (let item of evenCollection) item.bgColor = "blue";
}

if (oddCollection && oddCollection.length > 0) {
  for (let item of oddCollection) item.bgColor = "purple";
}

if (lastCollection && lastCollection.length > 0) {
  for (let item of lastCollection) item.bgColor = "green";
}
