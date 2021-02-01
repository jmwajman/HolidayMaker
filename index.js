 function greetUser(){
    let name = prompt("Hi there! I am Claire. What is your name?");
    let destination = prompt("What is your dream holiday destination?");

    alert("Great " + name + "! I am here to organize for you a fabolous trip to " + destination + "!");
    }  

    
    function thailand(){
    alert("Thailand is the only Southeast Asian country that was never colonized by an European country. In fact, in the Thai language, the name of the country is Prathet Thai which means “land of the free.”");
    }
    let button=document.querySelector(".thailand");
    button.addEventListener("click", thailand);

    function australia(){
        alert("Australia is the only continent in the world without an active volcano. Apart from that it has three times more sheep than people.")
    }
    let button1=document.querySelector(".australia");
    button1.addEventListener("click", australia);
    
    function unitedstates() {
            alert("USA is the third largest country in the world by landmass – nearly as big as the entire continent of Europe. Additionaly, it is the only country that has all of Earth's five climate zones: tropical, dry, temperate, continental, and polar.")
    }
    let button2 = document.querySelector(".unitedstates");
    button2.addEventListener("click", unitedstates);

    function iceland() {
            alert("More than 60% of the Icelandic population live in the capital city, Reykjavik. It was also the last place on earth to be settled by humans.")
        }
        let button3 = document.querySelector(".iceland");
        button3.addEventListener("click", iceland);

    function vietnam() {
            alert("Vietnam is the country with the 4th highest number of motorbikes. Vietnam is also the world’s second-largest coffee-producing nation after Brazil, producing 16% of the world’s total coffee.")
        }
        let button4 = document.querySelector(".vietnam");
        button4.addEventListener("click", vietnam);

    function carribean() {
            alert("The Island of Saba is home to the shortest (400m long) commercial runway in the world. Another interesting fact about Carribean is that in Caymans there are more registered businesses than the population of the islands.")
        }
        let button5 = document.querySelector(".carribean");
        button5.addEventListener("click", carribean);

greetUser()