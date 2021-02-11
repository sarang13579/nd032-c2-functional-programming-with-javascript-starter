// Here is the code from the example text

const store = {
    user: {
        first_name: 'John',
        last_name: 'Doe'
    }
}

const root = document.getElementById('root')

const Welcome = (name) => {
    return `Welcome ${name} to my Javascript Program!`
}

const App = (state) => {
    return `
        <div id='menu'>${Menu(false)}</div>
        <h1>${Welcome(state.user.first_name)}<h1>
        <div> I EXIST YES! </div>
        
    `
}

const render = (root, state) => {
    root.innerHTML = App(state)
}

const Menu = (show) => {
    if (show) {
        return `
                <nav>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                    </ul>
                </nav>
        `
    }
    return `
        <nav>Menu</nav>
        `
}

render(root, store)

// We need to wait for the load event to make sure that our JavaScript doesn’t run before the DOM element ‘root’ exists. 
// Now we are telling our JavaScript to wait until the load event has finished in the browser, which means it's safe to create the rest of our layout.

// window.addEventListener('load', () => {                                        
//     render(root, store)
//  })

////////////////////////////////////////////////////////////////////////////////////////////////////

// Add a new Menu component that takes in a show argument which is either true or false
// Show this content if show is true:
{/* <nav>
    <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Login</li>
    </ul>
</nav> */}

// and this content if show is false:
{/* <nav>Menu</nav> */ }

// Your Code Here

