
export const validateUsername = (username) => {
  const regex = /^\S{3,8}$/

  return regex.test(username)
}

export const usernameValidationMessage = 'Username should habe between 3 and 8 characters. No spaces are allowed.'