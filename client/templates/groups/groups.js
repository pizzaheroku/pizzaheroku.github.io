
// list users
Template.groups.helpers({
  usersPiz: function(){
    return Meteor.users.find();
  }
});

// list groups menu
Template.groups.helpers({
  groupsPiz: function(){
    return Groups.find();
  }
});

// add users to base group
Template.groups.events({
  'click .haveUsers': function (event){

    var newGroupUser = event.target.value;

    var groupId = Session.get('groupId');

    Meteor.call('groupsAddUser',newGroupUser,groupId);

  }

});

// select group
Template.groups.events({
  'click .selectGroup': function (event){
    var selectedGroup = event.target.value;
    Session.set('groupId', selectedGroup);
  }
});

// group
Template.groups.helpers({
  selGroup: function(){
    var groupIdselected = Session.get('groupId');
    return Groups.find({_id: groupIdselected});
  }
});

// name with group
Template.groups.helpers({
  selNameGroup: function(){
      // нужно получить просто usersGroup;
    var groupIdselected = Session.get('groupId');
    var test = 123;
    var val = Groups.find({_id: groupIdselected}).fetch();
    var arrayNames = _.pluck(val, 'usersGroup');
    arrayNames = _.flatten(arrayNames,true);
    arrayNames = _.uniq(arrayNames);
    return Meteor.users.find({_id: {$in: arrayNames}});

  }
});

// delete user
Template.groups.events({
  'click .delUserButton': function (event){
    var delUser = event.target.value;
    var groupIdselected = Session.get('groupId');

    Meteor.call('groupsDeluserbatton',delUser,groupIdselected);

  }
});


Template.groups.events({
  'click .delGroup': function (event){
    var iddel = this._id;
    Meteor.call('groupsDelgroup',iddel);

  }
});
