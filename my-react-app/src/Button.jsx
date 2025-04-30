
function Button(){

   const Styles = {
   padding: "10px 20px",
   color: "black",
   backgroundColor:"Green",
   border: "none",
   borderRadius: "5px",
   cursor: "pointer",
   fontsize: "16px",

   }

   // let count = 0;
   // const handleClick = (name) =>  {
   //    if(count < 3){
   //       count++;
   //       console.log(`${name} you clicked me ${count} times's`);
   //    }
   //    else{
   //       console.log(`${name} stop clicking me!!`);
   //    }
   // }
   // const handleClick2 = (name) => console.log(`${name} stop clicking me!!!`)


     const handleClick = (e)  => e.target.textContent = "Khel khatam!!🤣💔";


   return(
      <button style={Styles} onDoubleClick={(e) => handleClick(e)} >click me</button>
   );
}
export default Button