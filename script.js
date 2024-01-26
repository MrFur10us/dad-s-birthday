var myMp4 = document.getElementById("mp4"),
	myWebm = document.getElementById("webm"),
	myVid = document.getElementById("myVideo"),
	mp4Url = "",
	webmUrl = "";

function playVid(ID) {
	switch (ID) {
		case "one":

			break;
	}
	myMp4.setAttribute("src", mp4Url);
	myWebm.setAttribute("src", webmUrl);
	myVid.load();
	myVid.play();
	myVid.poster = "";
}