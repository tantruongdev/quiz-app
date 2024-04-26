// Hàm để lấy giá trị của một cookie
export function getCookie(cname) {
  var name = cname + "=";
  // var decodedCookie = decodeURIComponent(document.cookie);
  // var ca = decodedCookie.split(';');
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Hàm để đặt một cookie
export function setCookie(cname, cvalue, exdays = 1) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Hàm để xóa một cookie
export function deleteCookie(cname) {
  document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

// Hàm để xóa tất cả các cookie
export function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
  }
}
