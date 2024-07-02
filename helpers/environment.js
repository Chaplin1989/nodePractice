/*
    module name : environment
    description : all environment related data is availabale here
    date : 29/06/24
*/

//dependencies

// module scuffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging'
}

environments.production = {
    port: 5000,
    envName: 'production'
}


//determine which env was passed
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'production';

// export corresponding environment object
const environmentToObject = typeof (environments[currentEnvironment]) === 'object' ? environments[currentEnvironment] : environments.staging;

module.exports = environmentToObject;