$(document).ready(function() {
  $('#joinButton').click(function() {
    var user_email = $('#email').val();
    var user_name = $('#name').val();
    var user_id = $('#user').val();
    var password = $('#password').val();
    var data = {
      'id': user_id,
      'password': password,
      'useremail': user_email,
      'username': user_name
    }
    $.ajax({
      type: "POST",
      url: "/join",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      cache: false,
      datatype: "json", // expecting JSON to be returned
      data: data,
      success: function(result) {
        alert('가입 성공!');
        console.log(result);
        if (result.status == 200) {
          self.isEditMode(!self.isEditMode());
        }
      },
      error: function(error) {
        alert('가입 실패!');
      }
    }).complete(function() {
      $(window).attr('location','/');
    });
  });
});
