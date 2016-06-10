Template.main.events({
  "submit .add_group": function(event){
      var file = $('#groupImage').get(0).files[0];
      var nameGroup = event.target.nameGroup.value;
      var userId = Meteor.userId();
      if(file){
          fsFile = new FS.File(file);
          GroupsImages.insert(fsFile, function(err,result){
            if(!err){
              var groupImage = '/cfs/files/GroupsImages/'+result._id;
              Groups.insert({
                image: groupImage,
                userId: Meteor.userId(),
                usersGroup: Array,
                nameGroup: nameGroup,
                createdAt: new Date()
              });
            }
          });
      }else{


        Groups.insert({
          userId: Meteor.userId(),
          usersGroup: Array,
          nameGroup: nameGroup,
          createdAt: new Date()
        });


      }
      Router.go('groups');
      return false;

  }

});

Template.main.helpers({
  tes: function(){
    return Groups.find();;
  }
});
