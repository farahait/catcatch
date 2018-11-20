let state = 0 
// 0 = START
// 1 = MAIN
// 2 = STOP
function start() {
	background(0)
}

function main() {
	background(255)
}

function stop() {

}

function keyPressed() {
	if (state === 0 && keyCode === 32) {
		state = 1
	}
}

function setup() {
	createCanvas(600, 600)
}

function draw() {
	if (state === 0) {
		start()
	}
	else if (state === 1) {
		main()
	}
	else if (state === 2) {
		stop()
	}
}