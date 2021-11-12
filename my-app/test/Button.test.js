// __tests__
import * as React from "react";
import Button from "../components/Button";
import renderer from "react-test-renderer";

it(`renders correctly`, () => {


    broker = {
    
            button: {
            backgroundColor: jest.fn().mockReturnValue( "blue"),
            padding: jest.fn().mockReturnValue( 20),
            borderRadius: jest.fn().mockReturnValue( 5),
            }
        }
    
        const renderMock = jest.fn().mockReturnValue(broker);



  const tree = renderer.create(<Button styles={ renderMock }>Login</Button>);
  expect(tree).toMatchSnapshot();
});