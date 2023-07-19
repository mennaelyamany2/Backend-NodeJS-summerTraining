function valid(fullName,email,password,age,gender) {
   
    if (fullName.length < 6) {
      return "failed ,fullName must be at least 6 characters long.";
    }

    if (!/^[a-z0-9_.]+@(yahoo|gmail)\.com$/.test(email)) {
      return "failed ,Email must be a valid yahoo or gmail address.";
    }

    
    if (password.length < 6) {
      return "failed ,Password must be at least 6 characters long.";
    }
    if (age < 18 ) {
        return "failed ,Age must start with 18 year.";
    }
  
    if (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female") {
      return 'failed ,Gender must be "male" or "female".';
    }
  
    return "success";
  }
  
  module.exports = { valid };
  