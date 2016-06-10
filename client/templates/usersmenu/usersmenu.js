// list groups
Template.usersmenu.events({
  'click .selectGroup': function (event){
    var selectedGroup = event.target.value;
    Session.set('groupIdnew', selectedGroup);
  }
});

// name groups
Template.usersmenu.helpers({
  menuSelectAll: function(){
    var groupIdselected = Session.get('groupIdnew');
    var val = UsersMenu.find({'idGroup': groupIdselected}).fetch();
    var allNameMenu = _.pluck(val,'nameMenu')
    return uniqAllMenu = _.uniq(allNameMenu);


  }
});

// list menu
Template.usersmenu.events({
  'click .selectMenu': function (event){
    var selectedMenu = event.target.value;
    Session.set('newname', selectedMenu);
  }
});


Template.usersmenu.helpers({
  groupsPiz: function(){
    return Groups.find();
  }
});



// group selected
Template.usersmenu.helpers({
  menuSelect: function(){
    var menuname = Session.get('newname');
    return UsersMenu.find({"nameMenu": menuname});
  }
});
// new events
Template.usersmenu.events({
'submit .newEvent': function (event){

  var idGroup = event.target.idGroup;
  var nameMenu = event.target.nameMenu;
  var name = event.target.name;
  var bulk = event.target.bulk;
  var cost = event.target.cost;
  var img = event.target.img;
  var id = event.target.id;
  var nameUser = event.target.nameUser;
  var length = cost.length;

  var realDate = new Date();
  var date = realDate.toLocaleDateString();
  var i = 0

  var creator = Meteor.user().username;
  if(creator == undefined){
      creator = Meteor.user().profile.name;
  }

  while(i < length){
  Eventspizza.insert({
      "idGroup": idGroup[i].value,
      "nameMenu": nameMenu[i].value,
      "name": name[i].value,
      "bulk": bulk[i].value,
      "cost": cost[i].value,
      "img": img[i].value,
      "id": id[i].value,
      "nameUser": nameUser[i].value,
      "statusUser": 1,
      "date": date,
      "creator": creator
  });
  
  i++;
  }
  alert("Event created");
  return false;
}
});
