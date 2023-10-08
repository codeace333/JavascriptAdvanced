class AuthUtils {
  // Simulate user authentication by checking if a user is logged in
  static isAuthenticated() {
    const userToken = localStorage.getItem('userToken'); // Assuming you store a user token in local storage
    return !!userToken; // Returns true if a user token exists
  }

  // Simulate user login by setting a user token in local storage
  static login(username, password) {
    // Perform actual authentication here (e.g., API call)
    const userToken = 'someUserToken'; // Replace with the actual user token
    localStorage.setItem('userToken', userToken);
    return userToken;
  }

  // Simulate user logout by removing the user token from local storage
  static logout() {
    localStorage.removeItem('userToken');
  }

  // Check if the user has a specific role for authorization
  static hasRole(role) {
    const userRoles = ['admin', 'user']; // Replace with actual user roles
    return userRoles.includes(role);
  }

  // Check if the user is authorized to access a specific resource
  static isAuthorized(resource) {
    const userPermissions = ['read', 'write', 'delete']; // Replace with actual user permissions
    return userPermissions.includes(resource);
  }

  // Check if the user is an admin for more advanced authorization
  static isAdmin() {
    return AuthUtils.hasRole('admin');
  }
}

// Example usage:
if (AuthUtils.isAuthenticated()) {
  console.log('User is authenticated.');
} else {
  console.log('User is not authenticated.');
}

const userToken = AuthUtils.login('username', 'password');
console.log('User logged in with token:', userToken);

AuthUtils.logout();
console.log('User logged out.');

if (AuthUtils.hasRole('admin')) {
  console.log('User has admin role.');
} else {
  console.log('User does not have admin role.');
}

if (AuthUtils.isAuthorized('read')) {
  console.log('User is authorized to read.');
} else {
  console.log('User is not authorized to read.');
}

if (AuthUtils.isAdmin()) {
  console.log('User is an admin.');
} else {
  console.log('User is not an admin.');
}
