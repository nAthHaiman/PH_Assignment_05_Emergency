1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById selects an element by its id attribute, and if not found with the provided id it reply null. On the other side getElementsByClassName selects an element with its class attribute and if not found with the provided class, it returns an empty array.
queryslector is a css selector that selects the first element that matches with provided attribute/tag/class/id CSS, and on the other side, querySelectorAll selects all CSS element that matches with the provided attribute/tag/class/id.  


2. How do you create and insert a new element into the DOM?
Answer : To create a new element we use document.createElement(tag_name which we wants to create) , then we can add any innerText or innerHTML to that new element and
then add it as an appendChild to the target parent. 
Example: const newDiv = document.createElement("div");
        newDiv.innerText = "Hello, I’m new here!"; 
        document.body.appendChild(newDiv);


3. What is Event Bubbling and how does it work?
Answer: Event Bubbling means when we click or trigger any event, it first happens to that target element and after that it can bubbles up to its parent. In short it capture first and then bubbles to parent
Example :  I have a main box and a sub box inside main box . For the sub box the click event is to show "Inside BOX" and for the main box, the click event show "Outside Box" . Now, when we click on the sub box it first replies 'Inside Box' and then it replies 'Outside Box'
Means it first capture the target element and then moves up, for my example when I click on sub box it first replies "Inside Box " after that it bubbling up and show "Outside Box" . Thus the event Bubbling works

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: It is a technique of applying an event to a parent and can access all of its child and modify them. It can help to handle dynamic work. For cleaner code, it is very helpful . Without using the delegation technique, we have to use an individual listener for every child of a parent. With the help of these techniques, we can also access a parent from its child and then find the child of that parent by index number. 


5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:  preventDefault() means it prevents some default functionality of a browser. It can prevent refreshing the page when we click on the submit button of a form. Mainly, default actions will not happen, but the bubbles-up process will remain the same.  
But on the other side, stopPropagation() means it stops an event from bubbling up, which means if I add a listener to a child node, it only stays into that child node, doesn't spread to the parentNode.
