// ===== LOGIN =====
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Usuário e senha fixos
    if(email === "admin@empresa.com" && password === "1234"){
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("site-content").style.display = "block";
    } else {
        document.getElementById("loginStatus").innerText = "E-mail ou senha incorretos!";
    }
});

// ===== LOGOUT =====
document.getElementById("logoutBtn").addEventListener("click", function(){
    document.getElementById("site-content").style.display = "none";
    document.getElementById("login-screen").style.display = "block";
    document.getElementById("loginForm").reset();
    document.getElementById("loginStatus").innerText = "";
});

// ===== ADICIONAR CAPACITAÇÃO =====
document.getElementById("trainingForm").addEventListener("submit", function(e){
    e.preventDefault();

    const employee = document.getElementById("employee").value;
    const training = document.getElementById("training").value;
    const goal = document.getElementById("goal").value;
    const certificate = document.getElementById("certificate").value || "—";
    const date = document.getElementById("date").value;

    const tableBody = document.getElementById("trainingTable").querySelector("tbody");

    // Criar linha da tabela
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${employee}</td>
        <td>${training}</td>
        <td>${goal}</td>
        <td>${certificate}</td>
        <td>${date}</td>
        <td>
            <button class="editBtn">✏️</button>
            <button class="deleteBtn">🗑️</button>
        </td>
    `;

    tableBody.appendChild(row);

    // Limpar formulário após adicionar
    document.getElementById("trainingForm").reset();
});

// ===== EDITAR E EXCLUIR REGISTROS =====
document.getElementById("trainingTable").addEventListener("click", function(e){
    const target = e.target;
    const row = target.closest("tr");

    if(target.classList.contains("deleteBtn")){
        if(confirm("Deseja realmente excluir este registro?")){
            row.remove();
        }
    } else if(target.classList.contains("editBtn")){
        document.getElementById("employee").value = row.children[0].innerText;
        document.getElementById("training").value = row.children[1].innerText;
        document.getElementById("goal").value = row.children[2].innerText;
        document.getElementById("certificate").value = row.children[3].innerText === "—" ? "" : row.children[3].innerText;
        document.getElementById("date").value = row.children[4].innerText;
        row.remove(); // Remove a linha para edição
    }
});

// ===== LIMPAR TODOS OS REGISTROS =====
document.getElementById("clearAll").addEventListener("click", function(){
    if(confirm("Deseja realmente limpar todos os registros?")){
        document.getElementById("trainingTable").querySelector("tbody").innerHTML = "";
    }
});

