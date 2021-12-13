sap.ui.jsview("jerry.view.Main",{

     getControllerName: function(){
        return "jerry.controller.Main";
    },

    //always every JS view has this standard method
    //which is entitled to receive controller object
    createContent: function(oAnubhav){

        var oInput = new sap.m.Input("idInp",{
            value: "Shravan Ryakam"
        });

        var oBtn = new sap.m.Button({
                text: "welcome",
                //press is an event which calls event handler
                //the processing logic is in my controller class
                //explicitly passsing the CONTROLLER object to EVENT HANDLER
                //SO this pointer CAN BE INITIALIZED to Controller object
                press: [oAnubhav.clickMe, oAnubhav]
        });

         var oBtn2 = new sap.m.Button("idBtn2",{
                text: "I am inactive"
                //press is an event which calls event handler
                //the processing logic is in my controller class
                //press: oAnubhav.clickMe
        });

        return [oInput, oBtn, oBtn2];
    }

});