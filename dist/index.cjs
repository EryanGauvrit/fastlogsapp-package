var t=/*#__PURE__*/function(){function t(t,e){this.API_URL="https://fast-logs-app.onrender.com",this.secretKey=void 0,this.sourceName=void 0,this.secretKey=t,this.sourceName=e}var e=t.prototype;return e.getFastLogs=function(t){try{var e=new URLSearchParams(t).toString();return Promise.resolve(fetch(this.API_URL+"/log"+(e&&"?"+e),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.secretKey}})).then(function(t){if(200!==t.status)throw new Error("Failed to fetch fast logs");return t.json()})}catch(t){return Promise.reject(t)}},e.postFastLog=function(t){try{var e=this;return Promise.resolve(e.getUserPersonalData()).then(function(r){return t.sourceName=e.sourceName,t.ip_address=r.address_ip,t.navigator=r.browser,Promise.resolve(fetch(e.API_URL+"/log",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.secretKey},body:JSON.stringify(t)})).then(function(t){if(200!==t.status)throw new Error("Failed to post fast log")})})}catch(t){return Promise.reject(t)}},e.deleteFastLog=function(t){try{return Promise.resolve(fetch(this.API_URL+"/log/"+t,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.secretKey}})).then(function(t){if(200!==t.status)throw new Error("Failed to delete fast log")})}catch(t){return Promise.reject(t)}},e.getUserPersonalData=function(){try{return Promise.resolve(fetch(this.API_URL+"/audit",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.secretKey}})).then(function(t){if(200!==t.status)throw new Error("Failed to fetch user personal data");return t.json()})}catch(t){return Promise.reject(t)}},t}();exports.FastLogsService=/*#__PURE__*/function(){function e(e,r){this.fastLogsRepository=void 0,this.fastLogsRepository=new t(e,r)}var r=e.prototype;return r.getFastLogs=function(t){try{return Promise.resolve(this.fastLogsRepository.getFastLogs(t))}catch(t){return Promise.reject(t)}},r.postFastLog=function(t){try{return Promise.resolve(this.fastLogsRepository.postFastLog(t))}catch(t){return Promise.reject(t)}},r.deleteFastLog=function(t){try{return Promise.resolve(this.fastLogsRepository.deleteFastLog(t))}catch(t){return Promise.reject(t)}},e}(),exports.testPackage=function(){console.log("testPackage utility function called!")};
//# sourceMappingURL=index.cjs.map
