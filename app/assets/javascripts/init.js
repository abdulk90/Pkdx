if (window.PokemonApp === undefined) {
	window.PokemonApp = {};
}

PokemonApp.init = function (){
	//3rd party code here
	//any kind of setup for EVERY page goes in here
	console.log("Pokemon App Online!!!!!");
};

$(document).on("ready", function (){
	PokemonApp.init();
})

//components follow this structure