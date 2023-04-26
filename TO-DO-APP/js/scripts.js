$(document).ready(function () {
    const itemList = $('#itemList');
    const itemForm = $('#itemForm');
    const itemInput = $('#itemInput');

    itemForm.on('submit', function (event) {
        event.preventDefault();
        const newItem = itemInput.val().trim();
        if (newItem.length === 0) return;

        const listItem = $('<li></li>').text(newItem);
        const deleteButton = $('<button></button>').text('X').on('click', function () {
            listItem.remove();
        });

        listItem.on('click', function () {
            listItem.toggleClass('crossed-out');
        });

        listItem.append(deleteButton);
        itemList.append(listItem);
        itemInput.val('');
    });

    // Implement the feature to change the order of items in the list
    itemList.sortable();
});
