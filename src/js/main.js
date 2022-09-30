import HarryPotter from "./classHp.js";

const data = await HarryPotter.getData();

data.forEach(({ image, name, house, actor, dateOfBirth }) => {
  if (image === "") {
    return;
  }
  HarryPotter.renderCards(image, name, house, actor, dateOfBirth);
});
