import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class CalculatorTest {

    Calculator calculator;

    @Before
    public void before() { calculator = new Calculator (20,10);}

    @Test
    public void addMethod() { assertEquals(30, calculator.addMethod());}

    @Test
    public void subtractMethod() { assertEquals(10, calculator.subtractMethod());}

    @Test
    public void multiplyMethod() { assertEquals(200, calculator.multiplyMethod());}

    @Test
    public void divideMethod() {assertEquals(2, calculator.divideMethod());}

}
