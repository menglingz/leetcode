/**
 * 1.在构造有序堆时，开始时只需要扫描一半的元素（所有父节点）length / 2 -1
 * 2.从最后一个父节点开始，将父节点、他所有的子节点中的最大值交换到父节点
 * 3.将倒数第二个父节点同理交换
 * 4.假设根节点值为：10， 当他和两个子节点70， 80，父节点和两子节点中的大的(80)交换后位于父节点2：原来80的位置
 * 5.可是他还有子节点，且子节点中的值比根节点大，那就还需要以他为父节点构造一次，与子节点6 值为20交换一次
 * 6.同理在其他所有父节点的构造中都需要判断调整
 */

const headpSort = array => {
  const length = array.length;
  // 寻找最后一个非叶子节点，构建初始堆
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    adjustHeap(array, i, length);
  }
}

const adjustHeap = (array, i, length) => {
  const temp = array[i]
  let k = i * 2 + 1 // 第一次拿到的最后一个非叶子结点
  while (k < length) { // while循环处理，解决步骤5
    if (k + 1 < length && array[k] < array[k + 1]) {
      // 左子节点的值小于右子节点的值
      k += 1 // k指向右子节点
    }
    if (temp < array[k]) {
      // 当前节点小于叶子结点，和非叶子结点比较
      array[i] = array[k] // 把大的值赋给当前节点
      i = k // 拿到最大值的索引I,便于循环结束后将temp存储的值交换到I指定位置
    } else {
      // 当前节点比叶子结点都要大，不需要调整
      break
    }
    k = k * 2 + 1 // 寻找下一个节点循环比较
  }
  // for 循环结束后，已经将以i 为父结点的树最大值，放在了最顶（局部完成）
  array[i] = temp // 将temp的值放到调整后的位置
}

const arr = [50, 45, 40, 20, 25, 35, 10, 30, 15]
headpSort(arr)
console.log(arr)
