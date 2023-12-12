function getData() {
<<<<<<< HEAD
    fetch('http://localhost:5000/api/data')
=======
    fetch('http://127.0.0.1:5000/api/data')
>>>>>>> cf18f98bea02dd235c7452f522bea58d120cae4d

        .then(response => response.json())
        .then(data => {
            document.getElementById('backendResponse').innerText = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
