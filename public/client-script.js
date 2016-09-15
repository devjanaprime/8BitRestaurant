console.log('sourced');


$(document).ready(function(){
console.log('muggles ready');

$('.createEmployee').on('click', function(){
  console.log('clicks');
var newEmployee={
  first_name: $('#firstNameIn').val(),
  last_name: $('#lastNameIn').val()
};
console.log(newEmployee);
 $.ajax({
   type: 'POST',
   url: '/employee',
   data: newEmployee,
   success: function(data){
      console.log('server hit');
   }

 });
});




});
