function checkValid(){
  if (!checkFormate()|!checkInput()|!checkCheckbox()){
    return false;
  }else{
    console.log("Verify Passed");
    return true;
  }
  
}

//check name condo source target_margeting price_requirement business price_range
function checkInput(){
  var length_of_array;
  var fields_required = [
  { "field_id":"name" , "warning_msg_id":"name_msg", "warning_msg":"请填入姓名"},
  { "field_id":"condo" , "warning_msg_id":"condo_msg", "warning_msg":"请选择是否为condo" },
  { "field_id":"source" , "warning_msg_id":"source_msg", "warning_msg":"请选择来源" },
  { "field_id":"target_marketing" , "warning_msg_id":"target_marketing_msg", "warning_msg":"请选择客户为华人还是西人" },
  { "field_id":"price_requirement" , "warning_msg_id":"price_requirement_msg", "warning_msg":"请选择预期但的价格" },
  { "field_id":"business" , "warning_msg_id":"business_msg", "warning_msg":"请选择是否为商业装修" },
  { "field_id":"price_range" , "warning_msg_id":"price_range_msg", "warning_msg":"请选择价格偏向" }
  ];
  var boolean_required;
  length_of_array = Object.keys(fields_required).length;
  for (var i = 0; i < length_of_array; i++){
    if (document.getElementById(fields_required[i].field_id).value.trim() == ""){
      document.getElementById(fields_required[i].warning_msg_id).innerHTML = fields_required[i].warning_msg;
      boolean_required = false;
    }
    else{
      document.getElementById(fields_required[i].warning_msg_id).innerHTML = "";
      boolean_required = true;
    }
  }
  return boolean_required;
}

