var online = document.querySelector(".online");
var offline = document.querySelector(".offline");
var status = document.querySelector("#result");
var users = ["ESL_SC2", "shroud", "drdisrespectlive", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
users.forEach(function(user) {
    var request = new XMLHttpRequest();
    request.open('GET', "https://wind-bow.glitch.me/twitch-api/streams/" + user, true);
    request.onload = function() {
        var data = JSON.parse(request.responseText);
        if(data.stream!=null) {
            var url = data.stream.channel.url;
            var logo = data.stream.channel.logo;
            var name = data.stream.channel.display_name;
            var game = data.stream.game;
            var stream_name = data.stream.channel.status;
            var viewers = data.stream.viewers;
            online.insertAdjacentHTML("beforeend", "<a href='"+url+"' target='_blank'><div class='wrapper'><div class='logo'><img src='"+logo+"'></div><div class='info'><span class='name'>"+name+"</span><span class='game'>"+game+"</span><span class='stream'>"+stream_name+"</span><span class='viewer'><i class='fa fa-eye'></i>"+viewers+"</span></div></div></a>");
        }
        else {
            var offreq = new XMLHttpRequest();
            offreq.open('GET', "https://wind-bow.glitch.me/twitch-api/users/"+user, true);
            offreq.onload = function() {
                var off_data = JSON.parse(offreq.responseText);
                var logo = off_data.logo;
                var name = off_data.display_name;
                offline.insertAdjacentHTML("beforeend", "<a href='http://www.twitch.tv/" + user + "' target='_blank'><div class='wrapper'><div class='logo'><img src='" + logo + "'></div><div class='info'><span>" + name + "</span><span>Offline</span></div></div></a>");
                result.classList.add("fadein");
            }
            offreq.send();
            }
        }
    request.onerror = function () {
        console.log("Error");
    }
    request.send();
});
