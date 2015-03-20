
/* settings update updateListener*/
(function() {
    window.UserSettingListener = function(update){
        console.log("parsing settings updates");
        console.dir(update);

        if(update.hasOwnProperty('GPIIWebDome')){
            var user = update.GPIIWebDome;
            var _lightSwitches = document.querySelectorAll('#lights boolean-switch');
            if('anna' === user){
               // alert(_lightSwitches);

                var cl = _lightSwitches.length;
                for (var i = 0; i < cl; i++){

                    var itm = _lightSwitches.item(i);
                    itm.updateTheShadowDOM('#checkBoxLight');
                    itm.updateClickHandlerComponent();


                }



                //_lightSwitch.updateTheShadowDOM('#checkBoxLight');

            }else if('paul' === user){
               console.dir(_lightSwitches);

                var cl = _lightSwitches.length;

                for (var i = 0; i < cl; i++){

                    var itm = _lightSwitches.item(i);
                    itm.updateTheShadowDOM('#altSwitch');
                    itm.updateClickHandlerComponent();
                    console.log(' i  = ' + i);
                    console.log(itm);


                }


                //_lightSwitch.updateTheShadowDOM('#altSwitch');
            }

        }
    };
})();

/* JSONP response handler, for connection establishing with the PCP-Simulator.*/
function handle_response(resp){
    if(resp){
        console.log('Connected To PCP');
        console.log('resp = '+resp.data + " : " + resp.foo);
    }else{
        console.log("Cant get response from server, resp = "+resp);
    }

}


function lightSwitched(comp){
    console.log("Switched to "+ comp.isChecked);
}

