import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("Name should be foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  it("should never have negative quality", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should decrease sellIn by 1", () => {
    const gildedRose = new GildedRose([new Item("foo", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
  });

  it("should never have more than 50 quality value", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 48),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("Quality value should be 42 ", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 40),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });
  it("Quality value should be 41 ", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 16, 40),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(41);
  });

  it("should decrease quality by 1", () => {
    const gildedRose = new GildedRose([new Item("foo", 1, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it("should decrease quality by 2", () => {
    const gildedRose = new GildedRose([new Item("foo", -1, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("should degrade in quaility twice as fast if Conjured", () => {
    const gildedRose = new GildedRose([new Item("Conjured", -1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("should increase the quaility of Aged Brie when -ve sellIn", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", -1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("should increase in quaility if Aged Brie", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("should always have the same quaility if Sulfuras", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 3, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});
