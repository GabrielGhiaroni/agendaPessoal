document.getElementById('taskForm').onsubmit = function (e) {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const time = document.getElementById('taskTime').value;
    const list = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = `Tarefa: ${title}, Horário: ${time}`;
    list.appendChild(li);

    // Limpar o formulário após adicionar
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskTime').value = '';
};

// Função para exibir a data atual
function showCurrentDate() {
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let currentDate = now.toLocaleDateString('pt-BR', options);

    let parts = currentDate.split(' ');

    parts = parts.map((part, index) => {

        if (part.toLowerCase() === 'de') {
            return part.toLowerCase();
        }

        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    });

    currentDate = parts.join(' ');

    document.getElementById('currentDate').textContent = currentDate;
}



// Chamar a função quando a página carrega
showCurrentDate();