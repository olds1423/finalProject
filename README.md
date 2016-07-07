# finalProject

Name for the project: MentalRental

Three pages;

Landing page || comments forum : purpose of web app etc



Setup page; capturing user inputs i.e. rent + $, water + $
	simplified graph

HTML
- Top Navigation (right side non working login)
- roommates Form  - (displays previous roommates from local storage)
  - List of current roommates
  - section to add a new roommate

- bill form

  - all bills and items in radio buttons
  - Clear, new (i.e. bill), remove, Refresh
- undecided amount of canvas items


APP.js
- Constructor function for people
  - bill properties
- month Constructor
  - bill array

-

- event listener Clear
- event listener new
- event listener Remove
  - selects
- event listener Refresh
  - run bills,
  - creates a month of billing based on the form items


Grand view/past months/variance in bills


bill constructor
  Total of the bill
  Name of the bill
  Frequency of the bill (not required)



Minimum Viable Product

Sections of graphs



User Stories:
•	As a user I want to heading that effectively communicates the purpose of this web page.
•	As a user I want to be shown a table and/or chart displaying the amount owed per person and the breakdown of all bills/expenses
•	As a user I want to have a form to be able to input the data for new expenses or new roommates
•	As a user I want to have a reset button to be able to re-instantiate the data for new bills or new roommates.
•	As a user I want to be able to store this data locally, to avoid data loss if I am disconnected
Developer

• As a user I want to be able to view the changes in variable bills
• As a user I want the flexibility to split my total payments into multiples (i.e per check)
• As a user I want to be able to view a total cost per month break down as well as each individual item

• As a user, I wan't to be able to figure out how to divide up rent
• As a user, I want to be able to track payments
• As a dev, I want to write a program to show off my chart skillz.


•	As a developer I need an object constructor that I can use to model each roommate.
•	As a developer I need to write a collection of functions that will calculate the amount of money owed per person
•	As a developer I need to write a collection of functions that will take those calculations and input them into a table and/or a graph which clearly model amounts owed roommate by roommate
•	As a developer I need an event listener checking for a click/submit on the roommate input form
•	As a developer I need an event listener checking for a click on the reset button
•	As a developer I need to write a function that gets called on page-load and uses JSON to store data locally
•	As a developer I want to format the results in an unambiguous and visually pleasing way, so as to make the information input and retrieval processes somewhat enjoyable

Stretch Goals
User Stories

•	As a user I want to have an intuitive form for voting on discretionary items
•	As a developer I need to store votes in respective object properties and increment them up when a vote is cast by a roommate.
-

adding flexibility to the graph page, displaying
adding percentages per person





Git Work-Flow


1.	Each group member once ready to make a pull request in the gitHub repo, should do a quick verbal confirmation with other members.

2.	One of the group members should skim the code in the pull request and if there are no errors, accept and merge it

  a)	Commit changes to your working branch	// git commit -m <useful message>

  b)	Update local master				 //git pull origin master

  c)	Update your branch with changes in master	//git checkout <branch>, git merge master

  d)	Handle merge conflicts (if any)			//between the >>>>>>>>> and HEAD flags

3. Push working code to gh-pages

Protocol for working at home
  - Confirm with the group at least one day ahead of time you wont be meeting
  - Confirm via slack that a task isnt being worked on already
  - Record which waffle tasks you completed in group slack for the day



  App

  Displays the graphs
    We need the name of the bill objects we are pulling
    The amount of each bill
