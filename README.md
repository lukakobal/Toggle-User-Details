📘 React 54 – Conditional Rendering & State
🎯 Goal

Understand what triggers a render in React and how conditional rendering works using state — without useEffect.

🧠 Key Concepts

useState triggers re-render

Conditional rendering with:

&&

ternary operator ? :

Difference between state change and JS logic

Why map() does not trigger render

How React re-runs the component function

⚙️ How It Works

User clicks a button or list item

setState updates state

React re-renders the component

JavaScript logic (map, conditions) runs again

React compares old vs new JSX and updates the DOM

📦 Features

Toggle user list visibility

Select a user to show details

Conditional UI based on state

No side effects (useEffect not needed)

🧩 Important Notes

users is a const because data does not change

map() is a pure JS function, executed on every render

JSX does nothing by itself — state change is required

✅ Takeaway

Only state changes trigger renders.
Everything else is just JavaScript running again.

https://codesandbox.io/p/sandbox/toggle-user-details-4ghcqq
