# Pringle Lab Website

Welcome to the Pringle Lab website repository! This project is dedicated to showcasing the research, publications, and outreach activities of the Pringle Lab. Below, you'll find an overview of the project's structure and key features.

## Project Structure

The project is organized into several directories, each serving a specific purpose:

- **amanita/**: Contains information and resources related to the Amanita genus.
- **backgrounds/**: Stores background images used throughout the website.
- **images/**: Contains various images used in the website.
- **links/**: Provides links to external resources and related websites.
- **media/**: Features media coverage and articles about the Pringle Lab.
- **outreach/**: Highlights the lab's outreach activities and public engagement.
- **people/**: Introduces the members of the Pringle Lab.
- **publications/**: Lists the lab's research publications.
- **research/**: Details the lab's research projects and findings.

## Key Features

- **Random Background Images**: The website dynamically changes background images to keep the visual experience fresh and engaging.
- **Research Highlights**: Detailed sections on various research projects, including invasion biology and conservation of fungi.
- **Media Coverage**: Links to articles and media features about the lab's work.
- **Outreach and Collaboration**: Information on how to collaborate with the lab and contribute to ongoing projects.

## How to Contribute

We welcome contributions from the community! If you have suggestions, find a bug, or want to add new features, please feel free to open an issue or submit a pull request.

### Website Maintenance and Updating

Maintaining and updating the Pringle Lab website is crucial to ensure that the content remains current and accurate. Below are the steps and resources for adding new collaborators and using GitHub effectively.

#### Adding New Collaborators

To add new collaborators to the GitHub repository, follow these steps:

1. **Navigate to the Repository**: Go to the GitHub repository page.
2. **Settings**: Click on the `Settings` tab located at the top of the repository page.
3. **Manage Access**: In the left sidebar, click on `Manage access`.
4. **Invite Collaborator**: Click on the `Invite a collaborator` button.
5. **Search for User**: Enter the GitHub username or email address of the person you want to add.
6. **Send Invitation**: Click on the `Add collaborator` button to send an invitation. The user will need to accept the invitation to gain access.

#### GitHub Tutorials

For those new to GitHub or needing a refresher, here are some useful tutorials:

- **GitHub Basics**:
  - [GitHub Guides](https://guides.github.com/activities/hello-world/): A beginner's guide to GitHub.
  - [GitHub Learning Lab](https://lab.github.com/): Interactive courses on GitHub.

- **Using Git Commands**:
  - [Pushing and Pulling](https://docs.github.com/en/github/using-git/pushing-commits-to-a-remote-repository): How to push commits to a remote repository.
  - [Fetching and Pulling](https://docs.github.com/en/github/using-git/getting-changes-from-a-remote-repository): How to fetch and pull changes from a remote repository.

- **GitHub GUI Setup**:
  - [GitHub Desktop](https://desktop.github.com/): A GUI for managing your repositories.
  - [Setting Up GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop): Instructions for installing and configuring GitHub Desktop.

- **Local Repository Setup**:
  - [Cloning a Repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository): How to clone a repository to your local machine.
  - [Creating a New Repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository): Steps to create a new repository on GitHub.

By following these steps and utilizing the provided resources, you can effectively maintain and update the Pringle Lab website. If you encounter any issues or have questions, please refer to the tutorials or reach out to the repository maintainers.

## Contact

For any inquiries or further information, please contact the Pringle Lab at [apringle2@wisc.edu](mailto:apringle2@wisc.edu).

Thank you for visiting the Pringle Lab website repository! We hope you find the information here useful and engaging.


Sure, here is the updated section with the actual paths based on `https://pringlelab.github.io/`:

### Setting Up a Basic Coding Environment for HTML, CSS, and JavaScript in Visual Studio Code

To set up a basic coding environment for HTML, CSS, and JavaScript in Visual Studio Code, follow these steps:

1. **Install Visual Studio Code**:
   - Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/).

2. **Install Extensions**:
   - Open Visual Studio Code.
   - Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Cmd+Shift+X`.
   - Install the following recommended extensions:
     - **Live Server**: Provides a local development server with live reload feature.
     - **HTML CSS Support**: Enhances HTML and CSS support.
     - **JavaScript (ES6) code snippets**: Provides JavaScript code snippets.
     - **Prettier - Code formatter**: Automatically formats your code.

3. **Create a New Project**:
   - Open a new folder for your project by selecting `File > Open Folder...`.
   - Create the following files in your project folder:
     - [`index.html`](https://pringlelab.github.io/index.html): Your main HTML file.
     - [`styles.css`](https://pringlelab.github.io/styles.css): Your CSS file.
     - `script.js`: Your JavaScript file.

4. **Set Up HTML File**:
   - Open [`index.html`](https://pringlelab.github.io/index.html) and add the basic HTML structure:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>My Project</title>
         <link rel="stylesheet" href="styles.css">
     </head>
     <body>
         <h1>Hello, World!</h1>
         <script src="script.js"></script>
     </body>
     </html>
     ```

5. **Set Up CSS File**:
   - Open [`styles.css`](https://pringlelab.github.io/styles.css) and add some basic styles:
     ```css
     body {
         font-family: Arial, sans-serif;
         margin: 0;
         padding: 0;
         display: flex;
         justify-content: center;
         align-items: center;
         height: 100vh;
         background-color: #f0f0f0;
     }

     h1 {
         color: #333;
     }
     ```

6. **Set Up JavaScript File**:
   - Open `script.js` and add a simple script:
     ```javascript
     document.addEventListener('DOMContentLoaded', () => {
         console.log('Hello, World!');
     });
     ```

7. **Run the Project**:
   - Right-click on [`index.html`](https://pringlelab.github.io/index.html) and select `Open with Live Server`. This will start a local server and open your project in the browser with live reload enabled.

By following these steps, you will have a basic coding environment set up for HTML, CSS, and JavaScript in Visual Studio Code. This setup will help you quickly start developing and testing your web projects.