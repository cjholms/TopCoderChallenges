
public class ForgetfulAddition {
	
	public int minNumber(String input) {
		
		int minSum = Integer.MAX_VALUE;
		int endIndex = 1;
		
		while (endIndex < input.length()) {
			
			String firstAddend = input.substring(0, endIndex);
			String secondAddend = input.substring(endIndex++);
			int sum = Integer.parseInt(firstAddend) + 
					Integer.parseInt(secondAddend);
			if (sum < minSum) {
				minSum = sum;
			}
			
		}
		
		return minSum;
	}

}
