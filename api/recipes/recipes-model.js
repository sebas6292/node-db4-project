function getRecipeById(recipe_id) {
    return Promise.resolve(`awesome recipes with ${recipe_id}`)
}
 
module.exports = {
    getRecipeById,
}