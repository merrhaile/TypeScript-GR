/**
 * Item class creates an object with three properties (name, sellIn, quality)
GildedRose class creates items property and updates the values of each item based on a given condition
 */
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;
  Backstage: string = "Backstage passes to a TAFKAL80ETC concert";
  Sulfuras: string = "Sulfuras, Hand of Ragnaros";
  agedBrie: string = "Aged Brie";

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    /** loops through each item of the array and applies three methods
      to update the values of each item
     */
    for (let item of this.items) {
      this.checkNameAndUpdateQuality(item);
      this.decreaseSellIn(item);
      this.checkSellInAndUpdateQuality(item);
    }
    return this.items;
  }
  checkNameAndUpdateQuality(item: Item): void {
    /** applies conditions for the current item and update the value of its quality property */
    this.updateByName(item);
  }
  decreaseSellIn(item: Item): void {
    if (item.name != this.Sulfuras) item.sellIn = item.sellIn - 1;
  }
  checkSellInAndUpdateQuality(item: Item): void {
    /* updates the quality value based on the sellIn value */
    if (item.sellIn < 0) this.updateByName(item);
  }
  updateByName(item: Item) {
    if (item.name != this.Backstage && item.name != this.agedBrie) {
      this.decreaseQualityAboveZero(item);
    } else {
      return this.increaseQualityBelowFifty(item);
    }
    if (item.name == this.Backstage) item.quality = item.quality - item.quality;
    if (item.name == this.agedBrie) this.increaseQualityBelowFifty(item);
  }
  increaseQaulity(item: Item) {
    item.quality = item.quality + 1;
  }
  decreaseQaulity(item: Item) {
    item.quality = item.quality - 1;
  }
  decreaseQualityAboveZero(item: Item) {
    if (item.quality > 0) {
      item.name !== this.Sulfuras && this.decreaseQaulity(item);
      item.name == "Conjured" && this.decreaseQaulity(item);
    }
  }
  increaseQualityBelowFifty(item: Item) {
    if (item.quality < 50 && item.name == this.Backstage) {
      item.sellIn < 11 && this.increaseQaulity(item);
      item.sellIn < 6 && this.increaseQaulity(item);
    }
    if (item.quality < 50) this.increaseQaulity(item);
  }
}
