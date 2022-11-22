import { render, screen } from "@testing-library/react";
import FourOFour from "./FourOFour";

test('404 page', () => {
    render(<FourOFour/>)
    const errorMessage = screen.getByTestId("error-message")
    expect(errorMessage).toHaveTextContent("404")
})