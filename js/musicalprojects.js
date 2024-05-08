


function main() {
  url = "https://www.tiktok.com/@bruceonaroll/video/7274143716271525163"
  endpoint = "https://www.tiktok.com/oembed?url=" + url + "&format=json"
  html = ""
  $.ajax({
    url: endpoint,
    method: 'GET',
    success: function(response) {
      html = response.html;

      tiktok_container = document.getElementById("tiktok-vids");
      const frame = document.createElement('iframe');
      frame.style.width= 420;
      frame.style.height = 345;
      frame.src = html;
      tiktok_container.appendChild(frame);
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