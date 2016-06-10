// id section
Template.menu.events({
  'click .seeMenu': function (event){
  var valueid = event.target.value;
  Session.set('valueid', valueid);
  }
});

// menu
Template.menu.helpers({

  menuSelect: function(){
    var select = Session.get('valueid');
    return Menu.find({"section": select});
   }

});

// have menu
Template.menu.helpers({

  menuSelectAll: function(){
    var allMenu = UsersMenu.find().fetch();
    var allMenupl = _.pluck(allMenu, 'nameMenu')
    return uniqAllMenu = _.uniq(allMenupl);
   }

});
// name menu users

Template.menu.events({
'submit .nameMenu': function (event){
var newMenu = event.target.newMenu.value;
var selectMenu = event.target.selectMenu.value;
if(selectMenu == "select menu"){
  nameMenu = newMenu;
}else{
  nameMenu = selectMenu;
}

Session.set('menuName', nameMenu);
return false;
}
});

// add menu to users menu
Template.menu.events({
  'submit .addUserMenu': function (event){
    var nameUser = prompt('Name user?', ""); // аналог промпт сделать

    var nameEat = event.target.name.value;
    var bulk = event.target.bulk.value;
    var cost = event.target.cost.value;
    var id = event.target.id.value;
    var img = event.target.img.value;

    var groupIdselected = Session.get('groupId');
    var menuName = Session.get('menuName');
    if(menuName == undefined || nameUser == undefined){
      alert("Error: Select the menu or user");
    }else{

    Meteor.call('addUserMenu',groupIdselected,menuName,nameEat,bulk,cost,img,id,nameUser);

    }
    return false;

  }
})

Template.menu.helpers({

  menuUser: function(){
    var menuName = Session.get('menuName');
    return UsersMenu.find({"nameMenu": menuName}).fetch();

   }

});

Template.menu.helpers({

  menuName: function(){
    return Session.get('menuName');
   }

});

Template.menu.helpers({
  usersPiz: function(){
    return Meteor.users.find();
  }
});


Template.menu.events({
  'click .delMenuElement': function (event){
    var iddel = this._id;
    Meteor.call('delMenuElement',iddel);
  }
});
