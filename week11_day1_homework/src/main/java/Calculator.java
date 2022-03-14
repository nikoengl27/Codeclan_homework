public class Calculator {

    private int num1;
    private int num2;


    public Calculator(int num1, int num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    public int addMethod() {return this.num1 + this.num2; }
    public int subtractMethod() { return this.num1 - this.num2; }
    public int multiplyMethod() { return this.num1 * this.num2; }
    public int divideMethod() { return this.num1 / this.num2; }

}
