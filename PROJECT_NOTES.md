**Name:** Kenneth Smith 
**Student ID:** 2555867  
**Course:** COP2803 – Client-side JavaScript  
**Assignment:** Assignment 2  
**Date:** April 2026  
---

# Titan Coffee Run – Project Notes

## Front-End Project Structure

A standard front-end web development project is organized into separate folders based on the type of files used in the application. This helps keep the project clean, organized, and easy to maintain.

### Common Folder Structure

- **index.html**
  - The main entry point of the website
  - Contains the structure and content of the homepage

- **css/**
  - Contains all stylesheets used to control the layout, colors, fonts, and overall design of the website

- **js/**
  - Contains JavaScript files that add interactivity and functionality to the site

- **img/**
  - Stores images such as logos, banners, and other visual assets

- **assets/** (optional)
  - Can include additional resources like fonts, icons, or external libraries

---

## Why Organization Matters

Organizing files into folders is important because it makes the project easier to manage and understand.

- **Improves readability**
  - Developers can quickly find files instead of searching through one large folder

- **Easier maintenance**
  - Updates and changes can be made more efficiently when files are grouped by purpose

- **Scalability**
  - As the project grows, a structured layout prevents confusion and clutter

- **Collaboration**
  - Other developers can understand the project structure more easily

- **Separation of concerns**
  - HTML, CSS, and JavaScript each have their own role, and separating them keeps the code clean and organized


## Reflection

Part 1: Using AI to learn about project structure helped provide a clear and organized explanation of how professional front-end projects are set up. It also made it easier to understand why organization is important for long-term development and collaboration.

Part 2: Creating the folder structure early helps ensure that the project remains organized as more files are added. It also aligns with best practices used in professional front-end development.

Part 3: Building the homepage helped reinforce the use of semantic HTML elements and proper page structure. Using AI to generate and then review the code made it easier to understand how each section of the page is organized and why accessibility and structure are important.

Part 4: Implementing the banner slideshow provided a better understanding of how JavaScript interacts with HTML elements. I learned how to use arrays, functions, and setInterval to create dynamic behavior on the page, as well as how to troubleshoot issues such as incorrect file paths and image formats.

Part 5: Reviewing and refining the project helped improve overall code quality and understanding. Testing the site ensured that all features worked correctly, and reflecting on AI usage reinforced the importance of understanding the code rather than relying on generated solutions.

## AI Interaction Log

## Part 1: Understanding Project Structure

### Prompt 1
What is the standard folder structure for a front-end web development project? Please explain what each folder is used for.

### Response Summary
The AI explained that a typical front-end project includes folders such as css, js, and img. Each folder is used to separate different types of files: CSS for styling, JavaScript for functionality, and images for visual content. It also explained the role of the main HTML file as the entry point of the application.


### Prompt 2
Why is it important to organize files this way rather than putting everything in one folder?

### Response Summary
The AI explained that organizing files improves readability, maintainability, and scalability. It also helps developers collaborate more effectively and keeps different responsibilities (structure, style, behavior) separated.


## Part 2: Project Structure Setup

### Prompt 3
I am building a front-end website for a coffee delivery service. What is a good basic folder structure to organize my HTML, CSS, JavaScript, and images?

### Response Summary
The AI recommended creating a simple and organized folder structure including css, js, and img directories. These folders help separate styling, functionality, and visual assets, making the project easier to manage and maintain.


### Results: Folder Structure Created

The following folders were created in the project:
- css/
- js/
- img/


### Terminal Commands  (I did not use these - Used IDE instead)

The following command can be used to create the folder structure:

**Windows cmd:** mkdir css js img

## Part 3: The Homepage

### Prompt 4
I am creating the homepage for Titan Coffee Run, a coffee delivery service for St. Petersburg College. Can you generate a simple HTML5 homepage with a header, a section describing the service, a placeholder area for a banner slideshow, and a footer? Please use semantic HTML and accessibility best practices.

### Response Summary
The AI generated a basic homepage structure using semantic HTML5 elements such as header, nav, main, section, and footer. It included a title area for the company, a short description of the service, and a placeholder section for the future banner slideshow. The code also followed accessibility best practices by using headings, meaningful text, and a logical page structure.

### Results:
I am using header, main, footer, nav, and section for semantic markup. Added a css file to support design consideration to make the site appealing.

### Prompt 5
What are three specific ways I could make this coffee delivery homepage more appealing to college students?

### Response Summary
The AI suggested adding student-friendly promotional language, highlighting convenience for busy class schedules, and using more engaging visuals such as coffee images or campus-themed banners. It also suggested stronger call-to-action text and a more modern visual style.

### Results:
I updated the "About" section to to be more student-focused.  I will add more styling later based on suggestions about visuals.

### Prompt 6
I need a simple banner slideshow for my coffee shop homepage using only HTML, CSS, and JavaScript. Can you show me how to make it rotate through images automatically every 3 seconds without using any libraries?

### Response Summary
The AI suggested a simple image rotator that uses JavaScript to switch the image source every 3 seconds. It explained that the HTML needs an image element, the CSS should size and style the banner area, and the JavaScript should store image paths in an array and cycle through them with a timer.

### Results:
Added a new banner container to replace the placeholder.  Added a javascript file with the initial banner carusel code and linked it with a script tag in the homepage.  No images created yet.

### Prompt 7
What kinds of banner images would work well for a college coffee delivery website? Give me five specific ideas.

### Response Summary
The AI suggested banner ideas such as students walking on campus with coffee, a close-up of hot coffee drinks, a coffee delivery scene near a college building, a student study session with coffee, and a promotional image featuring coffee and pastries. These ideas fit the college audience and support the branding of the website.

### Results:
I used AI to generate 3 specifc images:
Students enjoying a sunny campus day - banner Image 1
Morning coffee delights on rustic table - Banner Image 2
Coffee delivery at college campus - Banner Image 3

While implementing the banner slideshow, I initially used .jpg file extensions for the images. After switching to .png images, I updated both the HTML and JavaScript file paths to match the correct file type. This ensured the images loaded correctly and the slideshow function worked as expected.

### Prompt 8
Can you explain how this banner slideshow JavaScript works step by step in simple terms?

### Response Summary
The AI explained that the code stores the banner image file names in an array, keeps track of the current image with a counter, and uses a function to switch to the next image. It also explained that setInterval runs the function automatically every 3 seconds so the banner keeps rotating.

### Results:
I added a few comments in the javascript code based on the response from AI. 

### Prompt 9
Can you explain what the CSS for the banner is doing and why those styles are needed?

### Response Summary
The AI explained that the CSS controls the size, spacing, and presentation of the banner area. It makes the banner image scale to the width of the page section, keeps the image responsive, and adds a border and background so the slideshow stands out visually.

### Results:
Added the css rules.

### Prompt 10
Review my HTML and JavaScript for my Titan Coffee Run homepage. Suggest improvements for accessibility, SEO, and performance.

### Response Summary
The AI suggested several improvements to enhance accessibility, SEO, and performance. For accessibility, it recommended using more descriptive alt text for images and ensuring proper heading structure. For SEO, it suggested improving the meta description and using meaningful content that includes relevant keywords. For performance, it recommended minimizing unnecessary code, optimizing images, and ensuring scripts are loaded efficiently. These improvements help make the website more user-friendly, searchable, and efficient.

### Results:
I tested the project to make sure all features worked correctly, including the banner slideshow rotation. I also reviewed the HTML and JavaScript for structure, comments, and proper organization. Minor improvements related to accessibility and performance were noted for future updates.

### Prompt 11
What are three important things I should test to make sure my website works correctly?

### Response Summary
The AI suggested testing core functionality, usability, and compatibility. First, it is important to verify that all features work as expected, such as the banner slideshow rotating correctly. Second, usability testing ensures that navigation links, layout, and content are easy to use and understand. Third, compatibility testing ensures the website works across different browsers and screen sizes without errors.

### Results:
I tested the core functionality of the website, including the banner rotation, page layout, and navigation. All features worked as expected. Additional improvements suggested by AI, such as cross-browser testing and enhanced usability checks, can be implemented in future assignments as the project continues to grow.

### Prompt 12
What are the advantages and limitations of using AI tools for web development? What should developers still learn to do manually?

### Response Summary
The AI explained that one advantage of using AI tools in web development is that they can quickly generate code, provide explanations, and help troubleshoot problems. This can save time and make it easier to learn new concepts. However, a limitation is that AI-generated code is not always perfect and may require adjustments or debugging. Developers must still understand the code they use rather than relying on AI completely.

The AI also emphasized that developers should still learn core skills manually, including HTML structure, CSS styling, JavaScript logic, and debugging techniques. Understanding these fundamentals allows developers to identify issues, customize solutions, and write better code independently. AI should be used as a tool to support learning, not replace it.

## Development Notes

This project was managed using a Git repository with incremental commits for each part of the assignment. This helped track progress, organize changes, and simulate a real-world development workflow.