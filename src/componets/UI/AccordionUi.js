import Accordion from 'react-bootstrap/Accordion';

const Accourdation = [
    {
        id:1,
        title:'First',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        id:2,
        title:'Second',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];
function showCard(item){
    console.log(item);
   return (<Accordion.Item eventKey={item.id} key={item.id}>
        <Accordion.Header>{item.title}</Accordion.Header>
        <Accordion.Body>
             {item.desc}
        </Accordion.Body>
      </Accordion.Item>);
}

function AccordionUi(props) {
    

  return (
    <>
     <Accordion defaultActiveKey="0">
    {Accourdation.length && 
        Accourdation.map((array) => { return showCard(array)}) }
     </Accordion>
    </>
  );
}

export default AccordionUi;