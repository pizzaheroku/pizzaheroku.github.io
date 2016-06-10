Template.layout.helpers({
  myname: function(){
    var name = Meteor.user().username;
    if(name == undefined){
        name = Meteor.user().profile.name;
    }

    return name;
  }

})
