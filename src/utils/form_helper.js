import { services } from "../services/api";

export function parserBody(values, formArrays) {
  let formData = new FormData();
  const client_id = JSON.parse(localStorage.getItem("client_id"));
  formData.append("client_id", client_id);
  for (let value in values) {
    if (formArrays.includes(value)) {
      values[value].forEach((authorized_persons_values) => {
        if (typeof authorized_persons_values === "object") {
          for (const personKey in authorized_persons_values) {
            formData.append(
              `${personKey}[]`,
              authorized_persons_values[personKey]
            );
          }
        } else {
          formData.append(`${value}[]`, authorized_persons_values);
        }
      });
    } else {
      formData.append(value, values[value]);
    }
  }
  return formData;
}

export async function submitForm(values, formArray, serviceName) {
  try {
    const body = parserBody(values, formArray);
    for (let property of body.entries()) {
      console.log(property[0], property[1]);
    }
    // console.log(body);
    const token = JSON.parse(localStorage.getItem("tokens"));
    const requestBody = {
      token: token.access_token,
      tokenType: token.token_type,
      body: body,
      serviceName
    };
    const response = await services.forms.submitForm(requestBody);

    localStorage.setItem("client_id", response.data.client.id);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
