// Configuration file
let config = {

	// Grid settings
	ndim : 2,
	field_size : [500, 12],
	
	// CPM parameters and configuration
	conf : {
		// Basic CPM parameters
		torus : true,						// Should the grid have linked borders?
		seed : 1,							// Seed for random number generation.
		T : 20,								// CPM temperature
		constraints : [						// List the constraints to activate
			"ActivityConstraint", 
			"Adhesion", 
			"VolumeConstraint", 
			"PerimeterConstraint", 
			"BarrierConstraint" 
		],
		
		// Constraint parameters. 
		// Mostly these have the format of an array in which each element specifies the
		// parameter value for one of the cellkinds on the grid.
		// First value is always cellkind 0 (the background) and is often not used.
		
		// Adhesion parameters:
		J : [ [NaN,20,0], [20,100,5], [0,5,0] ],
		
		// VolumeConstraint parameters
		LAMBDA_V : [0,30,NaN],				// VolumeConstraint importance per cellkind
		V : [0,500,NaN],					// Target volume of each cellkind
		
		// PerimeterConstraint parameters
		LAMBDA_P : [0,2,NaN],				// PerimeterConstraint importance per cellkind
		P : [0,360,NaN],					// Target perimeter of each cellkind
		
		// ActivityConstraint parameters
		LAMBDA_ACT : [0,200,NaN],			// ActivityConstraint importance per cellkind
		MAX_ACT : [0,30,NaN],				// Activity memory duration per cellkind
		ACT_MEAN : "geometric",				// Is neighborhood activity computed as a
											// "geometric" or "arithmetic" mean?
								
		// BarrierConstraint parameters		
		IS_BARRIER : [false,false,true]		// Specify for each cellkind if the barrier
											// constraint applies to it.
	},
	
	// Simulation setup and configuration: this controls stuff like grid initialization,
	// runtime, and what the output should look like.
	simsettings : {
	
		// Cells on the grid
		NRCELLS : [3,0],					// Number of cells to seed for all
											// non-background cellkinds.
		// Runtime etc
		BURNIN : 500,
		RUNTIME : 1000,
		RUNTIME_BROWSER : "Inf",
		
		// Visualization
		CANVASCOLOR : "eaecef",
		CELLCOLOR : ["000000","AAAAAA"],
		ACTCOLOR : [true,false],			// Should pixel activity values be displayed?
		SHOWBORDERS : false,				// Should cellborders be displayed?
		zoom : 2,							// zoom in on canvas with this factor.
		
		// Output images
		SAVEIMG : true,					// Should a png image of the grid be saved
											// during the simulation?
		IMGFRAMERATE : 5,					// If so, do this every <IMGFRAMERATE> MCS.
		SAVEPATH : "output/img",				// ... And save the image in this folder.
		EXPNAME : "Microchannel",					// Used for the filename of output images.
		
		// Output stats etc
		STATSOUT : { browser: false, node: true }, // Should stats be computed?
		LOGRATE : 10							// Output stats every <LOGRATE> MCS.

	}
}

if( typeof module !== "undefined" ){
	module.exports = config
}