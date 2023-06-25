chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            document.querySelector("#a73F5E973-3280-477C-A89E-97CB8C046E12--10 > div > div.content-wrapper._ngcontent-awn-CM_EDITING-38 > div > multi-text-input > section > div > div:nth-child(1) > rsa-text-input > material-input > div.baseline._ngcontent-awn-CM_EDITING-50.focused > div.top-section._ngcontent-awn-CM_EDITING-50 > label > input").value = request.anzeigentitel_1;
            document.querySelector("#a73F5E973-3280-477C-A89E-97CB8C046E12--10 > div > div.content-wrapper._ngcontent-awn-CM_EDITING-38 > div > multi-text-input > section > div > div:nth-child(2) > rsa-text-input > material-input > div.baseline._ngcontent-awn-CM_EDITING-50 > div.top-section._ngcontent-awn-CM_EDITING-50 > label > input").value = request.anzeigentitel_2;

            //document.getElementById("newsletter").value = "test";
            //document.querySelector("body > input.input.input-area._ngcontent-awn-CM_EDITING-36").value = request.anzeigentitel_1;
            //document.querySelector("body > input:nth-child(3)").value = request.anzeigentitel_2;
            //document.querySelector("body > input:nth-child(4)").value = request.anzeigentitel_3;
            //document.querySelector("body > input:nth-child(5)").value = request.anzeigentitel_4;
            //document.querySelector("body > input:nth-child(6)").value = request.anzeigentitel_5;


            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
);