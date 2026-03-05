var method = prompt("Enter one of the Array Methods").trim().toLowerCase();

var arr = ["Nature", "Mountain", ["Map", "Trees"], "Water"];

switch (method) {

  case "length":
    console.log("Length:", arr.length);
    break;

  case "tostring":
    console.log("ToString:", arr.toString());
    break;

  case "at":
    console.log("At:", arr.at(1));
    break;

  case "join":
    console.log("Join:", arr.join("-"));
    break;

  case "pop":
    arr.pop();
    console.log("Pop:", arr);
    break;

  case "push":
    arr.push(100);
    console.log("Push:", arr);
    break;

  case "shift":
    arr.shift();
    console.log("Shift:", arr);
    break;

  case "unshift":
    arr.unshift(1);
    console.log("Unshift:", arr);
    break;

  case "concat":
    console.log("Concat:", arr.concat([50, 60]));
    break;

  case "isarray":
    console.log("IsArray:", Array.isArray(arr));
    break;

  case "flat":
    console.log("Flat:", arr.flat());
    break;

  case "delete":
    delete arr[1];
    console.log("Delete:", arr);
    break;

  default:
    console.log("Noto'g'ri method kiritildi ❌");
}