// https://leetcode.com/contest/weekly-contest-246/problems/minimum-absolute-difference-queries/

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
  int[] vis;
  int[] nums;
  public int[] minDifference(int[] nums, int[][] queries) {
    List<Item> list = new ArrayList<>();
    for (int i = 0; i < queries.length; i++) {
      list.add(new Item(queries[i][0], queries[i][1], i));
    }
    int block = (int) Math.sqrt(nums.length);
    list.sort((a, b) -> {
      if (a.le / block != b.le / block) {
        return a.le / block - b.le / block;
      }
      return a.ri - b.ri;
    });
    vis = new int[105];
    this.nums = nums;
    int[] ans = new int[queries.length];
    int le = -1, ri = -1;
    for (int i = 0; i < list.size(); i++) {
      Item item = list.get(i);
      while (le < item.le) del(le++);
      while (le > item.le) add(--le);
      while (ri < item.ri) add(++ri);
      while (ri > item.ri) del(ri--);
      ans[item.index] = getAns();
    }
    return ans;
  }

  int getAns() {
    int mi = Integer.MAX_VALUE;
    int pre = 0;
    for (int i = 1; i <= 100; i++) {
      if (vis[i] > 0 && pre != 0) {
        mi = Math.min(mi, i - pre);
      }
      if (vis[i] > 0) {
        pre = i;
      }
    }
    return mi == Integer.MAX_VALUE ? -1 : mi;
  }

  void del(int pos) {
    if (pos == -1) return;
    pos = nums[pos];
    vis[pos]--;
  }

  void add(int pos) {
    if (pos == -1) return;
    pos = nums[pos];
    vis[pos]++;
  }


  static class Item {
    int le;
    int ri;
    int index;

    Item(int le, int ri, int index) {
      this.le = le;
      this.ri = ri;
      this.index = index;
    }
  }

//  public static void main(String[] args) {
//    Solution s = new Solution();
//    int[] a = new int[] {1,3,4,8};
//    int[][] b = new int[][] {{0,1},{1,2},{2,3},{0,3}};
//
//    System.out.println(Arrays.toString(s.minDifference(a, b)));
//  }
}