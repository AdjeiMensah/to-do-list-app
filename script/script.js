function newItem() {
  // Select the list element 
  let list = $('#list');

  // Define list item element
  let li = $('<li></li>');

  // Get value from the input
  let inputValue = $('#input').val();

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    // Add input value to list item
    li.append(inputValue);
    // Add new item to list
    list.append(li);

    // Set the input to empty
    $('#input').val('');
  }

  // Cross out item
  li.on('dblclick', function () {
    $(this).toggleClass('strike');
  });

  // Add delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'))
  crossOutButton.on('click', function () {
    li.addClass('delete');
  });

  // Add delete button to the list item
  li.append(crossOutButton);

  // Make list sortable
  $('#list').sortable({
    animation: 150,
  });
};