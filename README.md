# Ask Me Anything

by Alena Golovina, 08.17.2017

## About

This is a website similar to Crowd Sourced, Reddit/Quora Style Message Board for junior and aspiring developers.

## Description

The goal was to create a question and answer message board, similar to Reddit, Quora, StackOverflow or other such sites. Users should be able to submit a question, then other users can respond with answers.

The message board allows junior developers and newbies learning to code to ask questions that senior developers, product owners, senior designers, recruiters, and other tech professionals can answer.

## User Stories

* Questions should include the content of the question itself, an author, and additional notes.
* Answers should include the content of the answer and the author.
* Include a header and/or navbar that appears on all pages. It should contain the name of your site and a link to the home page, and other content such as social media, LinkedIn, etc.
* List all questions on the homepage, displaying only the question and the name of the author.
* Allow users to click a question, to be routed to another page containing additional information and question details.
* Allow users to add and edit questions.
* Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.

## Code Specifications
|Behavior-Plain English| Input|	Output|
|---|---|---|
|User inputs their question, notes and name into the fields on the front page and submits with a click on a button.|"How do you solve this?" - "I need help." - "Alice", submit.|The user's submitted question appears on the page and the form hides while the button "Ask a New Question" is displayed.|
|User clicks on the question and is able to go to the question's detal page|Click on a question| Go to the question detail page.|
|User presses the "Update" button and is able to update all the question fields and save updates with "Save Update" button
| Click "Update Question", fill out one or more fields and submit with "Save Update"| "Save Update" button and the form hide while the updated question is displayed.|
|User clicks "New Answer" to add an answer to the question on it's detail page. Fills out the fields and submits it with "Save your Answer"| "I will answer your question"-"Nick", click "Save your Answer"| New answer is displayed under the question.|

## Technologies Used

* Java Script
* Ember
* CSS
* Bootstrap
* Firebase

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <https://github.com/AlenaSG/ask-me-anything.git>` this repository
* `cd ask-me-anything`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
* [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
* [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## License

This software is licensed under MIT license. Copyright (c) 2017 Alena Golovina.
