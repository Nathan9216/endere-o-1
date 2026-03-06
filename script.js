// script.js
document.getElementById('searchButton').addEventListener('click', function() {
    const cep = document.getElementById('cepInput').value.replace(/\D/g, ''); // Remove não dígitos
    if (cep.length !== 8) {
        alert('Por favor, insira um CEP válido com 8 dígitos.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado.');
                return;
            }
            document.getElementById('cep').textContent = data.cep;
            document.getElementById('logradouro').textContent = data.logradouro;
            document.getElementById('bairro').textContent = data.bairro;
            document.getElementById('cidade').textContent = data.localidade;
            document.getElementById('estado').textContent = data.uf;
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            alert('Ocorreu um erro ao buscar o CEP.');
        });
});