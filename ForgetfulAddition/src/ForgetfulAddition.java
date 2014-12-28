
public class ForgetfulAddition {
	
	public int minNumber(String expression) {
		
		int minSum = Integer.MAX_VALUE;
		int endIndex = 1;
		
		while (endIndex < expression.length()) {
			
			String firstAddend = expression.substring(0, endIndex);
			String secondAddend = expression.substring(endIndex++);
			int sum = Integer.parseInt(firstAddend) + 
					Integer.parseInt(secondAddend);
			if (sum < minSum) {
				minSum = sum;
			}
			
		}
		
		return minSum;
	}

}
