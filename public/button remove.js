const deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const id = button.getAttribute('data-contact-id');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success',
                )
                fetch( `http://localhost:3000/${id}`,{method: 'POST'} )
                    .then(response => {
                        if(response.status === 200){
                            window.location.reload(true)
                        }   
                })
            }
        })
    })
})