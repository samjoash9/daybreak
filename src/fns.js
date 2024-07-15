function errorAlert(message){
    Swal.fire({
        text: `${message}`,
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'my-confirm-button'
        }
    });
}

function successAlert(message){
    Swal.fire({
        text: `${message}`,
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'my-confirm-button'
        }
    });
}

function notifyAlert(message){
    Swal.fire({
        text: `${message}`,
        icon: 'info',
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'my-confirm-button'
        }
    });
}