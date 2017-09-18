var contentsObj = require( '/home/bartek/GitHub/ngf-aws-templates/ELB Sandwich/NGF_ELB_Sandwich.json' );
var cnt = 0;
var Res = [];

function parameter( Key, Value ) {
	this.ParameterKey = Key;
	this.ParameterValue = Value;
}


for( var currParam in contentsObj.Parameters ) {

	var newParam = {};
	newParam.ParameterKey = currParam;
	newParam.ParameterValue = contentsObj.Parameters[ currParam ].Default;
	Res.push( newParam );

/*	console.log( '    {' );
	console.log( '        "ParameterKey": "' +currParam+ '",' );
	console.log( '        "ParameterValue": "' +contentsObj.Parameters[ currParam ].Default+ '"' );
	if ( ++cnt < contentsObj.Parameters.length ) {
		console.log( '    },' );
	} else {
		console.log( '    }' );
	}
*/
	//console.log( cnt + '?' + contentsObj.Parameters.length );
}
//console.log( ']' );

console.log( Res );
