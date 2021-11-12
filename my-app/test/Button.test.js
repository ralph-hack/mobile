// __tests__
import * as React from "react";
import Button from "../components/Button";
import renderer from "react-test-renderer";

it(`renders correctly`, () => {
    broker = {
        //  initProducerId: jest.fn().mockReturnValue(mockInitProducerIdResponse),
        //  addPartitionsToTxn: jest.fn(),
        //  endTxn: jest.fn(),
        //  addOffsetsToTxn: jest.fn(),
        //  txnOffsetCommit: jest.fn(),
    
         button: {
            backgroundColor: jest.fn().mockReturnValue( "blue"),
            padding: jest.fn().mockReturnValue( 20),
            borderRadius: jest.fn().mockReturnValue( 5),
          }
        }

        broker = {
            //  initProducerId: jest.fn().mockReturnValue(mockInitProducerIdResponse),
            //  addPartitionsToTxn: jest.fn(),
            //  endTxn: jest.fn(),
            //  addOffsetsToTxn: jest.fn(),
            //  txnOffsetCommit: jest.fn(),
        
             button: {
                backgroundColor: jest.fn().mockReturnValue( "blue"),
                padding: jest.fn().mockReturnValue( 20),
                borderRadius: jest.fn().mockReturnValue( 5),
              }
            }
        
            const renderMock = jest.fn().mockReturnValue(broker);

        //const renderMock = jest.fn();
// const wrapper = shallow(<ParentComponent styles={ renderMock } />);


  const tree = renderer.create(<Button styles={ renderMock }>Login</Button>);
  expect(tree).toMatchSnapshot();
});

// jest.mock('react-native', () => {
//     let items = {};
//         StyleSheet: {
//             create: () => ({})
//         }
//     }
// );

// jest.mock('react-native', () => {
//     return {
//         StyleSheet: {
//             create: () => ({
            
//                 button: {
//                   backgroundColor: "blue",
//                   padding: 20,
//                   borderRadius: 5,
//                 }
//               })
//         }
//     };
//   });

// import TestRenderer from 'react-test-renderer';

// function MyStyles(){
//     return {
//                 StyleSheet: {
//                     button: {
//                                           backgroundColor: "blue",
//                                           padding: 20,
//                                           borderRadius: 5,
//                                         }
//                 }
//             };
//     }

// }

// function MyComponent() {
//   return (
//     <div>
//       <SubComponent foo="bar" />
//       <p className="my">Hello</p>
//     </div>
//   )
// }

// function SubComponent() {
//   return (
//     <p className="sub">Sub</p>
//   );
// }

// const testRenderer = TestRenderer.create(<MyComponent />);
// const testInstance = testRenderer.root;

// expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
// expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);

// beforeEach(() => {
//     broker = {
//     //  initProducerId: jest.fn().mockReturnValue(mockInitProducerIdResponse),
//     //  addPartitionsToTxn: jest.fn(),
//     //  endTxn: jest.fn(),
//     //  addOffsetsToTxn: jest.fn(),
//     //  txnOffsetCommit: jest.fn(),

//      button: {
//         backgroundColor: jest.fn().mockReturnValue( "blue"),
//         padding: jest.fn().mockReturnValue( 20),
//         borderRadius: jest.fn().mockReturnValue( 5),
//       }
//     }

//     const testBroker = jest.fn().mockReturnValue(broker);

//     // cluster = {
//     //  refreshMetadataIfNecessary: jest.fn(),
//     //  findGroupCoordinator: jest.fn().mockReturnValue(broker),
//     //  findControllerBroker: jest.fn().mockReturnValue(broker),
//     // }
//    }
//    )