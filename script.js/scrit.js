$(function() {
    // Add new item to list
    $('#add-button').on('click', function() {
      let inputValue = $('#input').val();
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('<li>').text(inputValue).appendTo('#list');
        $('#input').val('');
      }
    });
  
    // Cross out item
    $('#list').on('dblclick', 'li', function() {
      $(this).toggleClass('strike');
    });
  
    // Add delete button
    $('#list').on('click', 'li', function() {
      $('<button>').text('X').appendTo(this).on('click', function() {
        $(this).parent().addClass('delete');
      });
    });
  
    // Make list sortable
    $('#list').sortable({
      animation: 150,
    });
  });
  