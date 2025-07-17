// npm install uuid
const { v4: uuidv4 } = require('uuid');

class FeedItem {
  constructor(title, body, imageUrl, linkUrl) {
    this.id = uuidv4();
    this.title = title;
    this.body = body;
    this.imageUrl = imageUrl;
    this.linkUrl = linkUrl;
  }
}

const FeedItems = [
  new FeedItem(
    'GACHIAKUTA (quick summery):',
    "Rudo, a boy from the slums, is falsely accused of murder and cast into the ABYSS — a giant trash pit where society's waste(and unwanted people) are thrown. There, he discovers a dangerous world of mutated monsters called Gadou and meets the Cleaners, elite warriors who fight using weapons made from salvaged trash infused with emotion. As Rudo joins the Cleaners, he learns the truth about the society above, the origin of the Gadou, and his own mysterious connection to the power of the JINKI — emotional resonance embedded in discarded objects. Fueled by rage, loyalty, and a thirst for justice, Rudo sets out to rise from the trash and bring down the corrupt system that discarded him.",
    'https://helios-i.mashable.com/imagery/articles/00yoIviDSDi3aVSBSfwPzie/images-7.fill.size_2000x1125.v1752525551.jpg',
    'https://en.wikipedia.org/wiki/Gachiakuta',
  )
];

module.exports = { FeedItem, FeedItems };
