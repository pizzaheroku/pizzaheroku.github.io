
/*eventspizza*/

Meteor.methods({
  eventspizzaStatus: function(status,idEventValue) {
    Eventspizza.update({_id: idEventValue},
      {$set: {"statusUser": status}}
    );

  }
});

Meteor.methods({
  eventspizzaDelete: function(idEventValue) {
    Eventspizza.remove({_id: idEventValue});
  }
});

Meteor.methods({
  eventspizzaAnswer: function(idEventValue) {
    Eventspizza.update({_id: idEventValue},
      {$set: {"statusUser": "Confirmed"}});

  }
});

Meteor.methods({
  eventspizzaDelevent: function(iddel) {
    Eventspizza.remove(iddel);

  }
});

/* groups */


Meteor.methods({
  groupsAddUser: function(newGroupUser,groupId) {
    Groups.update({_id: groupId},
    {$push: {"usersGroup": newGroupUser}});

  }
});

Meteor.methods({
  groupsDeluserbatton: function(delUser,groupIdselected) {
    Groups.update({_id: groupIdselected},
    {$pull: {"usersGroup": delUser}});

  }
});

Meteor.methods({
  groupsDelgroup: function(iddel) {

    Groups.remove(iddel)
  }
});

/* menu */

Meteor.methods({
  addUserMenu: function(groupIdselected,menuName,nameEat,bulk,cost,img,id,nameUser) {
    UsersMenu.insert({
      "idGroup": groupIdselected,
      "nameMenu": menuName,
      "name": nameEat,
      "bulk": bulk,
      "cost": cost,
      "img": img,
      "id": id,
      "nameUser": nameUser
    });
  }
});


Meteor.methods({
  delMenuElement: function(iddel) {

    UsersMenu.remove(iddel)
  }
});
