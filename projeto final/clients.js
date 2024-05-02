document.addEventListener('DOMContentLoaded', function() {
    loadClients();
});

function loadClients() {
    const clientCards = document.getElementById('clientCards');
    let clients = JSON.parse(localStorage.getItem('clients')) || [];

    clientCards.innerHTML = ''; 
    if (clients.length === 0) {
        clientCards.innerHTML = '<p>Nenhum cliente cadastrado ainda.</p>';
    } else {
        clients.forEach((client, index) => {
            let card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<strong>${client.petName}</strong><br>
                              Tutor: ${client.ownerName}<br>
                              <em>Data do Atendimento: ${client.date}</em><br>
                              <button onclick="deleteClient(${index})">Excluir Cliente</button>`;
            clientCards.appendChild(card);
        });
    }
}

function deleteClient(index) {
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.splice(index, 1); 
    localStorage.setItem('clients', JSON.stringify(clients));
    loadClients(); 
}

function deleteAllClients() {
    if (confirm('Tem certeza que deseja excluir todos os clientes?')) {
        localStorage.removeItem('clients'); 
        loadClients(); 
    }
}
