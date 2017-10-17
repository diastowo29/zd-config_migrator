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

    var slas = [];
    var slaSelectList = [];
    // this.doLoading('Sate Padang');
    this.init();
    // this.initsss();

    /*====== DO NOT UNCOMMENT THIS LINE BELOW ======*/
    // // // // // // // // this.deleteAllTicketFields();
    /*====== ** ======*/

    var ZD_DOMAIN = "";
    var ZD_TOKEN = "";
    // var ZD_DOMAIN = "https://treesdemo11496822632.zendesk.com";
    // var ZD_TOKEN = "basic ZWxkaWVuLmhhc21hbnRvQHRyZWVzc29sdXRpb25zLmNvbTpXM2xjb21lMTIz";
    $('.migrate_button').attr("disabled", "disabled");
    $('#myModal').modal('show');

    function initsss () {
      var sjson = {
        "ticket_form" : {
          "name": "diastowo",
          "end_user": "faryduana"
        }
      }
      console.log(sjson);
      // for (var i=0; i<10; i++) {
      //   if (i==3) {
      //     (function(ctr){
      //       client.request(getAutomations()).then(
      //         function(data){
      //           console.log(data);
      //           console.log(ctr);
      //         },
      //         function(errorData){
      //           console.log(errorData);
      //         });
      //     })(i);
      //   }
      // }
    }

    /*=============API PART============*/

    /*USERS PART*/
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
    /*USERS PART*/

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

    /*TICKET FIELDS PART*/
    function getTicketFields (input) {
      var getTickets = {
        url: '/api/v2/ticket_fields.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        timeout: 1000
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
    /*TICKET FIELDS PART*/

    /*TICKET FORMS PART*/
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
    /*TICKET FORMS PART*/

    /*AUTOMATIONS PART*/
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
    /*AUTOMATIONS PART*/

    /*GROUP PART*/
    function getGroups (id) {
      var getTickets = {
        url: '/api/v2/groups/' + id + '.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function srcGroups_dest (input) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/search.json?query=type:group%20name:' + input,
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
    /*GROUP PART*/

    /*SLA PART*/
    function getSla () {
      var getTickets = {
        url: '/api/v2/slas/policies.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function srcSla_dest () {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/slas/policies.json',
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

    function createSla_dest (parameter) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/slas/policies.json',
        type: 'POST',
        headers: {
          "Authorization": ZD_TOKEN
        },
        data: parameter,
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        cors: true,
      }
      console.log(getTickets);
      return getTickets;
    }
    /*SLA PART*/


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
      var slaContent = '';
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

      client.request(getSla()).then(
        function(slaData){
          console.log(slaData);
          slas = slaData.sla_policies;
          for (slas in slaData.sla_policies){
            slaContent += '<tr id="' + slaData.sla_policies[slas].id + '" class="'+slas+'" onClick="editData(4, ' + slaData.sla_policies[slas].id + ', ' + slas + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFormInput" id="' + slaData.sla_policies[slas].id + '" type="checkbox"></td>'
            +'<td>' + slaData.sla_policies[slas].title +'</td>';
          }
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
          $('.slaContent').append(slaContent);
        },
        function(slaError){
          console.log('slaError');
          console.log(slaError);
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
        } else if (type == 4) {
          for (var j = 0; j<slaSelectList.length; j++) {
            if (slaSelectList[j].id == id) {
              isExist = true;
            }
          }
          if (!isExist) {
            slaSelectList.push(slas[position]);
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
        } else if (type == 4) {
          for (var j = 0; j<slaSelectList.length; j++) {
            if (slaSelectList[j].id == id) {
              slaSelectList.splice(j, 1);
            }
          }
        }
        $('input[id=' + id + ']')[0].checked = false;
      }
      isExist = false;
      $('#custom_fieldsCounter').text(ticketFieldsSelectList.length);
      $('#ticketFormsCounter').text(ticketFormsSelectList.length);
      $('#automationCounter').text(automationsSelectList.length);
      $('#slaCounter').text(slaSelectList.length);
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
        client.request(getTicketFields()).then(
          function(ticketFieldsData){
            client.request(getTicketFields_dest()).then(
              function(ticketFieldsDestData){
                client.request(getTicketForms_dest()).then(
                  function(ticketFormsDestData){
                    for (var i=0; i<ticketFormsSelectList.length; i++){
                      var isExist = false;
                      for (var j=0; j<ticketFormsDestData.ticket_forms.length; j++) {
                        if (ticketFormsSelectList[i].name == ticketFormsDestData.ticket_forms[j].name) {
                          isExist = true;
                        }
                      }
                      if (!isExist) {
                        var ticketFieldsExist = false;
                        var ticketFieldsCounter = 0;
                        var ticketFieldsFrom = '';
                        var newTicketIds = [];
                        for (var tf=0; tf<ticketFormsSelectList[i].ticket_field_ids.length; tf++){
                          for (var tfFrom=0; tfFrom<ticketFieldsData.ticket_fields.length; tfFrom++) {
                            if (ticketFormsSelectList[i].ticket_field_ids[tf] == ticketFieldsData.ticket_fields[tfFrom].id) {
                              ticketFieldsFrom = ticketFieldsData.ticket_fields[tfFrom];
                            }
                          }
                          for (var tfDest=0; tfDest<ticketFieldsDestData.ticket_fields.length; tfDest++){
                            if (ticketFieldsFrom.title == ticketFieldsDestData.ticket_fields[tfDest].title) {
                              ticketFieldsExist = true;
                              newTicketIds.push(ticketFieldsDestData.ticket_fields[tfDest].id);
                            }
                          }
                          if (ticketFieldsExist) {
                            ticketFieldsCounter++;
                          } else {
                            console.log('===== have to create some ticket fields =====');
                          }
                          ticketFieldsExist = false;
                        }
                        if (ticketFieldsCounter == ticketFormsSelectList[i].ticket_field_ids.length) {
                          ticketFormsSelectList[i].ticket_field_ids = newTicketIds;
                          console.log('===== done processing ticket fields ======');
                          console.log(ticketFormsSelectList[i]);
                          var ticketForms = new Array({ticket_form:ticketFormsSelectList[i]});
                          console.log(ticketForms);
                          client.request(createTicketForms(JSON.stringify(ticketForms[0]))).then(
                            function(createData){
                              console.log('===== CREATE SUCCESS =====');
                              console.log(createData);
                            },
                            function(createError){
                              console.log('===== createError =====');
                              console.log(createError);
                            });
                          newTicketIds = [];
                        }
                      } else {
                        console.log('===== ticket forms is exist =====');
                      }
                    }
                  },
                  function(ticketFormsDestError){

                  });
              },
              function(ticketFieldsDestError){
                console.log('ticketFieldsDestError');
                console.log(ticketFieldsDestError);
              });
          },
          function(ticketFieldsError){
            console.log('ticketFieldsError');
            console.log(ticketFieldsError);
          });
        /*var ticketFormsCounter = -1;
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
        */
      }

      /*=====TRIGGERS=====*/
      if (triggerSelectList.length > 0) {
        
      }

      /*=====AUTOMATIONS=====*/
      if (automationsSelectList.length > 0) {
        client.request(getTicketFields_dest()).then(
          function(ticketFieldsDestData){
            for (var i=0; i<automationsSelectList.length; i++) {
            console.log(automationsSelectList[i]);
            if (automationsSelectList[i].conditions.all.length > 0){
              (function(counterI){
                for (var cll=0; cll<automationsSelectList[i].conditions.all.length; cll++) {
                  if (automationsSelectList[i].conditions.all[cll].field.includes('group_id')) {
                    (function(counterJ){
                      client.request(getGroups(automationsSelectList[i].conditions.all[cll].value)).then(
                        function(groupData){
                          if (groupData.group.name != null || groupData.group.name != '') {
                            client.request(srcGroups_dest(groupData.group.name)).then(
                              function(srcGroupDataDest){
                                automationsSelectList[counterI].conditions.all[counterJ].value = srcGroupDataDest.results[0].id;
                              },
                              function(srcGroupDataDestError){
                                console.log('=== FAILED SEARCH GROUP ===');
                                console.log(srcGroupDataDestError);
                              });
                          }
                        },
                        function(groupError){
                          console.log('=== FAILED GET GROUP');
                          console.log(groupError);
                        });
                    })(cll);
                  }
                }
              })(i);
            }
            if (automationsSelectList[i].conditions.any.length > 0) {
              (function(counterI){
                for (var cll=0; cll<automationsSelectList[i].conditions.any.length; cll++) {
                  if (automationsSelectList[i].conditions.any[cll].field.includes('group_id')) {
                    (function(counterJ){
                      client.request(getGroups(automationsSelectList[i].conditions.any[cll].value)).then(
                        function(groupData){
                          if (groupData.group.name != null || groupData.group.name != '') {
                            client.request(srcGroups_dest(groupData.group.name)).then(
                              function(srcGroupDataDest){
                                automationsSelectList[counterI].conditions.any[counterJ].value = srcGroupDataDest.results[0].id;
                              },
                              function(srcGroupDataDestError){
                                console.log('=== FAILED SEARCH GROUP ===');
                                console.log(srcGroupDataDestError);
                              });
                          }
                        },
                        function(groupError){
                          console.log('=== FAILED GET GROUP');
                          console.log(groupError);
                        });
                    })(cll); 
                  }
                }
              })(i);
            }
            if (automationsSelectList[i].actions.length > 0) {
              (function(counterI){
                var actionCounter = 0;
                for (var j=0; j<automationsSelectList[i].actions.length; j++) {
                  (function(counterA){
                    if (automationsSelectList[i].actions[j].field == 'notification_user') {
                      if (isNumeric(automationsSelectList[i].actions[j].value[0])){
                        (function(counterJ){
                          client.request(getUsers(automationsSelectList[counterI].actions[j].value[0])).then(
                            function(usersData){
                              if (usersData.user.email != null || usersData.user.email != '') {
                                client.request(srcUserByEmail_dest(usersData.user.email)).then(
                                  function(srcUserData){
                                    if (srcUserData.results.length > 0) {
                                      actionCounter++;
                                      console.log('notif_user: ' + counterA);
                                      var userId = srcUserData.results[0].id;
                                      automationsSelectList[counterI].actions[counterJ].value[0] = userId;
                                      console.log('USER FOUND');
                                      if (actionCounter == automationsSelectList[counterI].actions.length) {
                                        console.log('AUTOMATIONS FINISH');
                                        console.log(automationsSelectList[counterI]);
                                      }
                                    } else {
                                      console.log('=== FAILED GET USER, USER DOESNT EXIST ===');
                                    }
                                  },
                                  function(srcUserDataError){
                                    console.log('=== FAILED SEARCH USERS ===');
                                    console.log(srcUserDataError);
                                  });
                              }
                            },
                            function(usersError){
                              console.log('=== FAILED GET USERS ===');
                              console.log(usersError);
                            });
                        })(j);
                      } else {
                        actionCounter++;
                        console.log('notif_user no id: ' + counterA);
                        if (actionCounter == automationsSelectList[counterI].actions.length) {
                          console.log('AUTOMATIONS NO USERS ID');
                          console.log(automationsSelectList[counterI]); 
                        }
                      }
                    }
                    if (automationsSelectList[i].actions[j].field == 'notification_group') {
                      if (isNumeric(automationsSelectList[i].actions[j].value[0])){
                        (function(counterJ){
                          client.request(getGroups(automationsSelectList[counterI].actions[j].value[0])).then(
                            function(groupData){
                              if (groupData.group.name != null || groupData.group.name != '') {
                                client.request(srcGroups_dest(groupData.group.name)).then(
                                  function(srcGroupData){                                  
                                    if (srcGroupData.results.length > 0) {
                                      actionCounter++;
                                      console.log('notif_group: ' + counterA);
                                      var userId = srcGroupData.results[0].id;
                                      automationsSelectList[counterI].actions[counterJ].value[0] = userId;
                                      console.log('GROUP FOUND');
                                      if (actionCounter == automationsSelectList[counterI].actions.length) {
                                        console.log('AUTOMATIONS FINISH');
                                        console.log(automationsSelectList[counterI]);
                                      }
                                    } else {
                                      console.log('=== FAILED GET GROUP, GROUP DOESNT EXIST ===');
                                    }
                                  },
                                  function(srcGroupDataError){
                                    console.log('=== FAILED SEARCH GROUP ===');
                                    console.log(srcUserDataError);
                                  });
                              }
                            },
                            function(groupDataError){
                              console.log('=== FAILED GET GROUP ===');
                              console.log(groupDataError);
                            });
                        })(j);
                      } else {
                        actionCounter++;
                        console.log('notif_group no id: ' + counterA);
                        if (actionCounter == automationsSelectList[counterI].actions.length) {
                          console.log('AUTOMATIONS NO GROUPS ID');
                          console.log(automationsSelectList[counterI]);
                        }
                      }
                    }
                    if (automationsSelectList[i].actions[j].field.includes('custom_fields_')) {
                      var ticketFieldsId = automationsSelectList[i].actions[j].field.split('_');
                      (function(counterJ){
                        client.request(getTicketFieldsbyId(ticketFieldsId[2])).then(
                          function(ticketFieldsData){
                            for (var x=0; x<ticketFieldsDestData.ticket_fields.length; x++){
                              if (ticketFieldsData.ticket_field.title == ticketFieldsDestData.ticket_fields[x].title){
                                actionCounter++;
                                automationsSelectList[counterI].actions[counterJ].field = 'custom_fields_' + ticketFieldsDestData.ticket_fields[x].id;
                              }
                            }
                            if (actionCounter == automationsSelectList[counterI].actions.length) {
                              console.log('AUTOMATIONS FINISH');
                              console.log(automationsSelectList[counterI]);
                            }
                          },
                          function(ticketFieldsError){
                            console.log('=== FAILED GET TICKET FIELDS ===');
                            console.log(ticketFieldsError);
                          });
                      })(j);
                    }
                  })(j);
                }
              })(i);
            } else {
              console.log('automations has no actions');
            }
          }
          },
          function(ticketFieldsDestError){
            console.log('===== FAILED GET TICKET DEST DATA =====');
            console.log(ticketFieldsDestError);
          });
        
      }

      /*=====SLA======*/
      if (slaSelectList.lengt > 0) {

      }
    }

    function doCreateAutomations (parameter) {
      console.log('CREATING AUTOMATIONS');
      // console.log(parameter);
      // client.request(createAutomations(parameter)).then(
      //   function(createAutomationsData){
      //     console.log(createAutomationsData);
      //   },
      //   function(createAutomationsError){
      //     console.log('===== createAutomationsError =====');
      //     console.log(createAutomationsError);
      //   });
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
