const crypto = require("crypto")

const uName = "PampleMouse"
const number = "011234855"

const uData = {}

const nme = crypto.createHash("SHA256").update(uName).digest("hex")
const no = crypto.createHash("SHA256").update(number).digest("hex")
console.log("Name: ", nme);


uData[nme] = no

async function verify(sign) {
    if(uData[sign]==no){
        console.log(" Verified")
    } else{
        console.log("Unverified")
    }
}

verify(nme)


