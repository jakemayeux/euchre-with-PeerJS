var host = false;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var peer = new Peer({
		key : 'lwjd5qra8257b9'
	});

peer.on('open', function (id) {
	console.log('My peer ID is: ' + id);
});

peer.on('connection', function (c) {
	start(c);
	host = true;
});

function connect() {
	start(peer.connect($("#input").val()));
}

function start(conn) {
	$("#input").hide();
	$("#button").hide();
	conn.on('open', function () {
		conn.on('data', function (data) {
			console.log('Received', data);
		});
	});

	function drawImage(name, x, y, s) {
		base_image = new Image();
		base_image.onload = function () {
			ctx.drawImage(base_image, x, y, base_image.width * s, base_image.height * s);
		}
		base_image.src = "png/" + name + ".png";
	}
	
	var cardDeck = new playingCards();
	cardDeck.orderByRank();
	cardDeck.cards = cardDeck.cards.slice(28,52);
	console.log(cardDeck);
}
