# hot-pot-hottie

Background:
	This project is a JavaScript game that centers around a hotpot dinner. The scene is: you’re on a hotpot date with a virtual companion, and your objective is to impress them by skillfully putting food into the pot without making a mess. If you splash too much, your virtual companion will be displeased and might even leave!
    
    The gameplay revolves around prompt-based interactions. Players are presented with speech bubbles that display various types of food, each assigned to a specific keyboard key. To successfully add the food to the hotpot, players must quickly type the corresponding key and then hold it until the precise moment when they must release it. Timing is crucial here, as releasing the key at the right moment ensures that the food lands gracefully into the hotpot, without any spills. The difficulty increases progressively, challenging players to hone their reflexes and coordination to maintain the perfect hotpot date.

Functionality & MVPs:
    In Hotpot Hottie, users will be able to: 
    - Receive a prompt telling them which food to select
    - Select a food item by pressing down a key that is assigned to the food item
    - Hold the food item in their chopsticks by keeping the corresponding key held down
    - Drop the food into the bowl by releasing the key
    - Click button to restart the game
    In addition, this project will include: 
    - An “About” modal describing the background and rules of the game 
    - A production README

Wirefames:
    ![Wireframe - v1](https://github.com/elliotkuok/hot-pot-hottie/assets/15020218/6eb69469-b6b9-4636-9298-d8e008f9c37c)
    ![Wireframe - v2](https://github.com/elliotkuok/hot-pot-hottie/assets/15020218/938aa9a0-dd9f-4340-b515-9be02503dbb9)

Technologies, Libraries, APIs
    This project will be implemented with the following technologies: 
    - The Canvas API to render the hotpot and food images
    - Webpack and Babel to bundle and transpile the source JavaScript code 
    - npm to manage project dependencies

Implementation Timeline:
    - Friday & Weekend: Set up the project structure. Create the basic HTML structure for the game interface and add minimal CSS for layout and styling. Work on general understanding of JavaScript. Add canvas to the project and experiment with how to use it. Create classes for the Game, Hotpot, Food, and Chopsticks. Create game and food designs.

    - Monday: Dedicate this day to implementing the core game logic. Handle keyboard events and manage the timing of key presses and releases for dropping food into the hotpot correctly. Food Prompt: Display speech bubbles with random food items that players need to type the corresponding keys for. Hotpot Interaction: Make sure that when players successfully drop food into the hotpot, it updates the hotpot's appearance accordingly. Basic Gameplay: Test the basic gameplay mechanics to ensure the correct functioning of key presses, food dropping, and hotpot interactions.

    - Tuesday: Ensure that food items are correctly rendered on the canvas and that they rerender appropriately when advancing the game state. User Controls: Implement start, stop, and reset buttons to control the game flow. Click Interaction: Allow players to click on food items directly to drop them into the hotpot if they prefer mouse interactions.

    - Wednesday: Focus on styling the entire game interface, including the hotpot, food items, and speech bubbles, to enhance the visual appeal. Final Tests to identify and fix any remaining bugs or issues for MVP.

    - Thursday Morning: Deploy to GitHub pages

Bonus features if time permits:
    - Text bubbles with reactions from the date
    - Practice your skills before your date arrives
