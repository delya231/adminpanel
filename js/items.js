const renderTableItems = (items) => {

    let table = document.querySelector(`.t-body`);
    table.innerHTML = '';

    items.forEach((element, index) => {
        table.innerHTML += `
                        <tr>
                          <td class="fw-semibold">${element.id}</td>
                          <td>
                            <img
                              src="${element.image}"
                              style="width: 80px" class="rounded" />
                          </td>
                          <td>${element.name}</td>
                          <td>${element.description}</td>
                          <td>${element.price} ₽</td>
                          <td>
                            <a href="itemDetails.html" class="btn btn-sm btn-secondary me-1"><i class="bi bi-three-dots"></i></a>
                          </td>
                        </tr>`;
    });

}

const search = (event) => {
    event.preventDefault();
    let searchTextNode = document.querySelector('#searchInput');

    currentItemsList = itemList.filter((item, index) => {
        if (item.id.toString().toLowerCase().includes(searchTextNode.value.toLowerCase())) {
            return item;
        }
        if (item.name.toLowerCase().includes(searchTextNode.value.toLowerCase())) {
            return item;
        }
        if (item.description.toLowerCase().includes(searchTextNode.value.toLowerCase())) {
            return item;
        }
    });

    console.log(currentItemsList);
    

    renderTableItems(currentItemsList);
}

let currentItemsList = itemList;
renderTableItems(currentItemsList);

let searchNode = document.querySelector('#search');
searchNode.addEventListener('submit', (event) => { search(event); });