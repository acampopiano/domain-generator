/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/domaingenerators.png";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "breath"];
  let noun = ["jogger", "racoon", "code"];
  let dots = [".com", ".net", ".us", ".io", ".de"];

  let domains = [];
  let domainhacks = [];
  for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
      for (let z = 0; z < noun.length; z++) {
        for (let i = 0; i < dots.length; i++) {
          let dn = pronoun[x] + adj[y] + noun[z] + dots[i];
          domains.push(dn);
          if (noun[z].substr(-2) === dots[i].substr(-2))
            domainhacks.push(
              pronoun[x] + adj[y] + noun[z].substr(0, 2) + dots[i]
            );
        }
      }
    }
  }

  var domain = "";
  domains.forEach(element => {
    domain += element + "<br/>";
  });
  if (domainhacks.length) {
    domainhacks.forEach(element => {
      domain +=
        '<span class="badge badge-pill badge-success">' +
        element +
        "</span>" +
        "<br/>";
    });
  }
  let btn = document.getElementById("generate");
  btn.addEventListener("click", function() {
    document.getElementById("domains").innerHTML = domain;
  });
};
