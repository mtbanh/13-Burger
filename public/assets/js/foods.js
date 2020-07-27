$(()=>{
    $('.create-form').on('submit', (event)=>{
        event.preventDefault();

        var newFood = {
            food_name: $('#add-food').val().trim(),
            eaten: 1
        };
        console.log(newFood)
            $.ajax('/api/foods', {
                type: 'POST',
                data: newFood
            }).then(()=>{
                console.log('added new food');
                location.reload();
            })
    });

    $('#delete-food').on('click',(event)=>{
        var id =  event.target.dataset.id;
        // console.log(event)
        // console.log(id)
        $.ajax('/api/foods/' +id,{
            type: 'DELETE',
        }).then(()=>{
            console.log('deleted food', id)
            location.reload();
        })
    });

    $('.change-eaten').on('click', (event)=>{
        var id =  event.target.dataset.id;
        console.log(id)
        var newEaten = event.target.dataset.eaten;
        console.log(event)
        var newEatenState ={ eaten: 0};

        $.ajax('api/foods/' + id, {
            type: 'PUT',
            data: newEatenState
        }).then(()=>{
            console.log('chaged eaten to' + newEatenState);
            location.reload();
        });
    });
})