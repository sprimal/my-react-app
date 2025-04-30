function List(props) {
    // const cars = [{id: 1, name:"Honda", engine: 700}, 
    //     {id: 2, name: "toyota", engine: 500}, 
    //     {id: 3, name: "ford", engine: 800}, 
    //     {id: 4, name: "mazda", engine: 300}, 
    //     {id: 5, name: "subaru", engine: 1000}];


    //cars.sort((a, b) => a.name.localeCompare(b.name)); //alphabatical
     // cars.sort((a, b) => b.name.localeCompare(a.name));  //reverse alphabatical
     //cars.sort((a, b) => a.engine - b.engine); //numeric
     //cars.sort((a, b) => b.engine - a.engine); //reverse numeric

    // const lowengine = cars.filter(car => car.engine < 900); //llow power engines
    // const highengine = cars.filter(car => car.engine > 600); //highowerengine
    const category = props.category;
    const itemlist = props.items;

    const listitems = itemlist.map(item => <li key={item.id}>
                                         {item.name}: &nbsp;
                                         <b>{item.engine}</b></li>);

    return(<>
    <h3>{category}</h3>
    <ol>{listitems}</ol>
    </>);
}
export default List