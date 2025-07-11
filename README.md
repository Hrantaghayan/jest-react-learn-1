Learn to write test with jest

### general idea of writing tests

firtsly split componenets into parts what you want to test
then write tests for

### UserForm

check if the componenet shows what you want i mean UI
then check the logic by user event

## getByrole

using to find on element
if it finds 0 or more than one elemts it is going to throw error

## getAllByRole

using to find multiple elements by role

## data-testid 
add data-testid to elemnts if getByrole is not suitable solution for us 
data-testid has to be string
it is like unique id and meake it easy to stets particular element 

## logTestingPlaygroundURL()
log testing playgroun url
  screen.logTestingPlaygroundURL(); give us chnace easyly get selector and the part that we wsant to test 


## toBeInTheDocument()
used to check if the selected element exists in document

## screen.debug()
screen.debug() used as debugger in console
this will print the current state of the DOM to the console

---

# Testing Library Query Methods Documentation

## Query Methods Differences

### `getBy*` - Synchronous, Throws Error
```javascript
const button = screen.getByRole("button");
const input = screen.getByLabelText("Name");
```
- **Behavior**: Throws error immediately if element not found
- **Use when**: Element should be present immediately
- **Returns**: Single element or throws error

### `queryBy*` - Synchronous, Returns Null
```javascript
const button = screen.queryByRole("button");
const input = screen.queryByLabelText("Name");
```
- **Behavior**: Returns null if element not found (no error)
- **Use when**: You want to check if element exists without throwing
- **Returns**: Single element or null

### `findBy*` - Asynchronous, Waits and Throws
```javascript
const button = await screen.findByRole("button");
const input = await screen.findByLabelText("Name");
```
- **Behavior**: Waits (default 1000ms), then rejects if not found
- **Use when**: Element might appear after loading/animations
- **Returns**: Promise that resolves to element or rejects

## Jest Matchers Documentation

### `toBe()` - Exact Reference Equality
```javascript
expect(value).toBe(5); // Same as: value === 5
expect(obj).toBe(obj); // Same object reference
```
- **Use for**: Primitives (numbers, strings, booleans), object references
- **Behavior**: Uses `Object.is()` for exact equality

### `toEqual()` - Deep Value Equality
```javascript
expect({ name: "John" }).toEqual({ name: "John" }); // ✅ Pass
expect([1, 2, 3]).toEqual([1, 2, 3]); // ✅ Pass
```
- **Use for**: Objects, arrays, complex data structures
- **Behavior**: Recursively compares all properties/values

### `toBeInTheDocument()` - Element Exists in DOM
```javascript
expect(screen.getByText("Hello")).toBeInTheDocument();
expect(screen.queryByText("NotThere")).not.toBeInTheDocument();
```
- **Use for**: Testing if DOM elements exist
- **Behavior**: Checks if element is present in the DOM

### `toHaveValue()` - Input/Form Element Values
```javascript
expect(screen.getByRole("textbox")).toHaveValue("John Doe");
expect(screen.getByRole("checkbox")).toHaveValue();
```
- **Use for**: Testing form input values
- **Behavior**: Checks the value property of form elements

### `toHaveLength()` - Array/Collection Length
```javascript
expect(screen.getAllByRole("listitem")).toHaveLength(3);
expect(users).toHaveLength(2);
```
- **Use for**: Testing array length, multiple elements
- **Behavior**: Checks the length property

### `toThrow()` - Function Throws Error
```javascript
expect(() => dangerous()).toThrow();
expect(() => validate("bad")).toThrow("Invalid input");
```
- **Use for**: Testing error handling
- **Behavior**: Executes function and checks if it throws
- **Note**: Must wrap function in arrow function

## Quick Reference

### When to Use Each Query:
- **`getBy*`**: Element should be there now
- **`queryBy*`**: Check if element exists (conditional)
- **`findBy*`**: Element will appear after loading

### When to Use Each Matcher:
- **`toBe()`**: Numbers, strings, booleans, same object
- **`toEqual()`**: Objects, arrays, different objects with same values
- **`toBeInTheDocument()`**: DOM elements existence
- **`toHaveValue()`**: Form input values
- **`toHaveLength()`**: Array/collection size
- **`toThrow()`**: Error handling validation

### Common Testing Patterns:
```javascript
// Test element exists
expect(screen.getByRole("button")).toBeInTheDocument();

// Test element doesn't exist
expect(screen.queryByRole("button")).not.toBeInTheDocument();

// Test form input
expect(screen.getByRole("textbox")).toHaveValue("expected value");

// Test array length
expect(screen.getAllByRole("listitem")).toHaveLength(3);

// Test error throwing
expect(() => riskyFunction()).toThrow("Error message");

// Test async element
await expect(screen.findByRole("button")).resolves.toBeInTheDocument();
```


