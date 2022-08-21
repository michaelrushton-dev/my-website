# Mike Rushton's Website

Welcome to the repository for my personal website.
As well as some jolly animations, this is a space for me to upload my most recent projects so the world can see what I've been up to!

# Adding a new Project

1. Prepare an image for the new project to the relative dimensons of 1280 X 1920

2. Name the image as you would like the title to show up on the app (don't worry about the file extension, the app will remove that for you)

3. Drop the image into the following directory: _src/components/Projects/Cards/cardsArray_

4. Now go into this file: _src/components/Projects/Cards/cardsArray/cardsArray.js_ and change the import path of the card number you wish to display the new image in to correspond with the fliename of the new image you just added

5. Navigate to the following file: _src/components/Projects/Cards/Descriptions/descriptionsArray.js_ and write a description of the new project in the corresponding variable slot at the top of the file

# Starting the App

After cloning this repository, change directory to my-app then run the command line `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
