import com.boylegu.springboot_vue.Utils;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

public class OtherTests {

    @org.junit.jupiter.api.Test
    void testInsertionSort() {
        assertArrayEquals(Utils.insertionSort(new int[]{5, 4, 3, 2, 1}), new int[]{1,2,3,4,5});
        assertArrayEquals(Utils.insertionSort(new int[]{10, 28, 43, 2, 0}), new int[]{0,2,10,28,43});
        assertArrayEquals(Utils.insertionSort(new int[]{100, 4, 90, 0, 1,2,19,17,17}), new int[]{0,1,2,4,17,17,19,90,100});
    }
}
