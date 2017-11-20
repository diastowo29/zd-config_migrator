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

var callCounter = 0;
var currentCallCounter = 0;

this.init();
// console.log('loaded');
// this.initsss();

/*====== DO NOT UNCOMMENT THIS LINE BELOW ======*/
// // // // // // // // this.deleteAllTicketFields();
/*====== ** ======*/

// var ZD_DOMAIN = "";
// var ZD_TOKEN = "";
var ZD_DOMAIN = "https://treesdemo11496822632.zendesk.com";
var ZD_TOKEN = "basic ZWxkaWVuLmhhc21hbnRvQHRyZWVzc29sdXRpb25zLmNvbTpXM2xjb21lMTIz";
// var ZD_DOMAIN = "https://testmigrate.zendesk.com";
// var ZD_TOKEN = "basic dHJlZXMuemVuZGVza0BnbWFpbC5jb206VzNsY29tZTEyMw==";
// $('.migrate_button').attr("disabled", "disabled");
// $('#myModal').modal('show');

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

function srcUserByName_dest(input) {
  var getTickets = {
    url: ZD_DOMAIN + '/api/v2/search.json?query=type:user%20name:' + input,
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

function getTargets (id) {
  var getTickets = {
    url: '/api/v2/targets/' + id + '.json',
    type: 'GET',
    dataType : "json",
    contentType: "application/json; charset=utf-8",
    async: false,
  }
  console.log(getTickets);
  return getTickets;
}

function getAllTargetsDest (id) {
  var getTickets = {
    url: ZD_DOMAIN + '/api/v2/targets.json',
    type: 'GET',
    headers: {
      "Authorization": ZD_TOKEN
    },
    cors: true,
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

function getSla_dest () {
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

function customApi (urls) {
  var header = {
    url: urls,
    type: 'GET',
    dataType : "json",
    contentType: "application/json; charset=utf-8",
    async: false,
  }
  console.log(header);
  return header;
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
  var ticketFieldUrl = '/api/v2/ticket_fields.json';
  var ticketFormsUrl = '/api/v2/ticket_forms.json';
  var macrosUrl = '/api/v2/macros.json';
  var automationsUrl = '/api/v2/automations.json';
  var slaUrl = '/api/v2/slas/policies.json';
  var viewsUrl = '/api/v2/views.json';
  var groupsUrl = '/api/v2/groups.json';
  var brandsUrl = '/api/v2/brands.json';

  document.getElementById('loader').style.visibility = 'visible';
  document.getElementById('mainContent').style.visibility = 'hidden';

  // this.customCall(ticketFieldUrl, 'ticket_fields');
  // this.customCall(ticketFormsUrl, 'ticket_forms');
  // this.customCall(macrosUrl, 'macros');
  this.customCall(automationsUrl, 'automations');
  // this.customCall(slaUrl, 'sla_policies');
  // this.customCall(viewsUrl, 'views');
  // this.customCall(groupsUrl, 'groups');
  this.customCall(brandsUrl, 'brands');
}

function customCall (url, dataType) {
  currentCallCounter++;
  var ticketContent = '';
  var formContent = '';
  var automationsContent = '';
  var slaContent = '';
  var groupContent = '';
  var viewsContent = '';
  var brandsContent = '';
  var macrosContent = '';
  client.request(customApi(url)).then(
    function(response){
      var listData = response[dataType];
      if (dataType == 'ticket_fields') {
        ticketFields = ticketFields.concat(listData);
      } else if (dataType == 'ticket_forms') {
        ticketForms = ticketForms.concat(listData);
      } else if (dataType == 'automations') {
        automations = automations.concat(listData);
      } else if (dataType == 'sla_policies') {
        slas = slas.concat(listData);
      } else if (dataType == 'groups') {
        groups = groups.concat(listData);
      } else if (dataType == 'views') {
        views = views.concat(listData);
      } else if (dataType == 'brands') {
        brands = brands.concat(listData);
      } else if (dataType == 'macros') {
        macros = macros.concat(listData);
      }
      if (response.next_page !== null) {
        customCall(response.next_page, dataType);
      } else {
        if (dataType == 'ticket_fields') {
          for (var i = 0; i<ticketFields.length; i++) {
            ticketContent += '<tr id="' + ticketFields[i].id + '" class="'+i+'" onClick="editData(1, ' + ticketFields[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFeldInput" id="' + ticketFields[i].id + '" type="checkbox"></td>'
            +'<td>' + ticketFields[i].title +'</td>';
          }
          $('.ticketFieldContent').append(ticketContent);
        } else if (dataType == 'ticket_forms') {
          for (var i = 0; i<ticketForms.length; i++) {
            formContent += '<tr id="' + ticketForms[i].id + '" class="'+i+'" onClick="editData(2, ' + ticketForms[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="ticketFormInput" id="' + ticketForms[i].id + '" type="checkbox"></td>'
            +'<td>' + ticketForms[i].name +'</td>';
          }
          $('.ticketFormsContent').append(formContent);
        } else if (dataType == 'automations') {
          for (var i = 0; i<automations.length; i++) {
            automationsContent += '<tr id="' + automations[i].id + '" class="'+i+'" onClick="editData(3, ' + automations[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="automationInput" id="' + automations[i].id + '" type="checkbox"></td>'
            +'<td>' + automations[i].title +'</td>';
          }
          $('.automationContent').append(automationsContent);
        } else if (dataType == 'sla_policies') {
          for (var i = 0; i<slas.length; i++) {
            slaContent += '<tr id="' + slas[i].id + '" class="'+i+'" onClick="editData(4, ' + slas[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="slaInput" id="' + slas[i].id + '" type="checkbox"></td>'
            +'<td>' + slas[i].title +'</td>';
          }
          $('.slaContent').append(slaContent);
        } else if (dataType == 'groups') {
          for (var i = 0; i<groups.length; i++) {
            groupContent += '<tr id="' + groups[i].id + '" class="'+i+'" onClick="editData(5, ' + groups[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="groupInput" id="' + groups[i].id + '" type="checkbox"></td>'
            +'<td>' + groups[i].name +'</td>';
          }
          $('.groupContent').append(groupContent);
        } else if (dataType == 'views') {
          for (var i = 0; i<views.length; i++) {
            viewsContent += '<tr id="' + views[i].id + '" class="'+i+'" onClick="editData(6, ' + views[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="viewInput" id="' + views[i].id + '" type="checkbox"></td>'
            +'<td>' + views[i].title +'</td>';
          }
          $('.viewsContent').append(viewsContent);
        } else if (dataType == 'brands') {
          for (var i = 0; i<brands.length; i++) {
            brandsContent += '<tr id="' + brands[i].id + '" class="'+i+'" onClick="editData(7, ' + brands[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="brandInput" id="' + brands[i].id + '" type="checkbox"></td>'
            +'<td>' + brands[i].name +'</td>';
          }
          $('.brandsContent').append(brandsContent);
        } else if (dataType == 'macros') {
          for (var i = 0; i<macros.length; i++) {
            macrosContent += '<tr id="' + macros[i].id + '" class="'+i+'" onClick="editData(8, ' + macros[i].id + ', ' + i + ')" style="cursor:pointer;">'
            +'<td><input class="macroInput" id="' + macros[i].id + '" type="checkbox"></td>'
            +'<td>' + macros[i].title +'</td>';
          }
          $('.macrosContent').append(macrosContent);
        }
      }
    },
    function(responseError){
      console.log('responseError');
      console.log(responseError);
    }).then(
    function(){
      callCounter++;
      if (callCounter == currentCallCounter) {
        document.getElementById('loader').style.visibility = 'hidden';
        document.getElementById('mainContent').style.visibility = 'visible';
      }
    });
}

$("#selectallCheckTicketField").change(function () {
  $("input.ticketFeldInput:checkbox").prop('checked', $(this).prop("checked"));
  
  if ($("#selectallCheckTicketField").prop('checked')) {
    ticketFieldsSelectList = [];
    ticketFieldsSelectList = ticketFields;
  } else {
    ticketFieldsSelectList = [];
  }
  console.log(ticketFieldsSelectList);
});

$("#selectallCheckTicketForm").change(function () {
  $("input.ticketFormInput:checkbox").prop('checked', $(this).prop("checked"));
  if ($("#selectallCheckTicketForm").prop('checked')) {
    ticketFormsSelectList = [];
    ticketFormsSelectList = ticketForms;
  } else {
    ticketFormsSelectList = [];
  }
  console.log(ticketFormsSelectList);
});

$("#selectallCheckAutomation").change(function () {
  $("input.automationInput:checkbox").prop('checked', $(this).prop("checked"));
  if ($("#selectallCheckAutomation").prop('checked')) {
    automationsSelectList = [];
    automationsSelectList = automations;
  } else {
    automationsSelectList = [];
  }
  console.log(automationsSelectList);
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

function doMigrate () {
  membershipsList = [];
  var migrateCounter = 0;
  errorMigrate = [];
  showResult();
  $(".bodyMessage").empty();

  /*=====TICKET FIELDS=====*/
  if (ticketFieldsSelectList.length > 0) {
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
                  updateProgress('Ticket Fields', 'Ticket field created: ' + ticketFieldsSelectList[counterI].title);
                },
                function (errorCreateData){
                  console.log('===== error create ticket_fields dest ======');
                  console.log(errorCreateData);
                  updateProgress('Ticket Fields', 'Error Create Ticket: ' + ticketFieldsSelectList[counterI].title);
                });
            } else {
              updateProgress('Ticket Fields', 'Ticket field exist: ' + ticketFieldsSelectList[counterI].title);
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
                        updateProgress('Ticket Forms', '<b>' + ticketFormsSelectList[i].name + '</b> Error. Some ticket fields not exist: ' + ticketFieldsFrom.title);
                      }
                      ticketFieldsExist = false;
                    }
                    (function(counterI){
                      if (ticketFieldsCounter == ticketFormsSelectList[i].ticket_field_ids.length) {
                        ticketFormsSelectList[i].ticket_field_ids = newTicketIds;
                        var ticketForms = new Array({ticket_form:ticketFormsSelectList[i]});
                        client.request(createTicketForms(JSON.stringify(ticketForms[0]))).then(
                          function(createData){
                            updateProgress('Ticket Forms', 'Ticket form created: ' + ticketFormsSelectList[counterI].name);
                          },
                          function(createError){
                            console.log('===== createError =====');
                            console.log(createError);
                            updateProgress('Ticket Forms', '<b>' + 'Error when create ticket forms: ' + ticketFormsSelectList[counterI].name);
                          });
                        newTicketIds = [];
                      }
                    })(i);
                  } else {
                    updateProgress('Ticket Forms', 'Ticket form exist: ' + ticketFormsSelectList[i].name);
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
            client.request(getAllBrandsDest()).then(
              function(brandsDest){
                client.request(getAllTargetsDest()).then(
                  function(targetsDest){
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
                                                checkQueAutomations(counterArray, counterI);
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
                                    checkQueAutomations(counterArray, counterI);
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
                                              checkQueAutomations(counterArray, counterI);
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
                                    checkQueAutomations(counterArray, counterI);
                                  }
                                } else if (automationsSelectList[i].actions[a].field == 'notification_target') {
                                  if (isNumeric(automationsSelectList[i].actions[a].value[0])) {
                                    client.request(getTargets(automationsSelectList[i].actions[a].value[0])).then(
                                      function(targets){
                                        var targetFound = false;
                                        for (var t=0;t<targetsDest.targets.length; t++) {
                                          if (targets.target.title == targetsDest.targets[t].title) {
                                            targetFound = true;
                                            automationsSelectList[counterI].actions[counterA].value[0] = '' + targetsDest.targets[t].id;
                                            counterArray.push(counterI);
                                            checkQueAutomations(counterArray, counterI);
                                          }
                                        }
                                        if (!targetFound) {
                                          updateProgress('Automations', '<b>' + automationsSelectList[counterI].title + '</b> Error, Target not found: ' + targets.target.title);
                                        }
                                      },
                                      function(targetsError){
                                        console.log('===== targetsError =====');
                                        console.log(targetsError);
                                      });
                                  } else {
                                    counterArray.push(counterI);
                                    checkQueAutomations(counterArray, counterI);
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
                                        checkQueAutomations(counterArray, counterI);
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
                                  counterArray.push(counterI);
                                  checkQueAutomations(counterArray, counterI);
                                }
                              })(a);
                            }
                          } else {
                            checkQueAutomations(counterArray, counterI);
                          }
                          if (automationsSelectList[i].conditions.all.length > 0) {
                            for (var al=0; al<automationsSelectList[i].conditions.all.length; al++) {
                              (function(counterAL){
                                if (automationsSelectList[i].conditions.all[al].field == 'group_id') {
                                  if (isNumeric(automationsSelectList[i].conditions.all[al].value)) {
                                    client.request(getGroups(automationsSelectList[i].conditions.all[al].value)).then(
                                      function(group){
                                        client.request(srcGroups_dest(group.group.name)).then(
                                          function(srcGroup){
                                            if (srcGroup.results.length > 0) {
                                              automationsSelectList[counterI].conditions.all[counterAL].value = '' + srcGroup.results[0].id + '';
                                              counterArray.push(counterI);
                                              checkQueAutomations(counterArray, counterI);
                                            } else {
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
                                    checkQueAutomations(counterArray, counterI);
                                  }
                                } else if (automationsSelectList[i].conditions.all[al].field == 'brand_id') {
                                  if (isNumeric(automationsSelectList[i].conditions.all[al].value)) {
                                    client.request(getBrands(automationsSelectList[i].conditions.all[al].value)).then(
                                      function(brand){
                                        var brandFound = false;
                                        console.log(brand);
                                        console.log(brandsDest);
                                        for (allbrands in brandsDest.brands) {
                                          if (brand.brand.name == brandsDest.brands[allbrands].name) {
                                            brandFound = true;
                                            automationsSelectList[counterI].conditions.all[counterAL].value = '' + brandsDest.brands[allbrands].id + '';
                                            counterArray.push(counterI);
                                            checkQueAutomations(counterArray, counterI);
                                          }
                                        }
                                        if (!brandFound) {
                                          updateProgress('Automations', '<b>' + automationsSelectList[counterI].title + '</b> Error, brands not found: ' + brand.brand.name);
                                        }
                                      },
                                      function(brandError){
                                        console.log('===== brandError =====');
                                        console.log(brandError);
                                      });
                                  } else {
                                    counterArray.push(counterI);
                                    checkQueAutomations(counterArray, counterI);
                                  }
                                } else {
                                  counterArray.push(counterI);
                                  checkQueAutomations(counterArray, counterI);
                                }
                              })(al);
                            }
                          } else {
                            checkQueAutomations(counterArray, counterI);
                          }

                          if (automationsSelectList[i].conditions.any.length > 0) {
                            for (var al=0; al<automationsSelectList[i].conditions.any.length; al++) {
                              (function(counterAL){
                                if (automationsSelectList[i].conditions.any[al].field == 'group_id') {
                                  if (isNumeric(automationsSelectList[i].conditions.any[al].value)) {
                                    client.request(getGroups(automationsSelectList[i].conditions.any[al].value)).then(
                                      function(group){
                                        client.request(srcGroups_dest(group.group.name)).then(
                                          function(srcGroup){
                                            if (srcGroup.results.length > 0) {
                                              automationsSelectList[counterI].conditions.any[counterAL].value = '' + srcGroup.results[0].id + '';
                                              counterArray.push(counterI);
                                              checkQueAutomations(counterArray, counterI);
                                            } else {
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
                                    checkQueAutomations(counterArray, counterI);
                                  }
                                } else {
                                  counterArray.push(counterI);
                                  checkQueAutomations(counterArray, counterI);
                                }
                              })(al);
                            }
                          } else {
                            checkQueAutomations(counterArray, counterI);
                          }
                        })(i);
                      } else {
                        updateProgress('Automations', 'Automations exist: ' + automationsSelectList[i].title);
                      }
                    }
                  },
                  function(targetsDestError){
                    console.log('===== targetsDestError =====');
                    console.log(targetsDestError);
                  });
                
              },
              function(brandsDestError){
                console.log('===== brandsDestError =====');
                console.log(brandsDestError);
              });
            
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
                client.request(getSla_dest()).then(
                  function(slaDest){
                    var counterArray = [];
                    for (var i=0; i<slaSelectList.length; i++) {
                      var slaExist = false;
                      for (var sd=0; sd<slaDest.sla_policies.length; sd++) {
                        if (slaSelectList[i].title == slaDest.sla_policies[sd].title) {
                          slaExist = true;
                        }
                      }
                      if (!slaExist) {
                        console.log('sla not exist');
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
                      } else {
                        console.log('SLA Exist');
                        updateProgress('Sla', 'Sla exist: ' + slaSelectList[counterI].title);
                      }
                    }
                  },
                  function(slaDestError){
                    console.log('===== slaDestError =====');
                    console.log(slaDestError);
                  });
                
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
            var idGroup = '';
            if (srcGroupData.results.length > 0) {
              console.log('groups is exist');
              idGroup = srcGroupData.results[0].id;
              client.request(getGroupMembership(groupSelectList[counterI].id)).then(
                function(memberships){
                  groupCounter++;
                  groupIds.push({
                    index: counterI,
                    groupid: idGroup,
                    oldGroup: groupSelectList[counterI].id,
                    membershipData: memberships.group_memberships 
                  });
                  if (groupCounter == groupSelectList.length) {
                    doGenerateGroupMembership(groupIds);
                  }
                },
                function(membershipError){
                  console.log('===== membershipError =====');
                  console.log(membershipError);
                });
            } else {
              console.log('groups is not exist');
              var createGroup = new Array({group:groupSelectList[counterI]});
              client.request(createGroup_dest(JSON.stringify(createGroup[0]))).then(
                function(createGroupData){
                  idGroup = createGroupData.group.id;
                  client.request(getGroupMembership(groupSelectList[counterI].id)).then(
                    function(memberships){
                      groupCounter++;
                      groupIds.push({
                        index: counterI,
                        groupid: idGroup,
                        oldGroup: groupSelectList[counterI].id,
                        membershipData: memberships.group_memberships
                      });
                      if (groupCounter == groupSelectList.length) {
                        doGenerateGroupMembership(groupIds);
                      }
                    },
                    function(membershipError){
                      console.log('===== membershipError =====');
                      console.log(membershipError);
                    });
                },
                function(createGroupError){
                  console.log('=====failed create group=====');
                  updateProgress('Group', 'Error when creating group: ' + groupSelectList[counterI].name);
                });
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
                                          checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                          checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                                checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                    checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                          checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                              checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                    checkQueViewSelectList (counterArray, viewSelectList, counterI);
                                  }
                                } else if (viewSelectList[i].conditions.all[al].field == 'via_id') {
                                  if (viewSelectList[i].conditions.all[al].value.includes('any_channel')) {
                                    updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, System cannot understand condition on: ' + viewSelectList[i].conditions.all[al].value);
                                  } else {
                                    allCounter++;
                                    checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                            checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                          checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                  checkQueViewSelectList (counterArray, viewSelectList, counterI);
                                }
                              })(al);
                            }
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
                                          checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                                checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                    checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                          checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                              checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                    checkQueViewSelectList (counterArray, viewSelectList, counterI);
                                  }
                                } else if (viewSelectList[i].conditions.any[al].field == 'via_id') {
                                  if (viewSelectList[i].conditions.any[al].value.includes('any_channel')) {
                                    updateProgress('Views', '<b>' + viewSelectList[counterI].title + '</b> Error, System cannot understand condition on: ' + viewSelectList[i].conditions.any[al].value);
                                  } else {
                                    anyCounter++;
                                    checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                            checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                          checkQueViewSelectList (counterArray, viewSelectList, counterI);
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
                                  checkQueViewSelectList (counterArray, viewSelectList, counterI);
                                }
                              })(al);
                            }
                          }
                          if (viewSelectList[i].execution.custom_fields.length > 0) {
                            for (var cf=0; cf<viewSelectList[i].execution.custom_fields.length; cf++) {
                              (function(counterCF){
                                client.request(getTicketFieldsbyId(viewSelectList[i].execution.custom_fields[cf].id)).then(
                                  function(ticketField){
                                    for (var cfd=0; cfd<ticketFieldDest.ticket_fields.length; cfd++) {
                                      if (ticketField.ticket_field.title == ticketFieldDest.ticket_fields[cfd].title) {
                                        viewSelectList[counterI].execution.custom_fields[counterCF].id = ticketFieldDest.ticket_fields[cfd].id;
                                        viewSelectList[counterI].execution.custom_fields[counterCF].url = ticketFieldDest.ticket_fields[cfd].url;
                                        for (var col=0; col<viewSelectList[counterI].execution.columns.length; col++) {
                                          if (viewSelectList[counterI].execution.columns[col].title == ticketFieldDest.ticket_fields[cfd].title) {
                                            viewSelectList[counterI].execution.columns[col].id = ticketFieldDest.ticket_fields[cfd].id;
                                            viewSelectList[counterI].execution.columns[col].url = ticketFieldDest.ticket_fields[cfd].url;
                                          }
                                        }
                                        checkQueViewSelectList (counterArray, viewSelectList, counterI);
                                      }
                                    }
                                  },
                                  function(ticketFieldError){
                                    console.log('===== ticketFieldError =====');
                                    console.log(ticketFieldError);
                                  });
                              })(cf);
                            }
                          }
                          if (isNumeric(viewSelectList[i].execution.group.id)) {
                            client.request(getTicketFieldsbyId(viewSelectList[i].execution.group.id)).then(
                              function(ticketField){
                                for (var cfd=0; cfd<ticketFieldDest.ticket_fields.length; cfd++) {
                                  if (ticketField.ticket_field.title == ticketFieldDest.ticket_fields[cfd].title) {
                                    viewSelectList[counterI].execution.group.id = ticketFieldDest.ticket_fields[cfd].id;
                                    viewSelectList[counterI].execution.group.url = ticketFieldDest.ticket_fields[cfd].url;
                                    viewSelectList[counterI].execution.group_by = ticketFieldDest.ticket_fields[cfd].id;
                                    checkQueViewSelectList (counterArray, viewSelectList, counterI);
                                  }
                                }
                              },
                              function(ticketFieldError){
                                console.log('===== ticketFieldError =====');
                                console.log(ticketFieldError);
                              });
                          }
                          if (isNumeric(viewSelectList[i].execution.sort.id)) {
                            client.request(getTicketFieldsbyId(viewSelectList[i].execution.sort.id)).then(
                              function(ticketField){
                                for (var cfd=0; cfd<ticketFieldDest.ticket_fields.length; cfd++) {
                                  if (ticketField.ticket_field.title == ticketFieldDest.ticket_fields[cfd].title) {
                                    viewSelectList[counterI].execution.sort.id = ticketFieldDest.ticket_fields[cfd].id;
                                    viewSelectList[counterI].execution.sort.url = ticketFieldDest.ticket_fields[cfd].url;
                                    viewSelectList[counterI].execution.sort = ticketFieldDest.ticket_fields[cfd].id;
                                    checkQueViewSelectList (counterArray, viewSelectList, counterI);
                                  }
                                }
                              },
                              function(ticketFieldError){
                                console.log('===== ticketFieldError =====');
                                console.log(ticketFieldError);
                              });
                          }
                        })(i);
                      } else {
                        console.log('views exist');
                        updateProgress('Views', 'View exist: ' + viewSelectList[counterI].title);
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
                      updateProgress('Macros', 'Macro exist: ' + macrosSelectList[counterI].title);
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

function checkQueViewSelectList (counterArray, selectList, counterI) {
  counterArray.push(counterI);
  var caCounter = 0;
  var alCounter = selectList[counterI].conditions.all.length;
  var anCounter = selectList[counterI].conditions.any.length;
  var cfCounter = selectList[counterI].execution.custom_fields.length;
  allCounter = alCounter + anCounter + cfCounter;
  if (isNumeric(selectList[counterI].execution.group.id)) {
    allCounter++;
  }
  if (isNumeric(selectList[counterI].execution.sort.id)) {
    allCounter++;
  }
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

function checkQueAutomations (counterArray, counterI) {
  var caCounter = 0;
  for (c in counterArray) {
    var aCounter = automationsSelectList[counterI].actions.length;
    var alCounter = automationsSelectList[counterI].conditions.all.length;
    var anCounter = automationsSelectList[counterI].conditions.any.length;
    if (counterArray[c] == counterI) {
      caCounter++;
      if (caCounter == aCounter + alCounter + anCounter) {
        console.log('AUTOAMTIONS CREATE')
        console.log(automationsSelectList[counterI]);
        // doCreateAutomations(automationsSelectList[counterI]);
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
  var memberCounter = [];
  var membershipsList = [];
  var gCounter = 0;
  for (var i=0; i<groupIds.length; i++) {
    console.log(groupIds[i]);
    (function(counterI){
      if (groupIds[counterI].membershipData.length > 0) {
        for (var m=0; m<groupIds[counterI].membershipData.length; m++) {
          (function(counterM){
            client.request(getUsers(groupIds[counterI].membershipData[counterM].user_id)).then(
              function(users){
                if (users.user.email !== null) {
                  client.request(srcUserByEmail_dest(users.user.email)).then(
                    function(srcUser){
                      if (srcUser.results.length > 0) {
                        membershipsList.push({
                          user_id: srcUser.results[0].id,
                          group_id: groupIds[counterI].groupid
                        });
                        memberCounter.push(counterI);
                        console.log(counterI);
                        console.log(counterM);
                        console.log(membershipsList);
                        var cCounter = 0;
                        for (var c=0; c<memberCounter.length; c++) {
                          if (memberCounter[c] == counterI) {
                            cCounter++;
                            if (cCounter == groupIds[counterI].membershipData.length) {
                              gCounter++;
                              if (gCounter == groupIds.length || membershipsList.length == 100) {
                                console.log('memberships finish');
                                console.log(membershipsList); 
                                membershipsList = [];
                              }
                            }
                          }
                        }
                      } else {
                        var groupIndex = groupIds[counterI].index;
                        updateProgress('Group', '<b>' + groupSelectList[groupIndex].name +'</b>, User doesn\'t exist: ' + users.user.name);
                        memberCounter.push(counterI);
                        console.log(counterI);
                        console.log(counterM);
                        console.log(membershipsList);
                        var cCounter = 0;
                        for (var c=0; c<memberCounter.length; c++) {
                          if (memberCounter[c] == counterI) {
                            cCounter++;
                            if (cCounter == groupIds[counterI].membershipData.length) {
                              gCounter++;
                              if (gCounter == groupIds.length || membershipsList.length == 100) {
                                console.log('memberships finish');
                                console.log(membershipsList);
                                membershipsList = [];
                              }
                            }
                          }
                        }
                      }
                    },
                    function(srcUserError){
                      console.log('===== srcUserError =====');
                      console.log(srcUserError);
                    });
                } else if (users.user.name !== null) {
                  client.request(srcUserByName_dest(users.user.name)).then(
                    function(srcUser){
                      if (srcUser.results.length > 0) {
                        membershipsList.push({
                          user_id: srcUser.results[0].id,
                          group_id: groupIds[counterI].groupid
                        });
                        memberCounter.push(counterI);
                        console.log(counterI);
                        console.log(counterM);
                        console.log(membershipsList);
                        var cCounter = 0;
                        for (var c=0; c<memberCounter.length; c++) {
                          if (memberCounter[c] == counterI) {
                            cCounter++;
                            if (cCounter == groupIds[counterI].membershipData.length) {
                              gCounter++;
                              if (gCounter == groupIds.length || membershipsList.length == 100) {
                                console.log('memberships finish');
                                console.log(membershipsList);
                                membershipsList = [];
                              }
                            }
                          }
                        }
                      } else {
                        var groupIndex = groupIds[counterI].index;
                        updateProgress('Group', '<b>' + groupSelectList[groupIndex].name +'</b>, User doesn\'t exist: ' + users.user.name);
                        memberCounter.push(counterI);
                        console.log(counterI);
                        console.log(counterM);
                        console.log(membershipsList);
                        var cCounter = 0;
                        for (var c=0; c<memberCounter.length; c++) {
                          if (memberCounter[c] == counterI) {
                            cCounter++;
                            if (cCounter == groupIds[counterI].membershipData.length) {
                              gCounter++;
                              if (gCounter == groupIds.length || membershipsList.length == 100) {
                                console.log('memberships finish');
                                console.log(membershipsList);
                                membershipsList = [];
                              }
                            }
                          }
                        }
                      }
                    },
                    function(srcUserError){
                      console.log('===== srcUserError =====');
                      console.log(srcUserError);
                    });
                }
              },
              function(usersError){
                console.log('===== usersError =====');
                console.log(usersError);
              });
          })(m);
        }
      }
    })(i);
  }
}

function doCreateMemberships (memberships) {
  var newMember = new Array({group_memberships: memberships});
  console.log(newMember);
  console.log('create memberships');
  console.log(JSON.stringify(newMember[0]));
  // client.request(createGroupMembership_dest(JSON.stringify(newMember[0]))).then(
  //   function(createMembershipsData){
  //     console.log(createMembershipsData);
  //   },
  //   function(createMembershipsError){
  //     console.log('createMembershipsError');
  //     console.log(createMembershipsError);
  //   });
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

function showResult(migrateCounter, errorMigrate) {
  $('#myModalResult').modal('show');
}

function updateProgress (type, message) {
  var error = '';
  error += '<tr><td>' + type + '</td><td>' + message + '</td><tr>';
  $('.bodyMessage').append(error);
}

function deleteAllTicketFields () {
  // client.request(getTicketFields()).then(
  //   function (data){
  //     console.log(data);
  //     for (var i=0; i<data.ticket_fields.length; i++) {
  //       if (data.ticket_fields[i].removable) {
  //         if (data.ticket_fields[i].title != 'Type') {
  //           if (data.ticket_fields[i].title != 'Priority') {
  //             console.log(data.ticket_fields[i].title);
  //             client.request(deleteTicketFields(data.ticket_fields[i].id)).then(
  //               function (deleteData){
  //                 console.log(deleteData);
  //               },
  //               function(errorDeleteData){
  //                 console.log(errorDeleteData);
  //               });
  //           }
  //         }
  //       }
  //     }
  //   },
  //   function (errorData){
  //     console.log(errorData);
  //   });
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}