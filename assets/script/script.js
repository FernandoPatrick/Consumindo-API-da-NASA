$("#enviar").click(function () {
  let data = $("#data").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=zfhtcLDHueqsGIoHky7qyI6K5PDU1w1S5auNar6K&date=${data}`, 
    success: function (data) {
      if (data.media_type == "video") {
         $("#titulo").text(data.title);
         $("#imagem").css("display", "none");
         $("#translate").html(`<iframe class="iframe" src=${data.url} style =" width: 700px; height: 400px; margin-bottom: 50px"> </iframe>`)
         $("#coment").text(data.explanation);
      }else { 
        $(".iframe").remove()
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
    url: `https://api.nasa.gov/planetary/apod?api_key=zfhtcLDHueqsGIoHky7qyI6K5PDU1w1S5auNar6K`
,
    type: "GET",
    success: function (data) {
      $("#titulo").text(data.title);
      $("#imagem").css("display", "none");
      $("#imagem-apod").attr("src", data.url);
      $("#coment").text(data.explanation);
    },
  });
});
