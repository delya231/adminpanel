const renderTableOrders = (items) => {

  let table = document.querySelector(`.t-body`);
  table.innerHTML = '';
  let statusMap = {
    'Ожидается': "warning",
    'Оформлен': "info",
    'Отменён': "danger",
    'Доставлен': "success",
  }

  items.forEach((element, index) => {
    table.innerHTML += `
                        <tr>
                        <td class="fw-semibold">${element.id}</td>
                          <td>${element.client}</td>
                          <td>${element.amount} ₽</td>
                          <td>
                            <div class="d-inline-flex align-items-center gap-2">
                              <span class="status-square bg-${statusMap[element.status]}"></span>
                              <span class="text-${statusMap[element.status]} fw-semibold">${element.status}</span>
                            </div>
                          </td>
                          <td>${element.date}</td>
                          <td>
                            <a href="orderDetails.html" class="btn btn-sm btn-secondary me-1 "><i class="bi bi-three-dots"></i></a>
                          </td>
                        </tr>`;
  });

}

const search = (event) => {
  event.preventDefault();
  let searchTextNode = document.querySelector('#searchInput');

  currentOrderList = orderList.filter((order, index) => {
    if (order.id.toLowerCase().includes(searchTextNode.value.toLowerCase())) {
      return order;
    }
    if (order.client.toLowerCase().includes(searchTextNode.value.toLowerCase())) {
      return order;
    }
  });

  renderTableOrders(currentOrderList);
}

let searchNode = document.querySelector('#search');
searchNode.addEventListener('submit', (event) => { search(event); });


let currentOrderList = orderList;
renderTableOrders(currentOrderList);

