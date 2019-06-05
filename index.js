const fs = require('fs');


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function startTest() {
  console.log('Start Test after 5 seconds...');
  await sleep(5000);
  console.log('Test Started!');
    
  var data;    
  var min = 0;
  var hour = 0;
  var day = 0;
    
  for (let sec = 0; sec < 61; sec++) {
      await sleep(1000);

      if (sec === 60){
          min++;
          sec = 0;
      }
      if (min === 60){
          console.log(hour)
          hour++;
          min = 0;
      }
      if (hour === 24){         
          day++;
          hour = 0;
      }
      
    data = `${day}:${hour}:${min}:${sec} - ${Date.now()}`;
        
    await fs.writeFile('pibattest.log', data, function(err) {
       // ... ADD ERROR CODE 
    });
  }
}

startTest();


