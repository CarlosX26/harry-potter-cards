import HarryPotter from "./classHp.js"

const dados = await HarryPotter.obterDados()

dados.forEach(({ image, name, house, actor, dateOfBirth})=> {
    if(image === ""){
        return    
    }
    HarryPotter.renderizaCards(image, name, house, actor, dateOfBirth)
});



