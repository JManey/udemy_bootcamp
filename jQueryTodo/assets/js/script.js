//check off todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//click x to fadeOut and delete todo
$("ul").on("click", "span", function (evt) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  evt.stopPropagation();
});

//add new todo when press enter
$("input[type='text']").keypress(function (evt) {
  if (evt.which === 13) {
    //capture input text
    let newTodoText = $(this).val();
    //clear input field
    $(this).val("");

    //create and append new todo
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " +
        newTodoText +
        "</li>"
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type='text'").fadeToggle();
});
