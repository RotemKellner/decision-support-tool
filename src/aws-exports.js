let Endpoints = {
    getRecommendation: 'getPatientModelRecommendation',
    getRecordsByPatient: 'getRecordsByPatient'
};

let Config = {
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'eu-west-1:075700a6-8cec-440e-bd9b-b20d884b62ac',
        // REQUIRED - Amazon Cognito Region
        region: 'eu-west-1',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-west-1_fJOemFGe1',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: 'r28sckqn3ukf4m1td6v7oim9s',
    },
    API: {
        endpoints: [
            {
                name: Endpoints.getRecommendation,
                endpoint: "https://cn8pc7plbl.execute-api.eu-west-1.amazonaws.com/staging-auth"
            },
            {
                name: Endpoints.getRecordsByPatient,
                endpoint: "https://cn8pc7plbl.execute-api.eu-west-1.amazonaws.com/staging-auth"
            }
        ]
    }
};



export {Config, Endpoints}