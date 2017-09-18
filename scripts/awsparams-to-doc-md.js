var contentsObj = require( '/home/bartek/GitHub/ngf-aws-templates/ELB Sandwich/NGF_ELB_Sandwich.json' );
var ParameterGroups = contentsObj.Metadata[ 'AWS::CloudFormation::Interface' ].ParameterGroups;

for( var pGroup in ParameterGroups ) {
	//console.log( ParameterGroups[ pGroup ].Parameters );
	//console.log( ParameterGroups[ pGroup ].Parameters.length );
	for( var param in ParameterGroups[ pGroup ].Parameters ) {
		var currParam = ParameterGroups[ pGroup ].Parameters[ param ];
		process.stdout.write( contentsObj.Metadata[ 'AWS::CloudFormation::Interface' ].ParameterLabels[ currParam ].default );
		process.stdout.write( ' | ' + currParam + ' | ' );
		process.stdout.write( contentsObj.Parameters[ currParam ].Description + "\n" );	
	}

}
