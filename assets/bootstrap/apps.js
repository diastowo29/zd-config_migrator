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

    function getAutomations (input) {
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

    function getAutomations_dest (input) {
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
