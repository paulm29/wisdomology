import './Categories.css';

function Categories(props: any) {
    const heading = "Categories";
    const noExpenses = <p>No categories found.</p>;

    let cats = {props.categories.length > 0 && props.categories.map((category: any) => {
            <Catgory
                key={category.id}
            />
        })};

    return (
        <div className="categories">
            <h1>Categories</h1>
            <p>{props.test}</p>
            <p>{props.children}</p>
            {props.categories.length === 0 && noExpenses}
            {cats}
        </div>
    );
}

export default Categories;
