let statusBadge = document.querySelector('.status-badge');
let statusBtn = document.querySelector('.status-btn');


const toggleUserstatus = () => {
    if (statusBtn.innerHTML == 'Заблокировать') {
        statusBtn.innerHTML = 'Разблокировать';
        statusBtn.classList.remove('btn-danger');
        statusBtn.classList.add('btn-success');

        statusBadge.innerHTML = 'Заблокирован';
        statusBadge.classList.remove('text-bg-success');
        statusBadge.classList.add('text-bg-danger');
    } else {
        statusBtn.innerHTML = 'Заблокировать';
        statusBtn.classList.remove('btn-success');
        statusBtn.classList.add('btn-danger');

        statusBadge.innerHTML = 'Активен';
        statusBadge.classList.remove('text-bg-danger');
        statusBadge.classList.add('text-bg-success');
    }
}

statusBtn.addEventListener('click', toggleUserstatus);