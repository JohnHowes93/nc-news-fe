## README

// FIX PROBLEMS POSTING COMMENTS, ADDING NEW COMMENT SHOULD SHOW IMMEDIATELY

Firstly I think your efforts to try something a little different here with react-table should be commended. This works well although I think more could be done to make the styles a little more appealing. It definitely acheives the functionality that is needed for the app.

- If you can find a logo to replace the react logo, please do it!
- More importantly, change the Title aspect of the html and make it your own.
- Take out all console.logs and unecessary commentary.

- [YES] provides general info about app

  - be as explicitly direct with your instructions as possible...
    - you need to run `npm install` to run dependancies
    - mention the version of node required to be installed on the computer as a dependancy

- [NO] clear instructions on how to run locally
  - do you need a database?? do i need to seed it?
  - what commands can you run to set up the development environment??
- [NO] specifies minimum versions

## UX

- [~] Responsive design
  - checkout flexbox for article display for flexibiloity
  - definitely a good start here but could be improved. Think about utilising media queries to tweek the css you already have to make it fit the phone
- [YES - In most cases] Content legible (not too wide, obstructed, etc)
  - less responsiveness means some of the content is rendered outside of the frame of the window itself.
- [~] No errors in the console
  - although there are no errors, there a quite a few console.logs! Don't forget to remove

## Functionality

- [NO DELETION] Deleted comments don’t re-appear on re-render/refresh

New comments don't appear on posting? It is really important to see some visual feedback from posting a new comment. setState with it!

## Error Handling

- [NO] Error pages
- [NO] All errors handled
  - Navigation: (Bad url / Bad topic slug in url / Bad article id in url / Bad username in url)
    - Bad URL for users/username should 404
    - /gibberish - does not handle??
    - /article/gibberish - does handle!! although need a better error page
  - Login: (Bad username / No username)
    - you don't handle a bad username????
    - NO BIGGY but could do with some responsiveness when no username passed
  - Post comment: (No text in comment body / Can you post without logging in?)
    - GOOD!
  - Post article: (No text in article body / No title / No topic selected / Can you post without logging in?)
    - You should not allow anyone to post if no log in - I managed it!
    - GOOD form handling to prevent empty posting!!

## Code

- [!!] No `console.log`s / comments
  - console.logs remember to remove
