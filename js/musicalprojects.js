


function main() {
  url = "https://www.tiktok.com/@bruceonaroll/video/7274143716271525163"
  endpoint = "https://www.tiktok.com/oembed?url=" + url + "&format=json"
  html = ""
  $.ajax({
    url: endpoint,
    method: 'GET',
    success: function(response) {
      tiktok_container = document.getElementById("tiktok-vids");
      tiktok_container.innerHTML = response.html;
    },
    error: function(xhr, status, error) {
      if (xhr.status === 404) {
        console.log("The requested resource was not found.");
      } else {
        console.log("An error occurred:", error);
      }
    }
});
}

main();