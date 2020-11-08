const mbHelper = require("../mountebank-helper");
const settings = require("../settings");
const accountResponse = require("./responseAccounts.json");
const res12345678 = require("./responseTrans12345678.json");
const res12345679 = require("./responseTrans12345679.json");
const res12345689 = require("./responseTrans12345689.json");

function addService() {
  const stubs = [
    {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/login/farhan",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: "Login Successful",
              customerId: "123445",
            }),
          },
        },
      ],
    },
    {
      predicates: [
        {
          and: [
            { equals: { method: "GET" } },
            { startsWith: { path: "/login/" } },
          ],
        },
      ],
      responses: [
        {
          is: {
            statusCode: 404,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: "Login failed" }),
          },
        },
      ],
    },
    {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/account/123445",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: accountResponse }),
          },
        },
      ],
    },
    {
      predicates: [
        {
          and: [
            { equals: { method: "GET" } },
            { startsWith: { path: "/account/" } },
          ],
        },
      ],
      responses: [
        {
          is: {
            statusCode: 404,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: "incorrect user" }),
          },
        },
      ],
    },
    {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/transaction/12345678",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: res12345678 }),
          },
        },
      ],
    },
    {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/transaction/12345679",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: res12345679 }),
          },
        },
      ],
    },
    {
      predicates: [
        {
          equals: {
            method: "GET",
            path: "/transaction/12345689",
          },
        },
      ],
      responses: [
        {
          is: {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: res12345689 }),
          },
        },
      ],
    },
    {
      predicates: [
        {
          and: [
            { equals: { method: "GET" } },
            { startsWith: { path: "/transaction/" } },
          ],
        },
      ],
      responses: [
        {
          is: {
            statusCode: 404,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: "incorrect account id" }),
          },
        },
      ],
    },
  ];

  const imposter = {
    port: settings.nab_app_port,
    protocol: "http",
    stubs: stubs,
  };

  return mbHelper.postImposter(imposter);
}

module.exports = { addService };
