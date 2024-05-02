document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ownerName = document.getElementById('ownerName').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const petName = document.getElementById('petName').value;
    const age = parseInt(document.getElementById('age').value);
    const size = document.getElementById('size').value;

    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    if (clients.some(client => client.ownerName === ownerName && client.petName === petName)) {
        alert('Este cliente já está cadastrado.');
    } else {
        clients.push({ ownerName, phone, address, date, petName, age, size });
        localStorage.setItem('clients', JSON.stringify(clients));
        alert('Cliente cadastrado com sucesso!');
        clearForm(); 
    }
});


function clearForm() {
    document.getElementById('ownerName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('date').value = '';
    document.getElementById('petName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('size').value = '';
}
