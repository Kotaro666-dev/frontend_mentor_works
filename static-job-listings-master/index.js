function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "./data.json", true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

loadJSON(function(json) {
  let out = "";
  for (let i = 0; i < json.length; i++) {
    if (json[i]["featured"]) {
      out += '<div class="container add_border_left">';
    } else {
      out += '<div class="container">';
    }
    out +=
      '<div class="company_logo"><img src="' +
      json[i]["logo"] +
      '" alt="company\'s logo">' +
      "</div>";
    //  FIRST ROW
    out += '<div class="first_row">';
    out += '<div class="company_name">' + json[i]["company"] + "</div>";
    if (json[i]["new"]) {
      out += '<div class="new"><span>New!</span></div>';
    }
    if (json[i]["featured"]) {
      out += '<div class="featured"><span>Featured</span></div>';
      // document.getElementById(id).classsList.add("add_border_left");
    }
    out += "</div>";
    //  SECOND ROW
    out += '<div class="second_row">';
    out += '<div class="position">' + json[i]["position"] + "</div>";
    out += "</div>";
    //  THIRD ROW
    out += '<div class="third_row">';
    out += '<div class="postedAt">' + json[i]["postedAt"] + "</div>";
    out += '<div class="circle"></div>';
    out += '<div class="contract">' + json[i]["contract"] + "</div>";
    out += '<div class="circle"></div>';
    out += '<div class="location">' + json[i]["location"] + "</div>";
    out += "</div>";
    out += "<hr />";
    //  FOURTH ROW
    out += '<div class="fourth_row">';
    out += '<div class="role">' + json[i]["role"] + "</div>";
    out += '<div class="level">' + json[i]["level"] + "</div>";
    if (["languages"] in json[i]) {
      for (let j = 0; j < json[i]["languages"].length; j++) {
        out += '<div class="lang">' + json[i]["languages"][j] + "</div>";
      }
    }
    if (["tools"] in json[i]) {
      for (let k = 0; k < json[i]["tools"].length; k++) {
        let item = json[i]["tools"][k];

        if (item.match(/[,.\s]/)) {
          item = item.replace(/\s+/g, "");
          let result = item.split(",");
          // console.log(result);
          // out += '<div classs="tools">';
          for (let l = 0; l < result.length; l++) {
            // console.log(result[l]);
            out += '<div class="tools">';
            out += result[l];
            out += "</div>";
          }
          break;
        }
        out += '<div class="tools">' + item + "</div>";
      }
    }
    out += "</div>";
    out += "</div>";
  }

  document.getElementById("target").innerHTML = out;
});
