c
        requests('http://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=79794debc52a26ea0f2e7cb6f36b6bfe')
        .on('data',  (chunk) =>{
            const objData = JSON.parse(chunk)
            const arrData = [objData]
            const realTimeData = arrData.map((val)=> replaceVal(homeFile, val))
            .join("");
            res.write(realTimeData)
        }) 
          
        .on('end', (err) =>{
          if (err) return console.log('connection closed due to errors', err);
          res.end();
        }) ;
    }
})
server.listen(8000,"127.0.0.1") 