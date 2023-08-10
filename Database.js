import AsyncStorage from '@react-native-async-storage/async-storage';
function getItems(database) {
    return AsyncStorage.getItem(database).then(response => {
    if (response)
    return Promise.resolve(JSON.parse(response));
    else
    return Promise.resolve([]);
    })
   }
   async function getItem(database, id)
{
 const savedItems = await getItems(database);
return savedItems.findIndex(item => item.id === id);
    }
    async function saveItem(database, item, id) {
         item.id = id ? id : new Date().getTime();
         const savedItems = await getItems(database);
         if (id) {
        findIndex(item => item.id === id);
         const index = await savedItems.findIndex(item => item.id === id);
         savedItems[index] = item;
         }
         else
         savedItems.push(item);
         return AsyncStorage.setItem(database, JSON.stringify(savedItems));
        }
        async function deleteItem(database, id){
            let savedItems = await 
           getItems(database);
            const index = await savedItems.
           findIndex(item => item.id === id);
            savedItems.splice(index, 1);
           return AsyncStorage.
           setItem(database, JSON.
           stringify(savedItems));
           }
           module.exports = {
            saveItem,
            getItems,
            getItem,
            deleteItem
           }
    