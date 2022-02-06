const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
//FUNZIONI
//funzione per inserire le icon
function drawIcons(container, icons){
    let content = '';

    icons.forEach(item => {
        content += `
                    <div class="icon">
                        <div class="item flex-center">
                            <i style= "color:${item.color};" class="${item.family}  ${item.prefix}${item.name}"></i>
                            <div class="item-text">
                                <span>${item.name}</span>
                            </div>
                        </div>
                    </div>
                    `;
    });

    container.innerHTML = content;
}
//funzione per inserire i dati all'interno del type-filter

function drawFilter(container, array){
    let content = '';

    array.forEach(item => {
        content += `
					<option value="${item}">${item}</option>
                    `;
    });

    container.innerHTML = content;
}

//funzione che crea un colore in esadecimale
function makeColor(length) {

	//inizializzo la variabile di uscita con il cancelletto
	let result = '#';

	//creo una stringa dei valori accettati 
	let characters = 'abcdef0123456789';

	//creo un ciclo
	for ( let i = 0; i < length; i++ ) {
		//utilizzo la funzione charAt che restituisce un carattere da una stringa dalla posizione indicata dall'indice
		//per rendere la scelta randomica il numero viene generato tramite la math.random
	   result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

//Costanti
const container = document.getElementById('icons-container');
const selector = document.getElementById('type-filter');

//colori delle icon resi dinamici
icons.forEach(element => element.color = makeColor(6));

//selettore per tipo inserimento valori dinamici

//creo un array con all'interno tutti i type delle icons
const typeIcons = [];

icons.forEach(element => typeIcons.push(element.type));

//con Set elimino i duplicati nell'Array
const filteredTypeIcons = [...new Set(typeIcons)];

//ho utilizzato splice per aggiungere all'array alla posizione 0 la voce "All"
filteredTypeIcons.splice(0,0,"All");

//richiamo la funzione per inserire le voci all'interno del filtro per tipo
drawFilter(selector,filteredTypeIcons);

//richiamo la funzione per inserire le icon all'interno dell'html
drawIcons(container, icons);

//ascoltatore di eventi sul filtro per tipo
selector.addEventListener('change', function () {
    
    let selection = this.value;

    //if per far si che quando il filtro è su all compaiano tutti
    if(selection == "All"){
        drawIcons(container, icons);
    }else{
        //filtro che fa comparire solo le icone del tipo giusto
        const filtered = icons.filter(icon => {
            if(icon.type == selection){
                return true;
            }
            return false;
        });
        drawIcons(container, filtered);
    }
    
});