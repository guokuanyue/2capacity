 function theDay(sDate) {
   const startDate = new Date(sDate); //设置时间
   const today = new Date(); // 现在时间
   const days = today.getTime() - startDate.getTime(); // 差值毫秒级结果
   const theDay = parseInt(days / (1000 * 60 * 60 * 24)); // 转化为天数
   console.log(theDay);
   return theDay
 }
 export default theDay;
