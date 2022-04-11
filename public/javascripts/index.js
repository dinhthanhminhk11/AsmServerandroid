$("#add_imagees").submit(function(event){
    alert("Thêm thành công")
})

$("#update_imagees").submit(function(event){
    event.preventDefault()
    var unidexed_array = $(this).serializeArray()
    var data = {}

    $.map(unidexed_array ,function(n ,i){
        data[n['name']] = n['value']
    })

    console.log(data)
    var request = {
        "url" : `http://localhost:5000/api/imagees/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function (response){
        alert("Sửa thành công")
    })
})

if(window.location.pathname == "/"){

    $ondelete = $(".transparent-box a.delete");
    $ondelete.click(function(){
            var id = $(this).attr("data-id")
            var request = {
                "url" : `http://localhost:5000/api/imagees/${id}`,
                "method" : "DELETE"
            }

            if(confirm("Bạn có chắc muốn xóa không?" +id)){
                $.ajax(request).done(function (response){
                    alert("Xóa thành công")
                    location.reload()
                })
            }
        }
    )
}

