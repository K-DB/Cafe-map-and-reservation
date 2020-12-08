/* Array to record seat reservation
If the value in the check is 0, it is impossible to select/
If the value in the check is 1. it means the seat currently selecte
If the value in the check is 2, it is already reserved. */
var check=[];
var seat_number = [] // for numbering the seat

for(var i=0;i<50;i++){
  check[i] = 0;   // Initialize 0 at first.
}

for(var j=0;j<50;j++){
  seat_number[j] = j+1;
}

/*Function that changes the image to suit the state.*/
function changeImage(number){
  if(check[number]==0){
    check[number] = 1;
    document.getElementsByClassName("image")[number].src = "img/select.png";
  }
  else if(check[number]==1){
    check[number] = 0;
    document.getElementsByClassName("image")[number].src = "img/empty.png";
  }
  else{
    alert("This seat is already reserved");
  }
}

/*Function that changes to a reserved seat.*/
function booking(){
  var booking_check = '';  // To show the seat number selected by the user.
  for(var i=0;i<50;i++){
    if(check[i]==1)
    {
      check[i]=2;  // Change to already reserved seating status

      document.getElementsByClassName("image")[i].src = "img/already.png";
      booking_check += seat_number[i].toString() + ' ';
    }
  }

  if(booking_check==''){
    alert("There are no seats selected.\nPlease select the seat you want.");
  }
  else {
    alert("You have succesfully booked seats : " + booking_check);
  }
}


function exit(){
    location.href = "main.html";
}
