$(()=>{
    $('.create-form').on('submit', (event)=>{
        event.preventDefault();

        var newFood = {
            food_name: $('#add-food').val().trim();
        };

            $.ajax('/api/foods', {
                type: 'POST',
                data: newFood
            }).then(()=>{
                console.log('added new food');
                location.reload();
            })
    });

    $('.change-eaten').on('click', ((event)=>{
        var id = $(this).data('id');
        var newEaten = $(this).data('newEaten');

        var newEatenState ={ eaten: 'true'};

        $.ajax('api/foods/' + id, {
            type: 'PUT',
            data: newEatenState
        }).then(()=>{
            console.log('chaged eaten to' + newEatenState);
            location.reload();
        })
    }))
})