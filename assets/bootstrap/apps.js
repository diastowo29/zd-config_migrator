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

    var groups = [];
    var groupSelectList = [];

    var views = [];
    var viewSelectList = [];

    var brands = [];
    var brandsSelectList = [];

    var macros = [];
    var macrosSelectList = [];

    var membershipsList = [];
    var allUsers = [];
    // this.doLoading('Sate Padang');
    this.init();
    // this.initsss();

    /*====== DO NOT UNCOMMENT THIS LINE BELOW ======*/
    // // // // // // // // this.deleteAllTicketFields();
    /*====== ** ======*/

    // var ZD_DOMAIN = "";
    // var ZD_TOKEN = "";
    var ZD_DOMAIN = "https://treesdemo11496822632.zendesk.com";
    // var ZD_DOMAIN = "https://treesdemo1.zendesk.com";
    var ZD_TOKEN = "basic ZWxkaWVuLmhhc21hbnRvQHRyZWVzc29sdXRpb25zLmNvbTpXM2xjb21lMTIz";
    // $('.migrate_button').attr("disabled", "disabled");
    // $('#myModal').modal('show');

    function initsss (parameter) {
      var nextPage = '';
      if (parameter === null) {
        for (var i=0; i<allUsers.length; i++) {
          var newUsers = new Array({user:allUsers[i]});
          client.request().then(
            function(createUser){
              console.log(createUser);
            },
            function(createError){
              console.log('createError');
              console.log(createError);
            });
        }
      } else {
        if (parameter === undefined) {
          client.request(getAllUsers()).then(
            function(allUsersData){
              for (var i=0; i<allUsersData.users.length; i++) {
                if (allUsersData.users[i].role == 'admin') {
                  allUsers.push(allUsersData.users[i]);
                }
              }
              if (allUsersData.next_page != null) {
                initsss(allUsersData.next_page);
              }
            },
            function(allUsersError){
              console.log('allUsersError');
              console.log(allUsersError);
            });
        } else {
          client.request(customs(parameter)).then(
            function(allUsersData){
              for (var i=0; i<allUsersData.users.length; i++) {
                if (allUsersData.users[i].role == 'admin') {
                  allUsers.push(allUsersData.users[i]);
                }
              }
              if (allUsersData.next_page != null || allUsersData.next_page != '') {
                initsss(allUsersData.next_page);
              }
            },
            function(allUsersError){
              console.log('allUsersError');
              console.log(allUsersError);
            });
        }
      }

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

    function customs(input) {
      var getTickets = {
        url: input,
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

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

    function getAllUsers(input) {
      var getTickets = {
        url: '/api/v2/users.json',
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

    function getAllBrands (id) {
      var getTickets = {
        url: '/api/v2/brands.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getAllBrandsDest (id) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/brands.json',
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

    function createBrands (parameter) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/brands.json',
        type: 'POST',
        headers: {
          "Authorization": ZD_TOKEN
        },
        data: parameter,
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true
      }
      console.log(getTickets);
      return getTickets;
    }

    function getOrganizationsById (id) {
     
      var getTickets = {
        url: '/api/v2/organizations/' + id + '.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function srcOrganizationDest (input) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/search.json?query=type:organization%20name:' + input,
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

    function getSharingAgreement (id) {
      var getTickets = {
        url: '/api/v2/sharing_agreements/' + id + '.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getAllSharingAgreementDest (input) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/sharing_agreements.json',
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

    /*TICKET FIELDS PART*/
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

    function getTicketFieldsbyIdOption (id) {
      var getTickets = {
        url: '/api/v2/ticket_fields/' + id + '/options.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getTicketFieldsbyIdOptionDest (id) {
      var getTickets = {
        url:  ZD_DOMAIN + '/api/v2/ticket_fields/' + id + '/options.json',
        type: 'GET',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true,
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

    function getTicketFormsById (input) {
      var getTickets = {
        url: '/api/v2/ticket_forms/' + input + '.json',
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
    function getAllGroup () {
      var getTickets = {
        url: '/api/v2/groups.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

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

    function getGroupMembership (id) {
      var getTickets = {
        url: '/api/v2/groups/' + id + '/memberships.json',
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

    function createGroup_dest (parameter) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/groups.json',
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

    function createGroupMembership_dest (parameter) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/group_memberships/create_many.json',
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

    /*VIEWS PART*/
    function getViews () {
      var getTickets = {
        url: '/api/v2/views.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getViewsDest () {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/views.json',
        type: 'GET',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true,
      }
      console.log(getTickets);
      return getTickets;
    }

    function createViews (parameter) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/views.json',
        type: 'POST',
        data: parameter,
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true,
      }
      console.log(getTickets);
      return getTickets;
    }
    /*VIEWS PART*/

    /*MACROS PART*/
    function getMacros () {
      var getTickets = {
        url: '/api/v2/macros.json',
        type: 'GET',
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
      }
      console.log(getTickets);
      return getTickets;
    }

    function getMacrosDest () {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/macros.json',
        type: 'GET',
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true,
      }
      console.log(getTickets);
      return getTickets;
    }

    function createMacros (parameter) {
      var getTickets = {
        url: ZD_DOMAIN + '/api/v2/macros.json',
        type: 'POST',
        data: parameter,
        headers: {
          "Authorization": ZD_TOKEN
        },
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        cors: true,
      }
      console.log(getTickets);
      return getTickets;
    }
    /*MACROS PART*/



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
      var groupContent = '';
      var viewsContent = '';
      var brandsContent = '';
      var macrosContent = '';
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
          for (slases in slaData.sla_policies){
            slaContent += '<tr id="' + slaData.sla_policies[slases].id + '" class="'+slases+'" onClick="editData(4, ' + slaData.sla_policies[slases].id + ', ' + slases + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFormInput" id="' + slaData.sla_policies[slases].id + '" type="checkbox"></td>'
            +'<td>' + slaData.sla_policies[slases].title +'</td>';
          }
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
          $('.slaContent').append(slaContent);
        },
        function(slaError){
          console.log('slaError');
          console.log(slaError);
        });

      client.request(getAllGroup()).then(
        function(groupData){
          console.log(groupData);
          groups = groupData.groups;
          for (var i=0; i<groupData.groups.length; i++) {
            groupContent += '<tr id="' + groupData.groups[i].id + '" class="'+i+'" onClick="editData(5, ' + groupData.groups[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFormInput" id="' + groupData.groups[i].id + '" type="checkbox"></td>'
            +'<td>' + groupData.groups[i].name +'</td>';
          }
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
          $('.groupContent').append(groupContent);
        },
        function(groupError){
          console.log('groupError');
          console.log(groupError);
        });

      client.request(getViews()).then(
        function(viewses){
          console.log(viewses)
          views = viewses.views;
          for (viewes in viewses.views){
            viewsContent += '<tr id="' + viewses.views[viewes].id + '" class="'+viewes+'" onClick="editData(6, ' + viewses.views[viewes].id + ', ' + viewes + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFormInput" id="' + viewses.views[viewes].id + '" type="checkbox"></td>'
            +'<td>' + viewses.views[viewes].title +'</td>';
          }
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
          $('.viewsContent').append(viewsContent);
        },
        function(viewsError){
          console.log('viewsError');
          console.log(viewsError);
        });

      client.request(getAllBrands()).then(
        function(allBrands){
          console.log(allBrands);
          brands = allBrands.brands;
          for (br in allBrands.brands){
            brandsContent += '<tr id="' + allBrands.brands[br].id + '" class="'+br+'" onClick="editData(7, ' + allBrands.brands[br].id + ', ' + br + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFormInput" id="' + allBrands.brands[br].id + '" type="checkbox"></td>'
            +'<td>' + allBrands.brands[br].name +'</td>';
          }
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
          $('.brandsContent').append(brandsContent);
        },
        function(brandsError){
          console.log('brandsError');
          console.log(brandsError);
        });

      client.request(getMacros()).then(
        function(macro){
          console.log(macro);
          macros = macro.macros;
          for (br in macro.macros){
            macrosContent += '<tr id="' + macro.macros[br].id + '" class="'+br+'" onClick="editData(8, ' + macro.macros[br].id + ', ' + br + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFormInput" id="' + macro.macros[br].id + '" type="checkbox"></td>'
            +'<td>' + macro.macros[br].title +'</td>';
          }
          document.getElementById('loader').style.visibility = 'hidden';
          document.getElementById('mainContent').style.visibility = 'visible';
          $('.macrosContent').append(macrosContent);    
        },
        function(macroError){
          console.log('macroError');
          console.log(macroError);
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
        } else if (type == 5) {
          for (var j = 0; j<groupSelectList.length; j++) {
            if (groupSelectList[j].id == id) {
              isExist = true;
            }
          }
          if (!isExist) {
            groupSelectList.push(groups[position]);
          }
        } else if (type == 6) {
          for (var j = 0; j<viewSelectList.length; j++) {
            if (viewSelectList[j].id == id) {
              isExist = true;
            }
          }
          if (!isExist) {
            viewSelectList.push(views[position]);
          }
        } else if (type == 7) {
          for (var j = 0; j<brandsSelectList.length; j++) {
            if (brandsSelectList[j].id == id) {
              isExist = true;
            }
          }
          if (!isExist) {
            brandsSelectList.push(brands[position]);
          }
        } else if (type == 8) {
          for (var j = 0; j<macrosSelectList.length; j++) {
            if (macrosSelectList[j].id == id) {
              isExist = true;
            }
          }
          if (!isExist) {
            macrosSelectList.push(macros[position]);
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
        } else if (type == 5) {
          for (var j = 0; j<groupSelectList.length; j++) {
            if (groupSelectList[j].id == id) {
              groupSelectList.splice(j, 1);
            }
          }
        } else if (type == 6) {
          for (var j = 0; j<viewSelectList.length; j++) {
            if (viewSelectList[j].id == id) {
              viewSelectList.splice(j, 1);
            }
          }
        } else if (type == 7) {
          for (var j = 0; j<brandsSelectList.length; j++) {
            if (brandsSelectList[j].id == id) {
              brandsSelectList.splice(j, 1);
            }
          }
        } else if (type == 8) {
          for (var j = 0; j<macrosSelectList.length; j++) {
            if (macrosSelectList[j].id == id) {
              macrosSelectList.splice(j, 1);
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
      $('#groupCounter').text(groupSelectList.length);
      $('#viewsCounter').text(viewSelectList.length);
      $('#brandsCounter').text(brandsSelectList.length);
      $('#macrosCounter').text(macrosSelectList.length);
    }

    /*====== NOT USED =======*/
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
      membershipsList = [];
      var migrateCounter = 0;
      errorMigrate = [];
      showResult();
      $(".bodyMessage").empty();
      /*=====TICKET FIELDS=====*/
      if (ticketFieldsSelectList.length > 0) {
        var tfCounter = 0;
        client.request(getTicketFields_dest()).then(
          function (data){
            // console.log('get ticket_fields dest');
            for (var i=0; i<ticketFieldsSelectList.length; i++) {
              var ticketFieldsExist = false;
              for (var j = 0; j< data.ticket_fields.length; j++) {
                if (ticketFieldsSelectList[i].title == data.ticket_fields[j].title) {
                  ticketFieldsExist = true;
                }
              }
              (function(counterI){
                if (!ticketFieldsExist) {
                  // console.log('ticket_fields notExist');
                  var ticketData = new Array({ticket_field:ticketFieldsSelectList[i]});
                  client.request(createTicketFields(JSON.stringify(ticketData[0]))).then(
                    function (createData){
                      tfCounter++;
                      console.log('create success');
                      // if (tfCounter == ticketFieldsSelectList.length) {
                      //   console.log('its DONE');
                      // }
                    },
                    function (errorCreateData){
                      tfCounter++;
                      // if (tfCounter == ticketFieldsSelectList.length) {
                      //   console.log('its DONE');
                      // }
                      console.log('===== error create ticket_fields dest ======');
                      console.log(errorCreateData);
                      updateProgress('Ticket Fields', 'Error Create Ticket: ' + ticketFieldsSelectList[counterI].title);
                    });
                } else {
                  tfCounter++;
                  // if (tfCounter == ticketFieldsSelectList.length) {
                  //   console.log('its DONE');
                  // }
                  console.log('ticket_fields Exist');
                }
              })(i);
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
                        var ticketFieldsFrom = [];
                        var newTicketIds = [];
                        var ticketFieldsError = false;
                        for (var tf=0; tf<ticketFormsSelectList[i].ticket_field_ids.length; tf++){
                          ticketFieldsFrom = [];
                          ticketFieldsExist = false;
                          for (var tfFrom=0; tfFrom<ticketFieldsData.ticket_fields.length; tfFrom++) {
                            if (ticketFormsSelectList[i].ticket_field_ids[tf] == ticketFieldsData.ticket_fields[tfFrom].id) {
                              ticketFieldsFrom = ticketFieldsData.ticket_fields[tfFrom];
                            }
                          }
                          console.log(ticketFieldsFrom);
                          for (var tfDest=0; tfDest<ticketFieldsDestData.ticket_fields.length; tfDest++){
                            if (ticketFieldsFrom.title == ticketFieldsDestData.ticket_fields[tfDest].title) {
                              ticketFieldsExist = true;
                              newTicketIds.push(ticketFieldsDestData.ticket_fields[tfDest].id);
                            }
                          }
                          if (ticketFieldsExist) {
                            ticketFieldsCounter++;
                          } else {
                            ticketFieldsError = true;
                            console.log('===== have to create some ticket fields =====');
                            updateProgress('Ticket Forms', '<b>' + ticketFormsSelectList[i].name + '</b> Error. Some ticket fields not exist: ' + ticketFieldsFrom.title);
                          }
                          ticketFieldsExist = false;
                        }
                        // if (ticketFieldsError) {
                        //   updateProgress('Ticket Forms', '<b>' + ticketFormsSelectList[i].name + '</b> Error. Some ticket fields not exist: ' + ticketFieldsFrom.title);
                        //   errorMigrate.push({
                        //     name: ticketFormsSelectList[i].name,
                        //     error: 'some ticket fields not exist'
                        //   });
                        // }
                        (function(counterI){
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
                                errorMigrate.push({
                                  name: ticketFormsSelectList[counterI].name,
                                  error: createError
                                });
                                updateProgress('Ticket Forms', '<b>' + 'Error when create ticket forms: ' + ticketFormsSelectList[counterI].name);
                              });
                            newTicketIds = [];
                          }
                        })(i);
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
            client.request(getAutomations_dest()).then(
              function(automationsDest){
                var processCounter = 0;
                var counterArray = [];
                for (var i=0; i<automationsSelectList.length; i++) {
                  var automationsExist = false;
                  var processCounter = 0;
                  for (var td=0; td<automationsDest.automations.length; td++) {
                    if (automationsSelectList[i].title == automationsDest.automations[td].title) {
                      automationsExist = true;
                    }
                  }
                  if (!automationsExist) {
                    (function(counterI){
                      if (automationsSelectList[i].actions.length > 0) {
                        var actionCounter = 0;
                        for (var a=0; a<automationsSelectList[i].actions.length; a++) {
                          (function(counterA){
                            if (automationsSelectList[i].actions[a].field == 'notification_user') {
                              if (isNumeric(automationsSelectList[i].actions[a].value[0])) {

                                client.request(getUsers(automationsSelectList[i].actions[a].value[0])).then(
                                  function(user){
                                    if (user.user.email !== null) {
                                      client.request(srcUserByEmail_dest(user.user.email)).then(
                                        function(srcUser){
                                          if (srcUser.results.length > 0) {
                                            counterArray.push(counterI);
                                            console.log(counterArray);
                                            console.log('user found');
                                            automationsSelectList[counterI].actions[counterA].value[0] = srcUser.results[0].id;
                                            var caCounter = 0;
                                            for (c in counterArray) {
                                              var aCounter = automationsSelectList[counterI].actions.length;
                                              var alCounter = automationsSelectList[counterI].conditions.all.length;
                                              var anCounter = automationsSelectList[counterI].conditions.any.length;
                                              if (counterArray[c] == counterI) {
                                                caCounter++;
                                                if (caCounter == aCounter + alCounter + anCounter) {
                                                  doCreateAutomations(automationsSelectList[counterI]);
                                                }
                                              }
                                            }
                                            // actionCounter++;
                                            // if (counterA == automationsSelectList[counterI].actions.length-1) {
                                            //   processCounter++
                                            //   if (processCounter == 3) {
                                            //     doCreateAutomations(automationsSelectList[counterI]);
                                            //   }
                                            // }
                                          } else {
                                            console.log('===== user not found =====');
                                            updateProgress('Automations', '<b>' + automationsSelectList[counterI].title + '</b> Error, Users not found: ' + user.user.name);
                                          }
                                        },
                                        function(srcUserError){
                                          console.log('===== srcUserError =====');
                                          console.log(srcUserError);
                                        });
                                    }
                                  },
                                  function(userError){
                                    console.log('===== userError =====');
                                    console.log(userError);
                                  });
                              } else {
                                counterArray.push(counterI);
                                var caCounter = 0;
                                for (c in counterArray) {
                                  var aCounter = automationsSelectList[counterI].actions.length;
                                  var alCounter = automationsSelectList[counterI].conditions.all.length;
                                  var anCounter = automationsSelectList[counterI].conditions.any.length;
                                  if (counterArray[c] == counterI) {
                                    caCounter++;
                                    if (caCounter == aCounter + alCounter + anCounter) {
                                      doCreateAutomations(automationsSelectList[counterI]);
                                    }
                                  }
                                }
                                // actionCounter++;
                                // if (counterA == automationsSelectList[counterI].actions.length-1) {
                                //   processCounter++
                                //   if (processCounter == 3) {
                                //     doCreateAutomations(automationsSelectList[counterI]);
                                //   }
                                // }
                              }
                            } else if (automationsSelectList[i].actions[a].field == 'notification_group') {
                              if (isNumeric(automationsSelectList[i].actions[a].value[0])) {
                                client.request(getGroups(automationsSelectList[i].actions[a].value[0])).then(
                                  function(group){
                                    client.request(srcGroups_dest(group.group.name)).then(
                                      function(srcGroup){
                                        if (srcGroup.results.length > 0) {
                                          counterArray.push(counterI);
                                          console.log(counterArray);
                                          automationsSelectList[counterI].actions[counterA].value[0] = srcGroup.results[0].id;
                                          var caCounter = 0;
                                          for (c in counterArray) {
                                            var aCounter = automationsSelectList[counterI].actions.length;
                                            var alCounter = automationsSelectList[counterI].conditions.all.length;
                                            var anCounter = automationsSelectList[counterI].conditions.any.length;
                                            if (counterArray[c] == counterI) {
                                              caCounter++;
                                              if (caCounter == aCounter + alCounter + anCounter) {
                                                doCreateAutomations(automationsSelectList[counterI]);
                                              }
                                            }
                                          }
                                          // actionCounter++;
                                          // if (counterA == automationsSelectList[counterI].actions.length-1) {
                                          //   processCounter++
                                          //   if (processCounter == 3) {
                                          //     doCreateAutomations(automationsSelectList[counterI]);
                                          //   }
                                          // }
                                        } else {
                                          console.log('===== group not found =====');
                                          updateProgress('Automations', '<b>' + automationsSelectList[counterI].title + '</b> Error, Group not found: ' + group.group.name);
                                        }
                                      },
                                      function(srcGroupError){
                                        console.log('===== srcGroupError =====');
                                        console.log(srcGroupError);
                                      });
                                  },
                                  function(groupError){
                                    console.log('===== groupError =====');
                                    console.log(groupError);
                                  });
                              } else {
                                counterArray.push(counterI);
                                var caCounter = 0;
                                for (c in counterArray) {
                                  var aCounter = automationsSelectList[counterI].actions.length;
                                  var alCounter = automationsSelectList[counterI].conditions.all.length;
                                  var anCounter = automationsSelectList[counterI].conditions.any.length;
                                  if (counterArray[c] == counterI) {
                                    caCounter++;
                                    if (caCounter == aCounter + alCounter + anCounter) {
                                      doCreateAutomations(automationsSelectList[counterI]);
                                    }
                                  }
                                }
                                // actionCounter++;
                                // if (counterA == automationsSelectList[counterI].actions.length-1) {
                                //   processCounter++
                                //   if (processCounter == 3) {
                                //     doCreateAutomations(automationsSelectList[counterI]);
                                //   }
                                // }
                              }
                            } else if (automationsSelectList[i].actions[a].field.includes('custom_fields_')) {
                              var ticketId = automationsSelectList[i].actions[a].field.split('_');
                              client.request(getTicketFieldsbyId(ticketId[2])).then(
                                function(ticketField){
                                  var ticketFieldFound = false;
                                  var ticketDestId = '';
                                  for (var t=0; t<ticketFieldsDestData.ticket_fields.length; t++) {
                                    if (ticketField.ticket_field.title == ticketFieldsDestData.ticket_fields[t].title) {
                                      ticketFieldFound = true;
                                      ticketDestId = ticketFieldsDestData.ticket_fields[t].id;
                                    }
                                  }
                                  if (ticketFieldFound) {
                                    counterArray.push(counterI);
                                    console.log(counterArray);
                                    automationsSelectList[counterI].actions[counterA].field = 'custom_fields_' + ticketDestId;
                                    var caCounter = 0;
                                    for (c in counterArray) {
                                      var aCounter = automationsSelectList[counterI].actions.length;
                                      var alCounter = automationsSelectList[counterI].conditions.all.length;
                                      var anCounter = automationsSelectList[counterI].conditions.any.length;
                                      if (counterArray[c] == counterI) {
                                        caCounter++;
                                        if (caCounter == aCounter + alCounter + anCounter) {
                                          doCreateAutomations(automationsSelectList[counterI]);
                                        }
                                      }
                                    }
                                    // actionCounter++;
                                    // if (counterA == automationsSelectList[counterI].actions.length-1) {
                                    //   processCounter++
                                    //   if (processCounter == 3) {
                                    //     doCreateAutomations(automationsSelectList[counterI]);
                                    //   }
                                    // }
                                  } else {
                                    console.log('===== ticket field not found =====');
                                    updateProgress('Automations', '<b>' + automationsSelectList[counterI].title + '</b> Error, Ticket Field not found: ' + ticketField.ticket_field.title);
                                  }
                                },
                                function(ticketFieldError){
                                  console.log('===== ticketFieldError =====');
                                  console.log(ticketFieldError);
                                });
                            } else {
                              var caCounter = 0;
                              for (c in counterArray) {
                                var aCounter = automationsSelectList[counterI].actions.length;
                                var alCounter = automationsSelectList[counterI].conditions.all.length;
                                var anCounter = automationsSelectList[counterI].conditions.any.length;
                                if (counterArray[c] == counterI) {
                                  caCounter++;
                                  if (caCounter == aCounter + alCounter + anCounter) {
                                    doCreateAutomations(automationsSelectList[counterI]);
                                  }
                                }
                              }
                              // actionCounter++;
                              // if (counterA == automationsSelectList[counterI].actions.length-1) {
                              //   processCounter++
                              //   if (processCounter == 3) {
                              //     doCreateAutomations(automationsSelectList[counterI]);
                              //   }
                              // }
                            }
                          })(a);
                        }
                      } else {
                        counterArray.push(counterI);
                        var caCounter = 0;
                        for (c in counterArray) {
                          var aCounter = automationsSelectList[counterI].actions.length;
                          var alCounter = automationsSelectList[counterI].conditions.all.length;
                          var anCounter = automationsSelectList[counterI].conditions.any.length;
                          if (counterArray[c] == counterI) {
                            caCounter++;
                            if (caCounter == aCounter + alCounter + anCounter) {
                              doCreateAutomations(automationsSelectList[counterI]);
                            }
                          }
                        }
                        // processCounter++;
                        // if (processCounter == 3) {
                        //   doCreateAutomations(automationsSelectList[counterI]);
                        // }
                      }

                      if (automationsSelectList[i].conditions.all.length > 0) {
                        counterArray.push(counterI);
                        var caCounter = 0;
                        for (c in counterArray) {
                          var aCounter = automationsSelectList[counterI].actions.length;
                          var alCounter = automationsSelectList[counterI].conditions.all.length;
                          var anCounter = automationsSelectList[counterI].conditions.any.length;
                          if (counterArray[c] == counterI) {
                            caCounter++;
                            if (caCounter == aCounter + alCounter + anCounter) {
                              doCreateAutomations(automationsSelectList[counterI]);
                            }
                          }
                        }
                        // processCounter++;
                        // if (processCounter == 3) {
                        //   doCreateAutomations(automationsSelectList[counterI]);
                        // }
                      } else {
                        counterArray.push(counterI);
                        var caCounter = 0;
                        for (c in counterArray) {
                          var aCounter = automationsSelectList[counterI].actions.length;
                          var alCounter = automationsSelectList[counterI].conditions.all.length;
                          var anCounter = automationsSelectList[counterI].conditions.any.length;
                          if (counterArray[c] == counterI) {
                            caCounter++;
                            if (caCounter == aCounter + alCounter + anCounter) {
                              doCreateAutomations(automationsSelectList[counterI]);
                            }
                          }
                        }
                        // processCounter++;
                        // if (processCounter == 3) {
                        //   doCreateAutomations(automationsSelectList[counterI]);
                        // }
                      }

                      if (automationsSelectList[i].conditions.any.length > 0) {
                        counterArray.push(counterI);
                        var caCounter = 0;
                        for (c in counterArray) {
                          var aCounter = automationsSelectList[counterI].actions.length;
                          var alCounter = automationsSelectList[counterI].conditions.all.length;
                          var anCounter = automationsSelectList[counterI].conditions.any.length;
                          if (counterArray[c] == counterI) {
                            caCounter++;
                            if (caCounter == aCounter + alCounter + anCounter) {
                              doCreateAutomations(automationsSelectList[counterI]);
                            }
                          }
                        }
                        // processCounter++;
                        // if (processCounter == 3) {
                        //   doCreateAutomations(automationsSelectList[counterI]);
                        // }
                      } else {
                        counterArray.push(counterI);
                        var caCounter = 0;
                        for (c in counterArray) {
                          var aCounter = automationsSelectList[counterI].actions.length;
                          var alCounter = automationsSelectList[counterI].conditions.all.length;
                          var anCounter = automationsSelectList[counterI].conditions.any.length;
                          if (counterArray[c] == counterI) {
                            caCounter++;
                            if (caCounter == aCounter + alCounter + anCounter) {
                              doCreateAutomations(automationsSelectList[counterI]);
                            }
                          }
                        }
                        // processCounter++;
                        // if (processCounter == 3) {
                        //   doCreateAutomations(automationsSelectList[counterI]);
                        // }
                      }
                    })(i);
                  } else {
                    console.log('automations exist');
                  }
                  // console.log(automationsSelectList[i]);
                  // if (automationsSelectList[i].conditions.all.length > 0){
                  //   (function(counterI){
                  //     for (var cll=0; cll<automationsSelectList[i].conditions.all.length; cll++) {
                  //       if (automationsSelectList[i].conditions.all[cll].field.includes('group_id')) {
                  //         (function(counterJ){
                  //           client.request(getGroups(automationsSelectList[i].conditions.all[cll].value)).then(
                  //             function(groupData){
                  //               if (groupData.group.name !== null) {
                  //                 client.request(srcGroups_dest(groupData.group.name)).then(
                  //                   function(srcGroupDataDest){
                  //                     automationsSelectList[counterI].conditions.all[counterJ].value = srcGroupDataDest.results[0].id;
                  //                   },
                  //                   function(srcGroupDataDestError){
                  //                     console.log('=== FAILED SEARCH GROUP ===');
                  //                     console.log(srcGroupDataDestError);
                  //                   });
                  //               }
                  //             },
                  //             function(groupError){
                  //               console.log('=== FAILED GET GROUP');
                  //               console.log(groupError);
                  //             });
                  //         })(cll);
                  //       }
                  //     }
                  //   })(i);
                  // }
                  // if (automationsSelectList[i].conditions.any.length > 0) {
                  //   (function(counterI){
                  //     for (var cll=0; cll<automationsSelectList[i].conditions.any.length; cll++) {
                  //       if (automationsSelectList[i].conditions.any[cll].field.includes('group_id')) {
                  //         (function(counterJ){
                  //           client.request(getGroups(automationsSelectList[i].conditions.any[cll].value)).then(
                  //             function(groupData){
                  //               if (groupData.group.name !== null) {
                  //                 client.request(srcGroups_dest(groupData.group.name)).then(
                  //                   function(srcGroupDataDest){
                  //                     automationsSelectList[counterI].conditions.any[counterJ].value = srcGroupDataDest.results[0].id;
                  //                   },
                  //                   function(srcGroupDataDestError){
                  //                     console.log('=== FAILED SEARCH GROUP ===');
                  //                     console.log(srcGroupDataDestError);
                  //                   });
                  //               }
                  //             },
                  //             function(groupError){
                  //               console.log('=== FAILED GET GROUP');
                  //               console.log(groupError);
                  //             });
                  //         })(cll); 
                  //       }
                  //     }
                  //   })(i);
                  // }
                  // if (automationsSelectList[i].actions.length > 0) {
                  //   (function(counterI){
                  //     var actionCounter = 0;
                  //     for (var j=0; j<automationsSelectList[i].actions.length; j++) {
                  //       (function(counterA){
                  //         if (automationsSelectList[i].actions[j].field == 'notification_user') {
                  //           if (isNumeric(automationsSelectList[i].actions[j].value[0])){
                  //             (function(counterJ){
                  //               client.request(getUsers(automationsSelectList[counterI].actions[j].value[0])).then(
                  //                 function(usersData){
                  //                   if (usersData.user.email !== null) {
                  //                     client.request(srcUserByEmail_dest(usersData.user.email)).then(
                  //                       function(srcUserData){
                  //                         if (srcUserData.results.length > 0) {
                  //                           actionCounter++;
                  //                           console.log('notif_user: ' + counterA);
                  //                           var userId = srcUserData.results[0].id;
                  //                           automationsSelectList[counterI].actions[counterJ].value[0] = userId;
                  //                           console.log('USER FOUND');
                  //                           if (actionCounter == automationsSelectList[counterI].actions.length) {
                  //                             console.log('AUTOMATIONS FINISH');
                  //                             console.log(automationsSelectList[counterI]);
                  //                           }
                  //                         } else {
                  //                           console.log('=== FAILED GET USER, USER DOESNT EXIST ===');
                  //                         }
                  //                       },
                  //                       function(srcUserDataError){
                  //                         console.log('=== FAILED SEARCH USERS ===');
                  //                         console.log(srcUserDataError);
                  //                       });
                  //                   }
                  //                 },
                  //                 function(usersError){
                  //                   console.log('=== FAILED GET USERS ===');
                  //                   console.log(usersError);
                  //                 });
                  //             })(j);
                  //           } else {
                  //             actionCounter++;
                  //             console.log('notif_user no id: ' + counterA);
                  //             if (actionCounter == automationsSelectList[counterI].actions.length) {
                  //               console.log('AUTOMATIONS NO USERS ID');
                  //               console.log(automationsSelectList[counterI]); 
                  //             }
                  //           }
                  //         }
                  //         if (automationsSelectList[i].actions[j].field == 'notification_group') {
                  //           if (isNumeric(automationsSelectList[i].actions[j].value[0])){
                  //             (function(counterJ){
                  //               client.request(getGroups(automationsSelectList[counterI].actions[j].value[0])).then(
                  //                 function(groupData){
                  //                   if (groupData.group.name !== null) {
                  //                     client.request(srcGroups_dest(groupData.group.name)).then(
                  //                       function(srcGroupData){                                  
                  //                         if (srcGroupData.results.length > 0) {
                  //                           actionCounter++;
                  //                           console.log('notif_group: ' + counterA);
                  //                           var userId = srcGroupData.results[0].id;
                  //                           automationsSelectList[counterI].actions[counterJ].value[0] = userId;
                  //                           console.log('GROUP FOUND');
                  //                           if (actionCounter == automationsSelectList[counterI].actions.length) {
                  //                             console.log('AUTOMATIONS FINISH');
                  //                             console.log(automationsSelectList[counterI]);
                  //                           }
                  //                         } else {
                  //                           console.log('=== FAILED GET GROUP, GROUP DOESNT EXIST ===');
                  //                         }
                  //                       },
                  //                       function(srcGroupDataError){
                  //                         console.log('=== FAILED SEARCH GROUP ===');
                  //                         console.log(srcUserDataError);
                  //                       });
                  //                   }
                  //                 },
                  //                 function(groupDataError){
                  //                   console.log('=== FAILED GET GROUP ===');
                  //                   console.log(groupDataError);
                  //                 });
                  //             })(j);
                  //           } else {
                  //             actionCounter++;
                  //             console.log('notif_group no id: ' + counterA);
                  //             if (actionCounter == automationsSelectList[counterI].actions.length) {
                  //               console.log('AUTOMATIONS NO GROUPS ID');
                  //               console.log(automationsSelectList[counterI]);
                  //             }
                  //           }
                  //         }
                  //         if (automationsSelectList[i].actions[j].field.includes('custom_fields_')) {
                  //           var ticketFieldsId = automationsSelectList[i].actions[j].field.split('_');
                  //           (function(counterJ){
                  //             client.request(getTicketFieldsbyId(ticketFieldsId[2])).then(
                  //               function(ticketFieldsData){
                  //                 for (var x=0; x<ticketFieldsDestData.ticket_fields.length; x++){
                  //                   if (ticketFieldsData.ticket_field.title == ticketFieldsDestData.ticket_fields[x].title){
                  //                     actionCounter++;
                  //                     automationsSelectList[counterI].actions[counterJ].field = 'custom_fields_' + ticketFieldsDestData.ticket_fields[x].id;
                  //                   }
                  //                 }
                  //                 if (actionCounter == automationsSelectList[counterI].actions.length) {
                  //                   console.log('AUTOMATIONS FINISH');
                  //                   console.log(automationsSelectList[counterI]);
                  //                 }
                  //               },
                  //               function(ticketFieldsError){
                  //                 console.log('=== FAILED GET TICKET FIELDS ===');
                  //                 console.log(ticketFieldsError);
                  //               });
                  //           })(j);
                  //         }
                  //       })(j);
                  //     }
                  //   })(i);
                  // } else {
                  //   console.log('automations has no actions');
                  // }
                }
              },
              function(automationsDestError){
                console.log('automationsDestError');
                console.log(automationsDestError);
              });
            
          },
          function(ticketFieldsDestError){
            console.log('===== FAILED GET TICKET DEST DATA =====');
            console.log(ticketFieldsDestError);
          });
        
      }

      /*=====SLA======*/
      if (slaSelectList.length > 0) {
        client.request(getTicketFields_dest()).then(
          function(ticketFieldDestData){
            client.request(getAllBrandsDest()).then(
              function(brandsDest){
                client.request(getTicketForms_dest()).then(
                  function(ticketFormsDest){
                    var counterArray = [];
                    for (var i=0; i<slaSelectList.length; i++) {
                      var filterFinish = 0;
                      (function(counterI){
                        if (slaSelectList[i].filter.all.length >0) {
                          var filterAllCounter = 0;
                          for (var f=0; f<slaSelectList[i].filter.all.length; f++) {
                            (function(counterF){
                              if (slaSelectList[i].filter.all[f].field.includes('ticket_fields_')) {
                                var ticketId = slaSelectList[i].filter.all[f].field.split('_');
                                client.request(getTicketFieldsbyId(ticketId[2])).then(
                                  function(ticketFieldData){
                                    client.request(getTicketFieldsbyIdOption(ticketFieldData.ticket_field.id)).then(
                                      function(fieldOption){
                                        var optionString = '';
                                        for (var o=0; o<fieldOption.custom_field_options.length; o++) {
                                          if (fieldOption.custom_field_options[o].id == slaSelectList[counterI].filter.all[counterF].value) {
                                            optionString = fieldOption.custom_field_options[o].name;
                                          }
                                        }
                                        var ticketFieldFound = false;
                                        for (var d=0; d<ticketFieldDestData.ticket_fields.length; d++) {
                                          (function(counterD){
                                            if (ticketFieldData.ticket_field.title == ticketFieldDestData.ticket_fields[d].title) {
                                              ticketFieldFound = true;
                                              client.request(getTicketFieldsbyIdOptionDest(ticketFieldDestData.ticket_fields[d].id)).then(
                                                function(fieldOptionDest){
                                                  for (var od=0; od<fieldOptionDest.custom_field_options.length; od++) {
                                                    filterAllCounter++;
                                                    if (fieldOptionDest.custom_field_options[od].name == optionString) {
                                                      slaSelectList[counterI].filter.all[counterF].field = 'ticket_fields_' + ticketFieldDestData.ticket_fields[counterD].id;
                                                      slaSelectList[counterI].filter.all[counterF].value = fieldOptionDest.custom_field_options[od].id;
                                                      counterArray.push(counterI);
                                                      var caCounter = 0;
                                                      for (c in counterArray) {
                                                        var alCounter = slaSelectList[counterI].filter.all.length;
                                                        var anCounter = slaSelectList[counterI].filter.any.length;
                                                        if (counterArray[c] == counterI) {
                                                          caCounter++;
                                                          if (caCounter == alCounter + anCounter) {
                                                            doCreateSla(slaSelectList[counterI]);
                                                          }
                                                        }
                                                      }
                                                    }
                                                    
                                                    // if (filterAllCounter == slaSelectList[counterI].filter.all.length) {
                                                    //   console.log('all filter has finish');
                                                    //   console.log(slaSelectList[counterI]);
                                                    //   filterFinish++;
                                                    //   if (filterFinish == 2) {
                                                    //     doCreateSla(slaSelectList[counterI]);
                                                    //   }
                                                    // }
                                                  }
                                                },
                                                function(fieldOptionDestError){
                                                  console.log('===== fieldOptionDestError =====');
                                                  console.log(fieldOptionDestError);
                                                });
                                            }
                                          })(d);
                                        }
                                        if (!ticketFieldFound) {
                                          console.log('===== ticket field doest exist =====');
                                          updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some ticket fields not exist: ' + ticketFieldsData.ticket_field.title);
                                          // errorMigrate.push({
                                          //   name: 'SLA: ' + slaSelectList[counterI].title,
                                          //   error: 'ticket field doesnt exist: ' + ticketFieldData.ticket_field.title
                                          // });
                                        }
                                      },
                                      function(fieldOptionError){
                                        console.log('fieldOptionError');
                                        console.log(fieldOptionError);
                                      });
                                  },
                                  function(ticketFieldsError){
                                    console.log('===== ticketFieldsError =====');
                                    console.log(ticketFieldsError);
                                  });
                              } else if (slaSelectList[i].filter.all[f].field.includes('brand_id')) {
                                client.request(getBrands(slaSelectList[i].filter.all[f].value)).then(
                                  function(brands){
                                    var brandsIsFound = false;
                                    for (var br=0; br<brandsDest.brands.length; br++) {
                                      if (brands.brand.name == brandsDest.brands[br].name) {
                                        brandsIsFound = true;
                                        console.log('brands found');
                                        filterAllCounter++;
                                        slaSelectList[counterI].filter.all[counterF].value = brandsDest.brands[br].id;
                                        // if (filterAllCounter == slaSelectList[counterI].filter.all.length) {
                                        //   console.log('all filter has finish');
                                        //   console.log(slaSelectList[counterI]);
                                        //   filterFinish++;
                                        //   if (filterFinish == 2) {
                                        //     doCreateSla(slaSelectList[counterI]);
                                        //   }
                                        // }
                                        counterArray.push(counterI);
                                        var caCounter = 0;
                                        for (c in counterArray) {
                                          var alCounter = slaSelectList[counterI].filter.all.length;
                                          var anCounter = slaSelectList[counterI].filter.any.length;
                                          if (counterArray[c] == counterI) {
                                            caCounter++;
                                            if (caCounter == alCounter + anCounter) {
                                              doCreateSla(slaSelectList[counterI]);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (!brandsIsFound) {
                                    console.log('===== brands not found =====');
                                      updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some brands not exist: ' + brands.brand.name);
                                      // errorMigrate.push({
                                      //   name: 'SLA: ' + slaSelectList[counterI].title,
                                      //   error: 'brands doesnt exist: ' + brands.brand.name
                                      // });
                                    }
                                  },
                                  function(brandsError){
                                    console.log('===== brandsError =====');
                                    console.log(brandsError);
                                  });
                              } else if (slaSelectList[i].filter.all[f].field.includes('ticket_form_id')) {
                                client.request(getTicketFormsById(slaSelectList[i].filter.all[f].value)).then(
                                  function(ticketForm){
                                    var ticketFormFound = false;
                                    for (var tf=0; tf<ticketFormsDest.ticket_forms.length; tf++){
                                      if (ticketForm.ticket_form.name == ticketFormsDest.ticket_forms[tf].name) {
                                        ticketFormFound = true;
                                        console.log('===== ticket forms found =====');
                                        filterAllCounter++;
                                        slaSelectList[counterI].filter.all[counterF].value = ticketFormsDest.ticket_forms[tf].id;
                                        // if (filterAllCounter == slaSelectList[counterI].filter.all.length) {
                                        //   console.log('all filter has finish');
                                        //   console.log(slaSelectList[counterI]);
                                        //   filterFinish++;
                                        //   if (filterFinish == 2) {
                                        //     doCreateSla(slaSelectList[counterI]);
                                        //   }
                                        // }
                                        counterArray.push(counterI);
                                        var caCounter = 0;
                                        for (c in counterArray) {
                                          var alCounter = slaSelectList[counterI].filter.all.length;
                                          var anCounter = slaSelectList[counterI].filter.any.length;
                                          if (counterArray[c] == counterI) {
                                            caCounter++;
                                            if (caCounter == alCounter + anCounter) {
                                              doCreateSla(slaSelectList[counterI]);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (!ticketFormFound) {
                                      console.log('===== ticket form not found =====');
                                      updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some ticket form not exist: ' + ticketForm.ticket_form.name);
                                      // errorMigrate.push({
                                      //   name: 'SLA: ' + slaSelectList[counterI].title,
                                      //   error: 'ticket form doesnt exist: ' + ticketForm.ticket_form.name
                                      // });
                                    }
                                  },
                                  function(ticketFormError){
                                    console.log('===== ticketFormError =====');
                                    console.log(ticketFormError);
                                  });
                              } else if (slaSelectList[i].filter.all[f].field.includes('group_id')) {
                                client.request(getGroups(slaSelectList[i].filter.all[f].value)).then(
                                  function(groups){
                                    client.request(srcGroups_dest(groups.group.name)).then(
                                      function(srcGroup){
                                        if (srcGroup.results.length > 0) {
                                          console.log('===== group found =====');
                                          filterAllCounter++;
                                          slaSelectList[counterI].filter.all[counterF].value = srcGroup.results[0].id;
                                          // if (filterAllCounter == slaSelectList[counterI].filter.all.length) {
                                          //   console.log('all filter has finish');
                                          //   console.log(slaSelectList[counterI]);
                                          //   filterFinish++;
                                          //   if (filterFinish == 2) {
                                          //     doCreateSla(slaSelectList[counterI]);
                                          //   }
                                          // }
                                          counterArray.push(counterI);
                                          var caCounter = 0;
                                          for (c in counterArray) {
                                            var alCounter = slaSelectList[counterI].filter.all.length;
                                            var anCounter = slaSelectList[counterI].filter.any.length;
                                            if (counterArray[c] == counterI) {
                                              caCounter++;
                                              if (caCounter == alCounter + anCounter) {
                                                doCreateSla(slaSelectList[counterI]);
                                              }
                                            }
                                          }
                                        } else {
                                          console.log('===== group not found =====');
                                          updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some groups not exist: ' + groups.group.name);
                                          // errorMigrate.push({
                                          //   name: 'SLA: ' + slaSelectList[counterI].title,
                                          //   error: 'group doesnt exist: ' + groups.group.name
                                          // });
                                        }
                                      },
                                      function(srcGroupError){
                                        console.log('===== srcGroupError =====');
                                        console.log(srcGroupError);
                                      });
                                  },
                                  function(groupsError){
                                    console.log('===== groupsError =====');
                                    console.log(groupsError);
                                  });
                              } else if (slaSelectList[i].filter.all[f].field.includes('organization_id')) {
                                client.request(getOrganizationsById(slaSelectList[i].filter.all[f].value)).then(
                                  function(org){
                                    client.request(srcOrganizationDest(org.organization.name)).then(
                                      function(orgDest){
                                        if (orgDest.results.length > 0) {
                                          console.log('===== organization found =====');
                                          slaSelectList[counterI].filter.all[counterF].value = orgDest.results[0].id;
                                          filterAllCounter++;
                                          // if (filterAllCounter == slaSelectList[counterI].filter.all.length) {
                                          //   console.log('all filter has finish');
                                          //   console.log(slaSelectList[counterI]);
                                          //   filterFinish++;
                                          //   if (filterFinish == 2) {
                                          //     doCreateSla(slaSelectList[counterI]);
                                          //   }
                                          // }
                                          counterArray.push(counterI);
                                          var caCounter = 0;
                                          for (c in counterArray) {
                                            var alCounter = slaSelectList[counterI].filter.all.length;
                                            var anCounter = slaSelectList[counterI].filter.any.length;
                                            if (counterArray[c] == counterI) {
                                              caCounter++;
                                              if (caCounter == alCounter + anCounter) {
                                                doCreateSla(slaSelectList[counterI]);
                                              }
                                            }
                                          }
                                        } else {
                                          console.log('===== organization not found =====');
                                          updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some organizations not exist: ' + org.organization.name);
                                          // errorMigrate.push({
                                          //   name: 'SLA: ' + slaSelectList[counterI].title,
                                          //   error: 'organization doesnt exist: ' + org.organization.name
                                          // });
                                        }
                                      },
                                      function(orgDestError){
                                        console.log('===== orgDestError =====');
                                        console.log(orgDestError);
                                      });
                                  },
                                  function(orgError){
                                    console.log('===== orgError =====');
                                    console.log(orgError);
                                  });
                              } else {
                                counterArray.push(counterI);
                                var caCounter = 0;
                                for (c in counterArray) {
                                  var alCounter = slaSelectList[counterI].filter.all.length;
                                  var anCounter = slaSelectList[counterI].filter.any.length;
                                  if (counterArray[c] == counterI) {
                                    caCounter++;
                                    if (caCounter == alCounter + anCounter) {
                                      doCreateSla(slaSelectList[counterI]);
                                    }
                                  }
                                }
                              }
                            })(f);
                          }
                          // if (slaSelectList[i].filter.all)
                        } else {
                          console.log('filter all null');
                          filterFinish++;
                        }

                        if (slaSelectList[i].filter.any.length > 0) {
                          var filterAnyCounter = 0;
                          for (var f=0; f<slaSelectList[i].filter.any.length; f++) {
                            (function(counterF){
                              if (slaSelectList[i].filter.any[f].field.includes('ticket_fields_')) {
                                var ticketId = slaSelectList[i].filter.any[f].field.split('_');
                                client.request(getTicketFieldsbyId(ticketId[2])).then(
                                  function(ticketFieldData){
                                    client.request(getTicketFieldsbyIdOption(ticketFieldData.ticket_field.id)).then(
                                      function(fieldOption){
                                        var optionString = '';
                                        for (var o=0; o<fieldOption.custom_field_options.length; o++) {
                                          if (fieldOption.custom_field_options[o].id == slaSelectList[counterI].filter.any[counterF].value) {
                                            optionString = fieldOption.custom_field_options[o].name;
                                          }
                                        }
                                        var ticketFieldFound = false;
                                        for (var d=0; d<ticketFieldDestData.ticket_fields.length; d++) {
                                          (function(counterD){
                                            if (ticketFieldData.ticket_field.title == ticketFieldDestData.ticket_fields[d].title) {
                                              ticketFieldFound = true;
                                              client.request(getTicketFieldsbyIdOptionDest(ticketFieldDestData.ticket_fields[d].id)).then(
                                                function(fieldOptionDest){
                                                  for (var od=0; od<fieldOptionDest.custom_field_options.length; od++) {
                                                    filterAnyCounter++;
                                                    if (fieldOptionDest.custom_field_options[od].name == optionString) {
                                                      slaSelectList[counterI].filter.any[counterF].field = 'ticket_fields_' + ticketFieldDestData.ticket_fields[counterD].id;
                                                      slaSelectList[counterI].filter.any[counterF].value = fieldOptionDest.custom_field_options[od].id;
                                                      counterArray.push(counterI);
                                                      var caCounter = 0;
                                                      console.log(counterArray);
                                                      for (c in counterArray) {
                                                        var alCounter = slaSelectList[counterI].filter.all.length;
                                                        var anCounter = slaSelectList[counterI].filter.any.length;
                                                        if (counterArray[c] == counterI) {
                                                          caCounter++;
                                                          if (caCounter == alCounter + anCounter) {
                                                            doCreateSla(slaSelectList[counterI]);
                                                          }
                                                        }
                                                      }
                                                    }
                                                    // if (filterAnyCounter == slaSelectList[counterI].filter.any.length) {
                                                    //   console.log('any filter has finish');
                                                    //   console.log(slaSelectList[counterI]);
                                                    //   filterFinish++;
                                                    //   if (filterFinish == 2) {
                                                    //     doCreateSla(slaSelectList[counterI]);
                                                    //   }
                                                    // }
                                                  }
                                                },
                                                function(fieldOptionDestError){
                                                  console.log('===== fieldOptionDestError =====');
                                                  console.log(fieldOptionDestError);
                                                });
                                            }
                                          })(d);
                                        }
                                        if (!ticketFieldFound) {
                                          console.log('===== ticket field doest exist =====');
                                          updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some ticket fields not exist: ' + ticketFieldData.ticket_field.title);
                                          // errorMigrate.push({
                                          //   name: 'SLA: ' + slaSelectList[counterI].title,
                                          //   error: 'ticket field doesnt exist: ' + ticketFieldData.ticket_field.title
                                          // });
                                        }
                                      },
                                      function(fieldOptionError){
                                        console.log('fieldOptionError');
                                        console.log(fieldOptionError);
                                      });
                                  },
                                  function(ticketFieldsError){
                                    console.log('===== ticketFieldsError =====');
                                    console.log(ticketFieldsError);
                                  });
                              } else if (slaSelectList[i].filter.any[f].field.includes('brand_id')) {
                                client.request(getBrands(slaSelectList[i].filter.any[f].value)).then(
                                  function(brands){
                                    var brandsIsFound = false;
                                    for (var br=0; br<brandsDest.brands.length; br++) {
                                      if (brands.brand.name == brandsDest.brands[br].name) {
                                        brandsIsFound = true;
                                        console.log('brands found');
                                        filterAnyCounter++;
                                        slaSelectList[counterI].filter.any[counterF].value = brandsDest.brands[br].id;
                                        // if (filterAnyCounter == slaSelectList[counterI].filter.any.length) {
                                        //   console.log('any filter has finish');
                                        //   console.log(slaSelectList[counterI]);
                                        //   filterFinish++;
                                        //   if (filterFinish == 2) {
                                        //     doCreateSla(slaSelectList[counterI]);
                                        //   }
                                        // }
                                        counterArray.push(counterI);
                                        var caCounter = 0;
                                        for (c in counterArray) {
                                          var alCounter = slaSelectList[counterI].filter.all.length;
                                          var anCounter = slaSelectList[counterI].filter.any.length;
                                          if (counterArray[c] == counterI) {
                                            caCounter++;
                                            if (caCounter == alCounter + anCounter) {
                                              doCreateSla(slaSelectList[counterI]);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (!brandsIsFound) {
                                      console.log('===== brands not found =====');
                                      updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some brands not exist: ' + brands.brand.name);
                                      // errorMigrate.push({
                                      //   name: 'SLA: ' + slaSelectList[counterI].title,
                                      //   error: 'brands doesnt exist: ' + brands.brand.name
                                      // });
                                    }
                                  },
                                  function(brandsError){
                                    console.log('===== brandsError =====');
                                    console.log(brandsError);
                                  });
                              } else if (slaSelectList[i].filter.any[f].field.includes('ticket_form_id')) {
                                client.request(getTicketFormsById(slaSelectList[i].filter.any[f].value)).then(
                                  function(ticketForm){
                                    var ticketFormFound = false;
                                    for (var tf=0; tf<ticketFormsDest.ticket_forms.length; tf++){
                                      if (ticketForm.ticket_form.name == ticketFormsDest.ticket_forms[tf].name) {
                                        ticketFormFound = true;
                                        console.log('===== ticket forms found =====');
                                        filterAnyCounter++;
                                        slaSelectList[counterI].filter.any[counterF].value = ticketFormsDest.ticket_forms[tf].id;
                                        // if (filterAnyCounter == slaSelectList[counterI].filter.any.length) {
                                        //   console.log('any filter has finish');
                                        //   console.log(slaSelectList[counterI]);
                                        //   filterFinish++;
                                        //   if (filterFinish == 2) {
                                        //     doCreateSla(slaSelectList[counterI]);
                                        //   }
                                        // }
                                        counterArray.push(counterI);
                                        var caCounter = 0;
                                        for (c in counterArray) {
                                          var alCounter = slaSelectList[counterI].filter.all.length;
                                          var anCounter = slaSelectList[counterI].filter.any.length;
                                          if (counterArray[c] == counterI) {
                                            caCounter++;
                                            if (caCounter == alCounter + anCounter) {
                                              doCreateSla(slaSelectList[counterI]);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (!ticketFormFound) {
                                      console.log('===== ticket form not found =====');
                                      updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some ticket form not exist: ' + ticketForm.ticket_form.name);
                                      // errorMigrate.push({
                                      //   name: 'SLA: ' + slaSelectList[counterI].title,
                                      //   error: 'ticket form doesnt exist: ' + ticketForm.ticket_form.name
                                      // });
                                    }
                                  },
                                  function(ticketFormError){
                                    console.log('===== ticketFormError =====');
                                    console.log(ticketFormError);
                                  });
                              } else if (slaSelectList[i].filter.any[f].field.includes('group_id')) {
                                client.request(getGroups(slaSelectList[i].filter.any[f].value)).then(
                                  function(groups){
                                    client.request(srcGroups_dest(groups.group.name)).then(
                                      function(srcGroup){
                                        if (srcGroup.results.length > 0) {
                                          console.log('===== group found =====');
                                          filterAnyCounter++;
                                          slaSelectList[counterI].filter.any[counterF].value = srcGroup.results[0].id;
                                          // if (filterAnyCounter == slaSelectList[counterI].filter.any.length) {
                                          //   console.log('any filter has finish');
                                          //   console.log(slaSelectList[counterI]);
                                          //   filterFinish++;
                                          //   if (filterFinish == 2) {
                                          //     doCreateSla(slaSelectList[counterI]);
                                          //   }
                                          // }
                                          counterArray.push(counterI);
                                          var caCounter = 0;
                                          for (c in counterArray) {
                                            var alCounter = slaSelectList[counterI].filter.all.length;
                                            var anCounter = slaSelectList[counterI].filter.any.length;
                                            if (counterArray[c] == counterI) {
                                              caCounter++;
                                              if (caCounter == alCounter + anCounter) {
                                                doCreateSla(slaSelectList[counterI]);
                                              }
                                            }
                                          }
                                        } else {
                                          console.log('===== group not found =====');
                                          updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some group not exist: ' + groups.group.name);
                                          // errorMigrate.push({
                                          //   name: 'SLA: ' + slaSelectList[counterI].title,
                                          //   error: 'group doesnt exist: ' + groups.group.name
                                          // });
                                        }
                                      },
                                      function(srcGroupError){
                                        console.log('===== srcGroupError =====');
                                        console.log(srcGroupError);
                                      });
                                  },
                                  function(groupsError){
                                    console.log('===== groupsError =====');
                                    console.log(groupsError);
                                  });
                              } else if (slaSelectList[i].filter.any[f].field.includes('organization_id')) {
                                client.request(getOrganizationsById(slaSelectList[i].filter.any[f].value)).then(
                                  function(org){
                                    client.request(srcOrganizationDest(org.organization.name)).then(
                                      function(orgDest){
                                        if (orgDest.results.length > 0) {
                                          console.log('===== organization found =====');
                                          slaSelectList[counterI].filter.any[counterF].value = orgDest.results[0].id;
                                          filterAnyCounter++;
                                          // if (filterAnyCounter == slaSelectList[counterI].filter.any.length) {
                                          //   console.log('any filter has finish');
                                          //   console.log(slaSelectList[counterI]);
                                          //   filterFinish++;
                                          //   if (filterFinish == 2) {
                                          //     doCreateSla(slaSelectList[counterI]);
                                          //   }
                                          // }
                                          counterArray.push(counterI);
                                          var caCounter = 0;
                                          for (c in counterArray) {
                                            var alCounter = slaSelectList[counterI].filter.all.length;
                                            var anCounter = slaSelectList[counterI].filter.any.length;
                                            if (counterArray[c] == counterI) {
                                              caCounter++;
                                              if (caCounter == alCounter + anCounter) {
                                                doCreateSla(slaSelectList[counterI]);
                                              }
                                            }
                                          }
                                        } else {
                                          console.log('===== organization not found =====');
                                          updateProgress('SLA', '<b>' + slaSelectList[counterI].title + '</b> Error. Some organizations not exist: ' + org.organization.name);
                                          // errorMigrate.push({
                                          //   name: 'SLA: ' + slaSelectList[counterI].title,
                                          //   error: 'organizations doesnt exist: ' + org.organization.name
                                          // });
                                        }
                                      },
                                      function(orgDestError){
                                        console.log('===== orgDestError =====');
                                        console.log(orgDestError);
                                      });
                                  },
                                  function(orgError){
                                    console.log('===== orgError =====');
                                    console.log(orgError);
                                  });
                              } else {
                                counterArray.push(counterI);
                                var caCounter = 0;
                                for (c in counterArray) {
                                  var alCounter = slaSelectList[counterI].filter.all.length;
                                  var anCounter = slaSelectList[counterI].filter.any.length;
                                  if (counterArray[c] == counterI) {
                                    caCounter++;
                                    if (caCounter == alCounter + anCounter) {
                                      doCreateSla(slaSelectList[counterI]);
                                    }
                                  }
                                }
                              }
                            })(f);
                          }
                        } else {
                          console.log('filter any null');
                          filterFinish++;
                        }
                      })(i);
                    }
                  },
                  function(ticketFormsDestError){
                    console.log('===== ticketFormsDestError =====');
                    console.log(ticketFormsDestError);
                  });
              },
              function(brandsDestError){
                console.log('===== brandsDestError =====');
                console.log(brandsDestError);
              });
          },
          function(ticketFieldsDestError){
            console.log('===== ticketFieldsDestError =====');
            console.log(ticketFieldsDestError);
          });
      }

      /*=====GROUPS=====*/
      if (groupSelectList.length > 0) {
        var groupIds = [];
        var groupCounter = 0;
        for (var i=0; i<groupSelectList.length; i++) {
          (function(counterI){
            client.request(srcGroups_dest(groupSelectList[i].name)).then(
              function(srcGroupData){
                // console.log(srcGroupData);
                var isGroupExist = false;
                var idGroup = '';
                if (srcGroupData.results.length > 0) {
                  isGroupExist =  true;
                  idGroup = srcGroupData.results[0].id;
                  groupIds.push({
                    index: counterI,
                    groupid: idGroup,
                    oldGroup: groupSelectList[counterI].id
                  });
                  groupCounter++;
                  if (groupCounter == groupSelectList.length) {
                    doGenerateGroupMembership(groupIds);
                  }
                } else {
                  console.log('groups is not exist');
                  var createGroup = new Array({group:groupSelectList[counterI]});
                  client.request(createGroup_dest(JSON.stringify(createGroup[0]))).then(
                    function(createGroupData){
                      groupCounter++;
                      idGroup = createGroupData.group.id;
                      groupIds.push({
                        index: counterI,
                        groupid: idGroup,
                        oldGroup: groupSelectList[counterI].id
                      });
                      if (groupCounter == groupSelectList.length) {
                        doGenerateGroupMembership(groupIds);
                      }
                    },
                    function(createGroupError){
                      console.log('=====failed create group=====');
                      updateProgress('Group', 'Error when creating group: ' + groupSelectList[counterI].name);
                      // console.log(createGroupError);
                      // errorMigrate.push({
                      //   name: groupSelectList[counterI],
                      //   error: createGroupError,
                      //   type: 'group'
                      // });
                    });
                  isGroupExist = false;
                }
              },
              function(srcGroupError){
                console.log('=====error search groups=====');
                console.log(srcGroupError);
              });
          })(i);
        }
      }

      /*=====VIEWS=====*/
      if (viewSelectList.length > 0) {
        client.request(getViewsDest()).then(
          function(viewsDest){
            client.request(getAllBrandsDest()).then(
              function(brandsDest){
                client.request(getAllSharingAgreementDest()).then(
                  function(shareDest){
                    client.request(getTicketFields_dest()).then(
                      function(ticketFieldDest){
                        var counterArray = [];
                        for (var i=0; i<viewSelectList.length; i++) {
                          var viewExist = false;
                          for (var v=0; v<viewsDest.views.length; v++) {
                            if (viewSelectList[i].title == viewsDest.views[v].title) {
                              viewExist = true;
                            }
                          }
                          console.log(viewSelectList[i]);
                          if (!viewExist) {
                            var conditionCounter = 0;
                            (function(counterI){
                              if (viewSelectList[counterI].restriction !== null) {
                                if (viewSelectList[counterI].restriction.type == 'Group') {
                                  if (isNumeric(viewSelectList[counterI].restriction.id)) {
                                    client.request(getGroups(viewSelectList[counterI].restriction.id)).then(
                                      function(group){
                                        client.request(srcGroups_dest(group.group.name)).then(
                                          function(srcGroup){
                                            if (srcGroup.results.length > 0) {
                                              viewSelectList[counterI].restriction.id = srcGroup.results[0].id;
                                              // conditionCounter++;
                                              // if (conditionCounter == 3) {
                                              //   doCreateViews(viewSelectList[counterI]);
                                              // }
                                              checkQue (counterArray, viewSelectList, counterI);
                                            } else {
                                              console.log('===== group not found =====');
                                              updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Group not found: ' + group.group.name);
                                            }
                                          },
                                          function(srcGroupError){
                                            console.log('===== srcGroupError =====');
                                            console.log(srcGroupError);
                                          });
                                      },
                                      function(groupError) {
                                        console.log('===== groupError =====');
                                        console.log(groupError);
                                      });
                                  } else {
                                    // conditionCounter++;
                                    // if (conditionCounter == 3) {
                                    //   doCreateViews(viewSelectList[counterI]);
                                    // }
                                    checkQue (counterArray, viewSelectList, counterI);
                                  }
                                }
                              }

                              if (viewSelectList[i].conditions.all.length > 0) {
                                var allCounter = 0;
                                for (var al=0; al<viewSelectList[i].conditions.all.length; al++) {
                                  (function(counterAL){
                                    if (viewSelectList[i].conditions.all[al].field == 'brand_id') {
                                      client.request(getBrands(viewSelectList[i].conditions.all[al].value)).then(
                                        function(brand){
                                          var brandFound = false;
                                          console.log(brand);
                                          console.log(brandsDest);
                                          for (allbrands in brandsDest.brands) {
                                            if (brand.brand.name == brandsDest.brands[allbrands].name) {
                                              brandFound = true;
                                              allCounter++;
                                              viewSelectList[counterI].conditions.all[counterAL].value = '' + brandsDest.brands[allbrands].id + '';
                                              // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                              //   console.log('conditionsAll done');
                                              //   conditionCounter++;
                                              //   if (conditionCounter == 3) {
                                              //     doCreateViews(viewSelectList[counterI]);
                                              //   }
                                              // }
                                              checkQue (counterArray, viewSelectList, counterI);
                                            }
                                          }
                                          if (!brandFound) {
                                            updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, brands not found: ' + brand.brand.name);
                                          }
                                        },
                                        function(brandError){
                                          console.log('===== brandError =====');
                                          console.log(brandError);
                                        });
                                    } else if (viewSelectList[i].conditions.all[al].field == 'assignee_id' || viewSelectList[i].conditions.all[al].field == 'requester_id') {
                                      if (isNumeric(viewSelectList[i].conditions.all[al].value)) {
                                        client.request(getUsers(viewSelectList[i].conditions.all[al].value)).then(
                                          function(user){
                                            if (user.user.email !== null) {
                                              client.request(srcUserByEmail_dest(user.user.email)).then(
                                                function(userSrc){
                                                  if (userSrc.results.length > 0) {
                                                    allCounter++;
                                                    viewSelectList[counterI].conditions.all[counterAL].value = '' + userSrc.results[0].id + '';
                                                    // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                                    //   console.log('conditionsAll done');
                                                    //   conditionCounter++;
                                                    //   if (conditionCounter == 3) {
                                                    //     doCreateViews(viewSelectList[counterI]);
                                                    //   }
                                                    // }
                                                    checkQue (counterArray, viewSelectList, counterI);
                                                  } else {
                                                    updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Assignee not found: ' + user.user.email);
                                                  }
                                                },
                                                function(userSrcError){
                                                  console.log('===== userSrcError =====');
                                                  console.log(userSrcError);
                                                });
                                            }
                                          },
                                          function(userError){
                                            console.log('===== userError ======');
                                            console.log(userError);
                                          });
                                      } else {
                                        allCounter++;
                                        // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                        //   console.log('conditionsAll done');
                                        //   conditionCounter++;
                                        //   if (conditionCounter == 3) {
                                        //     doCreateViews(viewSelectList[counterI]);
                                        //   }
                                        // }
                                        checkQue (counterArray, viewSelectList, counterI);
                                      }
                                    } else if (viewSelectList[i].conditions.all[al].field == 'received_from') {
                                      client.request(getSharingAgreement(viewSelectList[i].conditions.all[al].value)).then(
                                        function(share){
                                          var shareFound = false;
                                          for (var s=0; s<shareDest.sharing_agreements.length; s++){
                                            if (share.sharing_agreement.name == shareDest.sharing_agreements[s].name) {
                                              allCounter++;
                                              shareFound = true;
                                              viewSelectList[counterI].conditions.all[counterAL].value == '' + shareDest.sharing_agreements[s].id + '';
                                              // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                              //   console.log('conditionsAll done');
                                              //   conditionCounter++;
                                              //   if (conditionCounter == 3) {
                                              //     doCreateViews(viewSelectList[counterI]);
                                              //   }
                                              // }
                                              checkQue (counterArray, viewSelectList, counterI);
                                            }
                                          }
                                          if (!shareFound) {
                                            console.log('sharing not found');
                                            updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Sharing Aggreement not found: ' + share.sharing_agreement.name);
                                          }
                                        },
                                        function(shareError){
                                          console.log('===== shareError =====');
                                          console.log(shareError);
                                        });
                                    } else if (viewSelectList[i].conditions.all[al].field == 'group_id') {
                                      if (isNumeric(viewSelectList[i].conditions.all[al].value)){
                                        client.request(getGroups(viewSelectList[i].conditions.all[al].value)).then(
                                          function(group){
                                            client.request(srcGroups_dest(group.group.name)).then(
                                              function(groupSrc){
                                                if (groupSrc.results.length > 0) {
                                                  viewSelectList[counterI].conditions.all[counterAL].value = '' + groupSrc.results[0].id + '';
                                                  allCounter++;
                                                  // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                                  //   console.log('conditionsAll done');
                                                  //   conditionCounter++;
                                                  //   if (conditionCounter == 3) {
                                                  //     doCreateViews(viewSelectList[counterI]);
                                                  //   }
                                                  // }
                                                  checkQue (counterArray, viewSelectList, counterI);
                                                } else {
                                                  updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Group not found: ' + group.group.name);
                                                }
                                              },
                                              function(groupSrcError){
                                                console.log('===== groupSrcError =====');
                                                console.log(groupSrcError);
                                              });
                                          },
                                          function(groupError){
                                            console.log('===== groupError =====');
                                            console.log(groupError);
                                          });
                                      } else {
                                        allCounter++;
                                        // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                        //   console.log('conditionsAll done');
                                        //   conditionCounter++;
                                        //   if (conditionCounter == 3) {
                                        //     doCreateViews(viewSelectList[counterI]);
                                        //   }
                                        // }
                                        checkQue (counterArray, viewSelectList, counterI);
                                      }
                                    } else if (viewSelectList[i].conditions.all[al].field == 'via_id') {
                                      if (viewSelectList[i].conditions.all[al].value.includes('any_channel')) {
                                        updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, System cannot understand condition on: ' + viewSelectList[i].conditions.all[al].value);
                                      } else {
                                        allCounter++;
                                        // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                        //   console.log('conditionsAll done');
                                        //   conditionCounter++;
                                        //   if (conditionCounter == 3) {
                                        //     doCreateViews(viewSelectList[counterI]);
                                        //   }
                                        // }
                                        checkQue (counterArray, viewSelectList, counterI);
                                      }
                                    } else if (viewSelectList[i].conditions.all[al].field.includes('custom_fields_')) {
                                        var ticketId = viewSelectList[i].conditions.all[al].field.split('_');
                                        client.request(getTicketFieldsbyId(ticketId[2])).then(
                                          function(ticketField){
                                            var ticketFieldFound = false;
                                            for (var t=0; t<ticketFieldDest.ticket_fields.length; t++) {
                                              if (ticketField.ticket_field.title == ticketFieldDest.ticket_fields[t].title) {
                                                console.log('ticket_fields found with id: ' + ticketFieldDest.ticket_fields[t].id);
                                                allCounter++
                                                ticketFieldFound = true;
                                                viewSelectList[counterI].conditions.all[counterAL].field = 'custom_fields_' + ticketFieldDest.ticket_fields[t].id;
                                                // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                                //   conditionCounter++;
                                                //   if (conditionCounter == 3) {
                                                //     doCreateViews(viewSelectList[counterI]);
                                                //   }
                                                // }
                                                checkQue (counterArray, viewSelectList, counterI);
                                              }
                                            }
                                            if (!ticketFieldFound) {
                                              console.log('===== ticket field not found =====');
                                              updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Ticket field not found: ' + ticketField.ticket_field.title);
                                            }
                                          },
                                          function(ticketFieldError){
                                            console.log('===== ticketFieldError =====');
                                            console.log(ticketFieldError);
                                          });
                                    } else if (viewSelectList[i].conditions.all[al].field == 'sent_to') {
                                      client.request(getSharingAgreement(viewSelectList[i].conditions.all[al].value)).then(
                                        function(share){
                                          var shareFound = false;
                                          for (var s=0; s<shareDest.sharing_agreements.length; s++) {
                                            if (share.sharing_agreement.name == shareDest.sharing_agreements[s].name) {
                                              shareFound = true;
                                              allCounter++;
                                              viewSelectList[counterI].conditions.all[counterAL].value = '' + shareDest.sharing_agreements[s].id + '';
                                              // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                              //   conditionCounter++;
                                              //   if (conditionCounter == 3) {
                                              //     doCreateViews(viewSelectList[counterI]);
                                              //   }
                                              // }
                                              checkQue (counterArray, viewSelectList, counterI);
                                            }
                                          }
                                          if (!shareFound) {
                                            console.log('===== sharing agreement not found =====');
                                            updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Sharing Aggreement not found: ' + share.sharing_agreement.name);
                                          }
                                        },
                                        function(shareError){
                                          console.log('===== shareError =====');
                                          console.log(shareError);
                                        });
                                    } else {
                                      allCounter++;
                                      // if (allCounter == viewSelectList[counterI].conditions.all.length) {
                                      //   console.log('conditionsAll done');
                                      //   conditionCounter++;
                                      //   if (conditionCounter == 3) {
                                      //     doCreateViews(viewSelectList[counterI]);
                                      //   }
                                      // }
                                      checkQue (counterArray, viewSelectList, counterI);
                                    }
                                  })(al);
                                }
                              } else {
                                /*conditionCounter++;
                                if (conditionCounter == 3) {
                                  doCreateViews(viewSelectList[counterI]);
                                }*/
                              }
                              if (viewSelectList[i].conditions.any.length > 0) {
                                var anyCounter = 0;
                                for (var al=0; al<viewSelectList[i].conditions.any.length; al++) {
                                  (function(counterAL){
                                    if (viewSelectList[i].conditions.any[al].field == 'brand_id') {
                                      client.request(getBrands(viewSelectList[i].conditions.any[al].value)).then(
                                        function(brand){
                                          var brandFound = false;
                                          console.log(brand);
                                          console.log(brandsDest);
                                          for (anybrands in brandsDest.brands) {
                                            if (brand.brand.name == brandsDest.brands[anybrands].name) {
                                              brandFound = true;
                                              anyCounter++;
                                              viewSelectList[counterI].conditions.any[counterAL].value = '' + brandsDest.brands[anybrands].id + '';
                                              // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                              //   console.log('conditionsAll done');
                                              //   conditionCounter++;
                                              //   if (conditionCounter == 3) {
                                              //     doCreateViews(viewSelectList[counterI]);
                                              //   }
                                              // }
                                              checkQue (counterArray, viewSelectList, counterI);
                                            }
                                          }
                                          if (!brandFound) {
                                            updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, brands not found: ' + brand.brand.name);
                                          }
                                        },
                                        function(brandError){
                                          console.log('===== brandError =====');
                                          console.log(brandError);
                                        });
                                    } else if (viewSelectList[i].conditions.any[al].field == 'assignee_id' || viewSelectList[i].conditions.any[al].field == 'requester_id') {
                                      if (isNumeric(viewSelectList[i].conditions.any[al].value)) {
                                        client.request(getUsers(viewSelectList[i].conditions.any[al].value)).then(
                                          function(user){
                                            if (user.user.email !== null) {
                                              client.request(srcUserByEmail_dest(user.user.email)).then(
                                                function(userSrc){
                                                  if (userSrc.results.length > 0) {
                                                    anyCounter++;
                                                    viewSelectList[counterI].conditions.any[counterAL].value = '' + userSrc.results[0].id + '';
                                                    // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                                    //   console.log('conditionsAll done');
                                                    //   conditionCounter++;
                                                    //   if (conditionCounter == 3) {
                                                    //     doCreateViews(viewSelectList[counterI]);
                                                    //   }
                                                    // }
                                                    checkQue (counterArray, viewSelectList, counterI);
                                                  } else {
                                                    updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Assignee not found: ' + user.user.email);
                                                  }
                                                },
                                                function(userSrcError){
                                                  console.log('===== userSrcError =====');
                                                  console.log(userSrcError);
                                                });
                                            }
                                          },
                                          function(userError){
                                            console.log('===== userError ======');
                                            console.log(userError);
                                          });
                                      } else {
                                        anyCounter++;
                                        // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                        //   console.log('conditionsAll done');
                                        //   conditionCounter++;
                                        //   if (conditionCounter == 3) {
                                        //     doCreateViews(viewSelectList[counterI]);
                                        //   }
                                        // }
                                        checkQue (counterArray, viewSelectList, counterI);
                                      }
                                    } else if (viewSelectList[i].conditions.any[al].field == 'received_from') {
                                      client.request(getSharingAgreement(viewSelectList[i].conditions.any[al].value)).then(
                                        function(share){
                                          var shareFound = false;
                                          for (var s=0; s<shareDest.sharing_agreements.length; s++){
                                            if (share.sharing_agreement.name == shareDest.sharing_agreements[s].name) {
                                              anyCounter++;
                                              shareFound = true;
                                              viewSelectList[counterI].conditions.any[counterAL].value = '' + shareDest.sharing_agreements[s].id + '';
                                              // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                              //   console.log('conditionsAll done');
                                              //   conditionCounter++;
                                              //   if (conditionCounter == 3) {
                                              //     doCreateViews(viewSelectList[counterI]);
                                              //   }
                                              // }
                                              checkQue (counterArray, viewSelectList, counterI);
                                            }
                                          }
                                          if (!shareFound) {
                                            console.log('sharing not found');
                                            updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Sharing Aggreement not found: ' + share.sharing_agreement.name);
                                          }
                                        },
                                        function(shareError){
                                          console.log('===== shareError =====');
                                          console.log(shareError);
                                        });
                                    } else if (viewSelectList[i].conditions.any[al].field == 'group_id') {
                                      if (isNumeric(viewSelectList[i].conditions.any[al].value)){
                                        client.request(getGroups(viewSelectList[i].conditions.any[al].value)).then(
                                          function(group){
                                            client.request(srcGroups_dest(group.group.name)).then(
                                              function(groupSrc){
                                                if (groupSrc.results.length > 0) {
                                                  viewSelectList[counterI].conditions.any[counterAL].value = '' + groupSrc.results[0].id + '';
                                                  anyCounter++;
                                                  // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                                  //   console.log('conditionsAll done');
                                                  //   conditionCounter++;
                                                  //   if (conditionCounter == 3) {
                                                  //     doCreateViews(viewSelectList[counterI]);
                                                  //   }
                                                  // }
                                                  checkQue (counterArray, viewSelectList, counterI);
                                                } else {
                                                  updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Group not found: ' + group.group.name);
                                                }
                                              },
                                              function(groupSrcError){
                                                console.log('===== groupSrcError =====');
                                                console.log(groupSrcError);
                                              });
                                          },
                                          function(groupError){
                                            console.log('===== groupError =====');
                                            console.log(groupError);
                                          });
                                      } else {
                                        anyCounter++;
                                        // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                        //   console.log('conditionsAll done');
                                        //   conditionCounter++;
                                        //   if (conditionCounter == 3) {
                                        //     doCreateViews(viewSelectList[counterI]);
                                        //   }
                                        // }
                                        checkQue (counterArray, viewSelectList, counterI);
                                      }
                                    } else if (viewSelectList[i].conditions.any[al].field == 'via_id') {
                                      if (viewSelectList[i].conditions.any[al].value.includes('any_channel')) {
                                        updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, System cannot understand condition on: ' + viewSelectList[i].conditions.any[al].value);
                                      } else {
                                        anyCounter++;
                                        // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                        //   console.log('conditionsAll done');
                                        //   conditionCounter++;
                                        //   if (conditionCounter == 3) {
                                        //     doCreateViews(viewSelectList[counterI]);
                                        //   }
                                        // }
                                        checkQue (counterArray, viewSelectList, counterI);
                                      }
                                    } else if (viewSelectList[i].conditions.any[al].field.includes('custom_fields_')) {
                                        var ticketId = viewSelectList[i].conditions.any[al].field.split('_');
                                        client.request(getTicketFieldsbyId(ticketId[2])).then(
                                          function(ticketField){
                                            var ticketFieldFound = false;
                                            for (var t=0; t<ticketFieldDest.ticket_fields.length; t++) {
                                              if (ticketField.ticket_field.title == ticketFieldDest.ticket_fields[t].title) {
                                                console.log('ticket_fields found with id: ' + ticketFieldDest.ticket_fields[t].id);
                                                anyCounter++
                                                ticketFieldFound = true;
                                                viewSelectList[counterI].conditions.any[counterAL].field = 'custom_fields_' + ticketFieldDest.ticket_fields[t].id;
                                                // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                                //   conditionCounter++;
                                                //   if (conditionCounter == 3) {
                                                //     doCreateViews(viewSelectList[counterI]);
                                                //   }
                                                // }
                                                checkQue (counterArray, viewSelectList, counterI);
                                              }
                                            }
                                            if (!ticketFieldFound) {
                                              console.log('===== ticket field not found =====');
                                              updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Ticket field not found: ' + ticketField.ticket_field.title);
                                            }
                                          },
                                          function(ticketFieldError){
                                            console.log('===== ticketFieldError =====');
                                            console.log(ticketFieldError);
                                          });
                                    } else if (viewSelectList[i].conditions.any[al].field == 'sent_to') {
                                      client.request(getSharingAgreement(viewSelectList[i].conditions.any[al].value)).then(
                                        function(share){
                                          var shareFound = false;
                                          for (var s=0; s<shareDest.sharing_agreements.length; s++) {
                                            if (share.sharing_agreement.name == shareDest.sharing_agreements[s].name) {
                                              shareFound = true;
                                              anyCounter++;
                                              viewSelectList[counterI].conditions.any[counterAL].value = '' + shareDest.sharing_agreements[s].id + '';
                                              // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                              //   conditionCounter++;
                                              //   if (conditionCounter == 3) {
                                              //     doCreateViews(viewSelectList[counterI]);
                                              //   }
                                              // }
                                              checkQue (counterArray, viewSelectList, counterI);
                                            }
                                          }
                                          if (!shareFound) {
                                            console.log('===== sharing agreement not found =====');
                                            updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, Sharing Aggreement not found: ' + share.sharing_agreement.name);
                                          }
                                        },
                                        function(shareError){
                                          console.log('===== shareError =====');
                                          console.log(shareError);
                                        });
                                    } else {
                                      anyCounter++;
                                      // if (anyCounter == viewSelectList[counterI].conditions.any.length) {
                                      //   console.log('conditionsAll done');
                                      //   conditionCounter++;
                                      //   if (conditionCounter == 3) {
                                      //     doCreateViews(viewSelectList[counterI]);
                                      //   }
                                      // }
                                      checkQue (counterArray, viewSelectList, counterI);
                                    }
                                  })(al);
                                }
                              } else {
                                // conditionCounter++;
                                // if (conditionCounter == 3) {
                                //   doCreateViews(viewSelectList[counterI]);
                                // }
                              }
                            })(i);
                          } else {
                            console.log('views exist');
                          }
                        }
                      },
                      function(ticketFieldDestError){
                        console.log('===== ticketFieldDestError =====');
                        console.log(ticketFieldDestError);
                      });
                  },
                  function(shareDestError){
                    console.log('===== shareDestError =====');
                    console.log(shareDestError);
                  });
              },
              function(brandsDestError){
                console.log('brandsDestError');
                console.log(brandsDestError);
              });
          },
          function(viewsDestError){
            console.log('===== viewsDestError =====');
            console.log(viewsDestError);
          });
      }

      /*=====BRANDS=====*/
      if (brandsSelectList.length > 0) {
        client.request(getTicketForms_dest()).then(
          function(ticketDestForm){
            client.request(getAllBrandsDest()).then(
              function(brandsDest){
                var brandsCounter = 0;
                for (var i=0; i<brandsSelectList.length; i++) {
                  var brandsFound = false;
                  (function(counterI){
                    for (var b=0; b<brandsDest.brands.length; b++) {
                      if (brandsSelectList[i].name == brandsDest.brands[b].name) {
                        brandsFound = true;
                      }
                    }
                    if (!brandsFound) {
                      if (brandsSelectList[i].ticket_form_ids.length > 0) {
                        var newTicketFormIds = [];
                        var ticketFormsCounter = 0;
                        for (var t=0; t<brandsSelectList[i].ticket_form_ids.length; t++) {
                          client.request(getTicketFormsById(brandsSelectList[i].ticket_form_ids[t])).then(
                            function(ticketForm){
                              var ticketFormFound = false;
                              for (var tt=0; tt<ticketDestForm.ticket_forms.length; tt++) {
                                if (ticketDestForm.ticket_forms[tt].name == ticketForm.ticket_form.name) {
                                  newTicketFormIds.push(ticketDestForm.ticket_forms[tt].id);
                                  ticketFormFound = true;
                                  ticketFormsCounter++;
                                  if (ticketFormsCounter == brandsSelectList[counterI].ticket_form_ids.length) {
                                    console.log(newTicketFormIds);
                                    brandsSelectList[counterI].ticket_form_ids = newTicketFormIds;
                                    doCreateBrands(brandsSelectList[counterI]);
                                  }
                                }
                              }
                              if (!ticketFormFound) {
                                updateProgress('Brands', '<b>' + brandsSelectList[counterI].name + '</b> Error, Ticket Form not found: ' + ticketForm.ticket_form.name);
                              }
                            },
                            function(ticketFormError){
                              console.log('===== ticketFormError =====');
                              console.log(ticketFormError);
                            });
                        }
                      } else {
                        brandsCounter++;
                        console.log('no ticket form found, begin create');
                        doCreateBrands(brandsSelectList[i]);
                      }
                    } else {
                      brandsCounter++;
                      console.log('brands exist');
                    }
                  })(i);
                }
              },
              function(brandsDestError) {
                console.log('===== brandsDestError =====');
                console.log(brandsDestError);
              });
          },
          function(ticketDestFormError){
            console.log('===== ticketDestFormError =====');
            console.log(ticketDestFormError);
          });
      }

      /*=====MACROS=====*/
      if (macrosSelectList.length > 0) {
        client.request(getAllBrandsDest()).then(
          function(brandsDest){
            client.request(getTicketFields_dest()).then(
              function(ticketFieldsDest){
                client.request(getMacrosDest()).then(
                  function(macrosDest){
                    for (var i=0; i<macrosSelectList.length; i++) {
                      (function(counterI){
                        var macrosExist = false;
                        for (var m=0; m<macrosDest.macros.length; m++) {
                          if (macrosSelectList[i].title == macrosDest.macros[m].title) {
                            macrosExist = true;
                          }
                        }
                        if (!macrosExist) {
                          var processCounter = 0;
                          if (macrosSelectList[i].actions.length > 0) {
                            var actionCounter = 0;
                            for (var a=0; a<macrosSelectList[i].actions.length; a++) {
                              (function(counterA){
                                if (macrosSelectList[i].actions[a].field == 'group_id') {
                                  if (isNumeric(macrosSelectList[i].actions[a].value)) {
                                    client.request(getGroups(macrosSelectList[i].actions[a].value)).then(
                                      function(group){
                                        client.request(srcGroups_dest(group.group.name)).then(
                                          function(srcGroup){
                                            console.log(srcGroup);
                                            if (srcGroup.results.length > 0) {
                                              macrosSelectList[counterI].actions[counterA].value = ''+ srcGroup.results[0].id + '';
                                              actionCounter++;
                                              if (actionCounter == macrosSelectList[counterI].actions.length) {
                                                processCounter++;
                                                if (processCounter == 2) {
                                                  doCreateMacros(macrosSelectList[counterI]);
                                                }
                                              }
                                            } else {
                                              console.log('===== group not found =====');
                                              updateProgress('Macros', '<b>' + macrosSelectList[counterI].title + '</b> Error, Group not found: ' + group.group.name);
                                            }
                                          },
                                          function(srcGroupError){
                                            console.log('===== srcGroupError =====');
                                            console.log(srcGroupError);
                                          });
                                      },
                                      function(groupError){
                                        console.log('===== groupError =====');
                                        console.log(groupError);
                                      });
                                  } else {
                                    /*GROUP NOT NUMERIC*/
                                    actionCounter++;
                                    if (actionCounter == macrosSelectList[counterI].actions.length) {
                                      processCounter++;
                                      if (processCounter == 2) {
                                        doCreateMacros(macrosSelectList[counterI]);
                                      }
                                    }
                                  }
                                } else if (macrosSelectList[i].actions[a].field.includes('custom_fields_')) {
                                  var ticketId = macrosSelectList[i].actions[a].field.split('_');
                                    client.request(getTicketFieldsbyId(ticketId[2])).then(
                                      function(ticketField){
                                        var ticketFieldFound = false;
                                        for (var t=0; t<ticketFieldsDest.ticket_fields.length; t++) {
                                          if (ticketField.ticket_field.title == ticketFieldsDest.ticket_fields[t].title) {
                                            console.log('ticket_fields found with id: ' + ticketFieldsDest.ticket_fields[t].id);
                                            actionCounter++
                                            ticketFieldFound = true;
                                            macrosSelectList[counterI].actions[counterA].field = 'custom_fields_' + ticketFieldsDest.ticket_fields[t].id;
                                            if (actionCounter == macrosSelectList[counterI].actions.length) {
                                              processCounter++;
                                              if (processCounter == 2) {
                                                doCreateMacros(macrosSelectList[counterI]);
                                              }
                                            }
                                          }
                                        }
                                        if (!ticketFieldFound) {
                                          console.log('===== ticket field not found =====');
                                          updateProgress('Views', '<b>' + macrosSelectList[counterI].title + '</b> Error, Ticket field not found: ' + ticketField.ticket_field.title);
                                        }
                                      },
                                      function(ticketFieldError){
                                        console.log('===== ticketFieldError =====');
                                        console.log(ticketFieldError);
                                      });
                                } else if (macrosSelectList[i].actions[a].field == 'brand_id') {
                                  client.request(getBrands(macrosSelectList[i].actions[a].value)).then(
                                    function(brands){
                                      var brandsIsFound = false;
                                      for (var br=0; br<brandsDest.brands.length; br++) {
                                        if (brands.brand.name == brandsDest.brands[br].name) {
                                          brandsIsFound = true;
                                          console.log('brands found');
                                          actionCounter++;
                                          macrosSelectList[counterI].action[counterA].value = brandsDest.brands[br].id;
                                          if (actionCounter == macrosSelectList[counterI].actions.length) {
                                            processCounter++;
                                            if (processCounter == 2) {
                                              doCreateMacros(macrosSelectList[counterI]);
                                            }
                                          }
                                        }
                                      }
                                      if (!brandsIsFound) {
                                      console.log('===== brands not found =====');
                                        updateProgress('Macros', '<b>' + macrosSelectList[counterI].title + '</b> Error. Brands not exist: ' + brands.brand.name);
                                      }
                                    },
                                    function(brandsError){
                                      console.log('===== brandsError =====');
                                      console.log(brandsError);
                                    });
                                } else if (macrosSelectList[i].actions[a].field == 'cc' || macrosSelectList[i].actions[a].field == 'assignee_id') {
                                  if (isNumeric(macrosSelectList[i].actions[a].value)){
                                    client.request(getUsers(macrosSelectList[i].actions[a].value)).then(
                                      function(user){
                                        if (user.user.email !== null) {
                                          client.request(srcUserByEmail_dest(user.user.email)).then(
                                            function(srcUser){
                                              if (srcUser.results.length > 0) {
                                                macrosSelectList[counterI].actions[counterA].value = srcUser.results[0].id;
                                                actionCounter++;
                                                if (actionCounter == macrosSelectList[counterI].actions.length) {
                                                  processCounter++;
                                                  if (processCounter == 2) {
                                                    doCreateMacros(macrosSelectList[counterI]);
                                                  }
                                                }
                                              } else {
                                                updateProgress('Macros', '<b>' + macrosSelectList[counterI].title + '</b> Error. Cannot found users: ' + user.user.name);
                                              }
                                            },
                                            function(srcUserError){
                                              console.log('===== srcUserError =====');
                                              console.log(srcUserError);
                                            });
                                        } else {
                                          updateProgress('Macros', '<b>' + macrosSelectList[counterI].title + '</b> Error. Cannot found email users: ' + user.user.name);
                                        }
                                      },
                                      function(userError){
                                        console.log('===== userError =====');
                                        console.log(userError);
                                      });
                                  } else {
                                    /*CC NOT ID*/
                                    actionCounter++;
                                    if (actionCounter == macrosSelectList[counterI].actions.length) {
                                      processCounter++;
                                      if (processCounter == 2) {
                                        doCreateMacros(macrosSelectList[counterI]);
                                      }
                                    }
                                  }
                                } else {
                                  actionCounter++;
                                  if (actionCounter == macrosSelectList[counterI].actions.length) {
                                    processCounter++;
                                    if (processCounter == 2) {
                                      doCreateMacros(macrosSelectList[counterI]);
                                    }
                                  }
                                }
                              })(a);
                            }
                          } else {
                            console.log('action null.. proceed creating macros');
                          }
                          if (macrosSelectList[i].restriction !== null) {
                            if (macrosSelectList[i].restriction.type == 'Group') {
                              if (isNumeric(macrosSelectList[i].restriction.id)) {
                                if (macrosSelectList[i].restriction.ids.length > 0) {
                                  var idsCounter = 0;
                                  for (var r=0; r<macrosSelectList[i].restriction.ids.length; r++) {
                                    (function(counterR){
                                      client.request(getGroups(macrosSelectList[i].restriction.ids[r])).then(
                                        function(group){
                                          client.request(srcGroups_dest(group.group.name)).then(
                                            function(srcGroup){
                                              console.log(srcGroup);
                                              if (srcGroup.results.length > 0) {
                                                idsCounter++;
                                                if (macrosSelectList[counterI].restriction.ids[counterR] == macrosSelectList[counterI].restriction.id) {
                                                  macrosSelectList[counterI].restriction.id = srcGroup.results[0].id;
                                                  macrosSelectList[counterI].restriction.ids[counterR] = srcGroup.results[0].id;
                                                } else {
                                                  macrosSelectList[counterI].restriction.ids[counterR] = srcGroup.results[0].id;
                                                }
                                                if (idsCounter == macrosSelectList[counterI].restriction.ids.length) {
                                                  processCounter++;
                                                  if (processCounter == 2) {
                                                    doCreateMacros(macrosSelectList[counterI]);
                                                  }
                                                }
                                              } else {
                                                console.log('===== group not found =====');
                                                updateProgress('Macros', '<b>' + macrosSelectList[counterI].title + '</b> Error, Group not found: ' + group.group.name);
                                              }
                                            },
                                            function(srcGroupError){
                                              console.log('===== srcGroupError =====');
                                              console.log(srcGroupError);
                                            });
                                        },
                                        function(groupError){
                                          console.log('===== groupError =====');
                                          console.log(groupError);
                                        });
                                    })(r);
                                  }
                                }
                              } else {
                                /*GROUP NOT ID*/
                              }
                            }
                          } else {
                            processCounter++;
                            if (processCounter == 2) {
                              doCreateMacros(macrosSelectList[counterI]);
                            }
                          }
                        } else {
                          console.log('===== macros exist =====');
                        }
                      })(i);
                    }
                  },
                  function(macrosDestError){
                    console.log('===== macrosDestError =====');
                    console.log(macrosDestError);
                  });
              },
              function(ticketFieldsDestError){
                console.log('===== ticketFieldsDestError =====');
                console.log(ticketFieldsDestError);
              });
          },
          function(brandsDestError){
            console.log('===== brandsDestError =====');
            console.log(brandsDestError);
          });
      }
    }

    function checkQue (counterArray, selectList, counterI) {
      counterArray.push(counterI);
      var caCounter = 0;
      var alCounter = selectList[counterI].conditions.all.length;
      var anCounter = selectList[counterI].conditions.any.length;
      allCounter = alCounter + anCounter;
      if (selectList[counterI].restriction !== null) {
        allCounter++;
      }
      for (c in counterArray) {
        if (counterArray[c] == counterI) {
          caCounter++;
          if (caCounter == allCounter) {
            doCreateViews(selectList[counterI]);
          }
        }
      }
    }

    function doCreateMacros (macrosCreate) {
      console.log('macrosCreate');
      console.log(macrosCreate);
      var newMacros = new Array ({macro: macrosCreate});
      client.request(createMacros(JSON.stringify(newMacros[0]))).then(
        function(create){
          console.log('Create success');
          console.log(create);
        },
        function(createError){
          console.log('===== createError =====');
          console.log(createError);
          updateProgress('Macros', '<b>' + macrosCreate.title + '</b> Error, Something wrong with the parameter..');
        });
    }

    function doCreateBrands (brandsCreate) {
      console.log(brandsCreate);
      var newBrands = new Array ({brand:brandsCreate});
      client.request(createBrands(JSON.stringify(newBrands[0]))).then(
        function(create){
          console.log('Create success');
          console.log(create);
        },
        function(createBrandsError){
          console.log('===== createViewError =====');
          console.log(createBrandsError);
          updateProgress('Brands', '<b>' + brandsCreate.name + '</b> Error, Something wrong with the parameter..');
        });
    }

    function doCreateSla(parameter) {
      console.log('Create SLA');
      console.log(parameter);
      var newSla = new Array({sla_policy: parameter});
      client.request(createSla_dest(JSON.stringify(newSla[0]))).then(
        function(create){
          console.log(create);
          console.log('Create SLA Success');
        },
        function(createSlaError){
          console.log('===== createSlaError =====');
          console.log(createSlaError);
        });
    }

    function doCreateViews(viewsCreate){
      console.log('Create View');
      console.log(viewsCreate);
      var newView = new Array ({view:viewsCreate});
      client.request(createViews(JSON.stringify(newView[0]))).then(
        function(create){
          console.log('Create success');
          console.log(create);
        },
        function(createViewError){
          console.log('===== createViewError =====');
          console.log(createViewError);
        });
    }

    function doGenerateGroupMembership (groupIds) {
      console.log(groupIds);
      for (var i=0; i<groupIds.length; i++) {
        (function(counterI){
          client.request(getGroupMembership(groupIds[i].oldGroup)).then(
            function(membershipData){
              var createMembership = [];
              if (membershipData.group_memberships.length > 0) {
                for (var j=0; j<membershipData.group_memberships.length; j++) {
                  (function(counterJ){
                    client.request(getUsers(membershipData.group_memberships[j].user_id)).then(
                      function(userData){
                        console.log(userData);
                        if (userData.user.email !== null) {
                          client.request(srcUserByEmail_dest(userData.user.email)).then(
                            function(userDestData){
                              if (userDestData.results.length > 0) {
                                console.log('===== user exist =====');
                                membershipsList.push({
                                  user_id: userDestData.results[0].id,
                                  group_id: groupIds[counterI].groupid
                                });
                                console.log(membershipsList);
                              } else {
                                console.log('=====user doesnt exist=====');
                                console.log(membershipsList);
                              }
                              if (counterI == groupIds.length-1) {
                                console.log('=====group has finish=====');
                                console.log(membershipsList);
                                doCreateMemberships(membershipsList);
                              }
                            },
                            function(userDestEror){
                              console.log('=====error search users======');
                              console.log(userDestEror);
                            });
                        }
                      },
                      function(userError){
                        console.log('=====error get users=====');
                        console.log(userError);
                      });
                  })(j);
                }
              } else {
                console.log('=====group has no member=====');
                console.log(groupSelectList[counterI]);
              }
            },
            function(membershipError){
              console.log('=====ERROR GET MEMBERSHIPS=====');
              console.log(membershipError);
            });
        })(i);
      }
    }

    function doCreateMemberships (memberships) {
      var newMember = new Array({group_memberships: memberships});
      console.log(newMember);
      console.log('create memberships');
      console.log(JSON.stringify(newMember[0]));
      client.request(createGroupMembership_dest(JSON.stringify(newMember[0]))).then(
        function(createMembershipsData){
          console.log(createMembershipsData);
        },
        function(createMembershipsError){
          console.log('createMembershipsError');
          console.log(createMembershipsError);
        });
    }

    function doCreateAutomations (parameter) {
      var newAutoms = new Array({automation:parameter});
      console.log('CREATING AUTOMATIONS');
      console.log(parameter);
      client.request(createAutomations(JSON.stringify(newAutoms[0]))).then(
        function(createAutomationsData){
          console.log(createAutomationsData);
        },
        function(createAutomationsError){
          console.log('===== createAutomationsError =====');
          console.log(createAutomationsError);
        });
    }

    // function doCreateTicketForm (newTicketIds, ticketCount) {
    //   /*DO_CREATE_TICKET_FORM*/
    //   ticketFormsSelectList[ticketCount].ticket_field_ids = newTicketIds;
    //   var ticketForms = new Array({ticket_form:ticketFormsSelectList[ticketCount]});
    //   $.ajax({
    //     url: ZD_DOMAIN + '/api/v2/ticket_forms.json',
    //     type: 'POST',
    //     headers: {
    //       "Authorization": ZD_TOKEN
    //     },
    //     dataType : "json",
    //     data: JSON.stringify(ticketForms[0]),
    //     contentType: "application/json; charset=utf-8",
    //     async: false,
    //     cors: true,
    //     success: function(data) {
    //       console.log(data);
    //       if (ticketCount == (ticketFormsSelectList.length-1)) {
    //         ticketFormsSelectList = [];
    //         $('#ticketFormsCounter').text(ticketFormsSelectList.length);
    //         console.log(errorMigrate);
    //       }
    //     },
    //     error: function (errors) {
    //       console.log(errors);
    //       if (errors.responseJSON === undefined) {
    //         errorMigrate.push({
    //           name: ticketFormsSelectList[ticketCount].title,
    //           errors: errors.statusText
    //         });
    //       } else {
    //         errorMigrate.push({
    //           name: ticketFormsSelectList[ticketCount].title,
    //           errors: errors.responseJSON.details.base[0].description
    //         });
    //       }
    //       if (ticketCount == (ticketFormsSelectList.length-1)) {
    //         ticketFormsSelectList = [];
    //         $('#ticketFormsCounter').text(ticketFormsSelectList.length);
    //         console.log(errorMigrate);
    //       }
    //     }
    //   });
    // }

    function showResult(migrateCounter, errorMigrate) {
      $('#myModalResult').modal('show');
    }

    function updateProgress (type, message) {
      var error = '';
      error += '<tr><td>' + type + '</td><td>' + message + '</td><tr>';
      $('.bodyMessage').append(error);
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
