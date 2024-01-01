# My Personal Portfolio Website - Milestone Project 1

This is a website that I created which is my first assignment with Code Institute. The tasks of my assignment were the following;

> Project Requirements:
>
> Main Technologies
> Required: HTML, CSS
> Optional: Bootstrap and/or other CSS libraries/frameworks.
>
> Mandatory Requirements:
>
> A project violating any of these requirements will FAIL
>
> Static front end project:
> Write custom HTML5 and CSS3 code to create a website of at least 3 pages, or (if using a single scrolling page), at least 3 separate page areas.
>
> Information Architecture:
> Incorporate a main navigation menu and structured layout (you might want to use Bootstrap to accomplish this).
>
> Documentation:
> Write a README.md file for your project that explains what the project does and the value that it provides to its users.
>
> Version Control: Use Git & GitHub for version control.
>
> Attribution: Maintain clear separation between code written by you and code from external sources (e.g. libraries or tutorials). Attribute any code from external sources to its source via comments above the code and (for larger dependencies) in the README.
>
> Deployment: Deploy the final version of your code to a hosting platform such as GitHub Pages.

Code Institute provided a list of example ideas for the project and I chose the following one they provided:

> Project Example Idea:
> Build a personal portfolio site (potentially for yourself).
>
> External user’s goal:
> The site's users are recruiters considering to hire the applicant.
>
> Site owner's goal:
> Present self in best light and get hired.
>
> Potential features to include:
>
> - Tell about educational history and work experience.
> - Tell about skills and any other relevant competencies and interests.
> - Provide basic personal information and contact information for recruiters.
>
> Advanced potential feature (nice-to-have):
> Showcase portfolio of projects so far (in-lieu of links to real projects that you'd build later, feel free to include links to fake projects or random sites on the internet at this stage)

## Steps I Took to Complete This Project

I took to the internet to find some portfolio examples which would give me some inspiration for design ideas.
Doing this gave me an insight of what I wanted for my portfolio and an understanding of how to begin.

I concluded what pages I would have, their layout, information, and how to navigate efficiently through them.

I used some course materials to learn basic coding with HTML and CSS and a few Youtube videos on how to understand and work with Bootstrap.

I kickstarted my project off with the home page.

### Home Page (index.html)

I wanted the home page to be very simple and welcoming — a clear display of the header containing a logo and nav items, image of me, and a welcome message. That's basically what first appears upon the initial screen load.

Scrolling slightly down, A heading titled "Ambition" briefly explaining my desire to be a web developer, which then descends into three smaller headings; 'Discover more about me', 'Interested in reaching out?', and 'Review my projects'. These are each accompanied by a small paragraph respective to the heading to prompt the user to click the red button beneath each paragraph which takes the user to the relevant page.

The home page serves as an introduction to myself with some prompts to navigate through the rest of the project.

For easier navigation to the **about-me.html** and **contact.html** I created a header with three navigation links (Home, About me, Contact) using the bootstrap classes which caused them to float to the top right of the page. Using the class `navbar-expand-md`, the nav links collapse into the `<span class="navbar-toggler-icon"></span>` icon and that is placed inside a button tag to be toggled to reveal or hide the nav links in a dropdown menu for when the screen width is medium or less (767px).

I made a custom Active class in CSS to visually show the user what the current page is. This highlights the nav item in a dark navy background (which is the theme colour) and with text being white. I also stopped the hover effect and kept the cursor default to show that it is not clickable. All other nav links increase in scale when hovered over and the text becomes red (the second theme colour I chose).

The above was achieved with the following code:

```CSS
nav a:not(.active):hover {
    transform: scale(1.12);
    color: var(--theme-color2) !important;
  }

.active {
  padding: 2px 0px 5px;
  margin: 5px 5px 0;
  color: #fafafa !important;
  background-color: var(--theme-color1);
  border-radius: 5px;
  cursor: default;
}
```

The `!important` attribute was necessary to override the bootstrap CSS.

As for the logo in the top left of the header, this is simply my name in upper case (DAVID WALTERS) and placed beneath it is a small title "Junior Web Developer".

This header is the same throughout all the pages.

For the footer, it is simply a centralised prompt saying 'follow me' with 4 social links beneath it (Facebook, twitter(X), Github, and Linkedin). Instead of text, I used icons from ***www.fontawesome.com*** which make a relatively clear sign as to where the links would take the user. The Github icon will navigate directly to this Github profile of mine, the Linkedin icon will navigate to my personal Linkedin profile, and the other two will take the user to a login page only as I don't have those social media accounts (they are there for demonstrational purposes only). The background colour of the footer is the navy theme colour.

Just like the header navbar, the footer links also become red and larger in scale when the user hovers over them, and each link has the code `target="_blank"` which will open each link in a new tab, and it's the same footer throughout all the pages.

### About Me Page (about.html)

This page is intended to show information regarding myself to any employers. So, it will basically act like a summerised CV.

I began with a photo of myself, a title for presentational purposes, and I formally displayed my name, age, and current location.

The page is then governed by three sections as the user scrolls down the page;

- Three titles with a paragraph each (Studies, Goal, Progress) explaining my current situation — acting like a cover letter
- History section showing qualifications, education, and work history
- Personal interests showing my hobbies and interests and additional information

Each section on this page was constructed using the following code;

```HTML
<div class="container">
  <div class="row text-center">
    <div class="col-md-4"></div>
  </div>
</div>
```

The class `container` will make the whole entire div have a working space of 12 columns. The class `col-md-4` will occupy 4 of those 12 columns, so it will take up one third of the container div. I did this three times which then displayed the three divs as three columns in a row. The `md` will nicely stack all three divs in one line when the screen width gets to 968px or less.

Despite having the same HTML coding for each section, they appear differently due to using different CSS techniques such as bordering the middle section, using the theme colour for the background, box shadow, and using different font and list styles. I also chose some interesting icons that I found on **_fontawesome_** to be attached respectively to the titles.

At the very bottom of the page there is a heading 'Download my CV' which has an icon beneath it which indicates to click to downlload the CV.

### Contact Page (contact.html)

This page is intended for employers to contact me via email whilst keeping my contact details undisclosed.

The user is able to put their first and last name, their email address for me to get back to them, and the message they want to send to me. Additionally, the user must tick the checkbox that is labeled 'not a robot'. All the information the user provides will be sent to me via email after they have gone through a quick verification process to protect me from spam. This is all done using **formspree**.

Formspree acts like the middle-man when sending emails. Once you have made an account on ***https://formspree.io/***, you will be given a code to put into your `<form>` tag which will allow you to receive emails without disclosing your email address. It also saves you from having to do any JavaScript as it is all done for you.

My wife tested the contact form by filling it out and clicking the send button. It came as an email from formspree with the First name, Last Name, the email address, and confirmation that they ticked the checkbox along with their message. This allows me to respond to their given email address and it also allows me to block the user if need be.

I felt initially that the form was too plain and had too much white space either side and wasn't very eye-catching. I had an idea to make the background navy blue, use a white border, and use box shadow but made the box shadow the same navy colour and made it solid which made the border appear to be on the inside. This gave birth to my theme and I applied this style to the section background, image container background, and the footer and the portfolio cards.

### Portfolio Page (portfolio.html)

This is where all my future projects will be displayed.

Beneath a heading of 'Portfolio' and a small sentence below it saying 'This portfolio was established whilst studying Web Development with Code Institute', I have constructed 4 cards that each have an image (which will be a screenshot of the project) and a button with the placeholder of the project's number (ie. Milestone 1).

The button is designed as an interactive element for an accordion feature. When clicked, it triggers an action to expand or collapse a section of content. Specifically:

- Button Functionality: It activates the accordion toggle (using bootstrap's functionality).

- Content Display: Clicking this button reveals or hides information related to the 'Milestone Project #'.

- Link Access: Additionally, within the expanded section, there's a link provided to a GitHub repository associated with 'Milestone Project #'.

On the right side of the button's title is a double arrow pointin down — indicating that there is a dropdown feature when clicked. I have JavaScript specifically for each double arrow to rotate 180 degrees upon each click.

The screenshot image of each prject card also increases in brightness when hovered over to indicate a function. It serves as a link which will take the user to the live website, in a new tab, when clicked. The first project is basically this one in particular, so instead it will take the user to the about me page in a new tab.

I have used keyframes for the transitioning of the project cards upon the initial page load.

Each project card will start with 0 opacity and will reach full opacity in 2 seconds.

The first project card will transition from the left 200px to it's relative position (basically to the center). The second and the third will transition from the bottom by 200px to its relative position. The fourth will transition from the right 200px to its relative position. It will be as if they began dispersed and then gather into the centeral part of the page.

## Achieving Perfection

### Lighthouse

Lighthouse was utilised to conduct comprehensive audits on all the web pages, checking performance, accessibility, best practices, and SEO. This tool provided insights and recommendations for optimizing web performance and user experience.

Following the recommendations Lighthouse provided, I compressed the images, converted them to WEBP format, and numbered the heading tags respectively.

I ended up achieving the rating 100 for accessibility, 100 for best practices, and 100 for SEO on all the pages, and at least 95 or more for performance on each page.

### W3Schools Validator

W3Schools validator was utilised to verify compliance with HTML, CSS, and other web-related standards. By validating the code against these standards, it helped ensure compatibility across various browsers and adherence to established coding conventions.

It highlighted to me unnecessary characters in the code and isolated tags which were supposed to be deleted but only the opening tag was deleted instead. It also pointed out to me that the section tage shouldn't take the attribute `role="region"`. I researched why that is and learned that the section tag already gets treated as a region in assistive technologies.

## Wireframes

### Wireframe 1 — Home Page

![Wireframe 1](assets/images/wire-frames/wire-frame-1.PNG)

### Wireframe 2 — About Me Page

![Wireframe 2](assets/images/wire-frames/wire-frame-2.PNG)

### Wireframe 3 — Contact Page

![Wireframe 3](assets/images/wire-frames/wire-frame-3.PNG)

### Wireframe 4 — Portfolio Page

![Wireframe 4](assets/images/wire-frames/wire-frame-4.PNG)

## Interesting Issues Through Developing

### Placement Of The Logo

Bootstrap uses CSS specifically for the nav tags. When I tried adding my logo, it wouldn't go to the position I hoped for, despite me using flexbox and other forms of CSS. It appears my code was conflicting with bootsrtap's code.

I decided to put the logo in a seperate div and taking it outsid the nav tag. It then, of course, pushed the nav tag down and appeared on a row above the nav items.

I decided to wrap all the code in a header tag, use position relative on the header tag, and position the logo absolutely to the top left. This brought the nav items back to the top and to the right of the logo — problem solved.

### Side Scroll

As I was working on the About Me page, I noticed I had unexpected side scroll. It was very difficult to identify what was causing it, despite using dev tools. It takes only one element to overflow which then causes other elements to overflow. I had to use the process of elimination to find out which element was causing it.

Using bootstrap's classes `m-0` and `p-0` (to remove all margins and padding), I was able to identify which element was causing the issue. It appeared that my CCS was conflicting with bootstrap's CSS and it forced one div with the class `row` to overflow with its margin. Simply adding `m-0` to that one div in particular fixed the issue.

### Image Not Appearing

As I work on my project, I regularly check the code in the Google browser (as one should). Everything was fine, no issues at all. I committed and pushed all my work onto Github and then checked it out live to do a performance check. It turns out, my image was not showing at all...

It was working from my local environment but not from Github's environment. It didn't take long to realise why.

In the file path, I accidentally named the images folder with a capital 'I'. VS code doesn't see this as an issue, but Github is very strict and doesn't recognise the folder's existence. A simple correction of that letter fixed the issue.

#### As much as we all hate having errors, the feeling of solving them is unbeatable. Always a good experience.

## Technologies Used

- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - The project uses **HTML5** to create the basic elements and content of my website.
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
  - The project uses **CSS3** to add custom styles to the elements and content of my website.
- [**Bootstrap v4.6.2**](https://getbootstrap.com/)
  - The project uses **Bootstrap v4.6.2** to add a responsive grid system, prebuilt components, plugins built on jQuery, and Bootstrap styles to my website, before adding my custom styles.
- [**jQuery**](https://jquery.com)
  - The project uses **jQuery** to simplify DOM manipulation. This is the standard jQuery that is built with Bootstrap components.
- [**JavaScript**](https://www.javascript.com/)
  - The project uses **JavaScript** from Bootstrap which is required to add functionality to some of Bootstrap's components.
- [**Figma Wireframes**](https://www.figma.com/)
  - Using **Figma Wireframes** is very beneficial to guage what you will add and where you will put them on your pages, and it gives you a good visual to see if you missed anything or should add anything.
- [**Font Awesome**](https://fontawesome.com/)
  - The project uses **Font Awesome** for the social media links and various other icons for several headers and titles in my website.
- [**Google Fonts**](https://fonts.google.com/)
  - Having access to **Google Fonts** helped enhance the typography and design of my website by easily integrating and customizing high-quality fonts, thereby improving readability and visual appeal.
- [**Visual Studio Code**](https://code.visualstudio.com/)
  - I've used **Visual Studio Code** as the development environment to write the code for my website.
- [**Git**](https://git-scm.com/)
  - I've used **Git** as a version control system to regularly add and commit changes made to project in Cloud9, before pushing them to GitHub.
- [**GitHub**](https://github.com/)
  - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website in a live environment.
- [**Chrome DevTools**](https://developer.chrome.com/docs/devtools/)
  - I've used **Chrome DevTools** to view my website from different screen sizes and to play around with the HTML and CSS before deciding what code to implement.
- [**Lighthouse**](https://developers.google.com/web/tools/lighthouse)
  - I utilised **Lighthouse** to conduct comprehensive tests on my website, examining performance, accessibility, best practices, and SEO. It generates detailed reports and optimization suggestions to enhance overall website quality and user experience.
- [**W3C Markup Validation**](https://validator.w3.org/)
  - Through using **W3C Markup Validation**, I had conformity to W3C standards for HTML and CSS. I've utilized this tool to verify and rectify HTML issues, ensuring improved cross-browser compatibility and adherence to web standards.

## Deployment

The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Pressed `ctrl+'` in VS Code which opens the integrated terminal in the root directory of the project folder.
2. Initialised Git using the `git init` command.
3. Added all files to the staging area using the `git add .` command.
4. Committed the files using the `git commit -m "First commit"` command.
5. Created a new repository in GitHub called 'Milestone-1'.
6. Copied the below code from GitHub into the terminal window:

   ```
   git remote add origin https://https://github.com/david-walters/Milestone-1-Code-Institute.git

   git push -u origin main

   ```

7. Went into 'Settings' on my repository page in GitHub.
8. Selected the 'main branch' option under the 'GitHub Pages' section.
9. Opened the provided link to my website in a new tab.

### Repository Link

**https://github.com/david-walters/Milestone-1-Code-Institute**

## Personal Overview

From the beginning to the end of this assignment, it has been an enjoyable process for me. I came across many hurdles that I overcame through perseverance, problem solving, and research — all of which went in my favour.

I have much more to learn, more experience to gain, and I can imagine that I will look back at this website one day and think "What on earth was I thinking" :joy:

It has been a great experience and I'm looking forward to working on my other project assignments which I shall be uploading to my portfolio for people to see.

Thanks for checking this out!

:+1:
