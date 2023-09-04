// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {


event.custom({
    "type": "create_new_age:energising",
    "energy_needed": 10000,
    "ingredients": [
      {
        "item": "ae2:certus_quartz_crystal"
      }
    ],
    "results": [
      {
        "item": "ae2:charged_certus_quartz_crystal"
      }
    ]
})

})