const renderTable = (items) => {

    let table = document.querySelector(`.t-body`);
    const statusMap = {
        active: ['Активный', 'success'],
        banned: ['Забанен', 'danger'],
    }
    table.innerHTML = '';


    items.forEach((element, index) => {
        table.innerHTML += `
                        <tr>
                          <td class="fw-semibold">${element.id}</td>
                          <td>${element.name}</td>
                          <td>${element.nickname}</td>
                          <td>${element.phone}</td>
                          <td><span class="text-${statusMap[element.status][1]}">${statusMap[element.status][0]}</span></td>
                          <td class="text-center">
                            <a href="userDetails.html" class="btn btn-sm btn-secondary mb-1 me-3 "><i class="bi bi-three-dots"></i></a>
                            <button class="btn btn-sm btn-danger mb-1 me-3" title="Забанить">
                              <i class="bi bi-person-x-fill"></i>
                            </button>
                          </td>
                        </tr>`;
    });

}

const search = (event) => {
    event.preventDefault();
    let searchTextNode = document.querySelector('#searchInput');

    currentList = usersList.filter((item, index) => {
        if (item.id.toString().toLowerCase().includes(searchTextNode.value.toLowerCase())) {
            return item;
        }
        if (item.name.toLowerCase().includes(searchTextNode.value.toLowerCase())) {
            return item;
        }
        if (item.nickname.toLowerCase().includes(searchTextNode.value.toLowerCase())) {
            return item;
        }
        if (item.phone.toLowerCase().includes(searchTextNode.value.toLowerCase())) {
            return item;
        }
    });

    console.log(currentList);


    renderTable(currentList);
}

let currentList = usersList;
renderTable(currentList);

let searchNode = document.querySelector('#search');
searchNode.addEventListener('submit', (event) => { search(event); });