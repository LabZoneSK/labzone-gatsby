import { getCookie } from "./helpers"

/** Sends Contact Form data to HubSpot CRM */
export function formv3(fields) {
  const hubspotutk = getCookie("hubspotutk")
  if (!fields) {
    return false
  }

  var xhr = new XMLHttpRequest()
  var url =
    "https://api.hsforms.com/submissions/v3/integration/submit/6690555/d5ea374b-8855-4c0c-9e23-589f3e61bbbe"

  var data = {
    submittedAt: new Date().getTime(),
    fields,
    context: {
      pageName: "Contact page",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text:
          "I agree to the processing of personal data for the purpose of contacting.",
        communications: [],
      },
    },
  }

  if(hubspotutk.length > 0) {
      data.context.hutk = hubspotutk
  }

  var final_data = JSON.stringify(data)

  xhr.open("POST", url)
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      switch(xhr.status) {
        case 200:
        case 400:
        case 403:
        case 404:
          console.log(xhr.responseText);
          break;
        default:
          console.log("error");
      }
    }
  }

  xhr.send(final_data)
}
