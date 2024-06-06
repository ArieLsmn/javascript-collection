const { default: axios } = require("axios");

var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

function getData(link){

let out;
  fetch(link, requestOptions)
    .then((response) => console.log(response.json()))
    .then(function(result) {out=result;
            
    })
    .catch((error) => console.log("error", error));


};


async function getDataTest(link){
  const response= await fetch(link, requestOptions).then((response)=>{return response.json()});
  //const data = await response.json();
              //console.log(data);
              //console.log(data[1]);
              //return data;
      
  };


  async function getDataAxios(link){

    axios.get(link, requestOptions).then(response=> console.log(response.data));
                //console.log(data);
                //console.log(data[1]);
        
    };
    getDataAxios("http://localhost:3001/products_promo");
//getDataTest("http://localhost:3001/products_promo");
//var test;  
//(async () => {
 //   var test=await getDataTest("http://localhost:3001/products_promo");
//console.log(test);
//})();