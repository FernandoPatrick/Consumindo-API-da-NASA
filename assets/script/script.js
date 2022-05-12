$("#enviar").click(function () {
  let fadd = $("#data").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=jc9sUQZK5upx2PqEy4xX3jKCmGYnNN40qRMACt1U&date=${fadd}`,
    success: function (data) {
      console.log(data);
      if (data.media_type == "video") {
         $("#titulo").text(data.title);
         $("#imagem").css("display", "none");
         $("#translate").html(`<iframe src=${data.url} style =" width: 700px; height: 400px; margin-bottom: 50px"> </iframe>`)
         $("#coment").text(data.explanation);
      }else { 
        $("#titulo").text(data.title);
        $("#imagem").css("display", "none");
        $("#imagem-apod").attr("src", data.url);
        $("#coment").text(data.explanation);
     }
    },
  });
});

$("#ftHoje").click(function () {
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=jc9sUQZK5upx2PqEy4xX3jKCmGYnNN40qRMACt1U&`,
    type: "GET",
    success: function (data) {
      console.log(data);
      $("#titulo").text(data.title);
      $("#imagem").css("display", "none");
      $("#imagem-apod").attr("src", data.url);
      $("#coment").text(data.explanation);
    },
  });
});
