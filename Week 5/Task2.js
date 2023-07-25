const os = require('os');

// Function to display the value of a specific environment variable
function displayEnvVariableValue(variableName) {
  const value = process.env[variableName];
  if (value) {
    console.log(`Value of ${variableName}: ${value}`);
  } else {
    console.log(`Environment variable '${variableName}' not found.`);
  }
}

// Example usage
const variableName = 'PATH';
displayEnvVariableValue(variableName);