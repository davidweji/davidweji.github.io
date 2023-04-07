function confirmSubmit() {
    //conditional
    let rating = document.getElementsByName('Rating')[0].value;
    if(rating === '...') {
        alert('You cannot rate it that!');
        return false;
    }

    //Notification
    let response = confirm("Are you sure you want to submit that rating?");
    if(response) {
        alert("Thank you for the rating!");
        return true;
    } else {
        return false;
    }
}