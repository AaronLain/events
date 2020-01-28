const pies = [
    {
        name: "Dutch Apple Pie",
        price: 1000,
        isWarm: true,
        isOrganic: true,
        crust: "extra flaky",
        iceCream: "Vanilla",
        isAvailable: true,
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190814-mcdonalds-apple-pies-0294-landscape-pf-1566604978.jpg?crop=0.668xw:1.00xh;0.177xw,0&resize=480:*",
        drinkPairing: "whiskey",
        instructor: "Zoe"
    },
    {
        name: "Regular Apple Pie",
        price: 5000,
        isWarm: false,
        isOrganic: true,
        crust: "under baked",
        iceCream: "Vegan chocolate",
        isAvailable: false,
        imageUrl: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/19860-sugar-crusted-apple-pie-600x600.jpg?ext=.jpg",
        drinkPairing: "all wines",
        instructor: "Mary"
    },
    {
        name: "Pizza Pie",
        price: 2.5,
        isWarm: true,
        isOrganic: false,
        crust: "yeah!",
        iceCream: "nope",
        isAvailable: true,
        imageUrl: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/red-roofs-are-haunting-pizza-huts-sales.jpg?itok=z0D4czud",
        drinkPairing: "High Life",
        instructor: "Luke"
    },
    {
        name: "Berry",
        price: 333.33,
        isWarm: true,
        isOrganic: false,
        crust: "dank",
        iceCream: "Peanut Butter",
        isAvailable: true,
        imageUrl: "https://images-gmi-pmc.edge-generalmills.com/808f7319-ed9b-41c7-8d35-959d83c868e8.jpg",
        drinkPairing: "High Life",
        instructor: "Zoe"
    },
    {
        name: "Pi",
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: "crumb",
        iceCream: "Moose Tracks",
        isAvailable: true,
        imageUrl: "https://lh3.googleusercontent.com/8Px2mw4x36JOwiWnjSr-IUDwdqvrD-AiAOntojFulD6CmfQK9_OvR0fpk72JDsd_KdQVddSZ9pg",
        drinkPairing: "Milk",
        instructor: "Luke"
    },
    {
        name: "Pickle Pie",
        price: 1300,
        isWarm: false,
        isOrganic: false,
        crust: "Pickle",
        iceCream: "absolutely not",
        isAvailable: false,
        imageUrl: "https://i.pinimg.com/originals/7c/cc/74/7ccc74217e11757a3215bec158cc99cb.jpg",
        drinkPairing: "Lemonade",
        instructor: "Aaron"

    },
    {
        name: "Kidney",
        price: 25000,
        isWarm: true,
        isOrganic: true,
        crust: "buttery",
        iceCream: "black pudding",
        isAvailable: true,
        imageUrl: "https://images.fridaymagazine.ae/1_2107580/imagesList_0/4281697797_main.jpg",
        drinkPairing: "A thicc stout",
        instructor: "Aaron"

    },
    {
        name: "Chocolate",
        price: 3000,
        isWarm: true,
        isOrganic: false,
        crust: "Oreo",
        iceCream: "Moose Tracks",
        isAvailable: true,
        imageUrl: "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Chocolate-Silk-Pie_exps38692_RDS2257792A12_03_6bC_RMS.jpg",
        drinkPairing: "Gin",
        instructor: "Mary"

    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const pieBuilder = (pieArray) => {
    let domString = '';
    pieArray.forEach(pie => {
        domString += `<div class="pies">`;
        domString +=   `<header class="cardhead"><h2>${pie.name}</h2></header>`;
        domString +=   `<img src=${pie.imageUrl} alt="A lovely picture of ${pie.name}">`;
        domString +=   `<p class="drink-pairing"><em>Drink Pairing:</em> ${pie.drinkPairing}</p>`;;
        domString +=   `<p class="crust"><em>Crust Type:</em> ${pie.crust}</p>`;
        domString +=   `<p class="crust"><em>Price:</em> $${pie.price}</p>`;
        domString +=   `<p class="ice-cream"><em>Ice Cream:</em> ${pie.iceCream}</p>`;;
        domString +=   `<p class="instructor"><em>Instigator:</em> ${pie.instructor}</p>`;
        domString +=    `<footer class=${pie.isWarm}><h3>Pie is warm: ${pie.isWarm}</h3></footer>`;
        domString += '</div>';  
    
    });
    printToDom("pie-list", domString);
};


pieBuilder(pies);