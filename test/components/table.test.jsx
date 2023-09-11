import { render } from "@testing-library/react ";
import Table from "../../src/components/table";

describe("captura de componente <table.jsx  "),()=>{
    test ("fotico",()=>{
        let {container} = render(<Table/>);
        expect(container).toMatchSnapshot();
    })

}