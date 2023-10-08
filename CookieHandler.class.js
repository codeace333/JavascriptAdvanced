class CookieHandler {
  // Set a cookie with optional attributes
  static setCookie(name, value, options = {}) {
    let cookieString = `${name}=${value}`;
    
    if (options.expires) {
      const date = new Date();
      date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      cookieString += `; expires=${date.toUTCString()}`;
    }
    
    if (options.path) {
      cookieString += `; path=${options.path}`;
    }

    if (options.domain) {
      cookieString += `; domain=${options.domain}`;
    }

    if (options.secure) {
      cookieString += '; secure';
    }

    document.cookie = cookieString;
  }

  // Get a cookie by name
  static getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }

  // Delete a cookie by name
  static deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

// Example usage:
// Set a cookie with custom attributes: expires in 30 days, path, domain, and secure
CookieHandler.setCookie('username', 'John', {
  expires: 30,
  path: '/',
  domain: 'example.com',
  secure: true,
});

// Get the value of the 'username' cookie
const username = CookieHandler.getCookie('username');
console.log(username);

// Delete the 'username' cookie
CookieHandler.deleteCookie('username');
