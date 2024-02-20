"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var loanTemplates_exports = {};
__export(loanTemplates_exports, {
  getLoanTemplates: () => getLoanTemplates
});
module.exports = __toCommonJS(loanTemplates_exports);
async function getLoanTemplates(request, response, next) {
  const loans = {
    "Family": [
      {
        name: "Marriage",
        description: "",
        duration: [
          { duration: 100, interestRate: 20 },
          { duration: 150, interestRate: 30 },
          { duration: 200, interestRate: 50 },
          { duration: 250, interestRate: 100 }
        ],
        type: "Family "
      },
      {
        name: "Baby shower",
        description: "",
        duration: [
          { duration: 100, interestRate: 20 },
          { duration: 150, interestRate: 30 },
          { duration: 200, interestRate: 50 },
          { duration: 250, interestRate: 100 }
        ],
        type: "Family"
      },
      {
        name: "Sweet home",
        description: "",
        duration: [
          { duration: 100, interestRate: 20 },
          { duration: 150, interestRate: 30 },
          { duration: 200, interestRate: 50 },
          { duration: 250, interestRate: 100 }
        ],
        type: "Family"
      }
    ],
    "party": [
      {
        name: "birthday party",
        description: "",
        duration: [
          { duration: 100, interestRate: 20 },
          { duration: 150, interestRate: 30 },
          { duration: 200, interestRate: 50 },
          { duration: 250, interestRate: 100 }
        ],
        type: "party"
      },
      {
        name: "Friends get together",
        description: "",
        duration: [
          { duration: 100, interestRate: 20 },
          { duration: 150, interestRate: 30 },
          { duration: 200, interestRate: 50 },
          { duration: 250, interestRate: 100 }
        ],
        type: "party"
      },
      {
        name: "Party",
        description: "",
        duration: [
          { duration: 100, interestRate: 20 },
          { duration: 150, interestRate: 30 },
          { duration: 200, interestRate: 50 },
          { duration: 250, interestRate: 100 }
        ],
        type: "party"
      }
    ]
  };
  response.json(loans);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLoanTemplates
});
