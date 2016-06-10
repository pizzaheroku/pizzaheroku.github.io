// Name event creator
Template.eventspizza.helpers({
  createManipulation: function(){
    var name = Meteor.user().username;
    if(name == undefined){
        name = Meteor.user().profile.name;
    }
    return Eventspizza.find({'creator': name});
  }
});
// ordering
Template.eventspizza.events({
  "submit .apply": function(event){
    var idEvent = event.target.idEvent;
    var newStatus = event.target.newStatus;
    var length = idEvent.length;

    var name = Meteor.user().username;
    if(name == undefined){
        name = Meteor.user().profile.name;
    }

    // задаем прошлый статус
    if(length == undefined){
      var oldStatus = newStatus.value;
    }else{
      var oldStatus = newStatus[0].value;
    }


    var status;
    if(oldStatus == "Confirmed"){
      status = "Ordering";
    }else if(oldStatus == "Ordering"){
      status = "Ordered";
    }
    else if(oldStatus == "Ordered"){
      status = "Delivery";
    }
    else if(oldStatus == "Delivery"){
      status = "Delivered";
    }



    var i = 0
    var idEventValue = 0;
          if(length == undefined){
            idEventValue = idEvent.value;

              Meteor.call('eventspizzaStatus',status,idEventValue);
        }else{
          while(i < length){
            idEventValue = idEvent[i].value
              Meteor.call('eventspizzaStatus',status,idEventValue);

            i++;
          }
        }
     if(oldStatus == "Delivered"){

       var i = 0
             if(length == undefined){
               idEventValue = idEvent.value;
                 Meteor.call('eventspizzaDelete',idEventValue);
           }else{
             while(i < length){
               idEventValue = idEvent[i].value;
                 Meteor.call('eventspizzaDelete',idEventValue);
               i++;
             }
           }
     }
    return false;



  }

});
// Yes or No
Template.eventspizza.helpers({
  eventsSelect: function(){
    var name = Meteor.user().username;
    if(name == undefined){
        name = Meteor.user().profile.name;
    }

    return Eventspizza.find({'nameUser': name});
  }
});

Template.eventspizza.events({
  "submit .eventsAnswer": function(event){
    var idEvent = event.target.idEvent;

    var length = idEvent.length;

    var i = 0
          if(length == undefined){
            idEventValue = idEvent.value;
            Meteor.call('eventspizzaAnswer',idEventValue);

        }else{
          while(i < length){
            idEventValue = idEvent[i].value;
            Meteor.call('eventspizzaAnswer',idEventValue);


            i++;
          }
        }
    return false;
  }
});

Template.eventspizza.events({
  'click .delEvent': function (event){
    var iddel = this._id;
    Meteor.call('eventspizzaDelevent',iddel);
    
  }
});
