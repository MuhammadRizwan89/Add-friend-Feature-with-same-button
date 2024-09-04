

let istatus = document.querySelector("h5");
let addFriend = document.querySelector("#add");
let remove = document.querySelector("#remove");

let flag = 0;

addFriend.addEventListener("click", function () {
    if (flag == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        addFriend.innerHTML = "Remove Friend";
        flag = 1;

    } else {
        istatus.innerHTML = "UnFriends";
        istatus.style.color = "red";
        addFriend.innerHTML = "Add Friend";
        flag = 0;
  }
});


