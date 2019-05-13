# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web applications



 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
dumb components are only for display... there is no logic behind them

smart components keep track of state and have logic to change or determine the state

 //Googled Answer


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

yarn add is used to add the framework of a react application such as a .json file

 //Googled Answer


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:
            {name: 'Meatballs'},
            {name2: 'Mac & Cheese'}

        }
      }

      render() {

        return (

          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })
        );
        return(
          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer

 date
 number
 range


 //Googled Answer


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

state is the current value of a variable that can change based on different conditions. it allows parts of the application to change

 //Googled Answer


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer

 state is the current status of the application or component within the applications

 prop is a part of a component that can be passed between components


 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

i didnt make tic tac toe

when i made battleship i got a better grasp on how to use states and props to pass information between components.  i also got a better understanding of when states should belong to one component vs another.  I learned that everyone is going to have different ways of wanting to approach a project and that your way might not be the way the rest of the group wants to go.  It was challenging trying to approach making an application in a way that i may not have approached it if i was by myself.
