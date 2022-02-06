// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, cleanup, fireEvent, within } from "../../../tests/test.utils";
import ExampleCounterMargin from "./example-counter-margin.component";

describe("ExampleCounterMargin", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should render", () => {
    const component = render(<ExampleCounterMargin />);
    expect(component).toBeDefined();
  });

  // TODO display Error if margin is at zero
  // it("should show error if Margin is set to 0 v1 using fireEvent to change value", () => {
  //   const container = render(<ExampleCounterMargin />);
  //   const inputMui = container.getByTestId("margin");
  //   const input = container.getByTestId("margin");
  //   fireEvent.change(input, { target: { value: "0" } });
  //   expect(input.value).toBe("0");
  //   const { getByText } = within(inputMui);
  //   expect(getByText("Margin cannot be 0")).toBeInTheDocument();
  // });

  // TODO display Error if margin is at zero
  // it("should show error if Margin is set to 0 v2 using redux preloadedState", () => {
  //   const preloadedState = { exampleCounter: { count: 0, margin: 0 } };
  //   const container = render(<ExampleCounterMargin />, { preloadedState });
  //   const inputMui = container.getByTestId("margin");
  //   const { getByText } = within(inputMui);
  //   expect(getByText("Margin cannot be 0")).toBeInTheDocument();
  // });
});
