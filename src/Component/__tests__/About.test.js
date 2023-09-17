import About from "../About";
import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom"


test("heading is is about  page",()=>{
    render(<About/>);
const heading= screen.getByRole("heading");
expect(heading).toBeInTheDocument();


})
test("button is in page ",()=>{
    render(<About/>);
//const button= screen.getByRole("button");
//other way  find text on screen 
const button = screen.getByText("Submit");
expect(button).toBeInTheDocument();


})