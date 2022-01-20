function fetchcountryData(){
   let countryName=cntry_name.value
   fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).
   then(res=>res.json()).
   then(data=>populateValue(data))


}
function populateValue(country){
    console.log(country[0]);
    let countryName=country[0].name
    let countryflag=country[0].flag
    let countrypopulation=country[0].population
    let countrycurrency=country[0].currencies[0].name
    let countrycurrencysymbol=country[0].currencies[0].symbol
    // let countrylanguage=country[0].languages[0].name
    let countrycapital=country[0].capital
    let html_data=`<div class="card" style="width: 18rem;">
    <img src="${countryflag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Country Name:${countryName}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Capital:${countrycapital}</li>
      <li class="list-group-item">Population:${countrypopulation}</li>
      <li class="list-group-item">Currency Name:${countrycurrency}</li>
      <li class="list-group-item">Currency Symbol:${countrycurrencysymbol}</li>

    </ul>
   
  </div>
    `
    document.querySelector("#result").innerHTML=html_data


    // country name
    // flag
    // population
    // currency name
    // language
    // capital
}
// function selectCntry(){
//   let cntryName=cntryselect.value
//   fetch(`https://restcountries.com/v2/name/${cntryName}?fullText=true`).
//   then(res=>res.json()).
//   then(data=>selectValue(data))

// }
// function selectValue(country){
//   console.log(country[0]);
// }