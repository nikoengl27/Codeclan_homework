public class WaterBottle {

    private int volume = 100;
    private int drink = 10;

    public WaterBottle(int volume, int drink){
        this.volume = volume;
        this.drink = drink;
    }

    public int haveDrink() { return this.volume - this.drink; }
    public int emptyBottle() { return this.volume = 0; }
    public int fillBottle() { return this.volume = 100; }
}
