// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

if(!global.chipped_map) global.chipped_map = {};
function replaceAll(string, find, replace) {
    return string.replace(new RegExp(find, 'g'), replace)
}
function getNameOfID(id) {
    let output = "";
    id = replaceAll(id, ":", " ");
    id = replaceAll(id, "_", " ");

    let parts = id.split(" ");
    for (let i = 0; i < parts.length; i++) {
        output += parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1);
        if (i < parts.length - 1) {
            output += " ";
        } else {
            output += "s";
        }
    }
    return output;
}
Ingredient.custom((item) => {
    if(!(global.chipped_map[item.id] === null || global.chipped_map[item.id] === undefined)){
        return global.chipped_map[item.id];
    }
    let namespace = item.id.substring(0,item.id.indexOf(':'));
    if(namespace != 'chipped') { 
        global.chipped_map[item.id] = false;
        return false;
    }
    for(let tag of item.tags){
        if(tag.namespace == 'chipped'){
            global.chipped_map[item.id] = true;
            return true;
        }
    }
    global.chipped_map[item.id] = false;
    return false;
}).getItemIds().forEach((id) => {
    let name = getNameOfID(id);
    id = id.replace('minecraft:', 'chipped:');
    let parts = id.split(':');
    e.groupItemsByTag(`kubejs:rei_groups/${parts[0]}/${parts[1]}`, name, id);
  })
