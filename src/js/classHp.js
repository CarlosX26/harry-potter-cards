class HarryPotter {
  static async getData() {
    try {
      const data = await fetch(
        "https://hp-api.onrender.com/api/characters/students"
      );
      const dataJson = await data.json();
      return dataJson;
    } catch (err) {
      console.log(err);
    }
  }

  static renderCards(image, name, house, actor, dateOfBirth) {
    const cardList = document.querySelector(".card__list");
    const li = document.createElement("li");
    const img = document.createElement("img");
    const nameH1 = document.createElement("h1");
    const houseP = document.createElement("p");
    const atorP = document.createElement("p");
    const dateOfBithP = document.createElement("p");

    img.src = image;
    img.alt = "character picture";
    nameH1.innerText = name;
    houseP.innerText = house;
    atorP.innerText = actor;
    dateOfBithP.innerText = dateOfBirth;

    li.className = "card__item";
    img.className = "card__img";
    nameH1.className = "card__name";
    houseP.className = "card__house";
    atorP.className = "card__ator";
    dateOfBithP.className = "card__date";

    li.append(img, nameH1, houseP, atorP, dateOfBithP);
    cardList.appendChild(li);
  }
}

export default HarryPotter;
