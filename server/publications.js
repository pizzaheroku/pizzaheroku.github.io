Meteor.publish("groups", function () {
return Groups.find();
      });

Meteor.publish("users", function () {
  return Meteor.users.find();
      });

Meteor.publish("menu", function () {
  return Menu.find();
      });

Meteor.publish("usersMenu", function () {
  return UsersMenu.find();
            });

Meteor.publish("eventspizza", function () {
  return Eventspizza.find();
                        });

Meteor.publish("GroupsImages", function () {
  return GroupsImages.find();
                       });
