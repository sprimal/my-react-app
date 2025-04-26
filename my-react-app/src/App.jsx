// import Header from './header.jsx';
// import Footer from './FOOTER.JSX';
// import Cars from './Cars.jsx';
// import Card from './Card.jsx';
// import Button from './Button.jsx';
import Student from "./Student.jsx";

function App() {
  return (
    // <>
    //    <Header />
    //    <Cars />
    //    <Footer />
    // </>
    // <>
    // <Card />
    // <Card />
    // <Card />
    // <Card />
    // </>
    // <Button />
    <>
        <Student name= "swoumya" age={19} isStudent={true} />
        <Student name="nirmal" age={21} isStudent={true} />
        <Student name="aayush" age={20} isStudent={false} />
        <Student name="rohit" age={22} isStudent={true} />
        <Student name="kabin" age={22} isStudent={true} />
        <Student/>
    </> 
  );
}

export default App;
