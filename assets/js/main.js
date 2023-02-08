$("#add_user").submit(function (event) {
  alert("Data Inserted Successfully!");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  var request = {
    // url: `https://crudapp-j2iy.onrender.com/api/user/${data.id}`,
    url: ` http://localhost:8989/api/user/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
    location.replace("http://localhost:8989/dashboard");
    // location.replace("https://crudapp-j2iy.onrender.com/");
  });
});

if (window.location.pathname == "/dashboard") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:8989/api/user/${id}`,
      // url: `https://crudapp-j2iy.onrender.com/api/user/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
