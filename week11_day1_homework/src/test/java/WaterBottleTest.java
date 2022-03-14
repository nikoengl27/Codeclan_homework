import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class WaterBottleTest {

    WaterBottle waterBottle;

    @Before
    public void before() {waterBottle = new WaterBottle(100, 10);}

    @Test
    public void takeDrink() { assertEquals(90, waterBottle.haveDrink());}

    @Test
    public void emptyBottle() { assertEquals(0, waterBottle.emptyBottle());}

    @Test
    public void fillBottle() { assertEquals(100, waterBottle.fillBottle());}
}
