import Ember from 'ember';

var questions = [{
  id: 1,
  author: "David Copkin",
  content: "How do you start an app with Ember?",
  notes: "I'm new to programming and I need some guidance."
}, {
  id: 1,
  author: "Cindy Williams",
  content: "Has anyone resolved this kind of error?",
  notes: "Not found. 404"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
