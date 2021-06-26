import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Solution {
  public int solve(int[][] clips, int duration) {
    int[] dp = new int[clips.length];
    int[] pre = new int[clips.length];
    Item[] items = new Item[clips.length];
    for (int i = 0; i < clips.length; i++) {
      items[i] = new Item(clips[i][0], clips[i][1]);
    }
    Arrays.sort(items, (a, b) -> a.le - b.le);
    Arrays.fill(dp, Integer.MAX_VALUE);
    Arrays.fill(pre, -1);
    for (int i = 0; i < items.length; i++) {
      if (items[i].le == 0) {
        dp[i] = 1;
      }
    }

    for (int i = 0; i < items.length; i++) {
      if (dp[i] == Integer.MAX_VALUE) {
        continue;
      }
      for (int j = i + 1; j< items.length; j++) {
        if (check(items[i], items[j])) {
          if (dp[i] + 1 < dp[j]) {
            dp[j] = dp[i] + 1;
            pre[j] = i;
          }
//          dp[j] = Math.min(dp[j], dp[i] + 1);
        }
      }
    }
    int ans = Integer.MAX_VALUE;
    int index = -1;
    for (int i = 0; i < items.length; i++) {
      if (items[i].ri >= duration) {
        if (ans > dp[i]) {
          ans = dp[i];
          index = i;
        }
//        ans = Math.min(ans, dp[i]);
      }
    }
    Stack<Item> s = new Stack<>();
    while (index != -1) {
      s.add(items[index]);
      index = pre[index];
    }
    while (!s.isEmpty()) {
      System.out.print(String.format("[%d, %d] %s ", s.peek().le, s.peek().ri, s.size() != 1 ? "->" : ""));
      s.pop();
    }
    System.out.println();
    return ans == Integer.MAX_VALUE ? -1 : ans;
  }

  private boolean check(Item a, Item b) {
    return b.le <= a.ri;
  }

  public static class Item {
    int le;
    int ri;
    Item(int le, int ri) {
      this.le = le;
      this.ri = ri;
    }
  }

  public static void main(String[] args) {
    Solution s = new Solution();
    int[][] a = new int[][] {{0, 2}, {1, 4}, {3, 8}, {4, 8}};
    System.out.println(s.solve(a, 8));
  }
}