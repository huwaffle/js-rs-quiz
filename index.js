
function startQuiz() {
    Swal.fire({
        title: 'Good Luckk!!',
        text: 'Lets see how well you remember our memoriess~',
        confirmButtonColor: '#ffb6c1',
        confirmButtonText: 'Lets Goo!!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Replace with the path to your quiz file
            window.location.href = "thequiz/quiz.html"; 
        }
    });
}