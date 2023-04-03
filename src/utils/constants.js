import axios from "axios";

export const BASE_URL = "http://139.59.69.123:5000";
// export const BASE_URL = "http://localhost:5000";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

//Data of Typeform

export const fields = [
  {
    name: "name",
    label: "What's your First name?",
    type: "text",
    placeholder: "Enter your first name",
    validation: {
      required: true,
    },
  },
  {
    name: "lastname",
    label: "What's your first name? ",
    type: "text",
    placeholder: "Enter your last name",
    validation: {
      required: true,
    },
  },

  {
    name: "email",
    label: "Email you'd like to register with?",
    type: "email",
    placeholder: "Enter your email",
    validation: {
      required: true,
      pattern: /\S+@\S+\.\S+/,
    },
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
    validation: {
      required: true,
      pattern: /^\d{10}$/,
    },
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter your address",
    validation: {
      required: true,
    },
  },
  {
    name: "dropdown",
    label: "What industry is your company in?",
    type: "select",
    options: [
      { value: "Accounting", label: "Accounting" },
      { value: "Airlines/Aviation", label: "Airlines/Aviation" },
      {
        value: "Alternative Dispute Resolution",
        label: "Alternative Dispute Resolution",
      },
    ],
    validation: {
      required: true,
    },
  },
];
