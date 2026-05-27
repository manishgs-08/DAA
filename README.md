# 🛒 AlgoMart — Smart. Efficient. Shopping.

AlgoMart is a high-performance, responsive e-commerce web application that demonstrates core **Design and Analysis of Algorithms (DAA)** concepts in a real-world shopping environment. From sorting products to optimizing budgets and calculating network-based category discounts, AlgoMart showcases how algorithmic paradigms make operations smarter and faster.

---

## 🚀 Live Demo & Concept Overview

AlgoMart integrates 4 fundamental algorithm designs to power its user experience:

| Feature | Algorithm | Paradigm | Complexity | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Product Sorting** | **QuickSort** | Divide and Conquer | $O(N \log N)$ average | Sorts products dynamically by Price and User Rating. |
| **Product Searching** | **Binary Search** | Decrease and Conquer | $O(\log N)$ | Instant, efficient search through pre-sorted products by name. |
| **Budget Optimizer** | **0/1 Knapsack** | Dynamic Programming | $O(N \times W)$ | Picks the best subset of products to maximize value/rating within a specified budget. |
| **Discount Calculator** | **Prim's Algorithm** | Greedy Paradigm | $O(E \log V)$ | Computes a Minimum Spanning Tree (MST) of category connections to yield optimal savings. |

---

## 🎨 Key Features

- **Dynamic Glassmorphic UI**: Beautiful, modern aesthetic using CSS variables, backdrop filters, smooth transitions, and premium typography.
- **Budget Optimizer (0/1 Knapsack)**: Input your budget in ₹, and the system runs a Dynamic Programming knapsack solver. It returns the exact subset of products that maximizes total rating/value under your spending limit.
- **Greedy Savings (Prim's MST)**: Connecting different categories in the cart creates a virtual graph. Prim's algorithm finds the Minimum Spanning Tree of category bundles to calculate a greedy discount path.
- **Product Magnifier Lens**: Smooth zoom effect on hover in the product detail view using absolute coordinates mapping.
- **Algorithm Lab**: An educational playground showing complexity summaries and explanations for each algorithm run on the platform.

---

## 📂 File Structure

```text
├── index.html          # Main HTML structure, views, and modal interfaces
├── style.css           # Premium glassmorphic styling, CSS variables, and animations
├── app.js              # Application controller, DOM interaction, and state management
├── algorithms.js       # DAA algorithm implementations (QuickSort, Binary Search, Knapsack, Prim's)
├── .gitignore          # Ignores system files and dependencies
└── *.png               # Curated product images (coffee, headphones, laptop, wall-art)
```

---

## 💻 Technical Walkthrough

### 1. Dynamic Sorting (QuickSort)
Products are dynamically partitioned based on selected properties (e.g., `price` or `rating`). By picking a pivot element and dividing the array recursively into smaller sub-arrays, QuickSort arranges the store page in $O(N \log N)$ average time.

### 2. Fast Lookup (Binary Search)
When searching for items, AlgoMart pre-sorts the catalog alphabetically. The search engine then splits the search window in half recursively, locating items in logarithmic time $O(\log N)$ instead of doing a linear scan.

### 3. Budget Optimizer (0/1 Knapsack)
Given a weight limit $W$ (Budget) and a set of items with weight $w_i$ (Price) and value $v_i$ (Scaled rating):
$$\text{Maximize } \sum v_i x_i \quad \text{subject to } \sum w_i x_i \le W, \text{ where } x_i \in \{0, 1\}$$
It builds a DP matrix to guarantee an mathematically optimal combination of purchases.

### 4. Bundled Savings (Prim's Algorithm)
When checking out, your cart's distinct categories act as nodes. Prim's algorithm computes the Minimum Spanning Tree connecting these categories using special bundle discounts (edges), reducing the total checkout price greedily.

---

## 🛠️ Local Development & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/manishgs-08/DAA.git
   cd DAA
   ```

2. **Run a Local Server**:
   Since the app uses JavaScript modules, run it through a local HTTP server:
   - Using VS Code: Right-click `index.html` and select **Open with Live Server**.
   - Using Python:
     ```bash
     python3 -m http.server 8000
     ```
   - Using Node.js:
     ```bash
     npx serve .
     ```

3. **Open the browser**:
   Navigate to `http://localhost:8000` (or the port specified by your server).

---

## 📜 License & Acknowledgments
Built as an interactive representation for **Design and Analysis of Algorithms (DAA)**. All algorithms are implemented from scratch in pure ES6 JavaScript without external dependencies.
