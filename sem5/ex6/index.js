const apiUrl = "http://localhost:8000/api/";

async function get(url) {
  return (await axios.get(url)).data;
}

async function post(url, body) {
  return (
    await axios.post(url, JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    })
  ).data;
}

async function loadTable() {
  let data = await get(apiUrl + "getList");
  let tableDiv = document.getElementById("tableData");

  if (!data || !tableDiv) return;

  let myTable = document.getElementById("myTable");
  if (myTable) myTable.remove(); // 🛠️ mic fix: apel corect (cu paranteze)

  let myHtmlCode = [];
  myHtmlCode.push("<table id='myTable'>");
  myHtmlCode.push("<thead>");
  myHtmlCode.push("<tr><th hidden>Id</th><th>Name</th><th>Age</th></tr>");
  myHtmlCode.push("</thead>");
  myHtmlCode.push("<tbody>");

  for (let item of data) {
    myHtmlCode.push(
      `<tr>
        <td hidden>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.age}</td>
      </tr>`
    );
  }

  myHtmlCode.push("</tbody>");
  myHtmlCode.push("</table>");

  tableDiv.innerHTML = myHtmlCode.join("");
}

async function sendData() {
  let name = document.getElementById("inputName").value.trim();
  let age = document.getElementById("inputAge").value.trim();

  if (!name || !age) {
    alert("You must enter a name and an age");
    return;
  }

  await post(apiUrl + "postList", { name, age: Number(age) });
  await loadTable();
}

/* 🔎 NOU: căutare după ID + afișare rezultat */
async function loadById(id) {
  const resultDiv = document.getElementById("resultById");
  resultDiv.innerHTML = "Loading...";

  try {
    const item = await get(apiUrl + "getById/" + encodeURIComponent(id));
    // Render simplu (poți face și un mini-tabel)
    resultDiv.innerHTML = `
      <div style="border:1px solid #ddd;padding:.5rem;border-radius:.25rem;max-width:320px">
        <div><strong>Id:</strong> ${item.id}</div>
        <div><strong>Name:</strong> ${item.name}</div>
        <div><strong>Age:</strong> ${item.age}</div>
      </div>
    `;
  } catch (err) {
    // dacă serverul întoarce 404 sau altă eroare
    if (err.response && err.response.status === 404) {
      resultDiv.innerHTML = `<span style="color:#b00020">Resource not found.</span>`;
    } else {
      resultDiv.innerHTML = `<span style="color:#b00020">Error loading resource.</span>`;
      console.error(err);
    }
  }
}

/* 🔎 NOU: handler pentru formularul de căutare */
document.addEventListener("DOMContentLoaded", () => {
  const findForm = document.getElementById("findForm");
  const inputId = document.getElementById("inputId");

  if (findForm) {
    findForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const id = Number(inputId.value);
      if (!id || id < 1) {
        alert("Please enter a valid ID (>= 1)");
        return;
      }
      await loadById(id);
    });
  }
});

/* inițial: încarcă tabelul complet */
loadTable();
