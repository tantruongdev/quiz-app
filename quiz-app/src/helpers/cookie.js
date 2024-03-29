// Hàm lấy cookie
export function getCookie(cname) {
  var nameEQ = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return "";
}

// Hàm tạo cookkie
export function setCookie(cname, cvalue, exdays) {
  var expires = "";
  if (exdays) {
    var date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    expires = "expires=" + date.toUTCString();
  }

  document.cookie = cname + "=" + (cvalue || "") + "; " + expires;
}

// Hàm xóa cookie
export function deleteCookie(cname) {
  document.cookie = `${cname}=; expries=Thu, 01 Jan 1970 00:00:00 UTC`;
}

// Hàm xóa tất cả cookie
export function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
