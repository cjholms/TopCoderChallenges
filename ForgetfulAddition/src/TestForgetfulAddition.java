import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;


public class TestForgetfulAddition {
	
	ForgetfulAddition _f;
	
	@Before
	public void setUp() throws Exception {
		_f = new ForgetfulAddition();
		assertNotNull(_f);
	}

	@Test
	public void test() {
		//fail("Not yet implemented");
		assertEquals(4, _f.minNumber("22"));
		assertEquals(15, _f.minNumber("123"));
		assertEquals(101, _f.minNumber("1289"));
		assertEquals(9067, _f.minNumber("31415926"));
		assertEquals(863, _f.minNumber("98765"));
	}

}