function checkFormate() {
  var wechat_check_formate = new RegExp("^([a-zA-Z0-9]{5,})$");
  var phone_check_formate = new RegExp("^[(]?[0-9]{3}[) .-]?[0-9]{3}[ .-]?[0-9]{4}$");
  var email_check_formate = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  var boolean_wechat;
  var boolean_email;
  var boolean_phone;
  var fields_formate_check = [
  { "field_id":"wechat" , "warning_msg_id":"wechat_msg", "warning_empty_msg":"noneed", "check_formate_msg":"请确认您输入微信格式"},
  { "field_id":"phone" , "warning_msg_id":"phone_msg", "warning_empty_msg":"请填入电话", "check_formate_msg":"请确认您输入电话格式"},
  { "field_id":"email" , "warning_msg_id":"email_msg", "warning_empty_msg":"请输入邮箱", "check_formate_msg":"请确认您输入邮箱格式"}
  ];
  // console.log(boolean_required);
  // check wechat
  if (document.getElementById(fields_formate_check[0].field_id).value.trim() == ""){
    boolean_wechat = true;
  }else{
    if(!wechat_check_formate.test(document.getElementById(fields_formate_check[0].field_id).value.trim())){
    document.getElementById(fields_formate_check[0].warning_msg_id).innerHTML = fields_formate_check[0].check_formate_msg;
    boolean_wechat = false;
    }else{
    document.getElementById(fields_formate_check[0].warning_msg_id).innerHTML = "";
    boolean_wechat = true;
    }
  }
  //phone number check
  if (document.getElementById(fields_formate_check[1].field_id).value.trim() == ""){
    document.getElementById(fields_formate_check[1].warning_msg_id).innerHTML = fields_formate_check[1].warning_empty_msg;
    boolean_phone = false;
    // console.log(boolean_phone);
  }else{
    if(!phone_check_formate.test(document.getElementById(fields_formate_check[1].field_id).value.trim())){
    document.getElementById(fields_formate_check[1].warning_msg_id).innerHTML = fields_formate_check[1].check_formate_msg;
    boolean_phone = false;
    // console.log(boolean_phone);
    }else{
    document.getElementById(fields_formate_check[1].warning_msg_id).innerHTML = "";
    boolean_phone = true;
    // console.log(boolean_phone);
    }
  }
  //email check
  if (document.getElementById(fields_formate_check[2].field_id).value.trim() == ""){
    document.getElementById(fields_formate_check[2].warning_msg_id).innerHTML = fields_formate_check[2].warning_empty_msg;
    boolean_email = false;
    // console.log(boolean_email);
  }else{
    if(!email_check_formate.test(document.getElementById(fields_formate_check[2].field_id).value.trim())){
    document.getElementById(fields_formate_check[2].warning_msg_id).innerHTML = fields_formate_check[2].check_formate_msg;
    boolean_email = false;
    // console.log(boolean_email);
    }else{
    document.getElementById(fields_formate_check[2].warning_msg_id).innerHTML = "";
    boolean_email = true;
    // console.log(boolean_email);
    }
  }
  return boolean_wechat&&boolean_email&&boolean_phone;
}
function checkCheckbox(){
  var boolean_months = false;
  var boolean_areas = false;
  var boolean_services = false;
 var fields_months_check = [];
 var month_id_array = ["Jan_check", "Feb_check", "Mar_check", "Apr_check", "May_check", "Jun_check", "Jul_check", "Aug_check", "Sep_check", "Oct_check", "Nov_check", "Dec_check"];
     var j;
  for(j = 0; j < 12; j++)
  {

    var new_month_field = { "field_id":month_id_array[j] , "warning_msg_id":"check_month_msg", "warning_empty_msg":"请选择一个时间！"};
    fields_months_check[j] = new_month_field;
    //console.log(fields_months_check[j].field_id);
  }
  var fields_area_check = [];

  for(j = 0; j < 33; j++)
  {
    var area_Code = j+1;
    var new_area_field = { "field_id":"area" +area_Code , "warning_msg_id":"check_area_msg", "warning_empty_msg":"请选择至少一个地区！"};
    fields_area_check[j] = new_area_field;
    //console.log(fields_area_check[j].field_id);
  }
  var fields_service_check = [];
  for(j=0; j < 47;j++)
  {
    var service_code = j+1;
    var new_service_field ={"field_id": "service"+service_code, "warning_msg_id": "check_service_msg", "warning_empty_msg": "请选择至少一个项目！"};
    fields_service_check[j] = new_service_field;
  }
  var length_of_array;
  length_of_array = Object.keys(fields_months_check).length;
  for (var i = 0; i < length_of_array; i++){
   // console.log(fields_months_check[i].field_id);
    if (document.getElementById(fields_months_check[i].field_id).checked){
        boolean_months = true;
        break;
    } 
  }
   length_of_array = Object.keys(fields_area_check).length;
    for (var i = 0; i < length_of_array; i++){
      // console.log(fields_area_check[i].field_id);
    if (document.getElementById(fields_area_check[i].field_id).checked){
        boolean_areas = true;
        break;
    } 
  }
length_of_array = Object.keys(fields_service_check).length;
    for (var i = 0; i < length_of_array; i++){
     //  console.log(fields_service_check[i].field_id);
    if (document.getElementById(fields_service_check[i].field_id).checked){
        boolean_services = true;
        break;
    } 
  }

    if(!boolean_months)
    {
        document.getElementById(fields_months_check[0].warning_msg_id).innerHTML = fields_months_check[0].warning_empty_msg;
    }
     else{
        document.getElementById(fields_months_check[0].warning_msg_id).innerHTML = "";
    }
     if(!boolean_areas)
    {
        document.getElementById(fields_area_check[0].warning_msg_id).innerHTML = fields_area_check[0].warning_empty_msg;
    }
     else{
        document.getElementById(fields_area_check[0].warning_msg_id).innerHTML = "";
    }
     if(!boolean_services)
    {
        document.getElementById(fields_service_check[0].warning_msg_id).innerHTML = fields_service_check[0].warning_empty_msg;
    }
     else{
        document.getElementById(fields_service_check[0].warning_msg_id).innerHTML = "";
    }
    return boolean_areas&&boolean_months&&boolean_services;

}