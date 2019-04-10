## README

// FIX PROBLEMS POSTING COMMENTS, ADDING NEW COMMENT SHOULD SHOW IMMEDIATELY

Firstly I think your efforts to try something a little different here with react-table should be commended. This works well although I think more could be done to make the styles a little more appealing. It definitely acheives the functionality that is needed for the app.

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
- [~] No errors in the console
  - although there are no errors, there a quite a few console.logs! Don't forget to remove

## Error Handling

- [NO] Error pages
- [NO] All errors handled
  - Navigation: (Bad url / Bad topic slug in url / Bad article id in url / Bad username in url)
    - Bad URL for users/username should 404
    - /gibberish - does not handle??
    - /article/gibberish - does handle!! although need a better error page

## Code

- [!!] No `console.log`s / comments
  - console.logs remember to remove
