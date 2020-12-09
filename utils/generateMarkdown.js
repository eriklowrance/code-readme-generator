// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
    
${data.description}
  
 
  
  ## Table of Contents
  
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  
  ## Installation
  
${data.install}
  
  ## Usage 
  
${data.usage}

  ## License
  
  ${ data.license === "MIT" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)": data.license === "Apache" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)": data.license === "GNU" ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)": data.license === "WTFPL" ? "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)" }
  

  
  ---
  
  ## Contributing
  
  ${data.guidelines}

  
  ---

  ## Questions

  GitHub Profile: ${data.profile}<br>
  Email me: ${data.email}
`;
}

module.exports = generateMarkdown;
