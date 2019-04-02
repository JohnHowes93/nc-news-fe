# React Project Checklist

Here's a guide to approaching any React project. It's not an absolutely strict set of rules, but you can use it to help you avoid getting distracted by things that are likely to be a waste of time if done too early.

## Dynamic (order may be a bit looser here!)

- Add mapping / looping for creating multiple components
- Deal with component lifecycle issues, e.g. making new api calls on componentDidUpdate
- Add event handlers

## Style

- Add classNames
- Create and .css files
- Write application CSS - sitewide styling choices like fonts, colour pallettes
- Write component specific CSS

## WEDNESDAY

- Convert all table data into links
  - ArticlesByTopicTable
  - ArticlesTable
  - TopicsTable
- Convert all article & comment data into links
- Pagination for articles
  - sort articles properly
- Begin work on ArticleAdder

### 'Must Have' User Stories

5. As a user, I should be able to sort articles by:
   - date created
   - comment_count
   - votes
6. As a hiring partner with no access to my laptop, I should be able to use the site on my mobile without sacrificing style or functionality.
7. **As a user, I should be able to login to the site.**
8. **As a hiring partner with no knowledge of the users in the database, it should be very clear to me how I can login to the site.**
9. As a logged in user, I should be able to post a new article to an existing topic.
10. As a logged in user, I should be able to post a new article to a new topic.
11. As a logged in user, I should be able to post a new comment to an existing article.
12. **As a logged in user, I should be able to vote on an article.**
13. **As a logged in user, I should be able to vote on a comment.**
14. As a logged in user, I should be able to delete my own articles.
15. As a logged in user, I should be able to delete my own comments.
16. As a hiring parter, I should be able to follow the readme instructions to easily run the project locally.
17. As a hiring parter, I should be able to find a link to the hosted version of the project in the readme.
18. As a hiring parter, I should be able to find a link to the back-end repository of the project in the readme.
19. As a hiring parter, I should be able to find a link to the hosted version of the back-end project in the readme.

_**If time...**_

20. **As a user, I should be able to navigate over pages of articles (e.g. using pagination or infinite scroll).**
21. **As a user, I should be able to navigate over pages of comments (e.g. using pagination or infinite scroll).**
22. As a user, I should be able to view a list of all articles written by a specific user.

_Note regarding **BOLD** user stories:_

- User login / auth to be covered in Tuesday's lecture
- Voting / optimistic rendering to be covered in Wednesday's lecture
- Error handling / error pages to be covered in Thursday's lecture
- Infinite scroll / pagination to be covered in Thursday's lecture

### Extra credit

1. Create a route which shows which users have been most active adding articles and comments
2. Make this route sort the users by how popular they are based on an aggregation of their article and comment vote counts
3. Implement a filter which re-orders comments based on either the time they were added, or how many votes they have got.
