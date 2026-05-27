/**
 * DAA Algorithms Module
 * Contains implementation of Quick Sort, Binary Search, 0/1 Knapsack, and Greedy (Prim's)
 */

const Algorithms = {
    /**
     * Quick Sort Implementation
     * Time Complexity: O(n log n) average, O(n^2) worst case
     * @param {Array} arr - The array to sort
     * @param {string} key - The property to sort by
     * @param {boolean} ascending - Direction
     */
    quickSort: function(arr, key, ascending = true) {
        if (arr.length <= 1) return arr;

        const pivot = arr[Math.floor(arr.length / 2)];
        const left = [];
        const right = [];
        const equal = [];

        for (let item of arr) {
            if (item[key] < pivot[key]) {
                left.push(item);
            } else if (item[key] > pivot[key]) {
                right.push(item);
            } else {
                equal.push(item);
            }
        }

        const sortedLeft = this.quickSort(left, key, ascending);
        const sortedRight = this.quickSort(right, key, ascending);

        return ascending 
            ? [...sortedLeft, ...equal, ...sortedRight]
            : [...sortedRight, ...equal, ...sortedLeft];
    },

    /**
     * Binary Search Implementation
     * Time Complexity: O(log n)
     * @param {Array} sortedArr - Must be sorted by the search key
     * @param {string} key - Property to search
     * @param {any} value - Value to find
     */
    binarySearch: function(sortedArr, key, value) {
        let low = 0;
        let high = sortedArr.length - 1;
        const searchVal = value.toString().toLowerCase();

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const midVal = sortedArr[mid][key].toString().toLowerCase();

            if (midVal.includes(searchVal)) return sortedArr[mid];
            if (midVal < searchVal) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    },

    /**
     * 0/1 Knapsack Implementation (Dynamic Programming)
     * Time Complexity: O(n * W) where W is budget
     * @param {Array} items - List of products {price, rating, ...}
     * @param {number} budget - Max weight/cost
     */
    knapsack01: function(items, budget) {
        const n = items.length;
        const dp = Array(n + 1).fill().map(() => Array(budget + 1).fill(0));

        // Build DP table
        for (let i = 1; i <= n; i++) {
            const item = items[i - 1];
            const weight = Math.floor(item.price);
            const value = Math.floor(item.rating * 10); // Scale rating to int

            for (let w = 0; w <= budget; w++) {
                if (weight <= w) {
                    dp[i][w] = Math.max(value + dp[i - 1][w - weight], dp[i - 1][w]);
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }

        // Backtrack to find selected items
        const selected = [];
        let w = budget;
        for (let i = n; i > 0 && w > 0; i--) {
            if (dp[i][w] !== dp[i - 1][w]) {
                const item = items[i - 1];
                selected.push(item);
                w -= Math.floor(item.price);
            }
        }

        return {
            items: selected,
            totalValue: dp[n][budget] / 10,
            totalCost: budget - w
        };
    },

    /**
     * Prim's Algorithm for Discount Optimization (Greedy)
     * We model "Categories" as nodes and "Cross-Category Discounts" as edges.
     * We want to find the MST to "connect" all active categories with minimum cost.
     * @param {Array} categories - Unique categories in cart
     * @param {Array} discountEdges - {u: cat1, v: cat2, weight: savings}
     */
    primsOptimization: function(categories, discountEdges) {
        if (categories.length === 0) return [];
        
        const mst = [];
        const visited = new Set();
        visited.add(categories[0]);

        const steps = [];

        while (visited.size < categories.length) {
            let minEdge = null;
            let minWeight = Infinity;

            for (const edge of discountEdges) {
                const uIn = visited.has(edge.u);
                const vIn = visited.has(edge.v);

                if ((uIn && !vIn) || (!uIn && vIn)) {
                    if (edge.cost < minWeight) {
                        minWeight = edge.cost;
                        minEdge = edge;
                    }
                }
            }

            if (minEdge) {
                mst.push(minEdge);
                visited.add(minEdge.u);
                visited.add(minEdge.v);
                steps.push(`Applied ${minEdge.name}: Connected ${minEdge.u} and ${minEdge.v} with cost $${minEdge.cost}`);
            } else {
                break; // No more edges to connect
            }
        }

        return { mst, steps };
    }
};

export default Algorithms;
