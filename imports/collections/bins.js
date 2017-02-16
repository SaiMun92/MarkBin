import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },

  'bins.update': function(bin, content) {
    return Bins.update(bin._id, { $set: { content } });
  },

  'bins.share': function(bin, email) {
    return Bins.update(bin._id, { $push: { sharedWith: email }});
  }
});

// The $set operator updates the specific content in the db while the $push operator appends a
// specific value to the array.
export const Bins = new Mongo.Collection('bins');
