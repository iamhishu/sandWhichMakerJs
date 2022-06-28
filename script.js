
function create_sandwich(allSandwhich, sandwichType) {
    document.getElementById("loader").style.display = 'inline-block';
    setTimeout(() => {
        document.getElementById("loader").style.display = 'none';
        allSandwhich.map((sandWhich, index) => sandWhich === sandwichType ? document.getElementById(sandwichType).style.display = 'block' : document.getElementById(sandWhich).style.display = 'none');
        document.getElementById("eat").style.display = 'block';
    }, 3000);
}


function get_burger_details(burgertype) {
    let bread1 = prompt("Which bread would you like to have:-");
    let veggies = prompt("What are your favorite veggies");
    let sauce1 = prompt("Which sauce would like to have:-");
    let vegsandwich = makesandwich(bread1, veggies, sauce1);
    const all_sandwhich = ['veg_sandwhich', 'non_veg_sandwhich', 'creamy_sandwhich', 'mixed_sandwhich'];
    if (all_sandwhich.includes(burgertype)) {
        create_sandwich(all_sandwhich, burgertype)
    }
}

function makesandwich(bread, veggies, sauce) {
    let sandwich = bread + "bread" + veggies + "veggies " + sauce + "sandwich";
    return sandwich;
}


