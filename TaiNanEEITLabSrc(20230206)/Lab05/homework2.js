
document.getElementById("idName").addEventListener("blur", checkName);
document.getElementById("idPwd").addEventListener("blur", checkPwd);
document.getElementById("idDate").addEventListener("blur", checkDate);
// CheckName
function checkName() {
    // Get IdName(object)
    let theNameObj = document.getElementById("idName");
    // Get idName element value(String)
    let theNameObjValue = theNameObj.value;
    // Get String lengnth and get spName element then set varable
    let theNameObjValueLength = theNameObjValue.length;
    let spName = document.getElementById("spName");
    let ch, flag1 = false;
    // Use if else to check char in String
    // String Name == ""
    if (theNameObjValue == "") {
        spName.innerHTML = "<img src='Images/error.png'>姓名不可為空白";
        spName.className = "spInCorrect";
        // String Name length >= 2
    } else if (theNameObjValueLength >= 2) {
        // Check char in String Name
        for (let i = 0; i < theNameObjValueLength; i++) {
            ch = theNameObjValue.charCodeAt(i)
            if (ch >= 0x4e00 && ch <= 0x9fff) {
                flag1 = true;
            } else {
                flag1 = false;
            }
            if (flag1 == false) {
                break;
            }
        }
        if (flag1) {
            spName.innerHTML = "正確";
            spName.className = "spCorrect";
        } else {
            spName.innerHTML = "<img src='Images/error.png'>姓名必須全部為中文";
            spName.className = "spInCorrect";
        }
        // String length < 2
    } else {
        spName.innerHTML = "<img src='Images/error.png'>至少兩個字以上";
        spName.className = "spInCorrect";
    }
}


// CheckPwd
function checkPwd() {
    //取得idPwd元素
    let thePwdObj = document.getElementById("idPwd");
    // console.log(thePwdObj);
    // console.log(typeof thePwdObj);  //object

    //取得idPwd元素值
    let thePwdObjVal = thePwdObj.value;
    // console.log(thePwdObjVal);
    // console.log(typeof thePwdObjVal);  //string

    // Get String lengnth and get spPwd element then set varable
    let thePwdObjValLen = thePwdObjVal.length;
    let spPwd = document.getElementById("spPwd");
    let ch, flag1 = false, flag2 = false, flag3 = false;

    //判斷元素值是否為空白，密碼長度是否大於6
    //如果長度是否大於6，判斷是否包含字母、數字、特殊符號
    // thePwdObjVal == ""
    if (thePwdObjVal == "") {
        spPwd.innerHTML = "<img src='Images/error.png'>密碼不可為空白";
        spPwd.className = "spInCorrect";
        // thePwdObjVal >= 6
    } else if (thePwdObjValLen >= 6) {
        // Check char in String Pwd
        for (let i = 0; i < thePwdObjValLen; i++) {
            ch = thePwdObjVal.charAt(i).toUpperCase();
            // Check Pwd have A-Z
            if (ch >= "A" && ch <= "Z")
                flag1 = true;
            // Check Pwd have 0-9
            else if (ch >= "0" && ch <= "9")
                flag2 = true;
            // Check Pwd have [!@#$%^&*]
            else if (ch == "!" || ch == "@" || ch == "#" || ch == "$" || ch == "%" || ch == "^" || ch == "&" || ch == "*")
                flag3 = true;
            if (flag1 && flag2 && flag3) {
                break;
            }
        }

        if (flag1 && flag2 && flag3) {
            spPwd.innerHTML = "正確";
            spPwd.className = "spCorrect";
        }
        else {
            spPwd.innerHTML = "<img src='Images/error.png'>不符合下方的密碼規則";
            spPwd.className = "spInCorrect";
        }

        // thePwdObjVal < 6
    } else {
        spPwd.innerHTML = "<img src='Images/error.png'>必須6個字以上";
        spPwd.className = "spInCorrect";
    }
}


// CheckDate
function checkDate() {
    // Get String in idDate
    let theDateObject = document.getElementById("idDate");
    let theDateObjectValue = theDateObject.value;
    // Use the String to create a new Date Object
    let date = new Date(theDateObjectValue)
    var dateObj = theDateObjectValue.split('/'); // yyyy/mm/dd
    // Put year, month, date to variables
    let theYear = dateObj[0];
    let theMonth = dateObj[1];
    let theDate = dateObj[2];
    // Set variable
    let isLeapYear = false;
    let spDate = document.getElementById("spDate");
    // Check leap year and date in month correct or not
    if (theYear % 400 == 0) {
        isLeapYear = true;
    } else if (theYear % 100 == 0) {
        isLeapYear = false;
    } else if (theYear % 4 == 0) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }
    // Check date is not ""
    if (theDateObjectValue == "") {
        spDate.innerHTML = "<img src='Images/error.png'>日期不可為空白";
        spDate.className = "spInCorrect";
        // if leap year and month == 2, theDate should <= 29, else should <= 28
    } else if (theMonth > 12 || theYear > 2023 || theDate > 31 || isNaN(theMonth)|| isNaN(theYear) || isNaN(theDate)) {
        spDate.innerHTML = "<img src='Images/error.png'>錯誤的年份或月份";
        spDate.className = "spInCorrect";
    } else if (theMonth == 2) {
        console.log(2);
        if (isLeapYear && theDate > 29) {
            spDate.innerHTML = "<img src='Images/error.png'>日期不能大於29!";
            spDate.className = "spInCorrect";
        } else if (!isLeapYear && theDate > 28) {
            spDate.innerHTML = "<img src='Images/error.png'>日期不能大於28!";
            spDate.className = "spInCorrect";
        } else {
            spDate.innerHTML = "正確";
            spDate.className = "spCorrect";
        }
    } else if (theMonth == 1 || theMonth == 3 || theMonth == 5 || theMonth == 7 || theMonth == 8 || theMonth == 10 || theMonth == 12) {
        if (theDate > 31) {
            spDate.innerHTML = "<img src='Images/error.png'>日期不能大於31!";
            spDate.className = "spInCorrect";
        }else {
            spDate.innerHTML = "正確";
            spDate.className = "spCorrect";
        }
    } else if (theMonth == 4 || theMonth == 6 || theMonth == 9 || theMonth == 11) {
        if (theDate > 30) {
            spDate.innerHTML = "<img src='Images/error.png'>日期不能大於30!";
            spDate.className = "spInCorrect";
        }else {
            spDate.innerHTML = "正確";
            spDate.className = "spCorrect";
        }
    } else {
        spDate.innerHTML = "正確";
        spDate.className = "spCorrect";
    }

}




