class t{constructor(t,s){this.API_URL="https://fast-logs-app.onrender.com",this.secretKey=void 0,this.sourceName=void 0,this.secretKey=t,this.sourceName=s}async getFastLogs(t){const s=new URLSearchParams(t).toString(),e=await fetch(`${this.API_URL}/log${s&&`?${s}`}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.secretKey}`}});if(200!==e.status)throw new Error("Failed to fetch fast logs");return e.json()}async postFastLog(t){const s=await this.getUserPersonalData();if(t.sourceName=this.sourceName,t.ip_address=s.address_ip,t.navigator=s.browser,200!==(await fetch(`${this.API_URL}/log`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.secretKey}`},body:JSON.stringify(t)})).status)throw new Error("Failed to post fast log")}async deleteFastLog(t){if(200!==(await fetch(`${this.API_URL}/log/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.secretKey}`}})).status)throw new Error("Failed to delete fast log")}async getUserPersonalData(){const t=await fetch(`${this.API_URL}/audit`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.secretKey}`}});if(200!==t.status)throw new Error("Failed to fetch user personal data");return t.json()}}class s{constructor(s,e){this.fastLogsRepository=void 0,this.fastLogsRepository=new t(s,e)}async getFastLogs(t){return this.fastLogsRepository.getFastLogs(t)}async postFastLog(t){return this.fastLogsRepository.postFastLog(t)}async deleteFastLog(t){return this.fastLogsRepository.deleteFastLog(t)}}const e=()=>{console.log("testPackage utility function called!")};export{s as FastLogsService,e as testPackage};
//# sourceMappingURL=index.modern.js.map