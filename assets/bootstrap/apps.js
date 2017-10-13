   // Initialise the Zendesk JavaScript API client
    // https://developer.zendesk.com/apps/docs/apps-v2
    var client = ZAFClient.init();
    var triggerList = [];
    var triggerSelectList = [];
    
    var ticketFields = [];
    var ticketFieldsSelectList = [];

    var ticketForms = [];
    var ticketFormsSelectList = [];

    var automations = [];
    var automationsSelectList = [];
    // this.doLoading('Sate Padang');
    this.init();

    /*====== DO NOT UNCOMMENT THIS LINE BELOW ======*/
    // // // // // // // // this.deleteAllTicketFields();
    /*====== ** ======*/

    // var ZD_DOMAIN = "";
    // var ZD_TOKEN = "";
    var ZD_DOMAIN = "https://treesdemo11496822632.zendesk.com";
    var ZD_TOKEN = "basic ZWxkaWVuLmhhc21hbnRvQHRyZWVzc29sdXRpb25zLmNvbTpXM2xjb21lMTIz";
    // $('.migrate_button').attr("disabled", "disabled");
    // $('#myModal').modal('show');

    /*=============API PART============*/
    function getUsers(input) {
      var getTickets = {
        url: '/api/v2/users/' + input + '.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function srcUserByEmail_dest(input) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/search.json?query=type:user%20email:' + input,
        type: 'GET',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        cors: true,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getTriggers (input) {
      var getTickets = {
        url: '/api/v2/triggers.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getTicketFields (input) {
      var getTickets = {
        url: '/api/v2/ticket_fields.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getTicketFields_dest (input) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/ticket_fields.json',
        type: 'GET',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true
      }
      console.log(getTickets);
      return getTickets;
    }

    function deleteTicketFields (id) {
      var getTickets = {
        url: '/api/v2/ticket_fields/' + id + '.json',
        type: 'DELETE',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getTicketFieldsbyId (id) {
      var getTickets = {
        url: '/api/v2/ticket_fields/' + id + '.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getBrands (id) {
      var getTickets = {
        url: '/api/v2/brands/' + id + '.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function createTicketFields (input, i) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/ticket_fields.json',
        type: 'POST',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        data: input,
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true,
        success: function(data) {
          console.log(i);
          console.log(data);
        }
      }
      console.log(getTickets);
      return getTickets;
    }

    function getTicketForms (input) {
      var getTickets = {
        url: '/api/v2/ticket_forms.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getTicketForms_dest (input) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/ticket_forms.json',
        type: 'GET',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true
      }
      console.log(getTickets);
      return getTickets;
    }

    function createTicketForms (input) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/ticket_forms.json',
        type: 'POST',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        data: input,
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true,
        success: function(data) {
          console.log(i);
          console.log(data);
        }
      }
      console.log(getTickets);
      return getTickets;
    }

    function getAutomations () {
      var getTickets = {
        url: '/api/v2/automations.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getAutomations_dest () {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/automations.json',
        type: 'GET',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true
      }
      console.log(getTickets);
      return getTickets;
    }

    function createAutomations (input) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/automations.json',
        type: 'POST',
        headers: {
          "Authorization": ZD_TOKEN
        },
        data: input,
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true
      }
      console.log(getTickets);
      return getTickets;
    }

    /*=============FUNCTION PART============*/
    function doSaveConfig(){
      var domain = $('#domain').val();
      var username = $('#usr').val();
      var password = $('#psw').val();
      if (!domain.includes('https://')) {
        ZD_DOMAIN = 'https://' + $('#domain').val();
      } else {
        ZD_DOMAIN = $('#domain').val();
      }
      ZD_TOKEN = 'basic ' + btoa($('#usr').val() + ':' + $('#psw').val());
      console.log(ZD_DOMAIN);
      console.log(ZD_TOKEN);
      $('#myModal').modal('hide');
      $('.migrate_button').removeAttr("disabled");
    }


    function init () {
      var ticketContent = '';
      var formContent = '';
      var automationsContent = '';
      document.getElementById('loader').style.visibility = 'visible';
      document.getElementById('mainContent').style.visibility = 'hidden';
      client.request(this.getTicketFields()).then(
        function(data) {
          console.log(data);
          ticketFields = data.ticket_fields;
          for (var i = 0; i<data.count; i++) {
            ticketContent += '<tr id="' + data.ticket_fields[i].id + '" class="'+i+'" onClick="editData(1, ' + data.ticket_fields[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFeldInput" id="' + data.ticket_fields[i].id + '" type="checkbox"></td>'
            +'<td>' + data.ticket_fields[i].title +'</td>';
            // $('<li id="'+data.ticket_fields[i].id+'" class="normal" onclick="getTicketFieldsSelection('+i+', '+data.ticket_fields[i].id+')"><a href="#">'+data.ticket_fields[i].title+'</a></li>').appendTo( ".custom_fields_list" );
          }
          $('.ticketFieldContent').append(ticketContent);
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
        }, function (errors) {
          console.log(errors);
        });

      /*client.request(this.getTriggers()).then(
        function(data) {
          console.log(data);
          triggerList = data.triggers;
          for (var i = 0; i<data.count; i++) {
            $('<li id="'+data.triggers[i].id+'" class="normal" onclick="getTriggerSelection('+i+', '+data.triggers[i].id+')"><a href="#">'+data.triggers[i].title+'</a></li>').appendTo( ".trigger_list" );
          }
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
        }, function (errors) {
          console.log(errors);
        });*/

      client.request(this.getTicketForms()).then(
        function(data) {
          console.log(data);
          ticketForms = data.ticket_forms;
          for (var i = 0; i<data.count; i++) {
            formContent += '<tr id="' + data.ticket_forms[i].id + '" class="'+i+'" onClick="editData(2, ' + data.ticket_forms[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFormInput" id="' + data.ticket_forms[i].id + '" type="checkbox"></td>'
            +'<td>' + data.ticket_forms[i].raw_name +'</td>';
          }
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
          $('.ticketFormsContent').append(formContent);
        }, function (errors) {
          console.log(errors);
        });

      client.request(getAutomations()).then(
        function(automationsData){
          console.log(automationsData);
          automations = automationsData.automations;
          for (var i=0; i<automationsData.automations.length; i++) {
            automationsContent += '<tr id="' + automationsData.automations[i].id + '" class="'+i+'" onClick="editData(3, ' + automationsData.automations[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFormInput" id="' + automationsData.automations[i].id + '" type="checkbox"></td>'
            +'<td>' + automationsData.automations[i].raw_title +'</td>';
          }
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
          $('.automationContent').append(automationsContent);
        },
        function(automationsError){
          console.log('automationsError');
          console.log(automationsError);
        });
    }

    $("#selectallCheckTicketField").change(function () {
      $("input.ticketFeldInput:checkbox").prop('checked', $(this).prop("checked"));
      
      if ($("#selectallCheckTicketField").prop('checked')) {
        ticketFieldsSelectList = ticketFields;
      } else {
        ticketFieldsSelectList = [];
      }
      console.log(ticketFieldsSelectList);

    });

    $("#selectallCheckTicketForm").change(function () {
      $("input.ticketFormInput:checkbox").prop('checked', $(this).prop("checked"));

      if ($("#selectallCheckTicketForm").prop('checked')) {
        ticketFormsSelectList = ticketForms;
      } else {
        ticketFormsSelectList = [];
      }
      console.log(ticketFormsSelectList);
    });

    function editData (type , id, position) {
      var isExist = false;
      if ($('input[id=' + id + ']')[0].checked == false) {
        $('input[id=' + id + ']')[0].checked = true;
        if (type == 1) {
          for (var i = 0; i<ticketFieldsSelectList.length; i++) {
            if (ticketFieldsSelectList[i].id == id) {
              isExist = true;
            }
          }
          if (!isExist) {
            ticketFieldsSelectList.push(ticketFields[position]);
          }
          
        } else if (type == 2){
          for (var j = 0; j<ticketFormsSelectList.length; j++) {
            if (ticketFormsSelectList[j].id == id) {
              isExist = true;
            }
          }
          if (!isExist) {
            ticketFormsSelectList.push(ticketForms[position]);
          }
        } else if (type == 3) {
          for (var j = 0; j<automationsSelectList.length; j++) {
            if (automationsSelectList[j].id == id) {
              isExist = true;
            }
          }
          if (!isExist) {
            automationsSelectList.push(automations[position]);
          }
        }
      } else {
        if (type == 1) {
          for (var i = 0; i<ticketFieldsSelectList.length; i++) {
            if (ticketFieldsSelectList[i].id == id) {
              ticketFieldsSelectList.splice(i, 1);
            }
          }
        } else if (type == 2) {
          for (var j = 0; j<ticketFormsSelectList.length; j++) {
            if (ticketFormsSelectList[j].id == id) {
              ticketFormsSelectList.splice(j, 1);
            }
          }
        } else if (type == 3) {
          for (var j = 0; j<automationsSelectList.length; j++) {
            if (automationsSelectList[j].id == id) {
              automationsSelectList.splice(j, 1);
            }
          }
        }
        $('input[id=' + id + ']')[0].checked = false;
      }
      isExist = false;
      $('#custom_fieldsCounter').text(ticketFieldsSelectList.length);
      $('#ticketFormsCounter').text(ticketFormsSelectList.length);
      $('#automationCounter').text(automationsSelectList.length);
    }

    function getTriggerSelection (id, triggersId) {
      var notExist = true;
      $('#' + triggersId).prop('class', 'disabled');
      for (var i=0; i<triggerSelectList.length; i++) {
        if (triggerSelectList[i].id == triggersId) {
          notExist = false;
        }
      }
      if (notExist) {
        triggerSelectList.push(triggerList[id]);
      }
      $('#triggCounter').text(triggerSelectList.length);
    }

    /*====== NOT USED =======*/
    function getTicketFieldsSelection (id, ticketFieldsId) {
      var notExist = true;
      $('#' + ticketFieldsId).prop('class', 'disabled');
      for (var i=0; i<ticketFieldsSelectList.length; i++) {
        if (ticketFieldsSelectList[i].id == ticketFieldsId) {
          notExist = false;
        }
      }
      if (notExist) {
        ticketFieldsSelectList.push(ticketFields[id]);
      }
      $('#custom_fieldsCounter').text(ticketFieldsSelectList.length);
    }

    function getTicketFormsSelection (id, ticketFormsId) {
      var notExist = true;
      $('#' + ticketFormsId).prop('class', 'disabled');
      for (var i=0; i<ticketFormsSelectList.length; i++) {
        if (ticketFormsSelectList[i].id == ticketFormsId) {
          notExist = false;
        }
      }
      if (notExist) {
        ticketFormsSelectList.push(ticketForms[id]);
      }
      $('#ticketFormsCounter').text(ticketFormsSelectList.length);
    }
    /*====== NOT USED =======*/

    function doMigrate () {
      var migrateCounter = 0;
      errorMigrate = [];
      /*=====TICKET FIELDS=====*/
      if (ticketFieldsSelectList.length > 0) {
        var tfCounter = 0;
        client.request(getTicketFields_dest()).then(
          function (data){
            console.log('get ticket_fields dest');
            for (var i=0; i<ticketFieldsSelectList.length; i++) {
              var ticketFieldsExist = false;
              for (var j = 0; j< data.ticket_fields.length; j++) {
                if (ticketFieldsSelectList[i].title == data.ticket_fields[j].title) {
                  ticketFieldsExist = true;
                }
              }
              if (!ticketFieldsExist) {
                console.log('ticket_fields notExist');
                var ticketData = new Array({ticket_field:ticketFieldsSelectList[i]});
                client.request(createTicketFields(JSON.stringify(ticketData[0]))).then(
                  function (createData){
                    tfCounter++;
                    console.log(createData);
                    if (tfCounter == ticketFieldsSelectList.length) {
                      console.log('its DONE');
                    }
                  },
                  function (errorCreateData){
                    tfCounter++;
                    if (tfCounter == ticketFieldsSelectList.length) {
                      console.log('its DONE');
                    }
                    console.log('===== error create ticket_fields dest ======');
                    console.log(errorCreateData);
                  });
              } else {
                tfCounter++;
                if (tfCounter == ticketFieldsSelectList.length) {
                  console.log('its DONE');
                }
                console.log('ticket_fields Exist');
              }
            }
          },
          function (errorData){
            console.log('===== errorData get ticket_fields list dest =====');
            console.log(errorData);
          });
      }

      /*=====TICKET FORMS=====*/
      if (ticketFormsSelectList.length > 0) {
        var ticketFormsCounter = -1;
        client.request(getTicketFields_dest()).then(
          function(tfDestData){
            client.request(getTicketForms_dest()).then(
              function (data) {
                for (var i=0; i<ticketFormsSelectList.length; i++) {
                  var newTicketIds = [];
                  var ticketFormExist = false;
                  for (var j=0; j<data.ticket_forms.length; j++) {
                    if (ticketFormsSelectList[i].name == data.ticket_forms[j].name) {
                      ticketFormExist = true;
                    }
                  }
                  if (!ticketFormExist) {
                    console.log('ticket_forms is notExist');
                    console.log('get ticket_fields info');
                    var ticketFieldsCount = 0;
                    for (var k=0; k<ticketFormsSelectList[i].ticket_field_ids.length; k++) {
                      client.request(getTicketFieldsbyId(ticketFormsSelectList[i].ticket_field_ids[k])).then(
                        function(tfDataFrom){
                          var ticket_fieldsExist = false;
                          var ticketId = 0;
                          for (var l=0; l<tfDestData.ticket_fields.length; l++){
                            if (tfDataFrom.ticket_field.title == tfDestData.ticket_fields[l].title){
                              ticket_fieldsExist = true;
                              ticketId = tfDestData.ticket_fields[l].id;
                            }
                          }
                          if (!ticket_fieldsExist) {
                            console.log('ticket_fields is notExist');
                            console.log('creating ticket_fields');
                            var newTicketFields = new Array({ticket_field:tfDataFrom.ticket_field})
                            client.request(createTicketFields(JSON.stringify(newTicketFields[0]))).then(
                              function (createTfData){
                                if (ticketFieldsCount==0) {
                                  ticketFormsCounter++;
                                }
                                newTicketIds.push(createTfData.ticket_field.id);
                                ticketFieldsCount++;
                                if (ticketFieldsCount == ticketFormsSelectList[ticketFormsCounter].ticket_field_ids.length) {
                                  console.log('ticket fields done');
                                  ticketFormsSelectList[ticketFormsCounter].ticket_field_ids = newTicketIds;
                                  var ticketForms = new Array({ticket_form:ticketFormsSelectList[ticketFormsCounter]})
                                  client.request(createTicketForms(JSON.stringify(ticketForms[0]))).then(
                                    function (createFormData){
                                      console.log(createFormData);
                                    },
                                    function (errorCreateFormData) {
                                      console.log('===== error create ticket_forms dest =====');
                                      console.log(errorCreateFormData);
                                    });
                                  newTicketIds = [];
                                }
                              },
                              function (errorCreateTfData) {
                                console.log('===== error create ticket_fields dest ======');
                                console.log(errorCreateTfData);
                              });
                          } else {
                            if (ticketFieldsCount==0) {
                              ticketFormsCounter++;
                            }
                            ticketFieldsCount++;
                            newTicketIds.push(ticketId);
                            console.log('ticket_fields isExist');
                            if (ticketFieldsCount == ticketFormsSelectList[ticketFormsCounter].ticket_field_ids.length) {
                              console.log('ticket fields done');
                              ticketFormsSelectList[ticketFormsCounter].ticket_field_ids = newTicketIds;
                              var ticketForms = new Array({ticket_form:ticketFormsSelectList[ticketFormsCounter]});
                              client.request(createTicketForms(JSON.stringify(ticketForms[0]))).then(
                                function (createFormData){
                                  console.log(createFormData);
                                },
                                function (errorCreateFormData) {
                                  console.log('===== error create ticket_forms dest =====');
                                  console.log(errorCreateFormData);
                                });
                              newTicketIds = [];
                            }
                          }
                        },
                        function(errorTfDataFrom){
                          console.log('====== error data get ticket_fields info ======');
                          console.log(errorTfDataFrom);
                        });
                    }
                  } else {
                    console.log('ticket_forms Exist');
                  }
                }
              },
              function (errorData){
                console.log('===== error get ticket_forms dest ======');
                console.log(errorData);
              });
          },
          function (errorTfDestData){

          });
        
      }

      /*=====TRIGGERS=====*/
      if (triggerSelectList.length > 0) {
        
      }

      /*=====AUTOMATIONS=====*/
      if (automationsSelectList.length > 0) {
        var newNotifAutomationsSelectList = [];
        var newCustFieldAutomationsSelectList = [];
        console.log(automationsSelectList);
        client.request(getAutomations_dest()).then(
          function(automationDestData){
            console.log(automationDestData);
            for (var i=0; i<automationsSelectList.length; i++){
              var isNotifiedUsers = false;
              var isThereisTicketFields = false;
              var isExist = false;
              for (var j=0; j<automationDestData.automations.length; j++) {
                if (automationsSelectList[i].raw_title == automationDestData.automations[j].raw_title){
                  isExist = true;
                }
              }
              if (!isExist) {
                if (automationsSelectList[i].actions.length > 0){
                  for (var ac=0; ac<automationsSelectList[i].actions.length; ac++) {
                    if (automationsSelectList[i].actions[ac].field == 'notification_user') {
                      for (var v=0; v<automationsSelectList[i].actions[ac].value.length; v++) {
                        if (isNumeric(automationsSelectList[i].actions[ac].value[v])) {
                          isNotifiedUsers = true;
                        }
                      }
                    }
                    if (automationsSelectList[i].actions[ac].field.includes('custom_fields_') 
                      || automationsSelectList[i].actions[ac].field.includes('ticket_fields_')) {
                      isThereisTicketFields = true;
                    }
                  }
                  if (!isNotifiedUsers && !isThereisTicketFields) {
                    console.log('CREATE AUTOMATIONS WITH NO NOTIFY USERS OR TICKET_FIELDS: ');
                    var createAuto = new Array({automation:automationsSelectList[i]});
                    console.log(createAuto);
                    doCreateAutomations(JSON.stringify(createAuto[0]));
                  } else if (isNotifiedUsers && !isThereisTicketFields) {
                    var automationsNotify = automationsSelectList[i];
                    var notifActionCounter = 0;
                    for (var acn=0; acn<automationsNotify.actions.length; acn++) {
                      if (automationsNotify.actions[acn].field == 'notification_user') {
                        var actionIndex = acn;
                        var acnValueIndex = '';
                        var userId = '';

                        for (var acnv=0; acnv<automationsNotify.actions[acn].value.length; acnv++) {
                          if (isNumeric(automationsNotify.actions[acn].value[acnv])) {
                            acnValueIndex = acnv;
                            userId = automationsNotify.actions[acn].value[acnv];
                          }
                        }
                        client.request(getUsers(userId)).then(
                          function(usersData){
                            if (usersData.user.email != null || usersData.user.email != '') {
                              console.log('===== SEARCHING USER ======');
                              client.request(srcUserByEmail_dest(usersData.user.email)).then(
                                function(srcUserData){
                                  notifActionCounter++;
                                  console.log('===== USER FOUND ======');
                                  if (notifActionCounter == automationsNotify.actions.length) {
                                    console.log('===== CREATE AUTOMATIONS NOTIFY USERS ======');
                                    automationsNotify.actions[actionIndex].value[acnValueIndex] = srcUserData.results[0].id;
                                    console.log(automationsNotify);
                                    var createAuto = new Array({automation:automationsNotify});
                                    console.log(createAuto);
                                    doCreateAutomations(JSON.stringify(createAuto[0]));
                                  }
                                },
                                function(srcUserError){
                                  console.log('===== srcUserError =====');
                                  console.log(srcUserError);
                                })
                            }
                          },
                          function(usersError){
                            console.log('===== usersError =====');
                            console.log(usersError);
                          });
                      } else {
                        notifActionCounter++;
                      }
                    }
                  } else if (isThereisTicketFields && !isNotifiedUsers) {
                    var automationsTicketField = automationsSelectList[i];
                    client.request(getTicketFields_dest()).then(
                      function(tfDataDest){
                        var ticketFieldsIndex = -1;
                        for (var atf=0; atf<automationsTicketField.actions.length; atf++) {
                          if (automationsTicketField.actions[atf].field.includes('custom_fields_')) {
                            var ticketFields = automationsTicketField.actions[atf].field.split('_');
                            client.request(getTicketFieldsbyId(ticketFields[2])).then(
                              function(ticketFieldsData){
                                ticketFieldsIndex++;
                                for (tfd in tfDataDest.ticket_fields) {
                                  if (ticketFieldsData.ticket_field.title == tfDataDest.ticket_fields[tfd].title) {
                                    automationsTicketField.actions[ticketFieldsIndex].field = 'custom_fields_' + tfDataDest.ticket_fields[tfd].id;
                                  }
                                }
                                if (ticketFieldsIndex == automationsTicketField.actions.length-1) {
                                  console.log('===== CREATE AUTOMATIONS TICKET_FIELDS =====');
                                  var createAuto = new Array({automation:automationsTicketField});
                                  console.log(createAuto);
                                  doCreateAutomations(JSON.stringify(createAuto[0]));
                                }
                              },
                              function(ticketFieldsError){
                                console.log('===== ticketFieldsError =====');
                                console.log(ticketFieldsError);
                              });
                          } else {
                            ticketFieldsIndex++;
                            if (ticketFieldsIndex == automationsTicketField.actions.length-1) {
                              console.log('TICKET FIELDS FINIS');
                              console.log(automationsTicketField);
                            }
                          }
                        }
                      },
                      function(tfDataDestError){
                        console.log('===== tfDataDestError =====');
                        console.log(tfDataDestError);
                      });
                  }
                } else {
                  console.log('CREATE AUTOMATIONS WITH NO ACTIONS: ');
                  console.log(automationsSelectList[i]);
                  var createAuto = new Array({automation:automationsSelectList[i]});
                  console.log(createAuto);
                  doCreateAutomations(JSON.stringify(createAuto[0]));
                }
                /*OLD FLOW*/
                // console.log(automationsSelectList[i].actions);
                // if (automationsSelectList[i].actions.length > 0) {
                //   var autoActions = automationsSelectList[i].actions;
                //   var thereIsNotfUser = false;
                //   for (actions in autoActions) {
                //     if (autoActions[actions].field == 'notification_user') {
                //       thereIsNotfUser = true;
                //       /*for (var k=0; k<autoActions[actions].value.length; k++) {
                //         if (k == 0) {
                //           console.log(autoActions[actions].value[k]);
                //           if (isNumeric(autoActions[actions].value[k])){
                //             client.request(getUsers(autoActions[actions].value[k])).then(
                //               function(userData){
                //                 console.log(userData);
                //                 if (userData.user.email != null || userData.user.email != '') {
                //                   client.request(srcUserByEmail_dest(userData.user.email)).then(
                //                     function(srcUserData){
                //                       console.log(srcUserData);
                //                       console.log(automationsSelectList[i]);
                //                     },
                //                     function(srcUserError){
                //                       console.log('===== srcUserError =====');
                //                       console.log(srcUserError);
                //                     });
                //                 }
                //               },
                //               function(userError){
                //                 console.log('===== userError =====');
                //                 console.log(userError);
                //               });
                //           }
                //         }
                //       }*/
                //     }
                //     if (autoActions[actions].field.includes('custom_fields_') 
                //       || autoActions[actions].field.includes('ticket_fields_')) {
                //       thereIsNotfUser = true;
                //     }
                //   }
                //   if (!thereIsNotfUser) {
                //     /*===== CREATING AUTOMATIONS =====*/
                //     /*===== NO NOTIFY USER =====*/
                //     var createAuto = new Array({automation:automationsSelectList[i]});
                //     console.log(createAuto);
                //     console.log('CREATING AUTOMATIONS NO NOTIFY USER');
                //     doCreateAutomations(JSON.stringify(createAuto[0]));
                //   } else {
                //     var notfUserRequester = true;
                //     for (actions in autoActions) {
                //       for (var k=0; k<autoActions[actions].value.length; k++) {
                //         if (k==0) {
                //           if (isNumeric(autoActions[actions].value[k])){
                //             notfUserRequester = false;
                //           }
                //         }
                //       }
                //     }
                //     if (notfUserRequester) {
                //       /*===== CREATING AUTOMATIONS =====*/
                //       /*===== NOTIFICATION USER REQUESTER PLACEHOLDER ======*/
                //       var createAuto = new Array({automation:automationsSelectList[i]});
                //       console.log(createAuto);
                //       console.log('CREATING AUTOMATIONS USER REQUESTER PLACEHOLDER');
                //       doCreateAutomations(JSON.stringify(createAuto[0]));
                //     } else {
                //       /*===== AUTOMATIONS SULIT ======*/
                //       console.log('AUTOMATIONS SULIT');
                //       newNotifAutomationsSelectList.push(automationsSelectList[i]);
                //     }
                //   }
                // } else {
                //   /*===== CREATING AUTOMATIONS =====*/
                //   /*===== NO ACTION ON AUTOMATIONS ======*/
                //   var createAuto = new Array({automation:automationsSelectList[i]});
                //   console.log(createAuto);
                //   console.log('CREATING AUTOMATIONS NO ACTION');
                //   doCreateAutomations(JSON.stringify(createAuto[0]));
                // }
                /*OLD FLOW*/
              }
            }
            /*OLD FLOW*/
            // console.log(newNotifAutomationsSelectList);
            // var autoCounter = -1;
            // for (var n=0; n<newNotifAutomationsSelectList.length; n++){
            //   var actionCounter = -1;
            //   for (var ac=0; ac<newNotifAutomationsSelectList[n].actions.length; ac++){
            //     actionCounter++;
            //     if (newNotifAutomationsSelectList[n].actions[ac].field == 'notification_user')  {
            //       autoCounter++;
            //       var notifCounter = actionCounter;
            //       var actions = newNotifAutomationsSelectList[n].actions[ac].value;
            //       var actionValueCounter = -1;
            //       for (values in actions) {
            //         if (isNumeric(actions[values])) {
            //           actionValueCounter++;
            //           var newAutomations = actions[values];
            //           client.request(getUsers(actions[values])).then(
            //             function(userData){
            //               console.log(userData);
            //               if (userData.user.email != null || userData.user.email != '') {
            //                 client.request(srcUserByEmail_dest(userData.user.email)).then(
            //                   function(srcUserData){
            //                     // console.log(autoCounter);
            //                     // console.log(newNotifAutomationsSelectList[autoCounter]);
            //                     // console.log('USER FOUND');
            //                     // console.log(srcUserData);
            //                     newNotifAutomationsSelectList[autoCounter].actions[notifCounter].value[actionValueCounter] = srcUserData.results[0].id;
            //                     // console.log(newNotifAutomationsSelectList);

            //                     var createAuto = new Array({automation:newNotifAutomationsSelectList[autoCounter]});
            //                     console.log(createAuto);
            //                     console.log('CREATING AUTOMATIONS NOTIFY USERS');
            //                     doCreateAutomations(JSON.stringify(createAuto[0]));
            //                   },
            //                   function(srcUserError){
            //                     console.log('===== srcUserError =====');
            //                     console.log(srcUserError);
            //                   });
            //               }
            //             },
            //             function(userError){
            //               console.log('===== userError =====');
            //               console.log(userError);
            //             });
            //         }
            //       }
            //     } else if (autoActions[actions].field.includes('custom_fields_') 
            //           || autoActions[actions].field.includes('ticket_fields_')) {
            //       autoCounter++;
            //     }
            //   }
            // }
            /*OLD FLOW*/
          },
          function(automationDestError){
            console.log('====== automationDestError ======');
            console.log(automationDestError);
          });
      }
    }

    function doCreateAutomations (parameter) {
      client.request(createAutomations(parameter)).then(
        function(createAutomationsData){
          console.log(createAutomationsData);
        },
        function(createAutomationsError){
          console.log('===== createAutomationsError =====');
          console.log(createAutomationsError);
        });
    }

    function doCreateTicketForm (newTicketIds, ticketCount) {
      /*DO_CREATE_TICKET_FORM*/
      ticketFormsSelectList[ticketCount].ticket_field_ids = newTicketIds;
      var ticketForms = new Array({ticket_form:ticketFormsSelectList[ticketCount]});
      $.ajax({
        url: ZD_DOMAIN + '/api/v2/ticket_forms.json',
        type: 'POST',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        data: JSON.stringify(ticketForms[0]),
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true,
        success: function(data) {
          console.log(data);
          if (ticketCount == (ticketFormsSelectList.length-1)) {
            ticketFormsSelectList = [];
            $('#ticketFormsCounter').text(ticketFormsSelectList.length);
            console.log(errorMigrate);
          }
        },
        error: function (errors) {
          console.log(errors);
          if (errors.responseJSON === undefined) {
            errorMigrate.push({
              name: ticketFormsSelectList[ticketCount].title,
              errors: errors.statusText
            });
          } else {
            errorMigrate.push({
              name: ticketFormsSelectList[ticketCount].title,
              errors: errors.responseJSON.details.base[0].description
            });
          }
          if (ticketCount == (ticketFormsSelectList.length-1)) {
            ticketFormsSelectList = [];
            $('#ticketFormsCounter').text(ticketFormsSelectList.length);
            console.log(errorMigrate);
          }
        }
      });
    }

    function showResult(migrateCounter, errorMigrate) {
      $('.errorList').empty();
      if (errorMigrate.length > 0) {
        for (var i=0; i<errorMigrate.length; i++) {
          $('<li><b>'+errorMigrate[i].name+'</b>: '+errorMigrate[i].errors+'</li>').appendTo('.errorList');
        }
      } else {
        $('.spanError').text('Migret process is done.. !');
      }
      $('#myModalResult').modal('show');
    }

    function deleteAllTicketFields () {
      client.request(getTicketFields()).then(
        function (data){
          console.log(data);
          for (var i=0; i<data.ticket_fields.length; i++) {
            if (data.ticket_fields[i].removable) {
              if (data.ticket_fields[i].title != 'Type') {
                if (data.ticket_fields[i].title != 'Priority') {
                  console.log(data.ticket_fields[i].title);
                  client.request(deleteTicketFields(data.ticket_fields[i].id)).then(
                    function (deleteData){
                      console.log(deleteData);
                    },
                    function(errorDeleteData){
                      console.log(errorDeleteData);
                    });
                }
              }
            }
          }
        },
        function (errorData){
          console.log(errorData);
        });
    }

    function doLoading (type, message) {

      /*CHECK IF MODAL SHOWN OR HIDDEN*/
      if ($('#modal_loading').hasClass('in')) {
        $('.spanLoadMsg').text('Processing:  ' + message);
        $('.spanLoadType').text(type);
      } else {
        $('#modal_loading').modal('show');
      }

    }

    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
