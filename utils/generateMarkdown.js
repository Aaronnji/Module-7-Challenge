// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license = "AFL-3.0") {
    return "![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-blue.svg)";
  } else if (license === "Apache-2.0") {
    return "![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "Artistic-2.0") {
    return "![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-brightgreen.svg)";
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[License: MIT](https://opensource.org/license/MIT)";
  } else if (license === "AFL-3.0") {
    return "[License: AFL-3.0](https://opensource.org/license/afl-3-0-php)";
  } else if (license === "Apache-2.0") {
    return "[License: Apache-2.0](https://opensource.org/license/Apache-2.0)";
  } else if (license === "Artistic-2.0") {
    return "[License: Artistic-2.0](https://opensource.org/license/Artistic-2.0)"; 
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return " ";
  } else {
  return `${renderLicenseBadge(license)} This is the ${license} license. Here is the link ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description 
   ${data.description}
  # Installtion
   ${data.installation}
  # Usage
   ${data.usage}
  # Contributing
   ${data.contributing}
  # License
   ${renderLicenseSection(data.license)}
  # Github username
   ${data.username}
  # Email
   ${data.email}
`;
}

export default generateMarkdown;

