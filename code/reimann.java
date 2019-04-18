import java.util.Arrays;

interface Function {
    public double f(double x);
}

class Reimann {
    public static double sum(double a, double b, int n, double s, Function func) {
		double dx = (b-a) / n;
        double arr[] = new double[n];
        Arrays.setAll(arr, i -> i + 0.5);
        return Arrays.stream(arr).reduce(0, (c,i) -> c + func.f(a + (i)*dx)*dx);
	}

	public static void main(String args[]) {
        double sum = Reimann.sum(2, 10, 3, 0.5, (x) -> 5*x + 7*Math.pow(x,2));
        System.out.println(sum);
	}
}
