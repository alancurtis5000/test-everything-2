// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, cleanup, fireEvent } from "../../tests/test.utils";
// this is import from testing-library base.
// import { render, cleanup } from "@testing-library/react";
import ExampleCounter from "./example-counter.component";

describe("ExampleCounter", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should render", () => {
    const component = render(<ExampleCounter />);
    expect(component).toBeDefined();
  });

  it("should render with ititialState from Redux store", () => {
    const { getByTestId } = render(<ExampleCounter />);
    const count = getByTestId("count").textContent;
    expect(count).toBe("0");
  });

  it("should render with preloadedState / override intialState of redux store from Redux store", () => {
    const preloadedState = { exampleCounter: { count: 10, margin: 5 } };
    const { getByTestId } = render(<ExampleCounter />, {
      preloadedState,
    });
    let count = getByTestId("count").textContent;
    expect(count).toBe("10");
    fireEvent.click(getByTestId("add"));
    count = getByTestId("count").textContent;
    expect(count).toBe("15");
  });

  it("should dispatch action increment on button click", () => {
    const { getByTestId } = render(<ExampleCounter />);
    fireEvent.click(getByTestId("add"));
    const count = getByTestId("count").textContent;
    expect(count).toBe("1");
  });

  // alternatively you can find by text
  it("should dispatch action increment on button click find by text", () => {
    const { getByText, getByTestId } = render(<ExampleCounter />);
    fireEvent.click(getByText("Add"));
    const count = getByTestId("count").textContent;
    expect(count).toBe("1");
  });

  it("should dispatch an action decrement on button click", () => {
    const { getByTestId } = render(<ExampleCounter />);
    fireEvent.click(getByTestId("minus"));
    const count = getByTestId("count").textContent;
    expect(count).toBe("-1");
  });

  it("should dispatch an action reset on button click", () => {
    const { getByTestId } = render(<ExampleCounter />);
    fireEvent.click(getByTestId("reset"));
    const count = getByTestId("count").textContent;
    expect(count).toBe("0");
    const margin = getByTestId("margin").value;
    expect(margin).toBe("1");
  });

  it("should change input margin", () => {
    const { getByTestId } = render(<ExampleCounter />);
    const input = getByTestId("margin");
    fireEvent.change(input, { target: { value: 4 } });
    const result = input.value;
    expect(result).toBe("4");
  });

  it("should not allow letters to be inputted", () => {
    const { getByTestId } = render(<ExampleCounter />);
    const input = getByTestId("margin");
    expect(input.value).toBe("1"); // default value
    fireEvent.change(input, { target: { value: "Good Day" } });
    expect(input.value).toBe("0"); // value afte change after
  });

  it("should change margin and update count on button push", () => {
    const { getByTestId } = render(<ExampleCounter />);
    // intial state before
    const input = getByTestId("margin");
    expect(input.value).toBe("1");
    const count = getByTestId("count").textContent;
    expect(count).toBe("0");
    // changes
    fireEvent.change(input, { target: { value: 5 } });
    expect(input.value).toBe("5");
    fireEvent.click(getByTestId("add"));
    // results
    const finalCount = getByTestId("count").textContent;
    expect(finalCount).toBe("5");
  });

  // multiple actions
  it("should handle multiple changes, update margin add multiple times and minus multiple times , then reset", () => {
    const { getByTestId } = render(<ExampleCounter />);

    let count = getByTestId("count").textContent;
    const marginInput = getByTestId("margin");

    // intial state before
    expect(count).toBe("0"); // default value
    expect(marginInput.value).toBe("1"); // default value

    // changes
    fireEvent.change(marginInput, { target: { value: 5 } }); // change margin to 5
    expect(marginInput.value).toBe("5");

    fireEvent.click(getByTestId("add")); // add 5 two times to count
    fireEvent.click(getByTestId("add"));
    count = getByTestId("count").textContent;
    expect(count).toBe("10");

    fireEvent.change(marginInput, { target: { value: 2 } }); // change margin to 2
    expect(marginInput.value).toBe("2");

    fireEvent.click(getByTestId("minus")); // minus 2 three times from count
    fireEvent.click(getByTestId("minus"));
    fireEvent.click(getByTestId("minus"));
    count = getByTestId("count").textContent;
    expect(count).toBe("4");

    fireEvent.click(getByTestId("reset")); // then reset everything back to default
    count = getByTestId("count").textContent;
    expect(count).toBe("0");
    expect(marginInput.value).toBe("1");
  });
});
