
function embedTiktok(url) {
  endpoint = "https://www.tiktok.com/oembed?url=" + url + "&format=json";
  console.log(endpoint);
  html = "";
  $.ajax({
    url: endpoint,
    method: 'GET',
    success: function(response) {
      tiktok_container = document.getElementById("tiktok-vids");
      tiktok_container.innerHTML += response.html;
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

function main() {
  url_const = "https://www.tiktok.com/@bruceonaroll/video/"
  vid_ids = ["6836651364823747846", "7274143716271525163", "7076686061526633770", "7169455955623759150", "7172780301771427118", "7273366148148759854", "7318567774907944235"];
  for (let i = 0; i < vid_ids.length; i++) {
    full_url = url_const + vid_ids[i];
    embedTiktok(full_url);
  }
  
  
}

main();